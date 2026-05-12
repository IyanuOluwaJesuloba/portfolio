'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    role: 'Product Lead',
    company: 'FinTech Startup',
    image: '👨‍💼',
    content:
      'IyanuOluwa transformed our vision into a scalable platform that handled $2M+ in transactions. The attention to detail and performance optimization was exceptional.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'CTO',
    company: 'Web3 Protocol',
    image: '👩‍💻',
    content:
      'Working with him was a game-changer. Smart contract integration was seamless, security was top-notch, and the user experience exceeded expectations.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder',
    company: 'AI Content Platform',
    image: '👨‍🎓',
    content:
      'Remarkable ability to solve complex problems elegantly. Delivered on time, wrote maintainable code, and proactively improved the architecture.',
    rating: 5,
  },
];

const metrics = [
  { icon: Users, label: '50+', value: 'Satisfied Clients' },
  { icon: Star, label: '4.9/5', value: 'Average Rating' },
  { icon: CheckCircle2, label: '100%', value: 'Project Success' },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#5c3d2e] dark:via-[#3d251e] dark:to-[#4a3220] relative overflow-hidden"
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
              Social Proof
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-6 leading-tight">
              What Clients Say
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                About Working Together
              </span>
            </h2>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  className="text-center p-6 rounded-lg border border-[#d4c4b0]/40 dark:border-[#4a3220]/60 bg-white/50 dark:bg-[#3d3530]/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-8 h-8 text-[#8a6239] dark:text-[#d4c4b0] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">{metric.label}</div>
                  <div className="text-sm text-[#4a4238] dark:text-[#d4c4b0] mt-2">{metric.value}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="p-6 md:p-8 rounded-xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm hover:border-[#8a6239] dark:hover:border-[#d4c4b0] transition-all group hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, ridx) => (
                    <Star
                      key={ridx}
                      className="w-4 h-4 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#4a4238] dark:text-[#d4c4b0] mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[#d4c4b0]/30 dark:border-[#4a3220]/50 pt-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-[#4a4238] dark:text-[#d4c4b0]">
                      {testimonial.role} @ {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-r from-[#f0ede9] to-[#e8e3db] dark:from-[#4a3220] dark:to-[#3d251e] border border-[#d4c4b0]/50 dark:border-[#4a3220]/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-6 text-center">
              Trusted By Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {['FinTech Startups', 'Web3 Protocols', 'Fortune 500s', 'AI Companies', 'Agencies', 'Enterprises'].map(
                (company, idx) => (
                  <motion.div
                    key={idx}
                    className="p-3 rounded-lg bg-white/60 dark:bg-[#1a0f0a]/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xs font-semibold text-[#4a4238] dark:text-[#d4c4b0]">{company}</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
