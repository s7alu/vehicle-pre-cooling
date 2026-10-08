# Testing

## Commands

```bash
pnpm lint          # ESLint
pnpm format:check  # Prettier, check only
pnpm typecheck     # next typegen + tsc --noEmit
pnpm test          # Vitest unit tests
pnpm test:coverage # Vitest with coverage report
pnpm build         # production build (also catches build-time type/config errors)
pnpm test:e2e      # Playwright — desktop + mobile viewports, incl. axe-core accessibility scan
```

Run the full sequence locally before every push (mirrors CI — see `docs/DEPLOYMENT.md`):

```bash
pnpm lint && pnpm format:check && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Test data strategy

No database exists yet (P0). Once one is added (P2+): local and preview environments use
synthetic/test data only; staging uses production-like but isolated data and secrets; production
is the only environment with real customer data. No test email or test payment operation may
target a real production user (NFR-008).

## Current E2E matrix

- Holding page renders correctly at desktop and mobile viewports.
- Zero-violation `axe-core` accessibility scan on the holding page, both viewports.

## Planned E2E matrix (by phase)

| Phase | Critical path                                                                                               |
| ----- | ----------------------------------------------------------------------------------------------------------- |
| P1    | Landing → CTA → compatibility form entry point; accessibility smoke                                         |
| P2    | Compatibility form: happy path, validation errors, mobile, consent                                          |
| P3    | Admin login → review lead → compatibility decision → audit evidence; unauthorized role blocked              |
| P4    | Qualified lead → hosted checkout → webhook → paid → confirmation; duplicate webhook; failed payment; refund |
| P5    | Create pilot → record measurements → complete outcome; required fields enforced                             |

Every critical user journey gets an automated E2E test before that feature is considered done
(Rulebook §7). Every bug fix starts with a failing test that reproduces it.

## Staging release process (target state — not fully wired up yet)

The intended flow is: PR → preview deploy → merge to `main` → staging deploy → full E2E/smoke
check against staging → production. **Today, `main` is Vercel's production branch, so merging a
PR deploys straight to production** — there is no automatic promotion-through-staging gate yet.
The `staging` branch exists and gets its own deployment, but it's updated separately, not as a
pre-production gate. This is an accepted gap while the site is a holding page with no business
logic (nothing user-facing to break); closing it before P2+ ships anything with real user data is
tracked as a follow-up ticket.
