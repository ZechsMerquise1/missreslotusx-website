// components/navbar.tsx
"use client";

import Link from "next/link";
import Button from "./button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4
                      bg-black/40 backdrop-blur-md border-b border-white/10">
        
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80 hover:text-white transition"
        >
          MistressLotusX
        </Link>

        {/* Menu Items */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/sessions"
            className="text-white/70 hover:text-white transition"
          >
            Sessions
          </Link>

          <Link
            href="/links"
            className="text-white/70 hover:text-white transition"
          >
            Links
          </Link>
        </nav>

        {/* Optional CTA */}
        <div className="hidden sm:block">
          <Button className="px-4 py-1.5 text-sm bg-white text-black border-white hover:bg-white/90">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
