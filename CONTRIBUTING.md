# Contributing

This is currently a solo-maintainer project. These conventions exist so the codebase stays
consistent and safe to change, even with one person (or an AI coding agent) doing the work.

## Branching

- Branch from latest `main`: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`, `docs/<slug>`.
- Short-lived — open the PR as soon as the change is ready for review, don't stack unrelated work
  on one branch.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, `docs:`,
`test:`, `refactor:`. Small, meaningful commits over one giant commit.

## Pull requests

- Use `.github/pull_request_template.md` — fill every section.
- `main` requires a pull request; direct pushes, force-pushes, and branch deletion are blocked by
  a branch ruleset, with no bypass (including for the repo owner).
- CI (lint, format, typecheck, unit tests, build, E2E) must pass — it's a required status check.
- Squash merge only, so `main` has one commit per PR with a clear, conventional title.
- Update `CHANGELOG.md` in the same PR as the change it describes.

## Before you push

Run the full local check sequence (mirrors CI exactly — see `docs/TESTING.md`):

```bash
pnpm lint && pnpm format:check && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

A pre-commit hook (gitleaks + lint-staged) runs automatically on `git commit` once you've run
`pnpm install` — it blocks commits containing secret-shaped values and auto-fixes lint/format
issues on staged files.

## What never goes in

No production secrets, no production data, no PII, no card data, no `.env` files. Secrets live in
Vercel's environment variable store only. See `docs/SECURITY.md`.
