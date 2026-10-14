# Definition of Done

Applies to every feature, not just UI work. "Works on my machine" is not done.

- Requirement and acceptance criteria are linked to the change (ticket/PRD reference).
- Threat/privacy impact considered; security controls implemented where applicable.
- Code is typed (TypeScript strict), linted, formatted, and reviewed through a pull request.
- Unit/integration tests added for business logic and failure paths, not just the happy path.
- An E2E test is added or updated for any critical user journey or regression-prone feature.
- Accessibility (WCAG 2.2 AA) and responsive behavior checked for any changed UI.
- No new high/critical security findings; dependency, secret, and code scans pass.
- Staging deployment succeeds and the smoke/E2E suite passes against it.
- Observability (logging/error monitoring) added for important failure modes.
- Documentation and `CHANGELOG.md` updated in the same PR.
- Rollback path is understood and written down; production deployment is traceable to a commit.
- A feature is not marked done because it works locally — it needs the evidence above.

See `docs/TESTING.md` for exact commands and `.github/pull_request_template.md` for where this
evidence goes on each PR.
