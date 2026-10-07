export async function GET() {
  if (process.env.VERCEL_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }

  throw new Error(
    "P0.8 Sentry verification — delete this route once confirmed in the Sentry dashboard",
  );
}
