'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { currentWorkplaceNda } from '@/lib/portfolio-data';
import { PORTFOLIO_CONFIG } from '@/lib/constants';

export function WorkplaceNdaCard() {
  const nda = currentWorkplaceNda;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <div className="relative pl-5 border-l-2 border-[#8a6239] dark:border-[#c4a878] py-1">
        {/* Meta */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#c4a878] mb-2">
          {nda.company} &middot; {nda.period} &middot; {nda.status}
        </p>

        {/* Headline */}
        <h3 className="text-lg sm:text-xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-snug max-w-2xl">
          {nda.headline}
        </h3>

        {/* Subtext + CTA inline */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-sm text-[#7a7268] dark:text-white/50 leading-relaxed">
            {nda.subtext}
          </p>
          <a
            href={`mailto:${PORTFOLIO_CONFIG.CONTACT_EMAIL}?subject=NDA%20Request%20-%20${encodeURIComponent(nda.company)}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#8a6239] dark:text-[#c4a878] hover:underline underline-offset-4 transition-colors flex-shrink-0"
          >
            {nda.detailPrompt}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
