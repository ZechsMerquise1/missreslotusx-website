// components/hero.tsx
import Image from "next/image";
import Button from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-start justify-center overflow-hidden pt-16 sm:pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Desktop */}
        <Image
          src="/photos/hero.jpg"
          alt="MistressLotusX hero"
          fill
          priority
          className="hidden sm:block object-cover -translate-y-14"
        />

        {/* Mobile */}
        <Image
          src="/photos/hero-mobile.jpg"
          alt="MistressLotusX hero mobile"
          fill
          priority
          className="block sm:hidden object-cover -translate-y-14"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center mt-20 sm:mt-0">
        <h1 className="mb-6">
          Mistress Lotus
        </h1>

        {/* Subheading + body */}
        <h3 className="mb-2">
          Welcome To My Erotic Domain
        </h3>

        <p className="mb-8 max-w-2xl text-sm sm:text-base text-white/80">
          Explore Your Bondage, Fetish, And Fantasy Desires With Me.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/content">
            <Button className="px-6 py-2.5 text-sm sm:text-base">
              Subscribe
            </Button>
          </Link>

          <Link href="/customs">
            <Button
              variant="secondary"
              className="px-6 py-2.5 text-sm sm:text-base bg-transparent border border-white text-white hover:bg-white hover:text-black transition"
            >
              Request Custom
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
