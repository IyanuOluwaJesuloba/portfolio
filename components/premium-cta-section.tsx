'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PremiumCTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a0f0a] dark:from-[#0f0805] to-[#6b4423] dark:to-[#3d251e] relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div className="space-y-6 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm font-medium text-white">Ready to build something great?</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Work Together to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f0e8e0] to-[#d4af37]">
                Create Amazing Products
              </span>
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Whether you're launching a startup, scaling a platform, or solving complex problems with Web3, I'm here to help turn your vision into reality.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-[#d4af37] text-[#1a0f0a] hover:bg-[#e5c158] font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all group"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send a Message
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20 text-white/70 space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">💡 Free consultation • 24-hour response time • Available for retainers & one-off projects</p>
            <p className="text-xs">Based in Nigeria • Working globally • Open to partnerships</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
