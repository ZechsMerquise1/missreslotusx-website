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

  // Glass button (Primary)
  const primary =
    common +
    " bg-white/10 text-white border border-white/25 shadow-glass backdrop-blur-xl " +
    "hover:bg-white/20 hover:border-white/40 hover:shadow-xl";

  // Softer secondary glass button (Updated per your request)
  const secondary =
    common +
    " bg-white/5 text-white border border-white/15 backdrop-blur-xl " +
    "hover:bg-white/10 hover:border-white/25";

  let base = variant === "secondary" ? secondary : primary;
  if (className) base += ` ${className}`;

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
