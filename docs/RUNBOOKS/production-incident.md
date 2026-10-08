# Runbook: production error or downtime alert

For when Sentry reports a new/high-volume error, or the uptime monitor reports the production
site is down. Written for a non-technical founder — these are safe first actions, not a demand to
edit anything directly.

## 1. Confirm it's real

- Open the Sentry dashboard for this project — check the error count and whether it's still
  happening or was a one-off.
- Open the uptime monitor dashboard — check if the production URL
  (https://vehicle-pre-cooling.vercel.app) is currently passing or failing its check.
- Try loading the production URL yourself in a browser.

## 2. Safe first actions

- **Do not** edit any database, environment variable, or file directly to "fix" it.
- If the site is down and the most recent deploy is the likely cause: in the Vercel dashboard,
  go to the project's Deployments tab and check whether a deploy happened right before the alert
  started. If so, that's the lead suspect.
- Note the approximate time the alert started — this narrows down which deploy or external change
  is responsible.

## 3. Escalate / fix

- Bring the Sentry error details (stack trace, affected URL, first-seen time) and/or the uptime
  monitor's failure window to the coding agent (Claude Code) in a new session, or to whoever is
  doing the technical work.
- A rollback (promoting the previous Vercel deployment, or reverting the merge commit via a new
  PR) is almost always the fastest safe mitigation while the root cause is investigated — see
  `docs/DEPLOYMENT.md` → Rollback.
- Never bypass CI, tests, or branch protection to "fix it faster" (Rulebook §1, §14).

## 4. After

- Once resolved, add an entry to `01_HANDOFF.md`'s daily log (what happened, what fixed it, what
  would prevent it next time) — this is a local governance doc, not part of this public repo.
- If the fix revealed a gap this runbook should have covered, update this file in the same PR as
  the fix.
