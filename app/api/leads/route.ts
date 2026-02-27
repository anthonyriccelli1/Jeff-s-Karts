import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function toTrimmedString(value: unknown, maxLen: number): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, maxLen);
}

function jsonError(status: number, error: string) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: Request) {
  const webhookUrl = process.env.GOOGLE_LEADS_WEBHOOK_URL;
  console.log("Webhook URL:", process.env.GOOGLE_LEADS_WEBHOOK_URL);
  if (!webhookUrl) {
    return jsonError(500, "GOOGLE_LEADS_WEBHOOK_URL is not set");
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError(400, "Invalid JSON body");
  }

  const name = toTrimmedString((body as LeadPayload)?.name, 100);
  const email = toTrimmedString((body as LeadPayload)?.email, 200);
  const phone = toTrimmedString((body as LeadPayload)?.phone, 50);
  const message = toTrimmedString((body as LeadPayload)?.message, 2000);

  if (!name) {
    return jsonError(400, "Name is required");
  }
  if (!message) {
    return jsonError(400, "Message is required");
  }
  if (!email && !phone) {
    return jsonError(400, "Email or phone is required");
  }

  const forwardPayload = {
    name,
    email,
    phone,
    message,
    source: "website",
  };

  let webhookResponse: Response;
  try {
    webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forwardPayload),
    });
  } catch {
    return jsonError(502, "Lead webhook failed");
  }

  if (webhookResponse.status !== 200) {
    return jsonError(502, "Lead webhook failed");
  }

  let webhookJson: unknown = null;
  try {
    webhookJson = await webhookResponse.json();
  } catch {
    // If no JSON body, treat status 200 as success.
  }

  if (webhookJson && (webhookJson as { success?: boolean }).success === false) {
    return jsonError(502, "Lead webhook failed");
  }

  return NextResponse.json({ ok: true });
}
