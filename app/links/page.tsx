// app/links/page.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/ui/navbar";

const platformLinks = [
  {
    label: "KinkOnCommand",
    href: "https://kinkoncommand.com/?src=lw",
    sub: "Where all my exclusive content lives plus more creators",
    icon: "koc",
  },
  {
    label: "OnlyFans",
    href: "https://onlyfans.com/mistresslotusx",
    icon: "onlyfans",
  },
  {
    label: "LoyalFans",
    href: "https://loyalfans.com/mistresslotusx",
    icon: "lf",
  },
  {
    label: "X/Twitter",
    href: "https://x.com/mistresslotusx",
    icon: "x",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/lady.lotus.x",
    icon: "instagram",
  },
  {
    label: "Fetlife",
    href: "https://fetlife.com/mistresslotusx",
    icon: "fetlife",
  },
  {
    label: "Throne Wishlist",
    href: "https://throne.com/mlotus",
    icon: "throne",
  },
];

const supportLinks = [
  {
    label: "Venmo",
    href: "https://venmo.com/u/misslx",
    icon: "venmo",
  },
  {
    label: "Cash App",
    href: "https://cash.app/$mistresslotusx",
    icon: "cashapp",
  },
];

// Map icons to your PNG paths
const iconMap: Record<string, string> = {
  koc: "/logos/logo-koc.png",
  onlyfans: "/logos/logo-of.png",
  lf: "/logos/logo-lf.png",
  x: "/logos/logo-x.png",
  instagram: "/logos/logo-ig.png",
  fetlife: "/logos/logo-fl.png",
  throne: "/logos/logo-throne.png",
  venmo: "/logos/logo-venmo.png",
  cashapp: "/logos/logo-cashapp.png",
};

export default function LinksPage() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#5b21b62e] via-transparent to-transparent" />

      <main className="min-h-screen bg-[var(--bg)] text-white px-4 pb-16 pt-10 md:pt-10 relative">
        <div className="mx-auto flex max-w-4xl flex-col">

          {/* Heading */}
          <section className="mb-10 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              All of My Links
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Links
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
              All the places you can find me, follow my work, and spoil me a little.
            </p>
          </section>

          {/* Chips container */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-black/40 p-5 shadow-[0_0_60px_rgba(0,0,0,0.7)] md:p-6">
            <div className="space-y-4">

              {/* Main platform links */}
              {platformLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 shadow-[0_0_25px_rgba(0,0,0,0.6)] transition hover:border-pink-400/60 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(255,0,180,0.25)] md:px-6 md:py-4"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full md:h-12 md:w-12 overflow-hidden">
                    <Image
                      src={iconMap[item.icon]}
                      alt={item.label}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4 max-w-[80%] mx-auto">
                    <span className="text-sm font-medium tracking-wide text-white md:text-base">
                      {item.label}
                    </span>
                    {item.sub && (
                      <span className="mt-0.5 text-xs text-white/55 md:text-sm">
                        {item.sub}
                      </span>
                    )}
                  </div>
                </Link>
              ))}

              {/* Section title */}
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 pl-1 mt-8">
                Support Me
              </p>

              {/* Support links */}
              {supportLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 shadow-[0_0_25px_rgba(0,0,0,0.6)] transition hover:border-pink-400/60 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(255,0,180,0.25)] md:px-6 md:py-4"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full md:h-12 md:w-12 overflow-hidden">
                    <Image
                      src={iconMap[item.icon]}
                      alt={item.label}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4 max-w-[80%] mx-auto">
                    <span className="text-sm font-medium tracking-wide text-white md:text-base">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}

            </div>
          </section>
        </div>
      </main>
    </>
  );
}
