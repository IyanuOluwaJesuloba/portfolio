'use client';

import React from 'react';
import { Mail, Linkedin, Clock, MessageSquare, Calendar, Globe, MapPin } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import { PORTFOLIO_CONFIG } from '@/lib/constants';

const channels = [
  {
    icon: Calendar,
    label: 'Book a 1:1 Intro Call',
    value: 'cal.com/iyanuoluwa-owoseni',
    href: PORTFOLIO_CONFIG.SOCIAL_LINKS.BOOKING,
    note: 'Fastest way to schedule a 15-30 min video chat directly on my calendar',
    highlight: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: PORTFOLIO_CONFIG.CONTACT_EMAIL,
    href: `mailto:${PORTFOLIO_CONFIG.CONTACT_EMAIL}`,
    note: 'Best for project briefs, scope documents, and detailed inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/iyanuoluwa-owoseni',
    href: PORTFOLIO_CONFIG.SOCIAL_LINKS.LINKEDIN,
    note: 'Connect professionally or send a direct message',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/IyanuOluwaJesuloba',
    href: PORTFOLIO_CONFIG.SOCIAL_LINKS.GITHUB,
    note: 'Review recent commits, Soroban repos, and pull requests',
  },
];

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-[#faf9f7] via-[#d4c4b0] to-[#c4bfb8] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] overflow-hidden w-full scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

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
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
              Let's build software that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                solves real world problems.
              </span>
            </h2>
            <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
              Based in Nigeria (GMT+1): overlaps with UK/EU working hours; open to Nigerian and remote roles worldwide.
              Whether you have a full-time role, a product in need of frontend leadership, or a Web3 milestone to deliver, let's connect.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

            {/* Left column: channels and context */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Dual Market Support Pill */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-[#d4c4b0]/60 dark:border-white/12 bg-white/70 dark:bg-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#8a6239]/15 dark:bg-[#d4c4b0]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                    Timezone & Location
                  </p>
                  <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0]">
                    Nigeria (GMT+1) · Overlaps standard UK/EU business hours · Seamless remote collaboration
                  </p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/70 dark:bg-white/5">
                <div className="w-9 h-9 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-green-700 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">
                    Typically replies within 24 hours
                  </p>
                  <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0]">
                    Usually within 2-4 hours on weekdays
                  </p>
                </div>
              </div>

              {/* Contact channels (includes Cal.com booking link) */}
              <div className="space-y-3">
                {channels.map((ch, i) => (
                  <motion.a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2 ${
                      ch.highlight
                        ? 'border-[#8a6239] dark:border-[#d4af37] bg-[#8a6239]/10 dark:bg-[#d4af37]/10 shadow-sm'
                        : 'border-[#d4c4b0]/50 dark:border-white/12 bg-white/70 dark:bg-white/5 hover:border-[#8a6239]/60 dark:hover:border-white/30'
                    }`}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        ch.highlight
                          ? 'bg-[#8a6239] dark:bg-[#d4af37] text-white dark:text-[#1a0f0a]'
                          : 'bg-[#f0ede9] dark:bg-white/10 text-[#1a0f0a] dark:text-[#f5f1ed] group-hover:bg-[#e8e3db] dark:group-hover:bg-white/15'
                      }`}
                    >
                      <ch.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">{ch.label}</p>
                        {ch.highlight && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#8a6239] dark:bg-[#d4af37] text-white dark:text-[#1a0f0a]">
                            Instant Booking
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#8a6239] dark:text-[#d4c4b0] truncate font-medium">{ch.value}</p>
                      <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] mt-0.5">{ch.note}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right column: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-1">
                    Send a message
                  </h3>
                  <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0]">
                    Direct email:{' '}
                    <a
                      href={`mailto:${PORTFOLIO_CONFIG.CONTACT_EMAIL}`}
                      className="text-[#8a6239] dark:text-[#d4c4b0] font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
                    >
                      {PORTFOLIO_CONFIG.CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
