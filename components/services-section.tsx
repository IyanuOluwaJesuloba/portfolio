'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import {
  Code2,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

// ─── Focused Core Services ───────────────────────────────────────────────────

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Frontend Engineering',
    tagline: 'Accessible, fast, and resilient web apps that eliminate user friction.',
    description:
      "Software only works when people can use it without frustration. I build React and Next.js applications that load fast on real-world networks, prioritize accessibility, and turn intricate workflows into intuitive digital experiences.",
    deliverables: [
      'Next.js 15 & React (App Router, SSR, SSG)',
      'TypeScript with strict typing and robust error boundaries',
      'Component architectures and reusable design systems',
      'API integrations, caching (SWR/TanStack), and server actions',
      'Performance tuning & Core Web Vitals optimization',
      'Web accessibility (WCAG 2.1 AA compliant keyboard & screen reader UX)',
    ],
    idealFor: 'Startups, product teams, and development studios.',
    accentLight: 'bg-[#1a0f0a]',
    accentDark: 'dark:bg-[#f5f1ed]',
    numberColor: 'text-[#1a0f0a]/10 dark:text-white/5',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Web3 Frontend & Smart Contracts',
    tagline: 'Decentralized software engineered to solve real trust and economic problems.',
    description:
      "Blockchain technology often isolates users behind cryptic hashes and confusing transaction states. I engineer Web3 software that solves real human problems: transparent contractor escrows, autonomous payment rails, and wallet interfaces as welcoming as everyday apps.",
    deliverables: [
      'Stellar Soroban smart contracts written in Rust',
      'Freighter wallet integration and Soroban RPC telemetry',
      'Solidity smart contracts with automated Foundry/Hardhat test suites',
      'EVM multi-wallet authentication (RainbowKit, Wagmi, Ethers.js)',
      'Milestone escrow, payment channels, and ERC-20/721 interfaces',
      'Real-time on-chain event listeners and optimistic UI updates',
    ],
    idealFor: 'Web3 protocols, Stellar ecosystem grants, and DeFi products.',
    accentLight: 'bg-amber-700',
    accentDark: 'dark:bg-amber-500',
    numberColor: 'text-amber-700/10 dark:text-amber-400/8',
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
      transition={{ duration: 0.45, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 p-7 sm:p-9 hover:border-[#8a6239]/50 dark:hover:border-white/20 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Large background number: decorative */}
      <span
        aria-hidden="true"
        className={`absolute -right-2 -bottom-4 text-[100px] sm:text-[130px] font-black leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 ${service.numberColor}`}
      >
        {service.number}
      </span>

      <div className="relative z-10 space-y-6">
        {/* Top: icon + badge */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Icon className="h-6 w-6 text-white dark:text-[#1a0f0a]" />
          </div>
          <span className="text-xs font-mono font-semibold text-[#8a6239] dark:text-[#d4c4b0] tracking-wider uppercase">
            Core Service
          </span>
        </div>

        {/* Title + tagline */}
        <div>
          <h3 className="text-2xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-snug">
            {service.title}
          </h3>
          <p className="text-sm font-medium text-[#8a6239] dark:text-[#d4af37] mt-1.5">
            {service.tagline}
          </p>
        </div>

        {/* Narrative description */}
        <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables checklist */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-3">
            What's included
          </p>
          <ul className="space-y-2">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a4238] dark:text-[#d4c4b0]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card bottom: Ideal for + link */}
      <div className="relative z-10 pt-6 mt-6 border-t border-[#d4c4b0]/40 dark:border-white/10 flex items-center justify-between gap-3">
        <p className="text-xs text-[#7a7268] dark:text-white/60">
          <span className="font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">Ideal for: </span>
          {service.idealFor}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a6239] dark:text-[#d4c4b0] hover:text-[#1a0f0a] dark:hover:text-white transition-colors flex-shrink-0 group-hover:translate-x-0.5"
        >
          Discuss
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden w-full scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Specializations
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
                  Engineering software that
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                    solves human problems.
                  </span>
                </h2>
                <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
                  I focus on engineering software around human needs: eliminating user frustration, simplifying complex
                  workflows, and building dependable tools people trust every day.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── 2 Main Core Service Cards ── */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
            {services.map((service, index) => (
              <ServiceCard key={service.number} service={service} index={index} />
            ))}
          </div>

          {/* ── Folded "Also Available For" Line ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#d4c4b0]/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 sm:p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#8a6239]/15 dark:bg-[#d4c4b0]/15 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">
                    Also available for specialized engagements:
                  </p>
                  <p className="text-xs sm:text-sm text-[#7a7268] dark:text-white/60">
                    UI design system implementations from Figma, Core Web Vitals performance audits, and smart contract test suite setups (Foundry & Rust).
                  </p>
                </div>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] hover:bg-[#3d251e] dark:hover:bg-white transition-colors flex-shrink-0 self-start sm:self-auto"
              >
                Inquire
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
