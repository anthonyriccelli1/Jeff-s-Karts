# Repo Hygiene & Vercel-Ready Packaging Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove build/dependency artifacts, tighten ignores, ensure minimal shareable structure, and verify the Next.js app still runs and builds without changing app behavior.

**Architecture:** Non-functional repo hygiene changes only: file deletions, ignore rules, documentation updates, and verification commands. No UI or behavioral changes unless secret removal is required.

**Tech Stack:** Next.js, Node.js, npm, Vercel

---

### Task 1: Inventory and remove build/dependency artifacts

**Files:**
- Delete: `node_modules/`, `.next/`, `.vercel/`, `out/`, `dist/`, `coverage/`
- Delete: any `.DS_Store` anywhere
- Delete: any `.zip` artifacts in repo

**Step 1: List candidate artifacts**

Run: `Get-ChildItem -Force`
Expected: visible artifact folders (if present)

**Step 2: Search for `.DS_Store` and zip files**

Run: `Get-ChildItem -Recurse -Force -Filter .DS_Store`
Expected: list of files if present

Run: `Get-ChildItem -Recurse -Force -Filter *.zip`
Expected: list of zip files if present

**Step 3: Delete artifacts**

Run (as applicable):
- `Remove-Item -Recurse -Force node_modules`
- `Remove-Item -Recurse -Force .next`
- `Remove-Item -Recurse -Force .vercel`
- `Remove-Item -Recurse -Force out`
- `Remove-Item -Recurse -Force dist`
- `Remove-Item -Recurse -Force coverage`
- `Remove-Item -Force <path-to-.DS_Store>`
- `Remove-Item -Force <path-to-zip>`

Expected: directories/files removed

---

### Task 2: Ensure `.gitignore` excludes required artifacts

**Files:**
- Modify: `.gitignore`

**Step 1: Open `.gitignore`**

Run: `Get-Content .gitignore`
Expected: existing ignore entries

**Step 2: Add required ignore entries if missing**

Ensure the file includes:
- `node_modules`
- `.next`
- `.vercel`
- `out`
- `dist`
- `coverage`
- `*.log`
- `.env`
- `.env.*`
- `.DS_Store`

**Step 3: Save and stage `.gitignore`**

Run: `git add .gitignore`
Expected: file staged

---

### Task 3: Secrets scan and env handling

**Files:**
- Potentially modify: application source files
- Potentially create: `.env.example`

**Step 1: Search for hardcoded secrets**

Run: `rg -n "(api_key|apikey|secret|token|password|private_key|client_secret|aws_|stripe|supabase|firebase|openai|github_token|bearer )"`
Expected: no hits (or review and remediate if found)

**Step 2: Search for env usage**

Run: `rg -n "process\.env"`
Expected: either no usage or list of keys

**Step 3: If env usage exists, add `.env.example`**

Create `./.env.example` with placeholder keys only (no values). Example:
```
NEXT_PUBLIC_API_URL=
```

Stage the file if created: `git add .env.example`

---

### Task 4: Keep dependencies pinned

**Files:**
- Keep: `package-lock.json`

**Step 1: Verify lockfile**

Run: `Test-Path package-lock.json`
Expected: `True`

---

### Task 5: Update README

**Files:**
- Modify: `README.md`

**Step 1: Open README**

Run: `Get-Content README.md`
Expected: existing content

**Step 2: Update content (minimal)**

Include:
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Deploy note: Vercel uses `npm run build` and `npm run start` (or default Next.js build)

**Step 3: Stage README**

Run: `git add README.md`

---

### Task 6: Verification

**Files:**
- None (commands only)

**Step 1: Lint (if available)**

Run: `npm run lint`
Expected: success (or no lint script; if missing, note it)

**Step 2: Build**

Run: `npm run build`
Expected: success

**Step 3: Dev server smoke test**

Run: `npm run dev`
Expected: server starts without immediate crash; stop after confirming startup

---

### Task 7: Finalize and commit

**Step 1: Review git status**

Run: `git status -sb`

**Step 2: Commit changes**

Run:
```
git add -A
git commit -m "chore: repo hygiene for vercel"
```

---

### Task 8: Report back

Provide:
- Summary of changes
- Files added/modified
- Commands run
- Confirmation repo is safe to zip and redeploy
