# Vehicle Pre-Cooling

Web platform for validating demand for a remote vehicle pre-cooling service, and (once validated) running pilots and bookings.

## Status

Early foundation stage (P0). Application skeleton exists; no business features yet.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript, strict mode
- Tailwind CSS
- pnpm as package manager

Full rationale in `docs/adr/0001-stack.md`.

## Development

Requires Node.js LTS and pnpm (see `package.json` → `packageManager`). The Node version is pinned
in `.nvmrc`.

Also requires [gitleaks](https://github.com/gitleaks/gitleaks) (`brew install gitleaks`) — a
local pre-commit hook uses it to block commits containing secret-shaped values, before they ever
reach GitHub.

```bash
pnpm install   # also sets up the pre-commit hook (gitleaks + lint-staged) via husky
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
pnpm lint          # ESLint
pnpm format        # Prettier — write
pnpm format:check  # Prettier — check only
pnpm typecheck     # next typegen + tsc --noEmit
pnpm test          # Vitest unit tests
pnpm test:coverage # Vitest with coverage
pnpm test:e2e      # Playwright end-to-end + accessibility (desktop + mobile)
pnpm build         # production build
```

## Documentation

| Doc                          | Purpose                                                                 |
| ---------------------------- | ----------------------------------------------------------------------- |
| `docs/PRODUCT.md`            | Scope, phases, exclusions, current business-gate status                 |
| `docs/ARCHITECTURE.md`       | Components, data flow, trust boundaries                                 |
| `docs/SECURITY.md`           | Security posture, scanning, secrets handling                            |
| `docs/TESTING.md`            | Test commands, E2E matrix, staging smoke process                        |
| `docs/DEPLOYMENT.md`         | Environments, CI/CD, releases, rollback                                 |
| `docs/LOGGING.md`            | Logging/error-reporting convention — when to use Sentry vs. `console.*` |
| `docs/DATA_MODEL.md`         | Schema, PII classification _(planned — no database yet)_                |
| `docs/ANALYTICS.md`          | Event dictionary _(planned — no analytics yet)_                         |
| `docs/RUNBOOKS/`             | Operational failure procedures                                          |
| `docs/adr/`                  | Architectural decision records                                          |
| `docs/VENDORS.md`            | Every third-party service: purpose, data shared, region, owner, DPA     |
| `docs/DEFINITION_OF_DONE.md` | What "done" means for any feature                                       |
| `CHANGELOG.md`               | Notable changes, [Keep a Changelog](https://keepachangelog.com/) format |

## Contributing

See `CONTRIBUTING.md`. `main` is protected — all changes go through a pull request using
`.github/pull_request_template.md`.
