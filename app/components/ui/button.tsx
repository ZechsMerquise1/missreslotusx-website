
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary/80",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/80",
        className
      )}
      {...props}
    />
  );
}
