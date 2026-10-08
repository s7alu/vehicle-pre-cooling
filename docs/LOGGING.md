# Logging & error reporting convention

How to log and report errors in this app. Applies to server code (Route Handlers, Server
Components, Server Actions) and client code alike.

## Sentry vs. console

- **Unhandled exceptions** (anything that throws and isn't deliberately caught) are reported to
  Sentry automatically — `src/instrumentation.ts` and `src/instrumentation-client.ts` wire this up
  for server, edge, and browser. Don't add manual `Sentry.captureException` calls for these; the
  framework already catches them via Next.js's `onRequestError` hook and the client's global error
  handlers.
- **Handled errors you still want visibility into** (e.g. a third-party API call failed but you
  recovered with a fallback) — call `Sentry.captureException(error)` explicitly at the point you
  caught it.
- **Routine operational info** (a request was processed, a cron ran) — use `console.log`/
  `console.info`. These are not sent to Sentry; they go to Vercel's log drain, which is forwarded
  to Sentry Logs for search but doesn't trigger alerts.
- **Warnings worth noticing but not alerting on** — `console.warn`.

## What never goes in a log or Sentry event

No PII, card data, auth tokens, session tokens, or full request/response bodies — ever, in any
environment. This matches Prime Directive #2 in `04_AGENT_RULEBOOK.md`. If a value might contain
user input, log a count, an ID, or a redacted form instead of the raw value.

## Structure

Prefer a single structured argument over string concatenation, so entries stay greppable:

```ts
console.info("compatibility-check.submitted", { checkId, make, model });
console.error("compatibility-check.lookup-failed", { checkId, cause: String(error) });
```

Use a short `domain.event` string as the first argument, not a full sentence — it's what you'll
search logs for later.

## Timestamps

Always generate and store timestamps in UTC (`new Date().toISOString()`); format to UAE time only
at the display layer (NFR-004).
