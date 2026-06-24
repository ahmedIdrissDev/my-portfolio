"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FolderGit2, AppWindow, Database } from "lucide-react";
import { ResourceCard } from "@/components/ui/ResourceCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    title: "Landing pages | Enterpires Website ",
    icon: AppWindow,
    gradient: "green" as const,
  },
  {
    title: "Agentic AI and workflows",
    icon: Database,
    gradient: "blue" as const,
  },
  {
    title: "Web Platforms",
    icon: FolderGit2,
    gradient: "yellow" as const,
  },
];

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".project-card", 
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.13,
          ease: "power1.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          }
        }
      );
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".project-card", { autoAlpha: 1, y: 0 });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-[var(--spacing-sm)] md:px-[var(--spacing-lg)] lg:px-[var(--spacing-xxl)] py-[var(--spacing-xxxl)] flex flex-col items-center">
      <h2 className="mb-[var(--spacing-md)] text-center font-normal">Use cases</h2>
      <p className="body-lg text-center max-w-[700px] text-[var(--color-text-secondary)] mb-[var(--spacing-xl)]">
        Explore a curated selection of recent projects highlighting full-stack capabilities, from robust e-commerce architectures to complex AI agents.
      </p>
      
      <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)] w-full">
        {projects.map((project, index) => (
          <div key={index} className="project-card opacity-0">
            <ResourceCard 
              title={project.title}
              icon={project.icon}
              gradient={project.gradient}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
