'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Award, TrendingUp } from 'lucide-react';

interface MasteryArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  proficiency: number;
}

const masteryAreas: MasteryArea[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'High-Performance Frontend',
    description: 'Building blazing-fast interfaces optimized for speed and user experience',
    skills: ['React/Next.js', 'Performance Optimization', 'SEO', 'PWA', 'Web Vitals'],
    proficiency: 98,
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Web3 & Blockchain',
    description: 'Smart contracts, wallet integration, and decentralized applications',
    skills: ['Solidity', 'EVM', 'Smart Contracts', 'Web3.js/Ethers', 'DeFi'],
    proficiency: 92,
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'Accessibility & UX',
    description: 'WCAG AA+ compliant, inclusive designs that work for everyone',
    skills: ['WCAG 2.1', 'Semantic HTML', 'ARIA', 'User Testing', 'A11y'],
    proficiency: 96,
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Architecture & Design',
    description: 'Scalable systems, design patterns, and long-term maintainability',
    skills: ['System Design', 'TypeScript', 'Testing', 'DevOps', 'Clean Code'],
    proficiency: 95,
  },
];

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-28 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#4a3220] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-4">
              Professional Mastery
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-6 leading-tight">
              Expertise Backed by
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                Real Experience
              </span>
            </h2>
            <p className="text-lg text-[#4a4238] dark:text-[#d4c4b0] max-w-2xl mx-auto">
              Deep knowledge across multiple domains, proven through production systems and measurable results.
            </p>
          </motion.div>

          {/* Mastery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {masteryAreas.map((area, idx) => (
              <motion.div
                key={idx}
                className="group relative p-6 md:p-8 rounded-xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm hover:border-[#8a6239] dark:hover:border-[#d4c4b0] transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#f0ede9] to-[#e8e3db] dark:from-[#4a3220] dark:to-[#3d251e] text-[#8a6239] dark:text-[#d4c4b0]">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] group-hover:text-[#8a6239] dark:group-hover:text-[#d4c4b0] transition-colors">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#4a4238] dark:text-[#d4c4b0] text-sm md:text-base leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Skills */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#4a4238] dark:text-[#d4c4b0]">
                      Proficiency
                    </p>
                    <span className="text-xs font-bold text-[#8a6239] dark:text-[#d4c4b0]">{area.proficiency}%</span>
                  </div>
                  <motion.div
                    className="h-2 rounded-full bg-[#d4c4b0]/30 dark:bg-[#4a3220]/50 overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#8a6239] to-[#7a7268]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.proficiency}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, sidx) => (
                    <motion.span
                      key={sidx}
                      className="px-2.5 py-1 rounded-full bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-[#d4c4b0] text-xs font-medium border border-[#d4c4b0]/50 dark:border-[#4a3220]/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + sidx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Achievements */}
          <motion.div
            className="p-8 rounded-xl border-2 border-[#8a6239]/50 dark:border-[#d4c4b0]/30 bg-gradient-to-br from-[#f0ede9] dark:from-[#4a3220] to-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#8a6239] dark:text-[#d4c4b0]" />
              Key Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                '500K+ lines of production code shipped',
                'Led teams building $2M+ TVL platforms',
                '3+ open-source contributions to blockchain projects',
                'Mentored 15+ junior developers',
                '99.9% system uptime in production',
                'Multiple award-winning projects',
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/40 dark:bg-[#1a0f0a]/20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1a0f0a] dark:text-[#f5f1ed]">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
