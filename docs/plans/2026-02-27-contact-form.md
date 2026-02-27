# Contact Form to Leads API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the Contact page to submit to `/api/leads` via client-side fetch while preserving layout and styles, and update `.env.example` with the webhook placeholder.

**Architecture:** Keep `app/contact/page.tsx` server-side for metadata; move the form into a new client component `app/contact/ContactForm.tsx` that handles submission state and POSTs JSON to `/api/leads`.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

### Task 1: Add client ContactForm component

**Files:**
- Create: `app/contact/ContactForm.tsx`

**Step 1: Write the failing test**

No test harness present. Skip tests.

**Step 2: Implement ContactForm**

- Add `"use client"`.
- Add `useState` for `loading`, `success`, `error`.
- Implement `onSubmit` handler:
  - `preventDefault`
  - read `name`, `email`, `phone`, `message` from `FormData` (combine first/last name).
  - POST JSON to `/api/leads`.
  - On non-OK or `{ ok:false }` show error.
  - On success show success message and reset form.
- Preserve existing Tailwind classes and markup for inputs.
- Disable submit button while loading.

**Step 3: Commit**

```
git add app/contact/ContactForm.tsx
git commit -m "feat: add contact form client submit"
```

---

### Task 2: Wire ContactForm into page

**Files:**
- Modify: `app/contact/page.tsx`

**Step 1: Replace inline form with `<ContactForm />`**
- Import the new component.
- Remove Formspree `action` and `method`.

**Step 2: Commit**

```
git add app/contact/page.tsx
git commit -m "refactor: use client contact form"
```

---

### Task 3: Update `.env.example`

**Files:**
- Modify: `.env.example`

**Step 1: Add placeholder key**
- Ensure the file contains: `GOOGLE_LEADS_WEBHOOK_URL=`

**Step 2: Commit**

```
git add .env.example
git commit -m "docs: add leads webhook env placeholder"
```

---

### Task 4: Verification

**Step 1: Build (if environment allows)**

Run: `npm run build`
Expected: success

---

### Task 5: Report back

Provide:
- File(s) changed
- `onSubmit` code section
