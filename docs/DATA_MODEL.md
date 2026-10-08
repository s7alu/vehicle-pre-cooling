# Data model

**Not yet implemented.** No database exists in the codebase as of P0 — there is nothing to
document yet, and writing a schema now would mean inventing one before the compatibility-intake
feature (P2) defines what it actually needs.

Planned for **P2 — Compatibility intake**, when the vehicle/contact form needs persistence. Managed
PostgreSQL via Prisma is the proposed default (not yet ratified by an ADR — see
`docs/adr/0001-stack.md`). When this lands, this file will cover: schema, PII classification per
field, retention policy, and data ownership — before any customer data is collected.
