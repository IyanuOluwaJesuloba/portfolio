'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Download,
  ChevronDown,
  MapPin,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PORTFOLIO_CONFIG } from '@/lib/constants';

const highlights = [
  {
    label: 'Frontend Engineering (Web2)',
    value:
      'Next.js 15, React, TanStack Query, and strict TypeScript. Modular design systems, accessible UX (WCAG AA), optimistic data caching, and Core Web Vitals optimization.',
  },
  {
    label: 'Smart Contracts & Web3',
    value:
      'Soroban smart contracts in Rust on Stellar, Solidity on EVM, and wallet integration. Turning complex on-chain states into simple, reassuring user workflows.',
  },
  {
    label: 'Engineering Philosophy',
    value:
      'Starting with human pain points rather than technology hype. Clean code, automated test suites (Jest, Cargo, Foundry), and zero surprises.',
  },
];

const facts = [
  { icon: MapPin, text: 'Based in Nigeria (GMT+1): overlaps with UK/EU hours; open to Nigerian & remote roles' },
  { icon: Briefcase, text: 'Open to full-time, fellowship, and contract roles' },
  { icon: CheckCircle2, text: '3 years building Web2 & Web3 products (professional, freelance, OSS)' },
];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e8e3db] via-[#d4c4b0] to-[#c4bfb8] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden scroll-mt-20 w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Subtle background orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#8a6239]/8 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7a7268]/8 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Section label ── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6239] dark:text-[#d4c4b0]">
              <span className="h-px w-8 bg-[#8a6239]/50 dark:bg-[#d4c4b0]/40" />
              About Me
            </div>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">

            {/* Left column: narrative */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight">
                  Building software that solves
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                    real real problems.
                  </span>
                </h2>

                <p className="text-base sm:text-[16px] text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed max-w-xl">
                  I'm IyanuOluwa, a frontend and Web3 engineer based in Nigeria. I believe great software only creates value
                  when it eliminates human friction: whether that's protecting a contractor's livelihood through trustless
                  escrow, helping security analysts triage threats without cognitive overload, or ensuring people on spotty
                  connections can use web services without failing.
                </p>

                <p className="text-base sm:text-[16px] text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed max-w-xl">
                  On the <strong>Web2 frontend side</strong>, I specialize in React, Next.js (App Router), TanStack Query, and strict TypeScript.
                  I focus on engineering component-driven design systems that bridge Figma fidelity with production code: implementing accessible
                  UI architectures, resilient state management, and performance tuning that delivers sub-second load times and high Core Web Vitals.
                </p>

                <p className="text-base sm:text-[16px] text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed max-w-xl">
                  On the <strong>Web3 side</strong>, I build across both the Stellar ecosystem (Rust, Soroban smart contracts, Freighter wallet)
                  and EVM chains (Solidity, Ethers.js). Rather than treating blockchain as hype, I apply it where decentralization solves real trust
                  problems: automating milestone settlements, creating autonomous payment rails, and abstracting cryptographic friction so decentralized
                  tools feel as effortless as everyday web apps.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 pt-2">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0] flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6239] dark:text-[#d4c4b0]">
                        {h.label}
                      </span>
                      <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] mt-0.5 leading-relaxed">
                        {h.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1a0f0a] text-white hover:bg-[#3d251e] dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white transition-colors"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Let's Talk
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#8a6239] dark:border-[#d4c4b0] text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#1a0f0a]/20"
                >
                  <a
                    href={PORTFOLIO_CONFIG.SOCIAL_LINKS.BOOKING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Call
                  </a>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-[#c4a878] dark:border-[#4a3220] text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#1a0f0a]/20"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                      <ChevronDown className="h-3.5 w-3.5 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <a
                        href={PORTFOLIO_CONFIG.RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        View Resume
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href={PORTFOLIO_CONFIG.RESUME_URL}
                        download
                        className="cursor-pointer"
                      >
                        Download Resume
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </motion.div>

            {/* Right column: sidebar cards */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              {/* Quick facts card */}
              <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/75 dark:bg-white/5 backdrop-blur-sm p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0] mb-4">
                  Quick facts
                </p>
                <ul className="space-y-3">
                  {facts.map((f, i) => (
                    <motion.li
                      key={f.text}
                      className="flex items-start gap-3 text-sm text-[#1a0f0a] dark:text-[#f5f1ed]"
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <f.icon className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
                      <span>{f.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Currently working on */}
              <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/75 dark:bg-white/5 backdrop-blur-sm p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0]">
                    Currently
                  </p>
                </div>
                <p className="text-sm text-[#1a0f0a] dark:text-[#f5f1ed] leading-relaxed">
                  Building Soroban smart contracts in Rust for autonomous payment gateways on Stellar (Proxima),
                  and crafting production React / Next.js frontends that make decentralized workflows effortless for everyday users.
                </p>
              </div>

              {/* What I'm looking for */}
              <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/75 dark:bg-white/5 backdrop-blur-sm p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0] mb-4">
                  What I'm looking for
                </p>
                <ul className="space-y-2">
                  {[
                    'Teams building software that solves genuine human problems',
                    'Frontend & Web3 roles (junior-to-mid, fellowship, contract)',
                    'Products bridging real-world utility with modern Web2 & Web3',
                    'Engineering cultures that value rigorous testing & clean code',
                    'Remote teams (overlapping with UK/EU/US-East timezones) & Nigerian companies',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#4a4238] dark:text-[#d4c4b0]"
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.07 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Beyond code */}
              <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/75 dark:bg-white/5 backdrop-blur-sm p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0] mb-3">
                  Beyond the screen
                </p>
                <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                  Active contributor in open-source developer communities. Outside engineering: music, tech podcasts, and exploring decentralized governance models.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
