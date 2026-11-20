# Professional Portfolio Website: Developer's Guide

A production-grade, high-performance portfolio website built with modern web technologies, showcasing **Frontend & Web3 Engineering** expertise across React, Next.js, TypeScript, Solidity, Rust, and Soroban on Stellar.

## 🎯 Project Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with dark mode tokens
- **Animations**: Framer Motion
- **UI Primitives**: Radix UI
- **Icons**: Lucide React, Simple Icons
- **Web3 Ecosystems**: Stellar (Soroban, Rust, Freighter) & EVM (Solidity, Ethers.js, Wagmi)
- **Form Handling**: React Hook Form + EmailJS

### Lean Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with dynamic metadata & ThemeProvider
│   ├── page.tsx                 # Single-page portfolio with active sections
│   └── globals.css              # Custom styles & design tokens
│
├── components/                   # Active React components
│   ├── header.tsx               # Centered navigation with mobile toggle & theme switch
│   ├── premium-hero-section.tsx # Interactive terminal, value prop & dual-market support
│   ├── about.tsx                # Honest 3-year journey, quick facts & availability
│   ├── skills-section.tsx       # Interactive stack cards (Frontend, Web3/Soroban, Tooling)
│   ├── case-studies-section.tsx # Featured projects with outcomes, metrics & architecture
│   ├── services-section.tsx     # 2 focused core services + specialized engagements
│   ├── experience-timeline.tsx  # Honest 3-year timeline with freelance & OSS entries
│   ├── open-source-section.tsx  # Verified open-source & Stellar ecosystem contributions
│   ├── premium-cta-section.tsx  # High-conversion CTA banner with 1:1 booking link
│   ├── contact-section.tsx      # Contact form, direct email & Cal.com scheduler
│   ├── contact-form.tsx         # Client form with EmailJS integration
│   ├── mobile-menu.tsx          # Mobile navigation sheet
│   ├── theme-provider.tsx       # NextThemes theme wrapper
│   ├── theme-toggle.tsx         # Light/dark mode toggle button
│   ├── footer.tsx               # Footer with links & dual market note
│   ├── ui/                      # Streamlined UI primitives (button, card, dropdown, input, textarea)
│   └── index.ts                 # Barrel exports for active components
│
├── lib/                         # Shared utilities & configurations
│   ├── portfolio-data.ts        # 12 featured projects & verified OSS contributions
│   ├── constants.ts             # Centralized site config, stats & booking URLs
│   ├── animations.ts            # Framer motion variants & transition curves
│   ├── seo.ts                   # Structured metadata generator
│   ├── utils.ts                 # Tailwind class merger (clsx + tailwind-merge)
│   └── index.ts                 # Library exports
│
└── public/                      # Static assets, screenshots & resume PDF
```

## 🚀 Running the Project

```bash
# Run local dev server
npm run dev

# Run production build
npm run build

# Start production server
npm start
```
