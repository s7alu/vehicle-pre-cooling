# Analytics

**Not yet implemented.** No analytics provider is wired into the codebase as of P0 — the deployed
site is a holding page with no user interactions worth measuring yet.

Planned for **P1 — Public validation site**. The PRD names the events the business needs to
measure conversion once the real landing page and compatibility-check CTA exist:

- CTA click
- Form start
- Form submit
- Qualified decision
- Checkout start
- Deposit paid
- Refund

When P1 lands, this file will define the canonical event names/properties _before_ they're
implemented (PRD §14), capture acquisition source/UTM, and explicitly exclude sensitive
vehicle/contact data from analytics payloads unless a specific justified exception is documented
here.
