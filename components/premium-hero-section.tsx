'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code, Sparkles, Shield, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PremiumHeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden pt-20 md:pt-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#3d3530]" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#8a6239]/20 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-[#7a5230]/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Premium Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4c4b0]/70 bg-white/60 dark:bg-[#1a0f0a]/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#8a6239] dark:text-[#d4c4b0]" />
              <span className="text-sm font-medium text-[#1a0f0a] dark:text-[#e8e6e3]">
                Senior Full-Stack Engineer
              </span>
            </div>
          </motion.div>

          {/* Main Heading - Premium Typography */}
          <motion.div
            className="text-center mb-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a0f0a] via-[#4a4238] to-[#1a0f0a] dark:from-[#f5f1ed] dark:via-[#e8e6e3] dark:to-[#f5f1ed]">
                I Build Digital
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] via-[#7a7268] to-[#8a6239] dark:from-[#d4c4b0] dark:via-[#c4b0a0] dark:to-[#d4c4b0]">
                Experiences That Matter
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#4a4238] dark:text-[#d4c4b0] max-w-3xl mx-auto leading-relaxed font-light">
              Crafting high-performance, accessible frontend solutions and Web3 products that solve real problems and drive meaningful business results.
            </p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: Code, label: '11+ Production Projects', desc: 'Web2 & Web3 shipped at scale' },
              { icon: Gauge, label: 'Performance First', desc: 'Sub-second load times guaranteed' },
              { icon: Shield, label: 'Security Focused', desc: 'Enterprise-grade code practices' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-lg border border-[#d4c4b0]/40 dark:border-[#4a3220]/60 bg-white/50 dark:bg-[#3d3530]/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-[#4a3220]/80 transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <item.icon className="w-6 h-6 text-[#8a6239] dark:text-[#d4c4b0] mb-2" />
                <p className="font-semibold text-[#1a0f0a] dark:text-[#f5f1ed] text-sm">{item.label}</p>
                <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1a0f0a] to-[#6b4423] hover:from-[#4a3220] hover:to-[#1a0f0a] text-white shadow-xl hover:shadow-2xl transition-all px-8 py-4 text-lg font-semibold group"
              >
                <Link href="#projects" className="flex items-center gap-3">
                  View Work
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#8a6239] dark:border-[#6b4423] text-[#1a0f0a] dark:text-[#d4c4b0] hover:bg-[#f0e8e0] dark:hover:bg-[#4a3220] px-8 py-4 text-lg font-semibold"
              >
                <Link href="#contact">Schedule a Call</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-12 pt-8 border-t border-[#d4c4b0]/30 dark:border-[#4a3220]/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { number: '500K+', label: 'Lines of Code' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '3+', label: 'OSS Contributions' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                  {stat.number}
                </div>
                <div className="text-sm text-[#4a4238] dark:text-[#d4c4b0] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <div className="text-xs font-semibold text-[#4a4238] dark:text-[#d4c4b0] mb-2">Scroll</div>
          <div className="w-6 h-10 border-2 border-[#8a6239] dark:border-[#d4c4b0] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-[#8a6239] dark:bg-[#d4c4b0] rounded-full mt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
