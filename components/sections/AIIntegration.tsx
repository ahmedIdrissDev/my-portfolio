"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Bot, GitPullRequest, ShieldCheck, Workflow } from "lucide-react";
import { ClaudeAI } from "@/components/ui/icon/Claude";
import { Codex } from "@/components/ui/icon/Codex";
import { Gemini } from "@/components/ui/icon/Gemini";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const workflowSteps = [
  {
    title: "Plan with context",
    description:
      "I use AI to break down product requirements, map edge cases, and turn vague ideas into clear technical tasks before implementation starts.",
    icon: Workflow,
  },
  {
    title: "Build with agentic tools",
    description:
      "Codex, Claude, Gemini, and similar tools support feature scaffolding, refactors, tests, documentation, and fast exploration inside the codebase.",
    icon: Bot,
  },
  {
    title: "Review like an engineer",
    description:
      "AI output is checked against architecture, security, performance, and maintainability standards before it reaches a pull request.",
    icon: GitPullRequest,
  },
  {
    title: "Ship reliable systems",
    description:
      "I integrate AI into CI, QA, and developer workflows so teams can move faster without giving up code ownership or production quality.",
    icon: ShieldCheck,
  },
];

const aiTools = [
  {
    name: "Codex",
    icon: Codex,
    iconClassName: "bg-black",
  },
  {
    name: "Claude",
    icon: ClaudeAI,
    iconClassName: "bg-[#fff7f2]",
  },
  {
    name: "Gemini",
    icon: Gemini,
    iconClassName: "bg-white",
  },
];

export function AIIntegration() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ".ai-integration-element",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.11,
          ease: "power1.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".ai-integration-element", { autoAlpha: 1, y: 0 });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="px-[var(--spacing-sm)] md:px-[var(--spacing-lg)] lg:px-[var(--spacing-xxl)] py-[var(--spacing-xxxl)] flex flex-col items-center border-t border-[var(--color-border-subtle)]"
    >
     

      <h2 className="ai-integration-element opacity-0 mb-[var(--spacing-md)] max-w-[820px] text-center font-normal">
        AI integration 
      </h2>

      <p className="ai-integration-element opacity-0 body-lg text-center max-w-[760px] text-[var(--color-text-secondary)] mb-[var(--spacing-xl)]">
        As a software engineer, I integrate AI tools into the way products are
        planned, built, reviewed, and shipped. The goal is not replacing
        engineering judgment, but making each workflow faster, clearer, and
        easier to maintain.
      </p>

      <div className="grid w-full grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 lg:grid-cols-4">
        {workflowSteps.map((step) => (
          <article
            key={step.title} 
            className="ai-integration-element overflow-clip relative   opacity-0 flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-default)] p-[var(--spacing-md)]"
          >
            <div className="bg-red-500 opacity-70 blur-3xl h-11 z-0 w-full absolute top-0 right-0 left-0"></div>
            <div className="mb-[var(--spacing-md)]  z-10">
              <step.icon size={30} strokeWidth={1.5} />
            </div>
            <h3 className="mb-[var(--spacing-sm)]  text-xl font-normal">
              {step.title}
            </h3>
            <p className="text-md opacity-80 ">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="ai-integration-element opacity-0 mt-[var(--spacing-lg)] flex max-w-[760px] flex-wrap justify-center gap-[var(--spacing-md)]">
        {aiTools.map((tool) => (
          <div
            key={tool.name}
            className="flex  size-14 items-center justify-center rounded-full  bg-[var(--color-surface-default)]"
            aria-label={tool.name}
            title={tool.name}
          >
            <span
              className={`flex size-11 items-center justify-center rounded-full  border-[var(--color-border-subtle)] ${tool.iconClassName}`}
            >
              <tool.icon className="size-7" aria-hidden="true" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
