'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, Clock, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { PORTFOLIO_CONFIG } from '@/lib/constants';

const signals = [
  { icon: Clock, text: 'Replies within 24 hours' },
  { icon: Globe, text: 'Nigeria (GMT+1) · Overlaps UK/EU hours · Global remote' },
  { icon: ShieldCheck, text: 'Open to full-time, contract & fellowship roles' },
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
              <span className="text-sm font-medium text-white/90">Available for new opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Have a problem
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#e8d5a0] to-[#d4af37]">
                worth solving with software?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
              Whether you are building an accessible web application, removing friction from a Web3 experience,
              or engineering smart contracts on Stellar and EVM, let's build software that makes a real difference.
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
              Send a Message
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>

            <a
              href={PORTFOLIO_CONFIG.SOCIAL_LINKS.BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 hover:border-white/50 bg-white/10 text-white font-bold rounded-xl text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0f0a]"
            >
              <Calendar className="h-5 w-5" />
              Book a 1:1 Intro Call
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
            {signals.map((sig) => {
              const Icon = sig.icon;
              return (
                <div
                  key={sig.text}
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/80"
                >
                  <Icon className="h-4 w-4 text-[#d4af37] flex-shrink-0" />
                  <span>{sig.text}</span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
