'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Code, Download, Linkedin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 z-50 w-full border-b border-[#b8b0a8]/50 dark:border-[#4a4238]/50 bg-white/80 dark:bg-[#7a7270]/80 backdrop-blur-md overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between font-hero">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-base sm:text-lg md:text-xl text-black dark:text-white"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Code className="h-6 w-6 text-[#1a0f0a] dark:text-gray-100" />
                <motion.div
                  className="absolute inset-0 bg-[#7a7268]/20 rounded-full blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="group-hover:text-[#1a0f0a] dark:group-hover:text-gray-700 transition-colors">
                IyanuOluwa
              </span>
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2"
          >
            {["About", "Services", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm md:text-base text-black dark:text-[#e8e6e3] hover:text-[#1a0f0a] dark:hover:text-gray-700 transition-colors relative group font-medium"
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7a7268] to-[#7a5230] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:flex items-center gap-2 hidden"
          >
            <ThemeToggle />
            {[
              { icon: SiGithub, href: "https://github.com/IyanuOluwaJesuloba", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/iyanuoluwa-owoseni/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jesulobaowoseni1@gmail.com", label: "Email" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-black dark:text-white hover:text-[#1a0f0a] dark:hover:text-[#1a0f0a] hover:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20">
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="ml-2 border-[#d4c4b0] dark:border-[#4a3220] text-[#1a0f0a] dark:text-[#000000] dark:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20 hidden sm:flex text-xs sm:text-sm"
              >
                <a
                  href="https://docs.google.com/document/d/1LZyMlBdzAI_4qbt-9zrRlfISha0jM3R41a8YqIqsBhA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>
            </motion.div>
            <MobileMenu />
          
        </div>
      </div>
    </motion.header>
  );
}






















