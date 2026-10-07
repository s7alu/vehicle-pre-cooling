export const sentryOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.VERCEL_ENV ?? "development",
  // Full visibility while traffic is near zero (pre-launch validation); tighten once
  // production has real traffic, to stay within the free tier's transaction quota.
  tracesSampleRate: process.env.VERCEL_ENV === "production" ? 0.2 : 1,
};
