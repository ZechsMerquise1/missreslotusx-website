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

      <main className="min-h-screen px-4 pb-24 flex justify-center mt-12">
        <section className="w-full max-w-2xl">
          <h1>Sessions</h1>

          <p className="mt-4 mb-4 text-sm sm:text-base text-white/70">
            Tell me what you have in mind for an in person session. I&apos;ll
            review your request and get back to you by email with tribute
            details, availability, and next steps.
          </p>

          {/* Desktop-only CTA */}
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
          <div className="mb-10 space-y-6 text-sm sm:text-base text-white/80">

            {/* High Priority Notice with gradient hero look */}
            <div className="relative overflow-hidden rounded-2xl border border-fuchsia-400/40 bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-transparent px-5 py-4 shadow-lg">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/30 blur-3xl"
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-purple-500/25 blur-3xl"
              ></span>

              <p className="text-xs font-semibold tracking-[0.12em] text-fuchsia-50">
                Read This First
              </p>
              <p className="mt-2 text-sm sm:text-base text-white">
                To receive a response you must send the{" "}
                <span className="font-semibold">$50 initial tribute</span> with your
                session request. Inquiries without a tribute will be ignored.
              </p>
            </div>

            {/* Two-card grid */}
            <div className="grid gap-6 sm:grid-cols-2">

              {/* Initial Tribute Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glass">
                <h2 className="text-xs font-semibold tracking-[0.1em] text-fuchsia-200">
                  Initial Tribute
                </h2>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  I do not entertain or respond to session inquiries without an
                  initial tribute. This is not a binding session fee, but a consultation
                  fee for my time to discuss scene details.
                </p>
                <p className="mt-2 text-sm text-white/70">
                  The initial tribute is <span className="font-semibold">$50</span>, payable via:
                </p>

                <ul className="mt-2 list-disc list-inside space-y-1 text-white/70">
                  <li>
                    CashApp: <span className="font-medium text-white">$MistressLotusX</span>
                  </li>
                  <li>
                    Venmo: <span className="font-medium text-white">MissLxX</span>
                  </li>
                  <li>
                    PayPal: <span className="font-medium text-white">Available on request</span>
                  </li>
                </ul>
              </div>

              {/* Security Deposit Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glass">
                <h2 className="text-xs font-semibold tracking-[0.1em] text-purple-200">
                  Booking & Security Deposit
                </h2>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  A security deposit of <span className="font-semibold">$200</span> or{" "}
                  <span className="font-semibold">20% of the session tribute</span>, whichever
                  is greater, is required to confirm your booking.
                </p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Deposits are non-refundable, but sessions may be rescheduled with at
                  least <span className="font-semibold">72 hours notice</span>.
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
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3
                             text-sm text-white placeholder:text-white/60 focus:outline-none
                             focus:ring-2 focus:ring-white/40 focus:border-white/40"
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
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3
                             text-sm text-white placeholder:text-white/60 focus:outline-none
                             focus:ring-2 focus:ring-white/40 focus:border-white/40"
                  placeholder="Where should I reply?"
                />
              </div>

              {/* Details */}
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
                  className="mt-2 w-full min-h-[180px] rounded-2xl border border-white/20 bg-black/40
                             px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none
                             focus:ring-2 focus:ring-white/40 focus:border-white/40"
                  placeholder="Describe interests, limits, experience, preferred date/time, and session length."
                />
                <p className="mt-2 text-xs text-white/60">
                  Please do not include personal handles.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                             bg-white/15 text-white border border-white/40 shadow-glass backdrop-blur-xl
                             hover:bg-white/20 hover:border-white/40 transition"
                >
                  Submit Session Request
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed inset-x-4 bottom-4 sm:hidden z-20">
          <button
            type="button"
            onClick={scrollToForm}
            className="w-full rounded-full px-5 py-3 text-sm font-medium
                       bg-white text-black shadow-2xl backdrop-blur
                       hover:bg-white/90 transition"
          >
            Request Session
          </button>
        </div>
      </main>
    </>
  );
}
