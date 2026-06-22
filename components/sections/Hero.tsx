"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline();
      tl.fromTo(".hero-word", 
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: "power1.out", clearProps: "transform" }
      )
      .fromTo(".hero-element", 
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "transform" }, 
        "-=0.3"
      );

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.set(".hero-draw-svg", { autoAlpha: 1 });
        tl.to(pathRef.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, "-=0.3");
      }

      gsap.to(".hero-svg", {
        x: -200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([".hero-word", ".hero-element", ".hero-draw-svg"], { autoAlpha: 1, y: 0 });
      if (pathRef.current) {
        gsap.set(pathRef.current, { strokeDashoffset: 0 });
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="px-[var(--spacing-sm)] overflow-hidden relative md:px-[var(--spacing-lg)] lg:px-[var(--spacing-xxl)] min-h-[90dvh] pt-[var(--spacing-xxxl)] pb-[var(--spacing-xl)]  flex flex-col items-center justify-center text-center min-h-[70vh]"
    >
      <h1 className="max-w-[800px] relative  font-Ahmed mb-[var(--spacing-md)] font-normal flex flex-wrap justify-center text-4xl md:text-6xl">
        {"Building high-performance websites and AI applications.".split(" ").map((word, i) => (
          <span key={i} className="hero-word opacity-0 mr-[0.25em]">{word}</span>
        ))}
        <svg className="absolute right-0 -bottom-8 opacity-0 hero-draw-svg" width="491" height="111" viewBox="0 0 401 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M0.587402 28.3167C0.587402 28.3167 414.587 -33.6833 378.587 40.3167C332.083 135.909 299.502 84.0956 194.087 97.8167C126.586 106.603 47.1657 123.355 24.0874 59.3167C0.240946 -6.85368 169.574 48.0423 237.087 28.3166C301.051 9.62802 400.087 11.8168 400.087 11.8168" stroke="url(#paint0_linear_89_2)" strokeWidth="5"/>
<defs>
<linearGradient id="paint0_linear_89_2" x1="200.337" y1="4" x2="200.337" y2="106.528" gradientUnits="userSpaceOnUse">
<stop stop-color="#4000FF"/>
<stop offset="1" stop-color="#795CD0"/>
</linearGradient>
</defs>
</svg>
      </h1>
      <p className="hero-element opacity-0 body-md max-w-[600px] text-[var(--color-text-secondary)] mb-[var(--spacing-lg)]">
        Ahmed Idriss is a Full Stack Web Developer helping businesses scale with Next.js, AI integrations, and sophisticated architectures.

      </p>
      <div className="hero-element opacity-0 flex gap-[var(--spacing-md)]">
        <Button variant="primary" size="default" className="text-white bg-blue-700">Start a Project</Button>
        <Button variant="secondary" size="default" >View Services</Button>
      </div>
      <svg className="hero-svg bottom-0 opacity-90 -z-20 absolute" width="2945" height="651" viewBox="0 0 2945 651" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1396 610.194C35.1396 610.194 258.64 110.194 505.14 110.194C751.64 110.194 647.14 610.194 1042.64 610.194C1438.14 610.194 1154.14 110.194 1467.64 43.1939C1781.14 -23.8062 1740.09 649.065 2057.14 610.194C2321.15 577.824 2254.66 87.0431 2519.64 110.194C2765.74 131.695 2907.14 610.194 2907.14 610.194" stroke="url(#paint0_linear_86_2)" stroke-width="77"/>
<defs>
<linearGradient id="paint0_linear_86_2" x1="1471.14" y1="38.4988" x2="1471.14" y2="611.817" gradientUnits="userSpaceOnUse">
<stop stop-color="#0084FF"/>
<stop offset="1" stop-color="#666666" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

      {/* <svg className="bottom-0 opacity-90 -z-20   absolute" width="2945" height="651" viewBox="0 0 2945 651" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1396 610.194C35.1396 610.194 258.64 110.194 505.14 110.194C751.64 110.194 647.14 610.194 1042.64 610.194C1438.14 610.194 1154.14 110.194 1467.64 43.1939C1781.14 -23.8062 1740.09 649.065 2057.14 610.194C2321.15 577.824 2254.66 87.0431 2519.64 110.194C2765.74 131.695 2907.14 610.194 2907.14 610.194" stroke="url(#paint0_linear_86_2)" stroke-width="77"/>
<defs>
<linearGradient id="paint0_linear_86_2" x1="1471.14" y1="38.4988" x2="1471.14" y2="611.817" gradientUnits="userSpaceOnUse">
<stop stop-color="#10263B"/>
<stop offset="1" stop-color="#666666" stop-opacity="0"/>
</linearGradient>
</defs>
</svg> */}

    </section>
  );
}
