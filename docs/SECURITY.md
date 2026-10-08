# Security

Public-safe summary of this project's security posture. Internal risk-acceptance reasoning and
business-sensitive detail are tracked outside this repository.

## Current controls (P0)

- **Branch protection**: `main` requires a pull request, passing CI, and blocks force-push and
  deletion. No one — including the repo owner — can push directly to `main`.
- **Secret scanning + push protection**: enabled on GitHub; blocks commits containing recognizable
  secret patterns before they land.
- **Dependency scanning**: Dependabot alerts + automated security update PRs.
- **Code scanning**: CodeQL default setup on supported languages.
- **Error monitoring**: Sentry captures unhandled exceptions (server, edge, client) and uptime
  checks the production URL. See `docs/LOGGING.md` for the logging convention.
- **CI pinning**: GitHub Actions steps are pinned to commit SHAs, not mutable tags, with
  least-privilege `permissions: contents: read`.
- **Environment separation**: production, staging, and PR-preview deployments use separate Vercel
  environments; secrets are scoped per environment and never committed (see `.env.example`).

## What's not applicable yet

These items from the project's security baseline apply once the relevant feature exists — they are
not gaps in P0, they're future work:

- MFA/RBAC for admin accounts — no admin accounts exist yet (planned P3).
- Database access controls, encryption at rest — no database exists yet (planned P2).
- Payment/webhook security (signature verification, idempotency) — no payments exist yet (planned P4).
- Content Security Policy / secure headers tuning — revisit once the app serves real pages beyond
  the holding page (P1).

## Secrets handling

- No production secret or production data is ever placed in code, logs, commit history, or an AI
  agent's context.
- All secrets live in Vercel's environment variable store, scoped per environment, and are pulled
  locally only via `vercel env pull` — never typed into chat or committed.
- A local pre-commit hook (gitleaks) scans staged changes for secret-shaped values before GitHub's
  server-side push protection ever sees them — see `CONTRIBUTING.md`. GitHub's secret
  scanning + push protection (listed above) apply regardless of whether the local hook is present
  on a given checkout.

## Reporting a vulnerability

This is a solo-founder project in early validation (pre-production-data). Please do not open a
public issue for a security concern. GitHub's private vulnerability reporting is not yet enabled
on this repository (tracked as a follow-up for the repo owner); until it is, contact the owner via
their GitHub profile.
