'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import {
  Code2,
  Layers,
  Shield,
  Wrench,
  ChevronRight,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = 'all' | 'frontend' | 'web3' | 'tooling';

interface TechItem {
  name: string;
  note: string; // one-line context — what you actually use it for
  primary?: boolean; // marks core/daily-use tools
}

interface TechGroup {
  id: Category;
  label: string;
  icon: React.ElementType;
  description: string;
  items: TechItem[];
}

const groups: TechGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    description: 'The stack I reach for on every project.',
    items: [
      { name: 'React', note: 'Component architecture, hooks, context - daily driver', primary: true },
      { name: 'Next.js', note: 'App Router, SSR/SSG, API routes, image optimisation', primary: true },
      { name: 'TypeScript', note: 'Strict mode, generics, utility types across all projects', primary: true },
      { name: 'Tailwind CSS', note: 'Utility-first styling, custom design tokens, dark mode', primary: true },
      { name: 'Framer Motion', note: 'Page transitions, scroll animations, gesture interactions', primary: true },
      { name: 'JavaScript ES2022+', note: 'Async/await, optional chaining, modules, Web APIs' },
      { name: 'HTML5 & CSS3', note: 'Semantic markup, CSS Grid/Flexbox, custom properties' },
      { name: 'Responsive Design', note: 'Mobile-first layouts, fluid typography, container queries' },
      { name: 'Web Accessibility', note: 'ARIA roles, keyboard nav, screen reader testing' },
    ],
  },
  {
    id: 'web3',
    label: 'Web3',
    icon: Shield,
    description: 'Blockchain frontend and smart contract work.',
    items: [
      { name: 'Ethers.js', note: 'Contract interaction, wallet connection, event listeners', primary: true },
      { name: 'Solidity', note: 'ERC-20/721 contracts, Foundry testing, deployment scripts', primary: true },
      { name: 'Wagmi / RainbowKit', note: 'Wallet UX, multi-chain support, React hooks for Web3' },
      { name: 'Hardhat', note: 'Local dev node, contract testing, deployment pipelines' },
      { name: 'OpenZeppelin', note: 'Secure contract standards - ERC tokens, access control' },
      { name: 'IPFS', note: 'Decentralised asset storage for NFT metadata' },
      { name: 'EVM Chains', note: 'Ethereum, Polygon, testnets - deployment and debugging' },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling & Workflow',
    icon: Wrench,
    description: 'How I build, test, and ship.',
    items: [
      { name: 'Git & GitHub', note: 'Branching strategy, PRs, code review, CI integration', primary: true },
      { name: 'Figma', note: 'Design handoff, component inspection, prototyping' },
      { name: 'VS Code', note: 'Custom config, extensions, debugging workflows' },
      { name: 'Node.js / npm', note: 'Scripts, package management, monorepo tooling' },
      { name: 'Vite / Webpack', note: 'Build optimisation, code splitting, bundle analysis' },
      { name: 'ESLint / Prettier', note: 'Consistent code style enforced across all projects' },
      { name: 'Vercel', note: 'Deployment, preview environments, edge functions' },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TechPill({ item, index }: { item: TechItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      onClick={() => setOpen((v) => !v)}
      className={`group w-full text-left rounded-xl border transition-all duration-200 ${
        open
          ? 'border-[#8a6239] dark:border-[#d4c4b0] bg-white dark:bg-[#3d3530] shadow-md'
          : 'border-[#d4c4b0]/50 dark:border-[#4a3220]/60 bg-white/60 dark:bg-[#3d3530]/50 hover:border-[#8a6239]/60 dark:hover:border-[#d4c4b0]/50 hover:bg-white/90 dark:hover:bg-[#3d3530]/80'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          {item.primary && (
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0]" />
          )}
          {!item.primary && (
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#d4c4b0]/60 dark:bg-[#4a3220]" />
          )}
          <span className={`text-sm font-semibold truncate ${
            item.primary
              ? 'text-[#1a0f0a] dark:text-[#f5f1ed]'
              : 'text-[#4a4238] dark:text-[#d4c4b0]'
          }`}>
            {item.name}
          </span>
          {item.primary && (
            <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#8a6239] dark:text-[#d4c4b0] border border-[#d4c4b0]/50 dark:border-[#4a3220]/50">
              Core
            </span>
          )}
        </div>
        <ChevronRight
          className={`flex-shrink-0 h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0] transition-transform duration-200 ${
            open ? 'rotate-90' : ''
          }`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-3 text-xs text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed border-t border-[#d4c4b0]/30 dark:border-[#4a3220]/40 pt-2.5">
              {item.note}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const visibleGroups =
    activeCategory === 'all'
      ? groups
      : groups.filter((g) => g.id === activeCategory);

  const tabs: { id: Category; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All', icon: Layers },
    ...groups.map((g) => ({ id: g.id, label: g.label, icon: g.icon })),
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 md:py-28 bg-gradient-to-br from-[#c4bfb8] via-[#d4c4b0] to-[#e0d8d0] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] overflow-hidden w-full"
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
              Skills & Technologies
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight">
                  Tools I use
                </h2>
                <p className="mt-3 text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
                  Click any item to see how I use it in practice. Core tools are marked, everything else I reach for when the project calls for it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Category tabs ── */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            role="tablist"
            aria-label="Filter skills by category"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-[#1a0f0a] text-white dark:bg-[#f5f1ed] dark:text-[#1a0f0a] shadow-sm'
                      : 'border border-[#d4c4b0]/60 dark:border-[#4a3220]/60 bg-white/40 dark:bg-[#1a0f0a]/10 text-[#4a4238] dark:text-[#d4c4b0] hover:bg-white/70 dark:hover:bg-[#1a0f0a]/20'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* ── Groups ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={`grid gap-8 ${
                visibleGroups.length === 1
                  ? 'grid-cols-1 max-w-2xl'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {visibleGroups.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <motion.div
                    key={group.id}
                    layout
                    className="rounded-2xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 bg-white/50 dark:bg-[#3d3530]/40 backdrop-blur-sm p-6 shadow-sm"
                  >
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center flex-shrink-0">
                        <GroupIcon className="h-4.5 w-4.5 text-white dark:text-[#1a0f0a] h-[18px] w-[18px]" />
                      </div>
                      <h3 className="text-base font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                        {group.label}
                      </h3>
                    </div>
                    <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] mb-5 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Tech pills */}
                    <div className="space-y-2">
                      {group.items.map((item, i) => (
                        <TechPill key={item.name} item={item} index={i} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ── Footer note ── */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border border-[#d4c4b0]/40 dark:border-[#4a3220]/50 bg-white/40 dark:bg-[#3d3530]/30"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6239] dark:text-[#d4c4b0]">
                Core
              </span>
              <span className="text-xs text-[#4a4238] dark:text-[#d4c4b0]">= daily use, production-proven</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-[#d4c4b0]/60 dark:bg-[#4a3220]" />
            <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
              I'm always learning. If your stack isn't listed here, ask me, I pick up new tools quickly and have done it before.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
