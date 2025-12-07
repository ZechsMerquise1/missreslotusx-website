// app/sessions/page.tsx
"use client";

import { useState, useEffect, type FormEvent } from "react";
import Navbar from "../components/ui/navbar";

type TabKey = "inPerson" | "video" | "text";

export default function SessionsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("inPerson");
  const [formInView, setFormInView] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("session-form");
    if (!el) return;

    // Scroll so the top of the form is perfectly aligned
    const y = el.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");

    // Capture the form BEFORE any awaits (fixes the null reset error)
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);

      const res = await fetch("/api/session-request", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSubmitStatus("success");
      form.reset(); // ✅ safe now — no more "reading 'reset'" error
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };


  const tabs: { key: TabKey; label: string }[] = [
    { key: "inPerson", label: "In-Person Sessions" },
    { key: "video", label: "Video Sessions" },
    { key: "text", label: "Text Sessions" },
  ];

  // Observe when the form is in view so we can hide the mobile CTA
  useEffect(() => {
    const el = document.getElementById("session-form");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFormInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-4 pb-24 mt-3 sm:mt-12">
        <div className="w-full max-w-5xl mx-auto relative md:pl-60">
          {/* Mobile tab menu (top), desktop sidebar still below */}
          <div className="md:hidden mb-8">
            <nav className="flex border-b border-white/15">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;

                // MOBILE LABEL WITHOUT THE WORD "SESSIONS"
                const mobileLabel =
                  tab.key === "inPerson"
                    ? "In-Person"
                    : tab.key === "video"
                    ? "Video"
                    : "Text";

                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleTabChange(tab.key)}
                    className={[
                      "flex-1 pb-2 pt-3 text-center text-sm font-medium transition-colors",

                      // inactive
                      !isActive && "text-white/60",

                      // active: thicker + brighter white underline
                      isActive && "text-white border-b-2 border-white",
                    ].join(" ")}
                  >
                    {mobileLabel}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Left menu (desktop only, fixed and aligned to container) */}
          <aside
            className="hidden md:block fixed top-32 w-52"
            style={{ left: "calc(50% - 32rem)" }} // 32rem = half of 5xl (64rem)
          >
            <nav className="text-sm text-white/70">
              <ul className="space-y-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <li key={tab.key}>
                      <button
                        type="button"
                        onClick={() => handleTabChange(tab.key)}
                        className={[
                          "w-full text-left px-4 py-2 rounded-2xl transition",
                          "border border-transparent hover:border-white/20 hover:bg-white/5",
                          isActive
                            ? "bg-white/10 border-white/40 text-white"
                            : "text-white/70",
                        ].join(" ")}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main content column */}
          <section className="w-full max-w-2xl">
            {/* In-Person Sessions */}
            {activeTab === "inPerson" && (
              <div className="space-y-16">
                <div>
                  <h1>In-Person Sessions</h1>

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
                        READ THIS FIRST
                      </p>
                      <p className="mt-2 text-sm sm:text-base text-white">
                        To receive a response you must send the{" "}
                        <span className="font-semibold">$50 initial tribute</span> with
                        your session request. Inquiries without a tribute will be
                        ignored.
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
                          INITIAL TRIBUTE
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
                            <span className="font-medium text-white">
                              $MistressLotusX
                            </span>
                          </li>
                          <li>
                            Venmo:{" "}
                            <span className="font-medium text-white">MissLxX</span>
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
                          BOOKING &amp; SECURITY DEPOSIT
                        </h2>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          A security deposit of{" "}
                          <span className="font-semibold">$200</span> or{" "}
                          <span className="font-semibold">
                            20% of the agreed session tribute
                          </span>
                          , whichever is greater, is required to confirm your booking.
                          This deposit is applied to your total session cost and helps
                          minimize no shows while ensuring my time is respected.
                        </p>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          Deposits are non refundable, but sessions may be rescheduled
                          with at least <span className="font-semibold">72 hours notice</span>{" "}
                          provided by either party.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Sessions */}
            {activeTab === "video" && (
              <div className="space-y-4">
                <h1>Video Sessions</h1>
                <p className="mt-4 text-sm sm:text-base text-white/70">
                  Video sessions are available for those who want real-time connection,
                  control, and engagement from a distance. You may request custom
                  scenarios, roleplay, domination, guided tasks, or
                  accountability-focused sessions.
                  <br />
                  <br />
                  My session rate depends on length and content. If your request is
                  approved. I will coordinate a time, platform, and structure that fits
                  your request.
                </p>
              </div>
            )}

            {/* Text Sessions */}
            {activeTab === "text" && (
              <div className="space-y-4">
                <h1>Text Sessions</h1>
                <p className="mt-4 text-sm sm:text-base text-white/70">
                  Text sessions offer a flexible, ongoing way to connect, explore, and
                  receive direction throughout your day. These exchanges may include
                  roleplay, tasks, accountability, teasing, discipline, or focused
                  conversation tailored to your interests and limits.
                  <br />
                  <br />
                  Rates depend on the duration and structure of the session. If your
                  request is approved, I will outline the available pacing options and
                  how our text-based sessions will be organized.
                </p>
              </div>
            )}

            {/* Shared Form for all session types */}
            <div
              id="session-form"
              className="mt-10 rounded-3xl border border-white/20 bg-[#1b1b1e] p-6 sm:p-8 backdrop-blur-xl shadow-glass"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Hidden session type field */}
                <input type="hidden" name="sessionType" value={activeTab} />

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
                <div className="pt-2 flex flex-col items-end gap-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                               bg-white/15 text-white border border-white/40 shadow-glass backdrop-blur-xl
                               hover:bg-white/20 hover:border-white/40 hover:shadow-xl transition
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Submit Session Request"}
                  </button>

                  {submitStatus === "success" && (
                    <p className="text-xs text-emerald-400">
                      Thank you, your request has been sent.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-xs text-red-400">
                      Something went wrong sending your request. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* Sticky Mobile CTA - only for In-Person & only when form is NOT in view */}
        {activeTab === "inPerson" && !formInView && (
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
        )}
      </main>
    </>
  );
}
