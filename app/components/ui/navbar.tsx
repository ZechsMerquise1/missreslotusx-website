"use client";

import { useState, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function NavbarComponent() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/sessions", label: "Sessions" },
    { href: "/customs", label: "Customs" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-4 border-b border-white/10">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80 hover:text-white transition"
          >
            MistressLotusX
          </Link>

          {/* Desktop nav */}
          <nav className="relative hidden sm:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div key={item.href} className="relative px-1">
                  <Link
                    href={item.href}
                    className={`transition ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-full border border-white/30 px-3 py-2 text-white/80 hover:text-white hover:border-white transition"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-3 border-t border-white/10 pt-3">
            <nav className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default memo(NavbarComponent);
