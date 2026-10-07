"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-50 px-6 text-center font-sans dark:bg-black">
        <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Something went wrong
        </h2>
        <button
          onClick={() => retry()}
          className="mt-2 rounded-md border border-zinc-300 px-4 py-2 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
