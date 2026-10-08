# Product

## What this is

A web platform for validating demand for a remote vehicle pre-cooling service in Dubai/UAE, then
(once validated) running pilots and bookings. The platform explains the customer benefit, captures
vehicle details, lets the team assess compatibility, measures acquisition/conversion, and — only
after the relevant business gate is approved — collects a refundable reservation deposit.

## What this will never do

The platform does not start cars, does not communicate with a vehicle, and does not implement
CAN-bus logic, immobiliser bypass, telematics, embedded firmware, or a custom remote-start mobile
app. Vehicle control is a supplier/installer responsibility, not something this codebase builds.

No legal, warranty, or vehicle-compatibility claims are published on the site until the relevant
business gate (below) has passed.

## Phases

| Phase | Deliverable                                                                                                             |
| ----- | ----------------------------------------------------------------------------------------------------------------------- |
| P0    | Repository, environments, CI/CD, security baseline, logging, documentation, test harness. No public business logic yet. |
| P1    | Public landing page: proposition, how-it-works, disclosures, FAQ, analytics, CTA to compatibility check.                |
| P2    | Structured vehicle/contact intake form, consent, validation, anti-spam, admin queue.                                    |
| P3    | Admin/technical compatibility review workflow with statuses, reasons, audit log, notifications.                         |
| P4    | Refundable deposit — feature-flagged, hosted checkout, signed/idempotent webhooks, refund workflow.                     |
| P5    | Pilot operations — appointment/status tracking, installation checklist, temperature measurements.                       |
| P6    | Commercial launch — approved compatibility catalog, booking, partner assignment, warranty records.                      |
| P7    | Supplier-connected app/service option, if business-approved — no custom vehicle-command backend.                        |

## Current status

**Phase: P0 — Foundation.** No public business logic is live yet; the deployed site is a holding
page. See the repository's commit/PR history for exactly what has shipped.

## Business validation gates

Before scaling past validation, the business needs evidence on five fronts. None of these gates
are something the software can assert on its own — they're tracked and decided outside this repo:

1. **Legal** — is unattended remote starting, and this installation, allowed under local regulation?
2. **Hardware** — is there a reputable, regionally-approvable, heat-tolerant system for the target vehicles?
3. **Product** — does pre-cooling measurably work (cabin temperature over time)?
4. **Customer** — will people pay a refundable deposit, not just express interest?
5. **Economics** — is there a viable margin after hardware, install, warranty, fees, and support costs?

This platform's software goal is to produce real evidence for gates 3 and 4 safely and
professionally — not to assume any gate has already passed.
