'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, MapPin, ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PORTFOLIO_CONFIG } from '@/lib/constants';

// ─── Typewriter ───────────────────────────────────────────────────────────────

function useTypewriter(words: string[], speed = 75, pause = 2200) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Terminal card

const recentWork = [
  { label: 'Proxima Gateway',        tag: 'Rust + Soroban',       url: 'https://proxima-beryl.vercel.app/' },
  { label: 'Nullius ZK',             tag: 'ZK + Stellar',         url: 'https://nullius-taupe.vercel.app' },
  { label: 'Luminary Dashboard',     tag: 'Next.js 15 + Motion',  url: 'https://luminary-two.vercel.app/' },
  { label: 'FarmChain',              tag: 'Web3 + Solidity',      url: 'https://farm-chain-tau.vercel.app/' },
  { label: 'Mighty Refuge Mission',  tag: 'Next.js + Database',   url: 'https://mrm-liart.vercel.app/' },
];

function TerminalCard() {
  const [visible, setVisible] = useState(0);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    if (visible >= recentWork.length) {
      const t = setTimeout(() => setShowStatus(true), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible((v) => v + 1), 400 + visible * 180);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative w-full"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#8a6239]/15 via-[#7a7268]/8 to-transparent blur-2xl pointer-events-none" />

      {/* Window */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/25 dark:shadow-black/60 ring-1 ring-black/10 dark:ring-white/8">

        {/* Title bar */}
        <div className="flex items-center bg-[#2d2d2d] px-3 sm:px-4 py-2.5 select-none gap-3">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#3d3d3d] min-w-0">
            <div className="w-2 h-2 rounded-sm bg-[#8a6239] flex-shrink-0" />
            <span className="text-[11px] text-[#c8c8c8] font-medium truncate">terminal · zsh</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] text-[#888] font-mono hidden sm:block">ssh iyanuoluwa@node</span>
          </div>
        </div>

        {/* Body */}
        <div className="bg-[#1e1e1e] px-3 sm:px-5 py-4 font-mono text-[12px] sm:text-[13px] space-y-1.5 min-h-[250px] sm:min-h-[290px]">

          {/* Login line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-[#666] text-[10px] sm:text-[11px] mb-2"
          >
            Last login: {new Date().toDateString()} on dev-workstation
          </motion.p>

          {/* First prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-0.5 gap-y-0"
          >
            <span className="text-[#28c840]">iyanuoluwa</span>
            <span className="text-[#666]">@workstation</span>
            <span className="text-[#666]">:</span>
            <span className="text-[#ce93d8]">~/projects</span>
            <span className="text-[#666]">$&nbsp;</span>
            <span className="text-[#f8f8f2]">ls -la --shipped</span>
          </motion.div>

          {/* Output header */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-[#888] text-[10px] sm:text-[11px] pb-0.5"
          >
            total 7 curated production builds · displaying top active builds:
          </motion.p>

          {/* Project rows */}
          {recentWork.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={i < visible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-1.5 sm:gap-2 group pl-1"
            >
              <span className="text-[#28c840] text-[10px] flex-shrink-0">▸</span>
              <span className="text-[#a8ff78] text-[10px] w-4 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[#f8f8f2] flex-1 truncate text-[11px] sm:text-[12px]">{item.label}</span>
              <span className="text-[#888] text-[9px] sm:text-[10px] hidden sm:block flex-shrink-0">{item.tag}</span>
              <span className="text-[#28c840] text-[9px] sm:text-[10px] flex-shrink-0">● live</span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                aria-label={`Open ${item.label}`}
              >
                <ExternalLink className="h-3 w-3 text-[#4fc3f7]" />
              </a>
            </motion.div>
          ))}

          {/* Status command */}
          {showStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="pt-1.5 space-y-1"
            >
              <div className="flex flex-wrap items-center gap-x-0.5">
                <span className="text-[#28c840]">iyanuoluwa</span>
                <span className="text-[#666]">@workstation</span>
                <span className="text-[#666]">:</span>
                <span className="text-[#ce93d8]">~/projects</span>
                <span className="text-[#666]">$&nbsp;</span>
                <span className="text-[#f8f8f2]">cat status.json</span>
              </div>
              <div className="pl-2 space-y-0.5 text-[10px] sm:text-[11px]">
                <div><span className="text-[#febc2e]">"role":</span><span className="text-[#a8ff78] ml-1">"Frontend & Web3 Engineer"</span></div>
                <div><span className="text-[#febc2e]">"status":</span><span className="text-[#28c840] ml-1">"open to remote & Nigerian roles"</span></div>
                <div><span className="text-[#febc2e]">"stack":</span><span className="text-[#4fc3f7] ml-1">"React · Next.js · Rust/Soroban · Solidity"</span></div>
              </div>
              {/* Final prompt */}
              <div className="flex flex-wrap items-center gap-x-0.5 pt-0.5">
                <span className="text-[#28c840]">iyanuoluwa</span>
                <span className="text-[#666]">@workstation</span>
                <span className="text-[#666]">:</span>
                <span className="text-[#ce93d8]">~/projects</span>
                <span className="text-[#666]">$&nbsp;</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-[14px] bg-[#f8f8f2] rounded-sm"
                />
              </div>
            </motion.div>
          )}

          {/* Loading cursor */}
          {!showStatus && visible < recentWork.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-[14px] bg-[#f8f8f2] rounded-sm ml-6"
            />
          )}
        </div>

        {/* VS Code-style status bar */}
        <div className="bg-[#007acc] px-3 sm:px-4 py-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-white/90 font-mono">
            <span>⎇ main</span>
            <span className="hidden sm:block">✓ 7 curated projects</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-white/90 font-mono">
            <span>Rust · TypeScript · Soroban</span>
            <span className="hidden sm:block">UTF-8</span>
            <span>zsh</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function PremiumHeroSection() {
  const role = useTypewriter(
    [
      'Frontend & Web3 Engineer',
      'Building Software for Real Problems',
      'Soroban & Stellar Builder',
      'React & Next.js Specialist',
      'Solidity & EVM Developer',
    ],
    75,
    2200,
  );

  return (
    <motion.section
      id="hero"
      className="relative min-h-[92vh] w-full overflow-hidden flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810]" />
      <motion.div
        className="absolute top-20 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-[#8a6239]/12 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-[#7a7268]/8 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

            {/* ── LEFT ── */}
            <div className="space-y-5 sm:space-y-6 order-1 lg:order-1">

              {/* Availability + dual market note */}
              <motion.div
                className="flex flex-wrap items-center gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {/* Natural availability indicator */}
                <div className="inline-flex items-center gap-1.5 text-xs text-[#7a7268] dark:text-white/60">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#8a6239] dark:text-[#d4c4b0]" />
                  <span>Nigeria (GMT+1) · UK/EU Overlap · Remote & Local</span>
                </div>
              </motion.div>

              {/* Name + headline + typewriter */}
              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <p className="text-sm font-semibold text-[#8a6239] dark:text-[#d4af37] tracking-wide">
                  Hi, I'm IyanuOluwa Owoseni
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08]">
                  <span className="text-[#1a0f0a] dark:text-[#f5f1ed]">Building software that</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] via-[#d4af37] to-[#8a6239] dark:from-[#d4c4b0] dark:via-[#d4af37] dark:to-[#c4b4a0]">
                    solves real world problems.
                  </span>
                </h1>
                {/* Typewriter */}
                <div className="flex items-center gap-2 h-6 sm:h-7">
                  <span className="text-sm sm:text-base font-mono font-medium text-[#8a6239] dark:text-[#d4af37]">
                    {role}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 sm:h-5 bg-[#8a6239] dark:bg-[#d4af37] rounded-full"
                  />
                </div>
              </motion.div>

              {/* Honest value proposition */}
              <motion.p
                className="text-sm sm:text-base text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                Frontend and Web3 engineer focused on building software that solves genuine human challenges.
              
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                {/* Primary: dark fill */}
                <Link
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] font-bold rounded-xl text-sm hover:bg-[#3d251e] dark:hover:bg-white transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2 group"
                >
                  View my work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* Secondary: booking link */}
                <a
                  href={PORTFOLIO_CONFIG.SOCIAL_LINKS.BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#1a0f0a] font-bold rounded-xl text-sm transition-colors shadow-md hover:shadow-lg hover:shadow-[#d4af37]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2"
                >
                  <Calendar className="h-4 w-4" />
                  Book a call
                </a>

                {/* Tertiary: resume dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3 sm:py-3.5 border border-[#d4c4b0]/70 dark:border-white/15 text-[#4a4238] dark:text-[#d4c4b0] font-semibold rounded-xl text-sm hover:border-[#8a6239]/50 dark:hover:border-white/25 hover:text-[#1a0f0a] dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2">
                      <Download className="h-4 w-4" />
                      Resume
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-44">
                    <DropdownMenuItem asChild>
                      <a href={PORTFOLIO_CONFIG.RESUME_URL} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        View Resume
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={PORTFOLIO_CONFIG.RESUME_URL} download className="cursor-pointer">
                        Download PDF
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              {/* Stats: unified truthful numbers */}
              <motion.div
                className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  { n: PORTFOLIO_CONFIG.STATS.PROJECTS, label: 'Projects shipped' },
                  { n: `${PORTFOLIO_CONFIG.STATS.EXPERIENCE_YEARS} yrs`, label: 'Web & Web3 exp.' },
                  { n: PORTFOLIO_CONFIG.STATS.OPEN_SOURCE_CONTRIBUTIONS, label: 'OSS Contributions' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">{s.n}</div>
                    <div className="text-[10px] sm:text-[11px] text-[#7a7268] dark:text-white/60 mt-0.5 whitespace-nowrap">{s.label}</div>
                  </div>
                ))}
                <div className="h-7 w-px bg-[#d4c4b0]/60 dark:bg-white/10" />
                <div className="flex flex-wrap items-center gap-1.5">
                  {['React', 'Next.js', 'Rust', 'Soroban', 'Solidity'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#1a0f0a] dark:bg-[#d4af37]/15 text-white dark:text-[#d4af37] border border-[#1a0f0a]/20 dark:border-[#d4af37]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column: interactive terminal */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
                <TerminalCard />
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
