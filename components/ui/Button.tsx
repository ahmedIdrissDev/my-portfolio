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
        "inline-flex items-center justify-center rounded-full text-white transition-all duration-150 ease-out",
        {
          "bg-[var(--color-brand-primary)] text-[var(--color-text-on-dark)] hover:bg-[#1A1A1A] hover:-translate-y-[1px] hover:shadow-[var(--shadow-sm)] active:bg-[var(--color-brand-primary)] active:translate-y-0":
            variant === "primary",
          "bg-transparent text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)] hover:bg-[var(--color-surface-hover-light)] active:bg-[var(--color-surface-active-light)]":
            variant === "secondary",
          "px-[var(--spacing-md)] py-[var(--spacing-xs)] text-[var(--font-size-body-md)]":
            size === "default",
          "px-[var(--spacing-sm)] py-1 text-[var(--font-size-body-sm)]": size === "sm",
          "px-[var(--spacing-lg)] py-[var(--spacing-sm)] text-[var(--font-size-body-lg)]": size === "lg",
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
