import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("../sentry.edge.config");
  } else {
    await import("../sentry.server.config");
  }
}

// Next.js awaits onRequestError before considering the request finished, so awaiting the
// flush here (rather than relying on Sentry's fire-and-forget internal waitUntil, which only
// registers with Vercel's keep-alive context under the Edge runtime, not Node.js) is what
// actually gets the event delivered before a Node.js serverless function freezes.
export const onRequestError = async (...args: Parameters<typeof Sentry.captureRequestError>) => {
  Sentry.captureRequestError(...args);
  await Sentry.flush(2000);
};
