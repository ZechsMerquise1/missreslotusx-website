// app/sessions/page.tsx
"use client";

import Navbar from "../components/ui/navbar";

export default function SessionsPage() {
  const scrollToForm = () => {
    const el = document.getElementById("session-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-4 pb-16 flex justify-center mt-12">
        <section className="w-full max-w-2xl">
          <h1>Sessions</h1>

          <p className="mt-4 mb-4 text-sm sm:text-base text-white/70">
            Tell me what you have in mind for an in person session. I&apos;ll
            review your request and get back to you by email with tribute
            details, availability, and next steps.
          </p>

        {/* Top CTA (desktop only) */}
        <div className="mb-6 hidden sm:block">
        <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium
                    bg-white/10 text-white border border-white/30 shadow-glass backdrop-blur
                    hover:bg-white/20 hover:border-white/40 transition"
        >
            Request Session
        </button>
        </div>

          {/* Info blocks */}
          <div className="mb-8 space-y-4 sm:space-y-6 text-sm sm:text-base text-white/80">
            {/* High-priority notice */}
            <div className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 sm:px-5 sm:py-4 shadow-glass">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                Read this first
              </p>
              <p className="mt-2 text-sm sm:text-base text-white">
                To receive a response you must send the{" "}
                <span className="font-semibold">$50 initial tribute</span> with your
                session request. Inquiries without a tribute will be ignored.
              </p>
            </div>

            {/* Main sections */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Initial Tribute */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                  Initial tribute
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  I do not entertain or respond to session inquiries without an
                  initial tribute. This is not a binding session fee, but a
                  consultation fee for my time to discuss scene details,
                  expectations, and logistics.
                </p>
                <p className="mt-2 text-sm text-white/70">
                  The initial tribute is a minimum of{" "}
                  <span className="font-semibold">$50</span>, payable via:
                </p>
                <ul className="mt-2 text-sm text-white/70 list-disc list-inside space-y-1">
                  <li>
                    CashApp: <span className="font-medium">$MistressLotusX</span>
                  </li>
                  <li>
                    Venmo: <span className="font-medium">MissLxX</span>
                  </li>
                  <li>
                    PayPal:{" "}
                    <span className="font-medium">available upon request</span>
                  </li>
                </ul>
              </div>

              {/* Booking & Security Deposit */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                  Booking and security deposit
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  A security deposit of <span className="font-semibold">$200</span> or{" "}
                  <span className="font-semibold">20% of the agreed session tribute</span>,{" "}
                  whichever is greater, is required to confirm your booking.
                  This deposit is applied to your total session cost and helps
                  minimize no shows while ensuring my time is respected.
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Deposits are non refundable, but sessions may be rescheduled
                  with at least <span className="font-semibold">72 hours notice</span>{" "}
                  provided by either party.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            id="session-form"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-glass"
          >
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-white/70"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40"
                  placeholder="How should I address you?"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-white/70"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40"
                  placeholder="Where should I reply?"
                />
              </div>

              {/* Session Request Details */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-white/70"
                >
                  Session request details
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  className="mt-2 w-full min-h-[180px] rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40"
                  placeholder="Describe the session you are seeking: interests, hard limits, experience level, preferred date and time, and length of session."
                />
                <p className="mt-2 text-xs text-white/60">
                  Please do not include personal handles. I will reply directly to
                  your email with tribute details and booking instructions.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                             bg-white/15 text-white border border-white/40 shadow-glass backdrop-blur-xl
                             hover:bg-white/20 hover:border-white/40 hover:shadow-xl transition"
                >
                  Submit Session Request
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Mobile sticky CTA */}
        <div className="fixed inset-x-4 bottom-4 sm:hidden z-20">
          <button
            type="button"
            onClick={scrollToForm}
            className="w-full rounded-full px-5 py-3 text-sm font-medium
                       bg-white text-black shadow-lg backdrop-blur
                       hover:bg-white/90 transition"
          >
            Request Session
          </button>
        </div>
      </main>
    </>
  );
}
