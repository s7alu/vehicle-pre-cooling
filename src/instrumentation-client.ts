import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Requires the Vercel project setting "Enable access to System Environment Variables"
  // (confirmed on for this project); without it this is always undefined and every event
  // gets tagged "development" regardless of the real environment.
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development",
  tracesSampleRate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 0.2 : 1,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
