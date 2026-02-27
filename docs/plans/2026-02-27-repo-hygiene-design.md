# Repo Hygiene & Vercel-Ready Packaging Design

**Goal:** Remove build/dependency artifacts, tighten ignores, ensure minimal shareable structure, and verify the Next.js app still runs and builds without changing app behavior.

**Scope:**
- Delete build and dependency artifacts from the repo (e.g., `node_modules/`, `.next/`, `.vercel/`, `out/`, `dist/`, `coverage/`, `.DS_Store`, and stray archives).
- Update root `.gitignore` to exclude common Next.js/Vercel artifacts and env/log files.
- Check for hardcoded secrets; if found, move to env vars.
- Keep/pin dependencies using existing `package-lock.json`.
- Keep docs minimal: update `README.md` with install/dev/build/Vercel notes.
- Run quick sanity checks: lint (if available), build, and dev startup.

**Non-Goals:**
- No UI changes or refactors unrelated to repo hygiene.
- No dependency upgrades.
- No behavior changes unless required to remove a secret from code.

**Approach:**
1. **Cleanup:** Enumerate and delete artifact directories and files.
2. **Ignore rules:** Ensure `.gitignore` includes required entries.
3. **Secrets check:** Search for hardcoded secrets and `process.env.*` usage.
   - If secrets found, move to env vars and add a placeholder `.env.example`.
4. **Dependencies:** Keep existing lockfile; do not regenerate unless missing.
5. **Docs:** Update `README.md` with minimal usage steps.
6. **Verification:** Run `npm run lint` (if present), `npm run build`, and `npm run dev` to ensure the app starts.

**Risks & Mitigations:**
- Risk: Removing artifacts might hide local-only behavior. Mitigation: run lint/build/dev to confirm behavior.
- Risk: Secret discovery changes behavior. Mitigation: only adjust if a secret is actually present.

**Testing/Verification:**
- `npm run lint` (if script exists)
- `npm run build`
- `npm run dev` (start and confirm no immediate crash)
