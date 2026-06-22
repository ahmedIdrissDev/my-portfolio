import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full mx-auto w-full ">
      <Navbar />
      <div className="mt-[var(--spacing-xxxl)]">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
