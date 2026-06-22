import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className=" backdrop-blur-2xl h-14 w-full top-0 left-0 right-0 z-50 bg-transparent flex items-center justify-between px-[var(--spacing-sm)] md:px-[var(--spacing-lg)] lg:px-[var(--spacing-xxl)] py-[var(--spacing-md)]  max-w-[1280px] mx-auto">
      <Link href="/" className="font-bold text-xl tracking-tight text-[var(--color-brand-primary)]">
        Ahmed Idriss
      </Link>
      <div className="flex gap-[var(--spacing-md)]">
        <Button variant="secondary">Contact</Button>
        <Button variant="primary" className="text-white font-normal">View Projects</Button>
      </div>
    </nav>
  );
}
