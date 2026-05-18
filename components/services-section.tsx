'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import {
  Code2,
  Palette,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Frontend Engineering',
    tagline: 'From Figma to production — fast, accessible, and built to last.',
    description:
      "I build React and Next.js applications that perform well, look sharp, and hold up under real-world conditions. Whether you're starting from scratch or inheriting a codebase, I write code that your future self — or your next developer — will thank you for.",
    deliverables: [
      'React & Next.js (App Router, SSR, SSG)',
      'TypeScript with strict typing',
      'Component libraries & design systems',
      'API integration & data fetching',
      'Performance & Core Web Vitals',
      'Accessibility (WCAG 2.1 AA)',
    ],
    idealFor: 'Startups, product teams, and agencies.',
    accentLight: 'bg-[#1a0f0a]',
    accentDark: 'dark:bg-[#f5f1ed]',
    numberColor: 'text-[#1a0f0a]/10 dark:text-white/5',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Web3 Frontend & Smart Contracts',
    tagline: 'Blockchain UX that non-crypto users can actually navigate.',
    description:
      "Web3 products fail when the UX assumes the user already understands blockchain. I bridge that gap — building wallet-connected interfaces that feel as intuitive as any Web2 app, backed by Solidity contracts that are clean, tested, and auditable.",
    deliverables: [
      'Wallet connection (MetaMask, RainbowKit)',
      'Smart contract UI via Ethers.js',
      'ERC-20 / ERC-721 token interfaces',
      'DeFi dashboards — swaps, staking',
      'Solidity contracts & Foundry testing',
      'On-chain state & real-time updates',
    ],
    idealFor: 'Web3 protocols, DeFi platforms, and NFT projects.',
    accentLight: 'bg-amber-700',
    accentDark: 'dark:bg-amber-500',
    numberColor: 'text-amber-700/10 dark:text-amber-400/8',
  },
  {
    number: '03',
    icon: Palette,
    title: 'UI Implementation & Design Systems',
    tagline: 'Pixel-perfect implementation with the performance to match.',
    description:
      "Great design deserves great implementation. I translate Figma files into responsive, animated interfaces that match the design intent — not just the static mockup. I also build component libraries and design systems that scale as your product grows.",
    deliverables: [
      'Figma-to-code with pixel-perfect fidelity',
      'Responsive, mobile-first layouts',
      'Framer Motion animations',
      'Tailwind CSS design token systems',
      'Reusable component libraries',
      'Dark mode & theming support',
    ],
    idealFor: 'Design-led teams who need a developer who respects the craft.',
    accentLight: 'bg-rose-700',
    accentDark: 'dark:bg-rose-500',
    numberColor: 'text-rose-700/10 dark:text-rose-400/8',
  },
  {
    number: '04',
    icon: Users,
    title: 'Technical Consulting & Code Review',
    tagline: 'A second pair of eyes from someone who has shipped production code.',
    description:
      "Sometimes you don't need a full build — you need someone to review your architecture, unblock a performance issue, or help your team level up. I offer focused consulting engagements for teams who want honest, actionable technical feedback.",
    deliverables: [
      'Frontend architecture review',
      'Performance audit & roadmap',
      'Code review with written feedback',
      'Developer mentoring',
      'Tech stack evaluation',
      'Accessibility audit & remediation',
    ],
    idealFor: 'CTOs, tech leads, and teams wanting an outside perspective.',
    accentLight: 'bg-teal-700',
    accentDark: 'dark:bg-teal-500',
    numberColor: 'text-teal-700/10 dark:text-teal-400/8',
  },
];

// ─── Service card ──────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 p-7 hover:border-[#8a6239]/50 dark:hover:border-white/15 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden"
    >
      {/* Large background number — decorative */}
      <span
        className={`pointer-events-none absolute -top-2 -right-1 text-[7rem] font-black leading-none select-none ${service.numberColor} transition-all duration-300 group-hover:scale-110 group-hover:opacity-70`}
      >
        {service.number}
      </span>

      {/* Icon + number row */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div className={`w-10 h-10 rounded-xl ${service.accentLight} ${service.accentDark} flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-5 w-5 text-white dark:text-[#1a0f0a]" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b4aea6] dark:text-white/45">
          {service.number}
        </span>
      </div>

      {/* Title + tagline */}
      <div className="mb-4 relative z-10">
        <h3 className="text-lg font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-1.5 leading-snug group-hover:text-[#8a6239] dark:group-hover:text-[#d4c4b0] transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
          {service.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed mb-5 relative z-10">
        {service.description}
      </p>

      {/* Deliverables */}
      <div className="mb-5 relative z-10">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-3">
          What's included
        </p>
        <ul className="grid grid-cols-1 gap-1.5">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 text-xs text-[#3a3530] dark:text-[#d4c4b0]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Ideal for */}
      <div className="relative z-10 pt-4 border-t border-[#d4c4b0]/30 dark:border-white/10">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mr-2">
          Ideal for
        </span>
        <span className="text-xs text-[#4a4238] dark:text-[#d4c4b0]">
          {service.idealFor}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-br from-[#faf9f7] via-[#e8e3db] to-[#d4c4b0] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6239] dark:text-[#d4c4b0] mb-5">
              <span className="h-px w-8 bg-[#8a6239]/50 dark:bg-[#d4c4b0]/40" />
              Services
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.08] tracking-tight">
                  How I can help
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] via-[#a07848] to-[#7a7268] dark:from-[#d4c4b0] dark:to-[#a09080]">
                    your team ship faster.
                  </span>
                </h2>
                <p className="mt-4 text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
                  Four focused services — each one built around a specific type of problem.
                  If your need doesn't fit neatly into a category, reach out. I'm flexible.
                </p>
              </div>
              <Link
                href="#contact"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8a6239] dark:text-[#d4c4b0] hover:opacity-70 transition-opacity group"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ── 2×2 grid ── */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* ── Bottom CTA strip ── */}
          <motion.div
            className="rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] to-[#4a3220]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative z-10 p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="text-sm font-bold text-white mb-1">
                  Not sure which service fits your project?
                </p>
                <p className="text-sm text-white/75 max-w-md">
                  Tell me what you're building and I'll tell you exactly how I can help.
                </p>
              </div>
              <Link
                href="#contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] hover:bg-[#e5c158] text-[#1a0f0a] rounded-xl text-sm font-bold transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0f0a]"
              >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
