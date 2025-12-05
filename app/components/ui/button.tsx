// components/ui/button.tsx
"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const common =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium " +
    "transition disabled:opacity-50 disabled:cursor-not-allowed";

  // Glass button (for "View Portfolio")
  const primary =
    common +
    " bg-white/10 text-white border border-white/25 shadow-glass backdrop-blur-xl " +
    "hover:bg-white/20 hover:border-white/40 hover:shadow-xl";

  // Glossy white CTA (for "Book a Session")
  const secondary =
    common +
    " bg-gradient-to-b from-white to-neutral-200 text-black " +
    "border border-white/70 shadow-lg hover:shadow-xl";

  let base = variant === "secondary" ? secondary : primary;
  if (className) base += ` ${className}`;

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
