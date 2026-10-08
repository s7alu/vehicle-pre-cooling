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
- Local pre-commit hook (gitleaks + lint-staged via Husky) — blocks secret-shaped commits before
  they reach GitHub.
- P0 exit-review docs: `docs/DEFINITION_OF_DONE.md`, `docs/VENDORS.md`,
  `docs/adr/0002-solo-review-model.md`, root `SECURITY.md` pointer, weekly `.github/dependabot.yml`
  version-update schedule, Mermaid diagram in `docs/ARCHITECTURE.md`.

### Security

- Bumped Next.js 16.3.6 → 16.3.8, fixing 6 Dependabot advisories (1 high — SSRF in Image
  Optimization — plus 4 moderate/1 low cache-poisoning and information-disclosure issues).
