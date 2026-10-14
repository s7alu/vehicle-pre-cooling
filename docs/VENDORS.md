# Vendors

Every third-party service this project depends on. Update this file in the same PR that adds or
removes a vendor integration.

| Vendor                       | Purpose                                                              | Data shared                                                                                                    | Region                                                                                                                                         | Account owner                                            | DPA                                             |
| ---------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| [GitHub](https://github.com) | Source control, CI/CD (Actions), Dependabot, CodeQL, secret scanning | Source code (public repo) — no customer data or PII, since none exists in the codebase yet                     | GitHub-managed, no region selection available                                                                                                  | Sahal (`s7alu`, personal account)                        | [GitHub DPA](https://github.com/customer-terms) |
| [Vercel](https://vercel.com) | Hosting, builds, preview/staging/production deployments              | Deployed application code and build artifacts; HTTP request logs (no app data store yet)                       | Not explicitly pinned — Vercel's default region applies; revisit before any data-residency-sensitive feature (PDPL cross-border check, due P2) | Sahal (team `sahal25`)                                   | [Vercel DPA](https://vercel.com/legal/dpa)      |
| [Sentry](https://sentry.io)  | Error monitoring, logging, uptime check                              | Error stack traces, environment/release tags, redacted log context — no PII or secrets (see `docs/LOGGING.md`) | **To confirm** — check the org's Data Region setting in the Sentry dashboard                                                                   | Sahal (installed via the Vercel Marketplace integration) | [Sentry DPA](https://sentry.io/legal/dpa/)      |

## Not yet a vendor (planned, by phase)

- **Database** (P2+) — managed PostgreSQL is the proposed default, provider not yet chosen. See
  `docs/adr/0001-stack.md`.
- **Auth provider** (P3) — not yet chosen.
- **Payment provider** (P4) — hosted checkout is the proposed approach, provider not yet chosen.
- **Email provider** (P2+, for transactional/consent emails) — not yet chosen.
- **Analytics provider** (P1) — not yet chosen. See `docs/ANALYTICS.md`.
- **Domain registrar** — no custom domain owned yet; the project currently runs on Vercel's
  `*.vercel.app` subdomains.

## Review cadence

Review this list monthly (per `03_COMPLIANCE_CHECKLIST.md` §D) — confirm each vendor's region and
DPA status are still accurate, and remove any vendor no longer in use.
