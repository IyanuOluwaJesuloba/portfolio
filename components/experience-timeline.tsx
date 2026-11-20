'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Bethel Labs',
    companyUrl: '#',
    location: 'Remote',
    period: 'Jun 2025 – Oct 2025',
    type: 'Full-Time',
    current: false,
    summary:
      'Built scalable frontend solutions for a product-focused team, from component libraries to third-party API integrations, with a strong emphasis on performance and maintainability.',
    highlights: [
      'Engineered a reusable component library that reduced UI development time across the team',
      'Translated Figma designs into pixel-perfect, responsive implementations with Framer Motion animations',
      'Integrated multiple third-party APIs with clean error handling and loading state management',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Frontend Developer',
    company: 'Orglobal Tech Network',
    companyUrl: '#',
    location: 'Ibadan, Nigeria',
    period: 'Nov 2024 – May 2025',
    type: 'Full-Time',
    current: false,
    summary:
      'Delivered web applications for multiple clients across different industries, owning the frontend from architecture decisions to production deployment.',
    highlights: [
      'Built 5+ responsive web applications using React and Next.js for clients across different sectors',
      'Improved a client\'s website performance by 40% through code splitting, image optimisation, and lazy loading',
      'Collaborated with designers and backend developers in an agile team environment',
      'Maintained consistent code quality through peer reviews and shared component standards',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Web Development Intern',
    company: 'Orglobal Tech Network',
    companyUrl: '#',
    location: 'Ibadan, Nigeria',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
    current: false,
    summary:
      'First professional engineering role, contributed to real product features, participated in code reviews, and built the habits that have shaped how I work today.',
    highlights: [
      'Developed responsive UI components that shipped to the company\'s live product',
      'Participated in daily code reviews, learning to give and receive technical feedback',
      'Improved development workflow documentation, reducing onboarding time for new team members',
      'Supported onboarding of new interns and helped them navigate the codebase',
    ],
    stack: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git'],
  },
];

// ─── Main section ──────────────────────────────────────────────────────────────

export function ExperienceTimeline() {
  return (
    <motion.section
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-br from-[#d4c4b0] via-[#c4bfb8] to-[#e0d8d0] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] overflow-hidden w-full"
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
              Experience
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
              Where I've worked
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                and what I learned.
              </span>
            </h2>
            <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
              Three years of professional experience across agencies, product teams, and
              internships, each one shaping how I think about building software.
            </p>
          </motion.div>

          {/* ── Timeline ── */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#d4c4b0]/60 dark:bg-white/12 hidden sm:block" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative sm:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 w-10 h-10 rounded-full bg-white dark:bg-[#2a1810] border-2 border-[#d4c4b0]/60 dark:border-white/15 items-center justify-center hidden sm:flex shadow-sm">
                    <Briefcase className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0]" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-300">

                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#8a6239] dark:text-[#d4c4b0]">
                          {exp.company}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs text-[#4a4238] dark:text-[#d4c4b0]">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-full border border-[#d4c4b0]/60 dark:border-white/15 text-[10px] font-semibold uppercase tracking-wider text-[#4a4238] dark:text-[#d4c4b0]">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed mb-5">
                      {exp.summary}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0] mb-3">
                        Key contributions
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-[#4a4238] dark:text-[#d4c4b0]"
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            viewport={{ once: true }}
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0] flex-shrink-0" />
                            {h}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0] mb-2">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-[#f0ede9] dark:bg-[#1a0f0a] text-[#1a0f0a] dark:text-[#d4af37] text-xs font-medium border border-[#d4c4b0]/50 dark:border-[#d4af37]/25"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Footer note ── */}
          <motion.div
            className="mt-12 p-5 rounded-xl border border-[#d4c4b0]/40 dark:border-white/10 bg-white/40 dark:bg-white/3 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0]">
              Want the full picture?{' '}
              <a
                href="/IYANUOLUWA OWOSENI'S RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8a6239] dark:text-[#d4c4b0] underline underline-offset-2 hover:opacity-75 transition-opacity"
              >
                Download my resume
              </a>
              {' '}for a complete work history.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
