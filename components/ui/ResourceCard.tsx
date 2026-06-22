import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  icon: LucideIcon;
  gradient: "green" | "yellow" | "blue";
  className?: string;
}

export function ResourceCard({ title, icon: Icon, gradient, className }: ResourceCardProps) {
  const gradientClass = {
    green: "bg-[linear-gradient(135deg,var(--color-gradient-green-start),var(--color-gradient-green-end))]",
    yellow: "bg-[linear-gradient(135deg,var(--color-gradient-yellow-start),var(--color-gradient-yellow-end))]",
    blue: "bg-[linear-gradient(135deg,var(--color-gradient-blue-start),var(--color-gradient-blue-end))]",
  }[gradient];

  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] aspect-square p-[var(--spacing-lg)] flex flex-col items-start justify-between transition-transform duration-200 hover:scale-[1.02]",
        gradientClass,
        className
      )}
    >
      <div className="bg-[var(--color-surface-default)] p-[var(--spacing-sm)] rounded-[var(--radius-sm)] flex items-center justify-center text-[var(--color-icon-primary)]">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-normal  mt-[var(--spacing-md)]">{title}</h3>
    </div>
  );
}
