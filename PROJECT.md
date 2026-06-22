Project Overview

We are building a personal portfolio landing page for a Full Stack Web Developer.

The goal is to present services, skills, and selected projects in a clean, modern, and high-performance website.

The developer "Ahmed Idriss " helps businesses build and scale:

Websites
Web applications
AI integrations
Technical Profile

The developer is experienced in modern web technologies, including:

Next.js
Tailwind CSS
Convex
AI SDK for AI integrations
MongoDB
SQL (Laravel ecosystem)
System design and software architecture
Requirements Gathering
Functional Requirements

The portfolio must include the following sections:

Header / Navigation
Hero Section (introduction and value proposition)
Use Cases / Services Section
Projects Section
Contact Section
UI / UX Requirements
Smooth scroll-based animations
Clean and minimal design
Fully responsive design:
Mobile
Tablet
Desktop
High-quality user experience
No visual clutter
Technical Scoping
Stack
Next.js (App Router)
Tailwind CSS
GSAP (animations)
Lucide React (icons)
Architecture
my-portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/
│   │   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── shared/
│
├── lib/
│   ├── data.ts
│   ├── utils.ts
│   └── seo.ts
│
├── content/
│   ├── projects/
│   └── blog/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── resume.pdf
│
├── types/
├── hooks/
├── styles/
│   └── globals.css
│
├── next.config.js
├── tsconfig.json
└── package.json
Architecture Decisions
Keep architecture simple for now
Focus on scalability and maintainability
Separate UI, logic, and data layers
Prioritize reusable components
Coding Rules
Write clean and readable code
Follow React and Next.js best practices
Use reusable components
Avoid duplication
Maintain separation of concerns
Design Constraints
Fully responsive design required
Mobile, tablet, and desktop support
Minimal UI design
No shadows on cards or buttons
Focus on spacing, typography, and layout instead of effects 



