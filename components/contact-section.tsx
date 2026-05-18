'use client';

import React from 'react';
import { Mail, Linkedin, Clock, MessageSquare } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jesulobaowoseni1@gmail.com',
    href: 'mailto:jesulobaowoseni1@gmail.com',
    note: 'Best for project enquiries and detailed briefs',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/IyanuOluwaJesuloba',
    href: 'https://github.com/IyanuOluwaJesuloba',
    note: 'Browse my code and open-source contributions',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/iyanuoluwa-owoseni',
    href: 'https://www.linkedin.com/in/iyanuoluwa-owoseni/',
    note: 'Connect professionally or send a quick message',
  },
];

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-[#faf9f7] via-[#d4c4b0] to-[#c4bfb8] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] overflow-hidden w-full"
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
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-[1.1] tracking-tight mb-4">
              Let's work on something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                worth building.
              </span>
            </h2>
            <p className="text-base text-[#4a4238] dark:text-[#d4c4b0] max-w-xl leading-relaxed">
              I'm open to freelance projects, contract engagements, and full-time roles.
              Tell me what you're working on — even if it's just an idea — and let's figure
              out if I'm the right person to help.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

            {/* LEFT — channels + context */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
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
                    Usually much faster on weekdays
                  </p>
                </div>
              </div>

              {/* What to include */}
              <div className="p-5 rounded-xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/70 dark:bg-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="h-4 w-4 text-[#8a6239] dark:text-[#d4c4b0]" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0]">
                    What to include
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    'What you\'re building and who it\'s for',
                    'The problem you need solved',
                    'Your timeline and budget range',
                    'Whether you need frontend, Web3, or both',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4a4238] dark:text-[#d4c4b0]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8a6239] dark:bg-[#d4c4b0] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact channels */}
              <div className="space-y-3">
                {channels.map((ch, i) => (
                  <motion.a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#d4c4b0]/50 dark:border-white/12 bg-white/70 dark:bg-white/5 hover:border-[#d4af37]/60 dark:hover:border-[#d4af37]/40 hover:shadow-md transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#f0ede9] dark:bg-[#d4af37] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8e3db] dark:group-hover:bg-white/12 transition-colors">
                      <ch.icon className="h-5 w-5 text-[#1a0f0a] dark:text-[#f5f1ed]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">{ch.label}</p>
                      <p className="text-xs text-[#8a6239] dark:text-[#d4c4b0] truncate">{ch.value}</p>
                      <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] mt-0.5">{ch.note}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — form */}
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
                    Prefer email? Reach me at{' '}
                    <a
                      href="mailto:jesulobaowoseni1@gmail.com"
                      className="text-[#8a6239] dark:text-[#d4c4b0] underline underline-offset-2 hover:opacity-75 transition-opacity"
                    >
                      jesulobaowoseni1@gmail.com
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
