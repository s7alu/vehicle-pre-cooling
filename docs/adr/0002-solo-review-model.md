# ADR-0002: Solo-founder PR review model

- **Status**: Accepted
- **Date**: 2026-09-23 (decided during P0; recorded here retroactively as the second ADR)

## Context

GitHub cannot let a solo account approve its own pull request, and there is currently one human
(the repo owner) and one AI coding agent working on this project. A meaningful review step is
still required before any change reaches `main` — "no new business logic" doesn't mean "no review
needed," especially since the agent writes the code being reviewed.

## Decision

Until a second human engineer joins the project:

1. **Author self-check**: the agent that wrote the change runs its own verification (lint,
   typecheck, tests, build, E2E) and reviews its full diff before opening the PR.
2. **Independent review**: a fresh agent session or subagent that did not write the code reviews
   the diff — using `/code-review` (plus `/security-review` for sensitive paths) — and posts
   findings on the PR. This agent has no memory of why the code was written the way it was, so it
   catches things the author's self-check would rationalize away.
3. **Author fixes or justifies**: every finding gets fixed, or explicitly justified in the PR if
   the author disagrees.
4. **Founder approval**: Sahal reads the plain-language summary and leaves a short approval
   comment before merging.

GitHub's `required_approving_review_count` is set to `0` on the branch ruleset, since a solo
account cannot be required to get an approval it's structurally unable to receive. This control is
process-only, not GitHub-enforced — the independent-review step is what actually catches bugs.

## Consequences

- Review quality depends on the independent reviewer genuinely not sharing the author's context.
  A reviewer that silently inherits the author's assumptions would defeat the purpose — this is
  why it runs as a separate pass, not inline "self-review."
- This is a **compensating control**, not equivalent to a second human's judgment. Revisit this
  ADR when a second person joins the project (switch to one human approval + `CODEOWNERS` on
  sensitive paths, per `02_SECURITY_HANDOFF.md` SEC-012).
- Every PR in this project so far has gone through this flow (see PR history); it has caught real
  bugs before merge, not just style nits (see PR #1, #5, #6 review write-ups).

## Alternatives considered

- **No review, just CI**: rejected — CI catches syntax/type/test regressions, not logic bugs,
  scope creep, or doc/code inconsistencies.
- **Skip review for "small" changes**: rejected — several of the bugs caught so far were in
  changes that looked small (a one-line doc claim, a stack ADR).
