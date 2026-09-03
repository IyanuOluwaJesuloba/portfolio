  'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Mail, Plus, Minus } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@/components/ui/button';
import { sectionVariants } from '@/lib/animations';
import { PortfolioProjectCategory, portfolioProjects } from '@/lib/portfolio-data';

type Filter = 'all' | PortfolioProjectCategory;

// ─── Single project row ───────────────────────────────────────────────────────

function ProjectRow({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: (typeof portfolioProjects)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className={`border-b border-[#d4c4b0]/50 dark:border-white/12 last:border-b-0 transition-colors duration-200 ${
        isOpen ? 'bg-white/60 dark:bg-white/5' : 'hover:bg-white/40 dark:hover:bg-white/2'
      }`}
    >
      {/* ── Row header ── */}
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-center gap-4 sm:gap-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        {/* Index */}
        <span className="flex-shrink-0 text-[11px] font-bold text-[#b4aea6] dark:text-white/45 w-6 text-right tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <span className="flex-1 min-w-0">
          <span className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
            isOpen
              ? 'text-[#8a6239] dark:text-[#d4c4b0]'
              : 'text-[#1a0f0a] dark:text-[#f5f1ed] group-hover:text-[#8a6239] dark:group-hover:text-[#d4c4b0]'
          }`}>
            {project.title.split('—')[0].trim()}
          </span>
        </span>

        {/* Stack tags — desktop only */}
        <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#f0ede9] dark:bg-white/8 text-[#4a4238] dark:text-[#e0d8d0] border border-[#d4c4b0]/50 dark:border-white/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category + year */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <span className={`text-[9px] font-black uppercase tracking-wider ${
            project.category === 'web3'
              ? 'text-amber-600 dark:text-amber-400'
              : 'text-blue-600 dark:text-blue-400'
          }`}>
            {project.category}
          </span>
          <span className="text-xs text-[#7a7268] dark:text-white/50">{project.year}</span>
        </div>

        {/* Live dot */}
        {project.status === 'Live' && (
          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 hidden sm:block" title="Live" />
        )}

        {/* Toggle icon */}
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#d4c4b0]/60 dark:border-white/20 flex items-center justify-center transition-colors group-hover:border-[#8a6239]/50 dark:group-hover:border-white/25">
          {isOpen
            ? <Minus className="h-3 w-3 text-[#8a6239] dark:text-[#d4c4b0]" />
            : <Plus className="h-3 w-3 text-[#7a7268] dark:text-white/60 group-hover:text-[#8a6239] dark:group-hover:text-[#d4c4b0]" />
          }
        </span>
      </button>

      {/* ── Expanded detail ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 sm:pl-12 space-y-5">

              {/* Description */}
              <p className="text-sm text-[#3a3530] dark:text-[#e0d8d0] leading-relaxed max-w-2xl">
                {project.longDescription}
              </p>

              {/* Challenge / Approach */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="space-y-1.5">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0]">
                    Challenge
                  </p>
                  <p className="text-xs text-[#3a3530] dark:text-[#e0d8d0] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0]">
                    Approach
                  </p>
                  <p className="text-xs text-[#3a3530] dark:text-[#e0d8d0] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Mobile tags */}
              <div className="flex flex-wrap gap-1.5 md:hidden">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#f0ede9] dark:bg-white/8 text-[#4a4238] dark:text-[#e0d8d0] border border-[#d4c4b0]/50 dark:border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a0f0a] dark:text-[#f5f1ed] hover:text-[#8a6239] dark:hover:text-[#d4c4b0] transition-colors underline underline-offset-4 decoration-[#d4c4b0]/60 dark:decoration-white/20 hover:decoration-[#8a6239] dark:hover:decoration-[#d4c4b0]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View Live
                </a>
                <span className="w-px h-3 bg-[#d4c4b0]/60 dark:bg-white/15" />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a0f0a] dark:text-[#f5f1ed] hover:text-[#8a6239] dark:hover:text-[#d4c4b0] transition-colors underline underline-offset-4 decoration-[#d4c4b0]/60 dark:decoration-white/20 hover:decoration-[#8a6239] dark:hover:decoration-[#d4c4b0]"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (activeFilter === 'all') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const filters: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web2', value: 'web2' },
    { label: 'Web3', value: 'web3' },
  ];

  function toggle(title: string) {
    setOpenTitle((prev) => (prev === title ? null : title));
  }

  return (
    <motion.section
      id="projects"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden w-full"
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
              All Projects
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.08] tracking-tight">
                  Everything I've shipped.
                </h2>
                <p className="mt-3 text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-lg leading-relaxed">
                  {portfolioProjects.length} projects across Web2 and Web3. Click any row to read the full story.
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex gap-2" role="group" aria-label="Filter by category">
                {filters.map((f) => {
                  const isActive = f.value === activeFilter;
                  return (
                    <button
                      key={f.value}
                      onClick={() => {
                        setActiveFilter(f.value);
                        setOpenTitle(null);
                      }}
                      aria-pressed={isActive}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2 ${
                        isActive
                          ? 'bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a]'
                          : 'border border-[#d4c4b0]/60 dark:border-white/18 text-[#4a4238] dark:text-[#d4c4b0] hover:border-[#8a6239]/50 dark:hover:border-white/25 hover:text-[#1a0f0a] dark:hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Column headers ── */}
          <div className="hidden sm:grid grid-cols-[28px_1fr_auto_auto_auto_28px] gap-4 sm:gap-6 pb-3 border-b-2 border-[#d4c4b0]/60 dark:border-white/15 mb-1">
            <span />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b4aea6] dark:text-white/50">Project</span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b4aea6] dark:text-white/50 hidden md:block">Stack</span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b4aea6] dark:text-white/50">Type</span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b4aea6] dark:text-white/50">Year</span>
            <span />
          </div>

          {/* ── Project list ── */}
          <AnimatePresence mode="popLayout">
            <motion.div key={activeFilter} layout>
              {visible.map((project, i) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={i}
                  isOpen={openTitle === project.title}
                  onToggle={() => toggle(project.title)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── CTA ── */}
          <motion.div
            className="mt-16 rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] to-[#4a3220]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                  Open to work
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Got a project worth building?
                </h3>
                <p className="text-sm text-white/75 max-w-md leading-relaxed">
                  Available for freelance, contract, and full-time roles. If you've got a problem worth solving, I'd love to hear about it.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#d4af37] hover:bg-[#e5c158] text-[#1a0f0a] font-bold shadow-lg transition-colors"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Start a Conversation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-bold"
                >
                  <a
                    href="https://github.com/IyanuOluwaJesuloba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiGithub className="h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
