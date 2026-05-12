'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Zap, Award, GitBranch, Users } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export function StatsSection() {
  const { ref, isInView } = useScrollAnimation();

  const stats: StatItem[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      value: '11+',
      label: 'Production Projects',
      description: 'Web2 & Web3 applications deployed to production',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Delivered high-quality solutions across diverse domains',
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      value: '3+',
      label: 'Open Source',
      description: 'Contributions shipped to prominent blockchain projects',
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '5+',
      label: 'Tech Stacks',
      description: 'Expert proficiency across multiple frameworks & languages',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#3d3530] relative overflow-hidden"
      id="stats"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={staggerItem}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#4a4238] dark:text-[#e8e6e3] mb-4">
              Impact & Achievements
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
              Measurable Results
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                variants={staggerItem}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a6239]/5 to-[#7a7268]/5 dark:from-[#8a6239]/10 dark:to-[#7a7268]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 md:p-8 rounded-xl border border-[#d4c4b0]/40 dark:border-[#4a3220]/60 bg-white/50 dark:bg-[#3d3530]/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-[#4a3220]/80 transition-all duration-300">
                  <div className="mb-4 text-[#8a6239] dark:text-[#d4c4b0] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3] mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-[#5c3d2e]/70 dark:text-[#d4c4b0]/70 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
