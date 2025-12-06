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
          <h1>Sessions Test 4</h1>

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
                         bg-white/10 text-white border border-white/30 backdrop-blur
                         hover:bg-white/20 hover:border-white/40 transition"
            >
              Request Session
            </button>
          </div>

          {/* Info blocks */}
          <div className="mb-10 space-y-6 text-sm sm:text-base text-white/80">
            {/* High-priority notice with hard-coded gradient */}
            <div
              className="relative overflow-hidden rounded-2xl border px-5 py-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244,114,208,0.28), rgba(139,92,246,0.24), rgba(15,23,42,0.95))",
                borderColor: "rgba(244,114,208,0.9)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
              }}
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-white/90">
                Read This First
              </p>
              <p className="mt-2 text-sm sm:text-base text-white">
                To receive a response you must send the{" "}
                <span className="font-semibold">$50 initial tribute</span> with your
                session request. Inquiries without a tribute will be ignored.
              </p>
            </div>

            {/* Main sections */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Initial Tribute */}
              <div
                className="rounded-2xl border bg-white/5 p-5"
                style={{
                  borderColor: "rgba(244,114,208,0.55)", // pink edge
                }}
              >
                <h2 className="text-xs font-semibold tracking-[0.1em] text-white/85">
                  Initial Tribute
                </h2>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
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
                    CashApp:{" "}
                    <span className="font-medium text-white">$MistressLotusX</span>
                  </li>
                  <li>
                    Venmo: <span className="font-medium text-white">MissLxX</span>
                  </li>
                  <li>
                    PayPal:{" "}
                    <span className="font-medium text-white">
                      available upon request
                    </span>
                  </li>
                </ul>
              </div>

              {/* Booking & Security Deposit */}
              <div
                className="rounded-2xl border bg-white/5 p-5"
                style={{
                  borderColor: "rgba(139,92,246,0.55)", // purple edge
                }}
              >
                <h2 className="text-xs font-semibold tracking-[0.1em] text-white/85">
                  Booking & Security Deposit
                </h2>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  A security deposit of <span className="font-semibold">$200</span> or{" "}
                  <span className="font-semibold">20% of the agreed session tribute</span>,{" "}
                  whichever is greater, is required to confirm your booking. This
                  deposit is applied to your total session cost and helps minimize
                  no shows while ensuring my time is respected.
                </p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Deposits are non refundable, but sessions may be rescheduled with at
                  least <span className="font-semibold">72 hours notice</span>{" "}
                  provided by either party.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            id="session-form"
            className="rounded-3xl border border-white/20 bg-[#1b1b1e] p-6 sm:p-8 backdrop-blur-xl shadow-glass"

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
