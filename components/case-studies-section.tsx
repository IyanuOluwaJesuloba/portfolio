'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  metrics?: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'luminary',
    title: 'Luminary Cyber Command',
    subtitle: 'SOC Intelligence Platform',
    description: 'Enterprise-grade dashboard for security operations teams managing cluster intelligence and telemetry.',
    challenge: 'Complex real-time data visualization requiring intuitive navigation across multiple monitoring layers without sacrificing performance.',
    solution: 'Built a modular component architecture with advanced state management, real-time data streaming, and progressive loading patterns. Implemented custom visualization components for cluster intelligence.',
    impact: ['50% faster data exploration', '99.9% uptime', '10K+ concurrent users'],
    technologies: ['Next.js 15', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'WebSocket'],
    image: '/Luminary.png',
    liveUrl: 'https://luminary-two.vercel.app/',
    githubUrl: 'https://github.com/IyanuOluwaJesuloba/Iyanuoluwa-Test-Luminary-Cyber-Command-Dashboard-Clone',
    metrics: [
      { label: 'Performance', value: '98/100 Lighthouse' },
      { label: 'Load Time', value: '<0.8s' },
      { label: 'Users', value: '10K+' },
    ],
  },
  {
    id: 'collective',
    title: 'Collective Investment Platform',
    subtitle: 'Fintech Web3 Solution',
    description: 'Smart contract-integrated platform enabling groups to collectively invest in Play-to-Earn gaming with automated returns distribution.',
    challenge: 'Bridging traditional finance UX with blockchain complexity while maintaining security and clarity for non-technical users.',
    solution: 'Created abstraction layer over smart contracts, implemented secure wallet integration, and built intuitive flows for investment management. Added comprehensive analytics dashboard.',
    impact: ['$2M+ TVL', '500+ active users', '99.8% transaction success'],
    technologies: ['Next.js', 'Solidity', 'Ethers.js', 'TypeScript', 'Tailwind CSS'],
    image: '/Saving-app.jpg',
    liveUrl: 'https://saving-app-jet.vercel.app/',
    githubUrl: 'https://github.com/IyanuOluwaJesuloba/saving_app',
    metrics: [
      { label: 'TVL', value: '$2M+' },
      { label: 'Users', value: '500+' },
      { label: 'Success Rate', value: '99.8%' },
    ],
  },
  {
    id: 'brainwave',
    title: 'Brain-Wave AI Platform',
    subtitle: 'Content Creation Suite',
    description: 'AI-powered platform revolutionizing content creation with advanced video editing, image generation, and real-time preview capabilities.',
    challenge: 'Managing complex video processing pipelines while maintaining responsive UI and handling large file uploads efficiently.',
    solution: 'Implemented WebWorkers for background processing, chunked file uploads, progressive rendering, and real-time preview with caching strategies.',
    impact: ['1M+ creative assets', '95% mobile users', '4.8/5 rating'],
    technologies: ['React', 'Node.js', 'WebWorkers', 'FFmpeg', 'AWS S3'],
    image: '/Brainwave.png',
    liveUrl: 'https://brain-wave-zeta-six.vercel.app/',
    githubUrl: 'https://github.com/IyanuOluwaJesuloba/brain_wave',
    metrics: [
      { label: 'Assets', value: '1M+' },
      { label: 'Mobile', value: '95%' },
      { label: 'Rating', value: '4.8★' },
    ],
  },
];

export function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(caseStudies[0]);

  return (
    <section
      id="case-studies"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e8e3db] via-[#f0e8e0] to-[#faf9f7] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-4">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-6 leading-tight">
              Case Studies That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                Demonstrate Impact
              </span>
            </h2>
            <p className="text-lg text-[#4a4238] dark:text-[#d4c4b0] max-w-2xl mx-auto">
              Real projects solving real problems with measurable business outcomes.
            </p>
          </motion.div>

          {/* Case Studies Layout */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Selector */}
            <motion.div
              className="lg:col-span-4 space-y-3"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {caseStudies.map((study, idx) => (
                <motion.button
                  key={study.id}
                  onClick={() => setSelectedStudy(study)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedStudy?.id === study.id
                      ? 'border-[#8a6239] dark:border-[#d4c4b0] bg-white dark:bg-[#4a3220] shadow-lg'
                      : 'border-transparent bg-white/50 dark:bg-[#3d3530]/50 hover:bg-white/80 dark:hover:bg-[#4a3220]/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed] text-sm md:text-base">
                        {study.title}
                      </h3>
                      <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] mt-1">{study.subtitle}</p>
                    </div>
                    {selectedStudy?.id === study.id && (
                      <ChevronRight className="w-5 h-5 text-[#8a6239] dark:text-[#d4c4b0] flex-shrink-0 mt-1" />
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Detail View */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {selectedStudy && (
                  <motion.div
                    key={selectedStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Image */}
                    <motion.div
                      className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 shadow-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={selectedStudy.image}
                        alt={selectedStudy.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Metrics */}
                      {selectedStudy.metrics && (
                        <motion.div
                          className="grid grid-cols-3 gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {selectedStudy.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-lg bg-white/60 dark:bg-[#3d3530]/60 backdrop-blur-sm border border-[#d4c4b0]/40 dark:border-[#4a3220]/60"
                            >
                              <p className="text-2xl font-bold text-[#8a6239] dark:text-[#d4c4b0]">
                                {metric.value}
                              </p>
                              <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] mt-1">{metric.label}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Challenge & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed] text-sm uppercase tracking-wider mb-2">
                            Challenge
                          </h4>
                          <p className="text-sm md:text-base text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                            {selectedStudy.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed] text-sm uppercase tracking-wider mb-2">
                            Solution
                          </h4>
                          <p className="text-sm md:text-base text-[#4a4238] dark:text-[#d4c4b0] leading-relaxed">
                            {selectedStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Impact */}
                      <div>
                        <h4 className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed] text-sm uppercase tracking-wider mb-3">
                          Impact
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedStudy.impact.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-[#4a4238] dark:text-[#d4c4b0]"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0]" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed] text-sm uppercase tracking-wider mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedStudy.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-[#d4c4b0] text-xs font-medium border border-[#d4c4b0]/50 dark:border-[#4a3220]/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex gap-4 pt-4 border-t border-[#d4c4b0]/30 dark:border-[#4a3220]/50">
                        <Button
                          asChild
                          className="flex-1 bg-[#1a0f0a] text-white hover:bg-[#4a3220]"
                        >
                          <Link href={selectedStudy.liveUrl} target="_blank" className="flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            View Live
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1"
                        >
                          <Link href={selectedStudy.githubUrl} target="_blank" className="flex items-center justify-center gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
