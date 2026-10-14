import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Vehicle Pre-Cooling",
};

export default function Terms() {
  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-zinc-50 px-6 py-16 text-center font-sans dark:bg-black">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">Terms</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        This page is a placeholder. No service, installation, or payment is currently offered
        through this website.
      </p>
    </div>
  );
}
