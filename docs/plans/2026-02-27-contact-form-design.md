# Contact Form to Leads API Design

**Goal:** Replace Formspree submission on the Contact page with a client-side submit to the internal `POST /api/leads` route while preserving layout and styles.

**Scope:**
- Keep `app/contact/page.tsx` as a server component.
- Add a new client component `app/contact/ContactForm.tsx` containing the form and submit handler.
- Remove Formspree `action` URL and submit via `fetch` to `/api/leads`.
- Add local UI state: loading, success, error.
- Update `.env.example` with `GOOGLE_LEADS_WEBHOOK_URL=` placeholder only.

**Non-Goals:**
- No UI redesign or field changes.
- No new dependencies.
- No real webhook URL in repo.

**Behavior:**
- On submit, prevent default, gather `name`, `email`, `phone`, `message` from form values.
- POST JSON to `/api/leads`.
- Disable submit button while loading.
- Show success message on success and a readable error on failure.

**Testing/Verification:**
- Manual submit in dev and confirm success/error messaging.
