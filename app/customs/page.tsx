// app/customs/page.tsx
"use client";

import Navbar from "../components/ui/navbar";

export default function CustomsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-4 pb-16 flex justify-center">
        <section className="w-full max-w-2xl mt-12">
          <h1>Customs</h1>

          <p className="mt-4 mb-8 text-sm sm:text-base text-white/70">
            Tell me what you have in mind for your custom. I&apos;ll review your request
            and get back to you by email with rates and next steps.
          </p>

          {/* Updated lighter grey container with better contrast */}
          <div className="rounded-3xl border border-white/30 bg-[#232427] p-6 sm:p-8 backdrop-blur-xl shadow-glass">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-white/80"
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
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-white/80"
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

              {/* Custom Type */}
              <div>
                <p className="block text-xs font-medium uppercase tracking-[0.15em] text-white/80">
                  Custom type
                </p>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  {/* Video */}
                  <label className="group cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="video"
                      className="peer sr-only"
                      required
                    />
                    <div
                      className="
                        w-full rounded-full px-3 py-2 text-center text-xs sm:text-sm
                        bg-black/30 text-white/80 border border-white/25 shadow-glass backdrop-blur-xl
                        transition-all
                        group-hover:border-white/40 group-hover:bg-white/5

                        peer-checked:border-purple-400
                        peer-checked:text-white
                        peer-checked:shadow-[0_0_12px_rgba(168,85,247,0.5)]
                      "
                    >
                      Video
                    </div>
                  </label>

                  {/* Photo */}
                  <label className="group cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="photo"
                      className="peer sr-only"
                    />
                    <div
                      className="
                        w-full rounded-full px-3 py-2 text-center text-xs sm:text-sm
                        bg-black/30 text-white/80 border border-white/25 shadow-glass backdrop-blur-xl
                        transition-all
                        group-hover:border-white/40 group-hover:bg-white/5

                        peer-checked:border-purple-400
                        peer-checked:text-white
                        peer-checked:shadow-[0_0_12px_rgba(168,85,247,0.5)]
                      "
                    >
                      Photo
                    </div>
                  </label>

                  {/* Both */}
                  <label className="group cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="both"
                      className="peer sr-only"
                    />
                    <div
                      className="
                        w-full rounded-full px-3 py-2 text-center text-xs sm:text-sm
                        bg-black/30 text-white/80 border border-white/25 shadow-glass backdrop-blur-xl
                        transition-all
                        group-hover:border-white/40 group-hover:bg-white/5

                        peer-checked:border-purple-400
                        peer-checked:text-white
                        peer-checked:shadow-[0_0_12px_rgba(168,85,247,0.5)]
                      "
                    >
                      Both
                    </div>
                  </label>
                </div>
              </div>

              {/* Request Details */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-white/80"
                >
                  Custom request details
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  className="mt-2 w-full min-h-[160px] rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40"
                  placeholder="Describe what you want: length, outfit, tone, boundaries, and when you’d like it delivered."
                />
                <p className="mt-2 text-xs text-white/60">
                  Please do not include personal handles; I will reply directly to your email.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                             bg-white/10 text-white border border-white/25 shadow-glass backdrop-blur-xl
                             hover:bg-white/20 hover:border-white/40 hover:shadow-xl transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
