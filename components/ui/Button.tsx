import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-full text-white transition-all duration-150 ease-out",
        {
          "bg-[var(--color-brand-primary)] text-[var(--color-text-on-dark)] hover:bg-blue-500 hover:-translate-y-[1px] active:bg-[var(--color-brand-primary)] active:translate-y-0":
            variant === "primary",
          "bg-transparent text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)] hover:bg-blue-500 hover:text-white active:bg-[var(--color-surface-active-light)]":
            variant === "secondary",
          "px-[var(--spacing-md)] text-[var(--font-size-body-md)]":
            size === "default",
          "px-[var(--spacing-sm)] text-[var(--font-size-body-sm)]": size === "sm",
          "px-[var(--spacing-lg)] text-[var(--font-size-body-lg)]": size === "lg",
        },
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
