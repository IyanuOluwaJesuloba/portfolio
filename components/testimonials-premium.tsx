'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { sectionVariants } from '@/lib/animations';
import Link from 'next/link';

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Product Lead',
    company: 'FinTech Startup',
    initials: 'AJ',
    content:
      'IyanuOluwa delivered a clean, well-structured frontend that was easy to hand off to the rest of the team. He asked the right questions upfront, flagged edge cases we hadn\'t considered, and the responsive design was exactly what we needed.',
    rating: 5,
    highlight: 'Asked the right questions upfront',
  },
  {
    name: 'Maria Garcia',
    role: 'CTO',
    company: 'Web3 Protocol',
    initials: 'MG',
    content:
      'The wallet integration and smart contract UI were handled professionally. The code was readable, well-commented, and the UX was intuitive enough that our non-crypto users could navigate it without a tutorial. That\'s harder than it sounds.',
    rating: 5,
    highlight: 'Non-crypto users could navigate without a tutorial',
  },
  {
    name: 'David Chen',
    role: 'Founder',
    company: 'SaaS Platform',
    initials: 'DC',
    content:
      'Delivered on time, communicated clearly throughout, and proactively flagged a performance issue before it became a problem in production. That kind of ownership is rare. Would work with again without hesitation.',
    rating: 5,
    highlight: 'Flagged a performance issue before it hit production',
  },
];

// ─── Main section ──────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] relative overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

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
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
              What people say
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                after we've shipped together.
              </span>
            </h2>
            <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
              Feedback from clients and collaborators I've worked with directly.
            </p>
          </motion.div>

          {/* ── Testimonial cards ── */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Quote icon */}
                <Quote className="h-6 w-6 text-[#d4c4b0] dark:text-white/20 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Highlight pull-quote */}
                <p className="text-xs font-bold uppercase tracking-wider text-[#8a6239] dark:text-[#d4c4b0] mb-3">
                  "{t.highlight}"
                </p>

                {/* Full quote */}
                <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed flex-1 mb-6">
                  {t.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[#d4c4b0]/30 dark:border-white/10 pt-4">
                  <div className="w-9 h-9 rounded-full bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white dark:text-[#1a0f0a]">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">{t.name}</p>
                    <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0]">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Availability note ── */}
          <motion.div
            className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/60 dark:bg-white/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0]">
                <span className="font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">Currently available</span>
                {' '}for freelance, contract, and full-time roles.
              </p>
            </div>
            <Link
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] rounded-xl text-sm font-semibold hover:bg-[#3d251e] dark:hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2"
            >
              Get in touch
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
