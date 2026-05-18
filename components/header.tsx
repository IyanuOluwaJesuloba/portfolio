'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download, ChevronDown } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileMenu } from '@/components/mobile-menu';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#d4c4b0]/40 dark:border-white/8 bg-white/90 dark:bg-[#1a0f0a]/95 backdrop-blur-xl shadow-sm shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] rounded-lg"
          >
            {/* Monogram mark */}
            <div className="w-8 h-8 rounded-lg bg-[#1a0f0a] dark:bg-[#f5f1ed] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white dark:text-[#1a0f0a] text-xs font-black tracking-tight">IO</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#1a0f0a] dark:text-[#f5f1ed] leading-none">
                IyanuOluwa
              </p>
              <p className="text-[10px] text-[#7a7268] dark:text-white/40 leading-none mt-0.5">
                Frontend · Web3
              </p>
            </div>
          </Link>

          {/* ── Desktop nav — centred ── */}
          <nav
            className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-[#4a4238] dark:text-white/65 hover:text-[#1a0f0a] dark:hover:text-white transition-colors duration-150 rounded-lg hover:bg-[#1a0f0a]/5 dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <ThemeToggle />

            {/* GitHub — desktop only */}
            <a
              href="https://github.com/IyanuOluwaJesuloba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden lg:flex w-9 h-9 items-center justify-center rounded-lg text-[#4a4238] dark:text-white/60 hover:text-[#1a0f0a] dark:hover:text-white hover:bg-[#1a0f0a]/5 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239]"
            >
              <SiGithub className="h-4.5 w-4.5 h-[18px] w-[18px]" />
            </a>

            {/* Resume — desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1a0f0a] dark:bg-[#f5f1ed] text-white dark:text-[#1a0f0a] text-xs font-bold hover:bg-[#3d251e] dark:hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6239] focus-visible:ring-offset-2">
                  <Download className="h-3.5 w-3.5" />
                  Resume
                  <ChevronDown className="h-3 w-3 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem asChild>
                  <a href="/IYANUOLUWA OWOSENI'S RESUME.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    View Resume
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/IYANUOLUWA OWOSENI'S RESUME.pdf" download className="cursor-pointer">
                    Download PDF
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu toggle */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
