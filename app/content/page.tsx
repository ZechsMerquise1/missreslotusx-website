// app/content/page.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/ui/navbar";

const KOC_URL = "https://kinkoncommand.com/?src=lw";
const ONLYFANS_URL = "https://onlyfans.com/mistresslotusx"; // update with your handle
const LOYALFANS_URL = "https://loyalfans.com/mistresslotusx"; // update with your handle

export default function ContentPage() {
  return (
    <>
      <Navbar />

      {/* Background glow (same as Sessions / Links) */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#5b21b62e] via-transparent to-transparent" />

      <main className="min-h-screen bg-[var(--bg)] text-white px-4 pb-16 pt-10 md:pt-10 relative">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 md:gap-12">
          {/* Heading */}
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              My Content Platforms
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Where my content lives
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
              These are the platforms where you can view my content. KinkOnCommand is
              my primary home for full length lezdom, femdom and solo scenes.
            </p>
          </section>

          {/* KinkOnCommand hero card */}
          <section className="space-y-4 md:space-y-5">
            <Link
              href={KOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.85)]">
                <Image
                  src="/photos/content-koc-large.png"
                  alt="KinkOnCommand content preview"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient to ground the logo/text */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                {/* Overlay content */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 md:px-7 md:pb-6 flex flex-col items-start gap-2 md:gap-3 pointer-events-none">
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    Primary Platform
                  </span>

                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-semibold md:text-xl">
                      KinkOnCommand
                    </span>
                    <span className="text-xs text-white/70 md:text-sm">
                    All of my real BDSM content in one place, plus scenes too explicit
                    for OnlyFans and new videos every week from other kinky creators.
                    </span>

                  </div>

                  {/* Desktop-only CTA – still clickable because it's inside the Link */}
                  <div className="hidden md:block pointer-events-auto">
                    <div className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium px-5 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.8)] hover:bg-white/90 transition">
                      Enter KinkOnCommand
                    </div>
                  </div>
                </div>
              </div>
            </Link>


          </section>

          {/* Other platforms */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Other platforms
            </h2>

            <div className="space-y-3">
              {/* OnlyFans */}
              <Link
                href={ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.7)] transition hover:border-pink-400/60 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(255,0,180,0.25)] md:px-5 md:py-4"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full overflow-hidden md:h-12 md:w-12 bg-white/10">
                  <Image
                    src="/logos/logo-of.png"
                    alt="OnlyFans"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium md:text-base">OnlyFans</span>
                  <span className="text-xs text-white/55 md:text-sm">
                    Legacy platform with only my content
                  </span>
                </div>
              </Link>

              {/* LoyalFans */}
              <Link
                href={LOYALFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.7)] transition hover:border-pink-400/60 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(255,0,180,0.25)] md:px-5 md:py-4"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full overflow-hidden md:h-12 md:w-12 bg-white/10">
                  <Image
                    src="/logos/logo-lf.png"
                    alt="LoyalFans"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium md:text-base">LoyalFans</span>
                  <span className="text-xs text-white/55 md:text-sm">
                    Alternate subscription option for fans who prefer this platform.
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
