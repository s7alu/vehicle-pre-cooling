# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project has not
made a production release in the SemVer sense yet (no business logic is live) — entries below are
grouped under **Unreleased** until the first versioned release.

## [Unreleased]

### Added

- Next.js (App Router) + TypeScript strict scaffold, Tailwind CSS, ESLint/Prettier, Vitest,
  Playwright + axe-core.
- GitHub Actions CI (lint, format check, typecheck, unit tests, build, E2E) as a required status
  check on `main`.
- Vercel hosting: production, staging, and per-PR preview environments.
- Sentry error tracking (server/edge/client) + structured logging convention
  (`docs/LOGGING.md`) + uptime monitoring.
- Documentation skeleton: `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/SECURITY.md`,
  `docs/TESTING.md`, `docs/DEPLOYMENT.md`, `docs/DATA_MODEL.md` and `docs/ANALYTICS.md` (stubs),
  `docs/RUNBOOKS/`, `docs/adr/0001-stack.md`, PR/issue templates, `CODEOWNERS`,
  `CONTRIBUTING.md`.
