import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={`bg-[var(--color-surface-default)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] p-[var(--spacing-lg)] transition-all duration-200 ease-out hover:shadow-[var(--shadow-sm)] hover:-translate-y-[2px] flex flex-col h-full ${className || ""}`}>
      <div className="mb-[var(--spacing-md)] text-[var(--color-icon-primary)]">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="mb-[var(--spacing-md)] font-normal text-1xl">{title}</h3>
      <p className="text-md text-[var(--color-text-secondary)]">{description}</p>
    </div>
  );
}
