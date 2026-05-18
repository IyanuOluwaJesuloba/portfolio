'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Code2 } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    icon: SiGithub,
    href: 'https://github.com/IyanuOluwaJesuloba',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/iyanuoluwa-owoseni/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:jesulobaowoseni1@gmail.com',
    label: 'Email',
  },
];

export function Footer() {
  return (
    <motion.footer
      className="border-t border-[#d4c4b0]/50 dark:border-[#3d3530] bg-white/80 dark:bg-[#1a0f0a]/80 backdrop-blur-sm w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">

          {/* Left — brand + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center">
                <Code2 className="h-4 w-4 text-white dark:text-[#1a0f0a]" />
              </div>
              <span className="font-bold text-base text-[#1a0f0a] dark:text-[#f5f1ed] font-hero">
                IyanuOluwa Owoseni
              </span>
            </div>
            <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0] max-w-xs leading-relaxed mb-4">
              Frontend developer and Web3 engineer. Building clean, fast, accessible products
              for teams that care about quality.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-[#d4c4b0]/60 dark:border-[#4a3220]/60 bg-white/60 dark:bg-[#3d3530]/60 flex items-center justify-center text-[#4a4238] dark:text-[#d4c4b0] hover:border-[#8a6239] dark:hover:border-[#d4c4b0] hover:text-[#1a0f0a] dark:hover:text-[#f5f1ed] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — nav links */}
          <nav aria-label="Footer navigation">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a6239] dark:text-[#d4c4b0] mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#4a4238] dark:text-[#d4c4b0] hover:text-[#1a0f0a] dark:hover:text-[#f5f1ed] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#d4c4b0]/40 dark:border-[#3d3530] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[#7a7268] dark:text-[#7a7268]">
            &copy; {new Date().getFullYear()} IyanuOluwa Owoseni. All rights reserved.
          </p>
          <p className="text-xs text-[#7a7268] dark:text-[#7a7268]">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
