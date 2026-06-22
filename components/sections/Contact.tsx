"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".contact-element", 
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
      gsap.set(".contact-element", { autoAlpha: 1, y: 0 });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-[var(--spacing-sm)] md:px-[var(--spacing-lg)] lg:px-[var(--spacing-xxl)] py-[var(--spacing-xxxl)] overflow-hidden relative flex flex-col items-center border-t border-[var(--color-border-subtle)] mt-[var(--spacing-xxxl)]">
      <h2 className="contact-element opacity-0 mb-[var(--spacing-md)] text-center font-normal">Ready to build?</h2>
      <p className="contact-element opacity-0 body-lg text-center max-w-[600px] text-[var(--color-text-secondary)] mb-[var(--spacing-xl)]">
        Let&apos;s discuss how we can engineer a custom solution for your business. Reach out to start the conversation.
      </p>
      
      <div className="contact-element opacity-0 flex gap-[var(--spacing-md)]">
        <Button variant="primary" size="default" className="text-white">Contact Me</Button>
      </div>
      
      <div className="contact-element opacity-0 mt-[var(--spacing-xxxl)] text-center text-[var(--color-text-tertiary)] body-sm">
        <p>© {new Date().getFullYear()} Ahmed Idriss. All rights reserved.</p>
      </div>
  <svg className="hero-svg -left-96 bottom-0 opacity-90 -z-20 absolute" width="2945" height="651" viewBox="0 0 2945 651" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1396 610.194C35.1396 610.194 258.64 110.194 505.14 110.194C751.64 110.194 647.14 610.194 1042.64 610.194C1438.14 610.194 1154.14 110.194 1467.64 43.1939C1781.14 -23.8062 1740.09 649.065 2057.14 610.194C2321.15 577.824 2254.66 87.0431 2519.64 110.194C2765.74 131.695 2907.14 610.194 2907.14 610.194" stroke="url(#paint0_linear_86_2)" stroke-width="77"/>
<defs>
<linearGradient id="paint0_linear_86_2" x1="1471.14" y1="38.4988" x2="1471.14" y2="611.817" gradientUnits="userSpaceOnUse">
<stop stop-color="#0084FF"/>
<stop offset="1" stop-color="#666666" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>


    </section>
  );
}
