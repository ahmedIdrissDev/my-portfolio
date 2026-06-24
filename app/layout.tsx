import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Idriss | Full Stack Web Developer",
  description: "Portfolio of Ahmed Idriss, a Full Stack Web Developer specializing in Next.js, Tailwind CSS, Convex, AI integrations, MongoDB, and SQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col bg-[var(--color-surface-default)] text-[var(--color-text-primary)]  ">
        {children}
      </body>
    </html>
  );
}
