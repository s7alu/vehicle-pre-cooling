import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Vehicle Pre-Cooling",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-zinc-50 px-6 py-16 text-center font-sans dark:bg-black">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Privacy Policy
      </h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        This page is a placeholder. We do not currently collect any personal information through
        this website. A full privacy policy will be published before any personal data is collected.
      </p>
    </div>
  );
}
