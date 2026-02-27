"use client";

import { useState } from "react";

type SubmitState = {
  loading: boolean;
  success: boolean;
  error: string;
};

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.loading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const name = `${firstName} ${lastName}`.trim();
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");
    const service = String(formData.get("service") || "");
    const cartInfo = String(formData.get("cartInfo") || "");

    let fullMessage = message;
    if (service) {
      fullMessage += `\n\nService Interest: ${service}`;
    }
    if (cartInfo) {
      fullMessage += `\nCart Info: ${cartInfo}`;
    }

    setState({ loading: true, success: false, error: "" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message: fullMessage }),
      });

      let payload: { ok?: boolean; error?: string } | null = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok || payload?.ok === false) {
        const error =
          payload?.error || "Something went wrong. Please try again.";
        setState({ loading: false, success: false, error });
        return;
      }

      form.reset();
      setState({ loading: false, success: true, error: "" });
    } catch {
      setState({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
      <p className="text-slate-600 mb-8">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              placeholder="(321) 555-0123"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
            What are you interested in?
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.75rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
            }}
          >
            <option value="">Select a service...</option>
            <option value="custom-paint">Custom Painting & Wraps</option>
            <option value="full-customization">Full Customization</option>
            <option value="street-legal">Street Legal Conversion</option>
            <option value="repairs">Repairs & Maintenance</option>
            <option value="purchase">Buying a Golf Cart</option>
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>

        {/* Cart Info */}
        <div>
          <label htmlFor="cartInfo" className="block text-sm font-medium text-slate-700 mb-2">
            Tell us about your cart (if applicable)
          </label>
          <input
            type="text"
            id="cartInfo"
            name="cartInfo"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
            placeholder="e.g., 2020 Club Car Onward, Electric"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
            placeholder="Tell us about your project or ask us a question..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.loading}
          className="w-full px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state.loading ? "Sending..." : "Send Message"}
        </button>

        {state.success && (
          <p className="text-teal-600 text-sm text-center">
            Thanks! We&apos;ll get back to you soon.
          </p>
        )}
        {!state.success && state.error && (
          <p className="text-red-600 text-sm text-center">{state.error}</p>
        )}

        <p className="text-slate-500 text-sm text-center">
          We typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
