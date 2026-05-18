'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { portfolioProjects } from '@/lib/portfolio-data';
import { sectionVariants } from '@/lib/animations';

const featured = portfolioProjects;

// ─── Tab button ───────────────────────────────────────────────────────────────
function Tab({
  project,
  index,
  isActive,
  onClick,
}: {
  project: (typeof featured)[number];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {/* Active indicator line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-[#8a6239] dark:bg-[#d4c4b0]'
            : 'bg-[#d4c4b0]/30 dark:bg-white/10 group-hover:bg-[#d4c4b0]/60 dark:group-hover:bg-white/20'
        }`}
      />
      <div className="pl-5 py-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className={`text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-full ${
              project.category === 'web3'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                : 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
            }`}
          >
            {project.category}
          </span>
          <span className="text-[10px] text-[#7a7268] dark:text-white/60">{project.year}</span>
        </div>
        <p
          className={`text-sm font-bold leading-snug transition-colors duration-200 ${
            isActive
              ? 'text-[#1a0f0a] dark:text-white'
              : 'text-[#4a4238] dark:text-white/65 group-hover:text-[#1a0f0a] dark:group-hover:text-white/80'
          }`}
        >
          {project.title.split('—')[0].trim()}
        </p>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-xs text-[#8a6239] dark:text-[#d4c4b0] mt-1 leading-relaxed"
          >
            {project.description.split('—')[0].split('.')[0]}.
          </motion.p>
        )}
      </div>
    </button>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function CaseStudiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = featured[activeIdx];

  return (
    <motion.section
      id="case-studies"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e8e3db] via-[#f0e8e0] to-[#faf9f7] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#8a6239]/6 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7a7268]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Section label + heading ── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6239] dark:text-[#d4c4b0] mb-5">
              <span className="h-px w-8 bg-[#8a6239]/50 dark:bg-[#d4c4b0]/40" />
              Featured Work
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.08] tracking-tight">
                  Not just what I built —
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] via-[#a07848] to-[#7a7268] dark:from-[#d4c4b0] dark:to-[#c4b4a0]">
                    why it mattered.
                  </span>
                </h2>
                <p className="mt-4 text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-lg leading-relaxed">
                  {portfolioProjects.length} projects across Web2 and Web3. Select any from the list to read the full breakdown — the problem, the approach, and what I built.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Main showcase ── */}
          <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start">

            {/* LEFT — tab list */}
            <motion.div
              className="flex lg:flex-col gap-0 overflow-x-auto lg:overflow-visible"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Mobile: horizontal scroll tabs */}
              <div className="flex lg:hidden gap-3 pb-2 w-full">
                {featured.map((p, i) => (
                  <button
                    key={p.title}
                    onClick={() => setActiveIdx(i)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                      i === activeIdx
                        ? 'bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a]'
                        : 'border border-[#d4c4b0]/60 dark:border-white/15 text-[#4a4238] dark:text-white/65 hover:border-[#8a6239] dark:hover:border-white/30'
                    }`}
                  >
                    {p.title.split('—')[0].trim()}
                  </button>
                ))}
              </div>

              {/* Desktop: vertical tab list */}
              <div className="hidden lg:flex flex-col gap-1 w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a7268] dark:text-white/50 mb-3 pl-5">
                  Select project
                </p>
                {featured.map((p, i) => (
                  <Tab
                    key={p.title}
                    project={p}
                    index={i}
                    isActive={i === activeIdx}
                    onClick={() => setActiveIdx(i)}
                  />
                ))}
              </div>
            </motion.div>

            {/* RIGHT — detail panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                  >
                    {/* ── Hero image ── */}
                    <div className="relative rounded-2xl overflow-hidden mb-7 group shadow-xl shadow-black/10 dark:shadow-black/40">
                      <div className="relative h-52 sm:h-72 md:h-[340px]">
                        <Image
                          src={active.imageUrl}
                          alt={active.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          priority
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Bottom-left: title + status */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span
                                  className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${
                                    active.category === 'web3'
                                      ? 'bg-amber-500/25 text-amber-200 border border-amber-400/30'
                                      : 'bg-blue-500/25 text-blue-200 border border-blue-400/30'
                                  }`}
                                >
                                  {active.category.toUpperCase()}
                                </span>
                                {active.status === 'Live' && (
                                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-green-500/25 border border-green-400/30 text-green-200 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Live
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                                {active.title.split('—')[0].trim()}
                              </h3>
                            </div>
                            {/* Quick links on image */}
                            <div className="flex gap-2 flex-shrink-0">
                              <a
                                href={active.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
                                aria-label="View live"
                              >
                                <ArrowUpRight className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={active.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
                                aria-label="View source"
                              >
                                <Github className="h-4 w-4 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Body ── */}
                    <div className="space-y-6">

                      {/* Long description */}
                      <p className="text-sm sm:text-base text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                        {active.longDescription}
                      </p>

                      {/* Challenge / Approach — side by side */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-xl bg-[#1a0f0a]/5 dark:bg-white/6 border border-[#d4c4b0]/40 dark:border-white/12 p-5">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-2.5">
                            The Challenge
                          </p>
                          <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                            {active.challenge}
                          </p>
                        </div>
                        <div className="rounded-xl bg-[#1a0f0a]/5 dark:bg-white/6 border border-[#d4c4b0]/40 dark:border-white/12 p-5">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-2.5">
                            My Approach
                          </p>
                          <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                            {active.solution}
                          </p>
                        </div>
                      </div>

                      {/* What I built */}
                      {active.features && active.features.length > 0 && (
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-3">
                            What I built
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {active.features.map((f, i) => (
                              <motion.li
                                key={f}
                                className="flex items-start gap-2.5 text-sm text-[#4a4238] dark:text-[#d4c4b0]"
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
                                {f}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Stack + CTAs row */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#d4c4b0]/30 dark:border-white/12">
                        <div className="flex flex-wrap gap-1.5">
                          {active.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full bg-[#f0ede9] dark:bg-[#1a0f0a] text-[#1a0f0a] dark:text-[#d4af37] text-[11px] font-semibold border border-[#d4c4b0]/50 dark:border-[#d4af37]/25"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2.5 flex-shrink-0">
                          <a
                            href={active.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] text-sm font-bold hover:bg-[#3d251e] dark:hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Live
                          </a>
                          <a
                            href={active.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#c4a878] dark:border-white/15 text-[#1a0f0a] dark:text-[#f5f1ed] text-sm font-bold hover:bg-[#f5f1ed] dark:hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
