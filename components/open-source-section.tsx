'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitPullRequest, GitBranch, ArrowRight } from 'lucide-react';
import { openSourceContributions } from '@/lib/portfolio-data';
import { sectionVariants } from '@/lib/animations';
import Link from 'next/link';

if (!openSourceContributions.length) {
  // Handled below with early return
}

export function OpenSourceSection() {
  if (!openSourceContributions.length) return null;

  return (
    <motion.section
      id="open-source"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Open Source
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
                  Giving back to the
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                    community that taught me.
                  </span>
                </h2>
                <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
                  I've contributed to open-source Web3 projects — shipping real improvements
                  to codebases used by other developers. Here's what I worked on and why it mattered.
                </p>
              </div>
              <a
                href="https://github.com/IyanuOluwaJesuloba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#8a6239] dark:text-[#d4c4b0] hover:opacity-75 transition-opacity"
              >
                GitHub profile
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* ── Contributions ── */}
          <div className="space-y-5">
            {openSourceContributions.map((item, index) => (
              <motion.div
                key={`${item.repoUrl}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  {/* Left */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center flex-shrink-0">
                      <GitBranch className="h-5 w-5 text-white dark:text-[#1a0f0a]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-base font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#8a6239] dark:text-[#d4c4b0] border border-[#d4c4b0]/50 dark:border-[#4a3220]/50">
                          Merged PR
                        </span>
                      </div>
                      <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed mb-3">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full bg-[#f0ede9] dark:bg-[#1a0f0a]/20 text-[#4a4238] dark:text-[#d4c4b0] text-[11px] font-medium border border-[#d4c4b0]/40 dark:border-[#4a3220]/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right — links */}
                  <div className="flex sm:flex-col gap-2 flex-shrink-0">
                    {item.prUrl && (
                      <a
                        href={item.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] text-xs font-semibold hover:bg-[#3d251e] dark:hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
                      >
                        <GitPullRequest className="h-3.5 w-3.5" />
                        View PR
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#c4a878] dark:border-white/15 text-[#1a0f0a] dark:text-[#f5f1ed] text-xs font-semibold hover:bg-[#f5f1ed] dark:hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
                    >
                      Repository
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Footer note ── */}
          <motion.div
            className="mt-10 p-5 rounded-xl border border-[#d4c4b0]/40 dark:border-white/10 bg-white/40 dark:bg-white/3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
              <span className="font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">Why open source matters to me:</span>{' '}
              Every tool I use daily was built by someone who shared their work freely.
              Contributing back — even in small ways — is how I stay connected to the
              broader engineering community and keep learning from codebases more complex than my own.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
