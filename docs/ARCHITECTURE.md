# Architecture

## Current state (P0)

A single Next.js application, no database, no auth, no payments yet. This is intentional — P0 is
the foundation phase and ships no business logic (see `docs/PRODUCT.md`).

```
Browser
  │
  ▼
Vercel Edge Network
  │
  ▼
Next.js app (App Router, Node.js runtime)
  │
  ├──> Sentry (errors, traces, logs — see docs/SECURITY.md)
  └──> Vercel Function logs
```

| Component        | What it is                               | Notes                                                                           |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| Web app          | Next.js (App Router) + TypeScript strict | `src/app/`                                                                      |
| Hosting          | Vercel                                   | Production, staging, and per-PR preview environments — see `docs/DEPLOYMENT.md` |
| Error monitoring | Sentry (`@sentry/nextjs`)                | Server, edge, and client instrumentation; see `docs/SECURITY.md`                |
| Styling          | Tailwind CSS                             | Utility-first, no custom design system yet                                      |

## Trust boundaries

- **Browser ↔ Vercel Edge**: public internet, TLS terminated by Vercel.
- **Next.js app ↔ Sentry**: outbound only, error/trace/log data; no PII or secrets sent (see
  `docs/SECURITY.md` and `docs/LOGGING.md`).
- There is currently no database, no authenticated session, and no third-party data store — so
  there is no user-data trust boundary yet.

## Not yet built (planned, by phase)

- **Database** (P2+): planned as managed PostgreSQL via Prisma. See `docs/DATA_MODEL.md`.
- **Authentication / admin roles** (P3): managed auth provider, MFA for admin accounts.
- **Payments** (P4): hosted checkout (Stripe), test-mode only until the legal gate passes.
- **Analytics** (P1): privacy-conscious, no PII. See `docs/ANALYTICS.md`.

This section will be replaced with real component/data-flow diagrams as each piece is built —
it should never describe a system that doesn't exist in the current codebase.
