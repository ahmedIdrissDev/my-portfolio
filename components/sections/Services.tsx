"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MonitorSmartphone, LayoutTemplate, BrainCircuit } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
import { FeatureCard } from "@/components/ui/FeatureCard";

const services = [
  {
    title: "Websites",
    description: "High-performance, fully responsive, and SEO-optimized marketing sites and landing pages tailored for your brand.",
    icon: LayoutTemplate,
  },
  {
    title: "Web Applications",
    description: "Complex, data-driven web applications built with modern tools like Next.js, React, and robust backend architectures.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI Integrations",
    description: "Intelligent software solutions integrating cutting-edge AI models to automate workflows and enhance user experiences.",
    icon: BrainCircuit,
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".service-card", 
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
      gsap.set(".service-card", { autoAlpha: 1, y: 0 });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-[var(--spacing-sm)] md:px-[var(--spacing-lg)] lg:px-[var(--spacing-xxl)] py-[var(--spacing-xxxl)] flex flex-col items-center">
      <h2 className="mb-[var(--spacing-md)] text-center font-normal">Core Services</h2>
      <p className="body-lg text-center max-w-[700px] text-[var(--color-text-secondary)] mb-[var(--spacing-xl)]">
        Delivering scalable, secure, and intuitive digital solutions from front-end design to complex back-end architectures.
      </p>
      
      <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)] w-full">
        {services.map((service, index) => (
          <FeatureCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className="service-card opacity-0"
          />
        ))}
      </div>
    </section>
  );
}
