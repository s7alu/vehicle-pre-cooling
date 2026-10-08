# Deployment

## Environments

| Environment | Branch        | URL                                                        |
| ----------- | ------------- | ---------------------------------------------------------- |
| Production  | `main`        | https://vehicle-pre-cooling.vercel.app                     |
| Staging     | `staging`     | https://vehicle-pre-cooling-git-staging-sahal25.vercel.app |
| Preview     | any PR branch | Generated per-PR by Vercel, linked on the PR               |

Hosted on Vercel, project `sahal25/vehicle-pre-cooling`. Non-production deployments (staging,
preview) are protected by Vercel Authentication by default — viewing them requires being logged
into the Vercel account that owns the project.

## CI/CD

Every PR and every push to `main` runs `.github/workflows/ci.yml`: lint, Prettier check,
typecheck, unit tests, build, then Playwright E2E (desktop + mobile, incl. accessibility) on
Chromium. All steps must pass — the check is required on `main` (branch ruleset), so a red CI run
blocks merge. GitHub Actions steps are pinned to commit SHAs.

Vercel deploys automatically: a preview build per PR, and a production build on every push to
`main` (see `docs/TESTING.md` for the staging-gap note — there is no automatic staging promotion
step yet).

## Migrations

No database exists yet (P0). Once one is introduced (P2+), migrations will go through Prisma only,
using expand → migrate → contract, run as part of the deploy process — never a hand-edited table.

## Feature flags

No feature flags exist yet. When a risky or unfinished feature needs to ship ahead of being
customer-ready, it ships behind a server-side flag, default OFF (Rulebook §4).

## Release process

1. Branch from `main`, open a PR, fill the PR template.
2. CI + independent review pass; Sahal approves in plain language.
3. Squash merge → production deploy (see staging-gap note above).
4. Update `CHANGELOG.md` in the same PR.

## Rollback

Vercel keeps every previous deployment addressable — the fastest rollback is promoting the prior
production deployment in the Vercel dashboard. At the code level, revert the merge commit on
`main` via a new PR (never force-push or rewrite history on `main`) and let CI/CD redeploy.
