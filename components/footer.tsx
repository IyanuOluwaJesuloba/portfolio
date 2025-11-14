'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Mail, Linkedin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

export function Footer() {
  return (
    <motion.footer
      className="border-t border-[#b8b0a8] dark:border-[#3d3530] bg-white/80 dark:bg-[#7a7270]/80 backdrop-blur-sm py-8 md:py-8 overflow-x-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Code className="h-5 w-5 text-[#1a0f0a] dark:text-gray-100" />
              <span className="font-bold text-base sm:text-lg text-black dark:text-white font-serif">
                IyanuOluwa
              </span>
            </div>
            <p className="text-xs sm:text-sm text-black dark:text-white">
              &copy; {new Date().getFullYear()} IyanuOluwa Owoseni. All rights reserved.
            </p>
            
          </motion.div>

          <motion.div
            className="md:flex gap-3 hidden"
            variants={staggerContainer}
          >
            {[
              { icon: SiGithub, href: "https://github.com/IyanuOluwaJesuloba", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/iyanuoluwa-owoseni/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jesulobaowoseni1@gmail.com", label: "Email" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-black dark:text-white hover:text-[#1a0f0a] dark:hover:text-[#1a0f0a] hover:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20 rounded-full"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}






















