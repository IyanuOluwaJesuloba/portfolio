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
  note: string; // one-line context: what you actually use it for
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
    label: 'Frontend Engineering',
    icon: Code2,
    description: 'The modern web stack I reach for on every project.',
    items: [
      { name: 'React', note: 'Component architecture, custom hooks, context, state management', primary: true },
      { name: 'Next.js', note: 'App Router, SSR/SSG, API routes, image optimization, Core Web Vitals', primary: true },
      { name: 'TypeScript', note: 'Strict mode, generics, utility types across all projects', primary: true },
      { name: 'Tailwind CSS', note: 'Utility-first styling, custom design tokens, dark mode', primary: true },
      { name: 'Framer Motion', note: 'Page transitions, scroll animations, gesture interactions', primary: true },
      { name: 'JavaScript (ES2022+)', note: 'Async/await, optional chaining, modules, Web APIs' },
      { name: 'HTML5 & CSS3', note: 'Semantic markup, CSS Grid/Flexbox, custom CSS properties' },
      { name: 'Responsive Design', note: 'Mobile-first layouts, fluid typography, container queries' },
      { name: 'Web Accessibility', note: 'ARIA roles, keyboard nav, screen reader testing (WCAG)' },
    ],
  },
  {
    id: 'web3',
    label: 'Web3, Soroban & Smart Contracts',
    icon: Shield,
    description: 'Stellar Soroban (Rust) and EVM (Solidity) smart contract & frontend engineering.',
    items: [
      { name: 'Rust', note: 'Writing high-performance, memory-safe smart contracts on Soroban', primary: true },
      { name: 'Soroban', note: 'Native smart contracts on Stellar, WASM compilation, auth & events', primary: true },
      { name: 'Stellar Ecosystem', note: 'Freighter wallet integration, Horizon API, token issuance, Soroban RPC', primary: true },
      { name: 'Solidity', note: 'ERC-20/721 contracts, Foundry & Hardhat testing, deployment scripts', primary: true },
      { name: 'Ethers.js & Wagmi', note: 'Contract interaction, multi-wallet connection, event listeners', primary: true },
      { name: 'RainbowKit', note: 'Streamlined Web3 wallet UX and multi-chain network switching' },
      { name: 'OpenZeppelin', note: 'Secure contract standards (ERC tokens, access control, reentrancy guards)' },
      { name: 'EVM Chains', note: 'Ethereum, Polygon, Arbitrum testnets: contract deployment and debugging' },
      { name: 'Zero-Knowledge (ZK)', note: 'Circom circuits, Groth16 proof verification concepts' },
      { name: 'IPFS', note: 'Decentralized asset storage for NFT metadata and document anchoring' },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling & Workflow',
    icon: Wrench,
    description: 'How I build, test, and ship maintainable software.',
    items: [
      { name: 'Git & GitHub', note: 'Branching strategy, pull requests, code reviews, CI workflows', primary: true },
      { name: 'Cargo & Rust Toolchain', note: 'Compiling Soroban smart contracts to WASM, unit testing', primary: true },
      { name: 'Foundry & Hardhat', note: 'Automated Solidity unit testing, gas profiling, script deployment', primary: true },
      { name: 'Figma', note: 'Design handoff, component inspection, layout prototyping' },
      { name: 'VS Code', note: 'Custom configuration, debugger setup, TypeScript language server' },
      { name: 'Vercel', note: 'Production deployments, preview branch environments, edge caching' },
      { name: 'Vite & Webpack', note: 'Build optimization, code splitting, bundle analysis' },
      { name: 'ESLint & Prettier', note: 'Consistent code style and linting rules enforced across projects' },
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
        <div className="flex items-center gap-2.5 min-w-0">
          {item.primary && (
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0] flex-shrink-0"
              title="Core tool"
            />
          )}
          <span className="text-sm font-semibold text-[#1a0f0a] dark:text-[#f5f1ed] truncate">
            {item.name}
          </span>
        </div>
        <ChevronRight
          className={`h-3.5 w-3.5 text-[#7a7268] dark:text-[#d4c4b0] transition-transform duration-200 flex-shrink-0 ml-2 ${
            open ? 'rotate-90' : 'group-hover:translate-x-0.5'
          }`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 pt-0 border-t border-[#d4c4b0]/40 dark:border-[#4a3220]/40 mt-1">
              <p className="text-xs text-[#7a7268] dark:text-[#d4c4b0] leading-relaxed pt-2">
                {item.note}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Category>('all');

  const displayedGroups =
    activeTab === 'all' ? groups : groups.filter((g) => g.id === activeTab);

  return (
    <motion.section
      id="skills"
      className="py-20 md:py-28 bg-gradient-to-br from-[#c4bfb8] via-[#d4c4b0] to-[#e8e3db] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden scroll-mt-20 w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Section header ── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6239] dark:text-[#d4c4b0] mb-5">
              <span className="h-px w-8 bg-[#8a6239]/50 dark:bg-[#d4c4b0]/40" />
              Technical Stack
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight">
                  What I use to
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                    build and ship.
                  </span>
                </h2>
                <p className="mt-3 text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-lg leading-relaxed">
                  Every tool here is something I've shipped real production code with.
                  Click any item to see how I apply it in practice.
                </p>
              </div>

              {/* Category filter tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/60 dark:bg-white/5 border border-[#d4c4b0]/60 dark:border-white/10 self-start sm:self-auto">
                {(
                  [
                    { id: 'all', label: 'All' },
                    { id: 'frontend', label: 'Frontend' },
                    { id: 'web3', label: 'Web3 & Soroban' },
                    { id: 'tooling', label: 'Tooling' },
                  ] as { id: Category; label: string }[]
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] shadow-sm'
                        : 'text-[#4a4238] dark:text-[#d4c4b0] hover:text-[#1a0f0a] dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Groups grid ── */}
          <div className="space-y-12">
            {displayedGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.id} className="space-y-5">
                  {/* Group header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-[#d4c4b0]/50 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-white dark:text-[#1a0f0a]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                        {group.label}
                      </h3>
                      <p className="text-xs text-[#7a7268] dark:text-[#d4c4b0]">
                        {group.description}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-[#7a7268] dark:text-white/40 font-mono">
                      {group.items.length} technologies
                    </span>
                  </div>

                  {/* Items grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.items.map((item, i) => (
                      <TechPill key={item.name} item={item} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Legend ── */}
          <div className="mt-12 flex items-center gap-2 text-xs text-[#7a7268] dark:text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0]" />
            <span>Indicates core daily-driver technology</span>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
