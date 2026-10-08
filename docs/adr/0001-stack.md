# ADR-0001: P0 technology stack

- **Status**: Accepted
- **Date**: 2026-09-23 (decided across P0.2–P0.8; recorded here retroactively as the first ADR)

## Context

The project is a small, enterprise-delivery-standard validation platform, built and operated by a
non-technical founder with an AI coding agent. The PRD requires boring, managed, proven technology
— no microservices, no custom infrastructure, no custom auth/crypto/payments — favoring services
that give the founder dashboards and recovery paths without needing a terminal (Rulebook §1, §12).

## Decision

| Layer              | Choice                                                      | Why                                                                                                                                       |
| ------------------ | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Web framework      | Next.js (App Router) + TypeScript (strict)                  | PRD's default; App Router is the current, supported Next.js model; strict TypeScript catches errors before runtime                        |
| Styling            | Tailwind CSS                                                | Utility-first, no separate design-system build needed at this stage                                                                       |
| Package manager    | pnpm (via Corepack)                                         | Faster installs, strict dependency resolution; Node's built-in Corepack avoids a separate global installer                                |
| Hosting            | Vercel                                                      | Native Next.js support, automatic preview/staging/production environments, managed TLS/CDN — no infrastructure to operate                 |
| CI                 | GitHub Actions                                              | Free for public repos, integrates directly with branch protection required-status-checks                                                  |
| Error monitoring   | Sentry (`@sentry/nextjs`)                                   | Free tier covers current scale; one integration covers server/edge/client errors plus a built-in uptime monitor, avoiding a second vendor |
| Testing            | Vitest (unit) + Playwright + axe-core (E2E + accessibility) | Matches PRD §12's test-pyramid requirement; Playwright covers critical-path E2E and WCAG 2.2 AA checks in one tool                        |
| Linting/formatting | ESLint + Prettier (`eslint-config-prettier`)                | Standard, low-maintenance, enforced in CI                                                                                                 |

## Consequences

- No database, auth provider, or payment provider is chosen yet — those are deferred to the
  phases that actually need them (P2–P4), so this ADR doesn't speculate on them.
- Vercel's non-production deployments are protected by Vercel Authentication by default; this is
  accepted as-is for now (no customer-facing preview/staging access needed in P0).
- All of the above are managed/hosted services with free tiers sufficient through roughly P0–P3;
  revisit costs before P4 (deposits) when traffic and usage assumptions change.

## Alternatives considered

Not formally evaluated against competitors (e.g. Remix vs. Next.js, Netlify vs. Vercel) — the PRD
specified Next.js + Vercel as the recommended default for a non-technical founder with an AI
coding agent, and no requirement surfaced during P0 that would justify the switching cost of
evaluating alternatives.
