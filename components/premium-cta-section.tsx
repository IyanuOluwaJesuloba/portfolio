'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

const signals = [
  { icon: Clock, text: 'Replies within 24 hours' },
  { icon: Globe, text: 'Works with teams globally' },
  { icon: Mail, text: 'Free initial consultation' },
];

export function PremiumCTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0f0a] to-[#4a3220] dark:from-[#0f0805] dark:to-[#3d251e] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8a6239]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* ── Main content ── */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-white/80">Available for new projects</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Got a product to build?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#e8d5a0] to-[#d4af37]">
                Let's build it right.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Whether you're a founder with a vision, a team that needs frontend firepower,
              or a company exploring Web3, I'm here to help you ship something you're proud of.
            </p>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#e5c158] text-[#1a0f0a] font-bold rounded-xl text-base transition-colors shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0f0a] group"
            >
              <Mail className="h-5 w-5" />
              Start a Conversation
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>

            <a
              href="https://github.com/IyanuOluwaJesuloba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 hover:border-white/50 text-white font-bold rounded-xl text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0f0a]"
            >
              <Github className="h-5 w-5" />
              See My Code
            </a>
          </motion.div>

          {/* ── Trust signals ── */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            {signals.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="h-4 w-4 text-white/40" />
                  {s.text}
                </div>
              );
            })}
          </motion.div>

          {/* ── Location note ── */}
          <motion.p
            className="text-center text-xs text-white/35 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Based in Ibadan, Nigeria · Working with teams across Africa, Europe, and North America
          </motion.p>

        </div>
      </div>
    </section>
  );
}
