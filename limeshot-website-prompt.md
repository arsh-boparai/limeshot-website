# Limeshot Digital Solutions — Website Build Prompt

> **Copy this entire prompt into Claude Code to build the site.**

---

## Project Overview

Build a modern, high-converting freelance consulting website for **Limeshot Digital Solutions** (limeshotdigital.com) using **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**. The site should position the business as a premium technical consultancy specializing in React/React Native development, AI/Agent integration, and enterprise-grade web & mobile solutions.

**Owner Profile:** Senior Frontend Technical Lead with 8+ years of experience leading teams of 15+ engineers, building production applications for logistics, fleet management, and enterprise operations. Deep expertise in React, React Native (Expo), TypeScript, Firebase, GraphQL/Hasura, GCP, Azure, and AI agent architectures (Google ADK, MCP, A2A, RAG). Has shipped multiple production apps including real-time dashboards, driver/carrier mobile apps, warehouse management systems, and AI-powered case management platforms.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router, server components where appropriate)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables for theming
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Use distinctive, modern fonts from Google Fonts — avoid generic choices like Inter, Roboto, Arial. Suggestions: "Instrument Sans" or "Satoshi" for body, "Cabinet Grotesk" or "Clash Display" for headings. Pick something with personality.
- **Deployment:** Vercel-ready
- **Contact Form:** React Hook Form + server action or API route (email via Resend or just collect to a JSON/database for now)
- **SEO:** Next.js metadata API, OpenGraph images, sitemap.xml, robots.txt

---

## Design Direction

### Aesthetic
- **Tone:** Premium technical — clean, confident, not flashy. Think "senior engineer who ships, not a design agency trying to impress."
- **Theme:** Dark mode primary (deep charcoal/near-black backgrounds) with a signature **lime/electric green accent** (#84CC16 or similar lime-green — ties to brand name "Limeshot"). Secondary accent: cool white/light gray for text contrast.
- **Layout:** Generous whitespace, asymmetric sections, large typography for headlines, subtle grid-breaking elements. Avoid cookie-cutter SaaS templates.
- **Motion:** Smooth scroll-triggered reveals, staggered text animations on hero, subtle parallax on feature cards. Restrained — not a fireworks show. One or two "wow" moments (like a code-block typing animation or an animated tech stack visualization).
- **Backgrounds:** Subtle dot grid or noise texture overlay on dark sections. Maybe a faint gradient mesh on the hero. No generic purple gradients.

### Key Visual Elements
- A hero section with a bold headline, sub-text, and a clear CTA
- Animated code snippet or terminal mockup showing real tech (React component, Claude Code session, or similar) — establishes credibility instantly
- Tech stack visualization (not just a grid of logos — something more dynamic like an orbital diagram or connected nodes)
- Case study cards with real metrics and outcomes
- A "How I Work" process section (Discovery → Architecture → Build → Ship)

---

## Site Structure & Pages

### 1. Home Page (`/`)

**Hero Section:**
- Headline: "I Build Production-Grade Apps That Scale" (or similar — confident, direct, no buzzwords)
- Subheadline: "Senior Technical Lead specializing in React, React Native, and AI-powered enterprise applications. From architecture to deployment — I ship solutions that work."
- Primary CTA: "Let's Talk" → scrolls to contact or opens contact page
- Secondary CTA: "See My Work" → scrolls to case studies
- Visual: Animated terminal/code block showing a React component being built or a Claude Code session

**Services Section:**
Three main service cards with icons, brief descriptions, and "Learn More" links:

1. **React & React Native Development**
   - Production web apps and cross-platform mobile apps
   - Mention: Expo, TypeScript, real-time dashboards, AG Grid, Module Federation micro-frontends
   - "From complex data grids handling 10,000+ records to cross-platform mobile apps with offline-first architecture"

2. **AI & Agent Integration**
   - AI-powered features for existing products
   - Mention: Google ADK, MCP protocol, A2A, RAG with BigQuery Vector Search, Anthropic API, streaming chat assistants
   - "I integrate AI agents into real business workflows — not chatbot demos, but systems that route, decide, and act"

3. **Web & Mobile Development**
   - Full-stack application development
   - Mention: Next.js, Firebase/Firestore, GraphQL/Hasura, GCP, Azure B2C, CI/CD pipelines
   - "End-to-end development from database design to deployment, with infrastructure that handles real production traffic"

**Case Studies / Featured Work Section:**
Display 3-4 project cards. Each card should have:
- Project type tag (e.g., "Enterprise Dashboard", "Mobile App", "AI Platform")
- Brief description
- Tech stack pills
- Key metric or outcome
- Use these real (anonymized) projects:

  **Project 1 — Real-Time Operations Dashboard**
  - Built a real-time order management dashboard for a logistics company serving 50+ dispatchers
  - Tech: React, TypeScript, AG Grid, SSE via SharedWorker, Hasura/GraphQL, Module Federation
  - Result: "Reduced main-thread CPU load by 60% with Web Worker architecture. Handles 100+ entity types with dynamic role-based permissions."

  **Project 2 — Cross-Platform Driver App**
  - Built a driver/carrier mobile app from scratch with offline-first architecture
  - Tech: React Native, Expo SDK 53+, Firebase, Azure B2C, Background Geolocation, Google ML Kit OCR
  - Result: "Offline-capable with MMKV queue sync. Custom document scanner with OCR for bills of lading. Deployed to 500+ drivers across North America."

  **Project 3 — AI Case Management Platform**
  - Built an AI-powered case management system with multi-agent orchestration
  - Tech: Google ADK, MCP, A2A Protocol, RAG (BigQuery Vector Search + Vertex AI), Anthropic API, React streaming UI
  - Result: "323 tags across 22 groups driving intelligent agent routing. Streaming chat assistant integrated directly into the operations dashboard."

  **Project 4 — IoT Gate Access System**
  - End-to-end QR-based gate access system for warehouse yards
  - Tech: React Native (generation), AXIS Camera ACAP (C application), HMAC-SHA256 validation, Firestore
  - Result: "From QR generation on mobile to camera-based validation to physical gate relay control. Zero-touch entry for 700+ trailer yard."

**Tech Stack Section:**
Visual display of core technologies. Group them:
- **Frontend:** React, React Native, Next.js, TypeScript, Expo, Tailwind CSS
- **State & Data:** TanStack Query, Zustand, AG Grid, GraphQL, Hasura
- **Backend & Cloud:** Firebase/Firestore, GCP (GKE, BigQuery, AlloyDB), Azure B2C, Node.js
- **AI & Agents:** Google ADK, MCP Protocol, A2A, Anthropic API, Vertex AI, LangChain
- **DevOps:** GitHub Actions, Docker, Module Federation, Vite, Monorepo (Nx/Turborepo)

**How I Work Section:**
4-step horizontal process:
1. **Discovery** — Understand your business problem, users, and constraints
2. **Architecture** — Design the technical solution, data models, and system boundaries
3. **Build** — Iterative development with weekly demos and continuous deployment
4. **Ship & Support** — Production deployment, monitoring, documentation, and ongoing support

**Testimonials / Social Proof Section:**
- Placeholder for 2-3 testimonials (can be filled in later)
- Stats bar: "8+ Years Experience" | "15+ Engineers Led" | "6+ Production Apps Shipped" | "500+ Users Served Daily"

**Contact / CTA Section:**
- Headline: "Ready to Build Something Real?"
- Brief text: "I work with startups and enterprises who need senior-level execution, not junior experiments. Let's discuss your project."
- Contact form: Name, Email, Company (optional), Project Type (dropdown: Web App, Mobile App, AI Integration, Consulting/Architecture, Other), Brief Description (textarea)
- OR simple: "Book a free 30-minute consultation" with a Calendly embed/link

### 2. Services Page (`/services`)
Expanded versions of the three service cards from the home page. Each service gets its own section with:
- Detailed description (2-3 paragraphs)
- What's included (scope items)
- Technologies used
- Ideal for (target client type)
- CTA to contact

### 3. Work / Case Studies Page (`/work`)
Grid of all case study cards. Clicking each opens a detailed case study page with:
- Challenge → Approach → Solution → Results format
- Architecture diagram placeholder
- Tech stack details
- Screenshots/mockups placeholder

### 4. About Page (`/about`)
- Brief personal/professional story
- "I'm a Senior Frontend Technical Lead based in Ontario, Canada. I've spent the last 8+ years building and leading teams that ship production applications in logistics, fleet management, and enterprise operations."
- Philosophy section: pragmatic engineering, ship fast but build right, AI as a multiplier not a gimmick
- Link to LinkedIn, GitHub

### 5. Contact Page (`/contact`)
- Full contact form (same as homepage CTA section)
- Email: hello@limeshotdigital.com (or whatever the real email is)
- Location: Ontario, Canada
- Availability status: "Currently accepting new projects for Q2 2026"

---

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, analytics
│   ├── page.tsx            # Home page
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx  # Individual case study
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── contact/route.ts  # Contact form handler
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky nav with logo + links + CTA button
│   │   ├── Footer.tsx       # Links, socials, copyright
│   │   └── MobileNav.tsx    # Hamburger menu for mobile
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── TechStack.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactCTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── AnimatedText.tsx
│   │   └── CodeBlock.tsx     # Animated typing code display
│   └── shared/
│       ├── ContactForm.tsx
│       └── TechBadge.tsx
├── lib/
│   ├── data/
│   │   ├── services.ts      # Service definitions
│   │   ├── projects.ts      # Case study data
│   │   └── techStack.ts     # Tech stack categories
│   └── utils.ts
└── styles/
    └── globals.css           # Tailwind base + CSS variables + custom styles
```

---

## Responsive Behavior

- **Desktop (1280px+):** Full layout with side-by-side sections, large type
- **Tablet (768-1279px):** Stacked sections, adjusted grid columns
- **Mobile (< 768px):** Single column, hamburger nav, touch-friendly tap targets, reduced animation complexity
- All images/visuals should be lazy-loaded
- Target Lighthouse score: 95+ on all metrics

---

## SEO & Meta

- Page titles: "Limeshot Digital Solutions | [Page Name]"
- Meta descriptions tailored per page with keywords: React developer, React Native consultant, AI integration, freelance frontend lead, Ontario Canada
- OpenGraph image: Branded card with logo + tagline (can be generated or placeholder)
- Structured data (JSON-LD): Organization, LocalBusiness, Service schemas
- Canonical URLs on all pages

---

## Additional Notes

- **No stock photos.** Use abstract geometric visuals, code screenshots, or subtle illustrations instead.
- **Accessibility:** Proper heading hierarchy, ARIA labels, keyboard navigation, focus indicators, sufficient color contrast on dark backgrounds.
- **Performance:** Use Next.js Image component, minimize client-side JS, leverage server components where possible.
- **Brand voice throughout:** Confident but not arrogant. Technical but accessible. "I ship production apps" energy, not "we leverage synergies" energy.
- The lime green accent should feel intentional and premium — used sparingly for CTAs, highlights, active states, and key accent elements. Not splashed everywhere.

---

## Starter Command

```bash
npx create-next-app@latest limeshot-digital --typescript --tailwind --eslint --app --src-dir
cd limeshot-digital
npm install framer-motion lucide-react react-hook-form
```

Build this site with production-quality code, beautiful design, and real content. Make it something a CTO would look at and immediately want to book a call.
