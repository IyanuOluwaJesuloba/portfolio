'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import { Briefcase, MapPin, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '@/lib/constants';

// ─── Experience Data (Honest 3-Year Web & Web3 Timeline) ──────────────────────

const experiences = [
  {
    title: 'Frontend Engineer',
    company: 'Ajaeq',
    companyUrl: 'https://ajaeq.com',
    location: 'Nigeria / Remote',
    period: '2026 - Present',
    type: 'Full-Time (Under NDA)',
    current: true,
    summary:
      'Frontend engineer developing threat intelligence tools, practitioner dashboards, and virtual lab interfaces as part of the core engineering team.',
    highlights: [
      'Built interactive interfaces for hands-on offensive and defensive simulations',
      'Engineered practical skill progression dashboards',
      'Managed complex session states and data caching with TanStack Query for instant, responsive UI feedback',
      'Collaborated within an agile team on component reusability, strict TypeScript typings, and peer review workflows',    ],
    stack: ['Next.js 16', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Frontend & Web3 Engineer (Independent & Open Source)',
    company: 'Plain Labs & Stellar Ecosystem',
    companyUrl: 'https://github.com/Plain-labs',
    location: 'Remote',
    period: 'Nov 2025 - Present',
    type: 'Open Source / Ecosystem',
    current: true,
    summary:
      'Engineering open-source Web3 applications, Soroban smart contracts in Rust, and autonomous payment gateway infrastructure within the Stellar ecosystem.',
    highlights: [
      'Architected Soroban smart contracts in Rust for Proxima, facilitating verifiable AI agent payment settlements with ~3.5s instant finality on Stellar testnet',
      'Engineered responsive telemetry and escrow verification interfaces in Next.js/TypeScript integrated with Freighter wallet and Soroban RPC',
      'Built Nullius: a private contractor milestone escrow protocol on Stellar showcased on DoraHacks with 0% platform take rates',
      'Contributed pull requests and frontend components to community ZK reputation tooling (Nullius) and cross-chain tracking infrastructure',
    ],
    stack: ['Rust', 'Soroban', 'Stellar', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Frontend Developer',
    company: 'Bethel Labs',
    companyUrl: 'https://www.linkedin.com/in/iyanuoluwa-owoseni/',
    location: 'Remote',
    period: 'Jun 2025 - Oct 2025',
    type: 'Full-Time',
    current: false,
    summary:
      'Built scalable frontend solutions for a product-focused team, from shared component libraries to third-party API integrations, with strict emphasis on maintainability.',
    highlights: [
      'Engineered an accessible, reusable component library that reduced UI development turnaround by 30% across the frontend team',
      'Translated Figma design specs into pixel-perfect, responsive implementations with hardware-accelerated Framer Motion interactions',
      'Architected comprehensive loading skeletons and error boundary fallbacks, noticeably reducing client-side bug reports',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Frontend Developer',
    company: 'Orglobal Tech Network',
    companyUrl: 'https://orglobaltechnetwork.com/',
    location: 'Ibadan, Nigeria',
    period: 'Nov 2024 - May 2025',
    type: 'Full-Time',
    current: false,
    summary:
      'Delivered web applications for multiple clients across different industries, owning the frontend from architecture decisions to production deployment.',
    highlights: [
      'Built 5+ responsive web applications using React and Next.js for commercial clients across e-commerce and services',
      'Optimized an e-commerce platform\'s Core Web Vitals: reduced Largest Contentful Paint (LCP) from 3.8s to 1.6s (a 58% boost) and decreased initial JavaScript bundle size by 40% (450KB down to 270KB) through dynamic code splitting and Next.js image optimization',
      'Collaborated closely with designers and backend developers in an agile sprint environment',
      'Maintained consistent code quality through peer reviews and shared component standards',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Core Web Vitals'],
  },
  {
    title: 'Web Development Intern',
    company: 'Orglobal Tech Network',
    companyUrl: 'https://orglobaltechnetwork.com/',
    location: 'Ibadan, Nigeria',
    period: 'Jun 2024 - Aug 2024',
    type: 'Internship',
    current: false,
    summary:
      'First professional software engineering role, contributing to live product features, participating in code reviews, and building strong engineering habits.',
    highlights: [
      'Developed responsive UI components that shipped to the company\'s production portals',
      'Participated in daily code reviews, learning strict git workflows and technical feedback best practices',
      'Authored development workflow documentation that accelerated onboarding for new team members',
    ],
    stack: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git'],
  },
  {
    title: 'Freelance Frontend Developer & Project Work',
    company: 'Freelance & Self-Directed',
    companyUrl: '#',
    location: 'Remote',
    period: 'Jan 2023 - May 2024',
    type: 'Freelance / Self-Directed',
    current: false,
    summary:
      'Built custom web applications and client portfolio platforms while independently exploring smart contract architectures on EVM and building early Web3 prototypes.',
    highlights: [
      'Delivered bespoke commercial websites for independent clients (such as the Shopify Designer portfolio) with strong conversion metrics',
      'Mastered modern React hooks, TypeScript strict typing, responsive CSS layouts, and Web3 RPC connectivity',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Solidity', 'Web APIs'],
  },
];


export function ExperienceTimeline() {
  return (
    <motion.section
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-br from-[#d4c4b0] via-[#c4bfb8] to-[#e0d8d0] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] overflow-hidden w-full scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

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
              Career Timeline
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
              Where I've contributed
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                and problems I've solved.
              </span>
            </h2>
            <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
              3 years building Web2 and Web3 products focused on solving real world problems across agency environments, product teams, client work, and open-source ecosystems.
            </p>
          </motion.div>

          {/* ── Timeline ── */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#d4c4b0]/60 dark:bg-white/12 hidden sm:block" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative sm:pl-12"
                >
                  {/* Timeline node icon */}
                  <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-[#1a0f0a] dark:bg-[#f5f1ed] items-center justify-center border-4 border-[#d4c4b0] dark:border-[#1a0f0a] shadow-sm z-10">
                    <Briefcase className="h-4 w-4 text-white dark:text-[#1a0f0a]" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                    {/* Top row: Role + Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-500/15 text-green-700 dark:text-green-400 border border-green-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Active
                            </span>
                          )}
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#1a0f0a]/5 dark:bg-white/10 text-[#7a7268] dark:text-white/60">
                            {exp.type}
                          </span>
                        </div>
                        {exp.companyUrl && exp.companyUrl !== '#' ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[#8a6239] dark:text-[#d4c4b0] hover:underline mt-0.5 group/link"
                          >
                            <span>{exp.company}</span>
                            <ArrowUpRight className="h-3 w-3 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-[#8a6239] dark:text-[#d4c4b0] mt-0.5">
                            {exp.company}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#7a7268] dark:text-white/60 sm:text-right flex-shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Narrative Summary */}
                    <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4a4238] dark:text-[#d4c4b0]">
                          <CheckCircle2 className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#d4c4b0]/40 dark:border-white/10">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#f0ede9] dark:bg-[#1a0f0a] text-[#1a0f0a] dark:text-[#d4af37] border border-[#d4c4b0]/50 dark:border-[#d4af37]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Verification & References Banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-[#d4c4b0]/70 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                  Employment Verification & Professional Endorsements
                </p>
                <p className="text-xs sm:text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                  Roles, deliverables, and recommendations are corroborated on LinkedIn. Direct managerial and client references are readily available upon request.
                </p>
              </div>
              <a
                href={PORTFOLIO_CONFIG.SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] text-xs font-bold hover:bg-[#3d251e] dark:hover:bg-white transition-colors flex-shrink-0 shadow-sm"
              >
                Verify on LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
