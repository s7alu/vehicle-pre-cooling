import Link from "next/link";

const faqs = [
  {
    question: "Does this start my car remotely?",
    answer:
      "The pre-cooling runs through a licensed installer's professionally fitted remote-start hardware — this website never accesses or controls your vehicle.",
  },
  {
    question: "Is this legal in the UAE?",
    answer:
      "We're seeking formal legal clarification before offering any installation or service. Nothing will be installed until that's resolved.",
  },
  {
    question: "Which cars are supported?",
    answer:
      "None yet — we're validating compatibility case by case. Register interest and we'll follow up as checks open.",
  },
  {
    question: "Does it cost anything right now?",
    answer: "No. Pricing isn't set, and no payment is being collected at this stage.",
  },
  {
    question: "What happens after I register?",
    answer: "We'll email you when compatibility checks open for your vehicle. No obligation.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <header
        aria-label="Vehicle Pre-Cooling"
        className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800"
      >
        <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Vehicle Pre-Cooling
        </p>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 py-16 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Cool your car before you get in.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            A professionally installed, remote pre-cooling system for your parked car — launching
            first in Dubai. We&rsquo;re currently validating vehicle compatibility and demand before
            going further.
          </p>
          <button
            type="button"
            disabled
            aria-describedby="cta-note"
            className="mt-2 cursor-not-allowed rounded-full bg-zinc-300 px-6 py-3 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            Register your interest
          </button>
          <p id="cta-note" className="text-sm text-zinc-500 dark:text-zinc-500">
            Opening soon — check back shortly.
          </p>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Register your interest</strong> — leave your email, no commitment.
            </li>
            <li>
              <strong>We check compatibility</strong> — once checks open, we review your exact make,
              model and year before saying anything is supported.
            </li>
            <li>
              <strong>A licensed installer fits the hardware</strong> — pre-cooling runs on a
              professionally installed, third-party remote-start system. This site doesn&rsquo;t
              access, control, or communicate with your vehicle in any way — we don&rsquo;t build or
              operate vehicle hardware.
            </li>
          </ol>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Vehicle compatibility policy
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            We are still validating which vehicles can support this system.{" "}
            <strong>No vehicle has been confirmed compatible yet.</strong> We will never tell you
            your car is supported without checking your specific make, model and year first.
            Register your interest and we&rsquo;ll contact you when compatibility checks for your
            vehicle begin.
          </p>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">Where things stand</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            This is an early-stage validation project, not a live commercial service. We have not
            yet completed legal and regulatory review of unattended remote vehicle operation in the
            UAE. <strong>No installation, payment, or service is being offered right now</strong>,
            and none will be until that review is complete. Registering your interest commits you to
            nothing and does not imply legal clearance or vehicle compatibility.
          </p>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">FAQ</h2>
          <dl className="mt-4 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">{faq.question}</dt>
                <dd className="mt-1 text-zinc-700 dark:text-zinc-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        <nav className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
          <Link href="/privacy" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}
