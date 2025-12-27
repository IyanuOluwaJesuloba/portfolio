'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Code, Globe, Sparkles, Palette, Monitor, Cpu } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const floatingHighlights = [
    {
      id: "systems",
      icon: Sparkles,
      title: "Interface Composer",
      subtitle: "Story-driven visuals",
      position: "top-20 left-10",
      delay: 0,
    },
    {
      id: "ships",
      icon: Code,
      title: "Product Accelerator",
      subtitle: "Launches that stick",
      position: "bottom-32 left-12",
      delay: 0.4,
    },
   
  ];

 

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden w-full font-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedBackground />

      {/* Enhanced Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#4a3220] -z-10"
        style={{ y, opacity }}
      />

      {/* Additional Visual Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#f0e8e0]/20 via-transparent to-transparent dark:from-[#2a1810]/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#b8b0a8]/20 via-transparent to-transparent dark:from-[#3d3530]/20"></div>

      {/* Floating info cards */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingHighlights.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              className={`absolute ${card.position} hidden md:flex items-center gap-3 rounded-2xl px-4 py-3 bg-white/70 dark:bg-[#1a0f0a]/70 backdrop-blur-md border border-white/40 dark:border-[#4a3220]/50 shadow-lg`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            >
              <Icon className="h-5 w-5 text-[#1a0f0a] dark:text-[#f5f1ed]" />
              <div className="text-left">
                <p className="text-sm font-semibold text-[#1a0f0a] dark:text-[#f5f1ed]">{card.title}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#5c3d2e]/70 dark:text-[#d4c4b0]/70">{card.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-1 gap-8 lg:gap-1 items-center place-items-center text-center">
          {/* Enhanced Text Content */}
          <motion.div
            className="space-y-10 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="space-y-8">
              {/* Enhanced Main Heading */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                >
                  <motion.span
                    className="block text-black dark:text-[#c4bfb8] mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Hi, I'm{" "}
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-[#1a0f0a] via-[#3d251e] to-[#1a0f0a] text-[#1a0f0a] dark:text-white bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  >
                    IyanuOluwa Owoseni,
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-[#1a0f0a]/20 to-[#6b4423]/20 rounded-lg blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.span>
                  <motion.span
                    className="block text-[#1a0f0a] dark:text-[#f5f1ed] mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    A Frontend Developer
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="text-base sm:text-lg text-gray-700 dark:text-[#b4aea6] leading-relaxed max-w-3xl font-light mx-auto lg:mx-0">
                  I create{" "}
                  <motion.span
                    className="text-[#1a0f0a] dark:text-[#f5f1ed] font-semibold relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    user-friendly interfaces that make complex systems simple and accessible for all users
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2a1810] dark:bg-[#7a5230]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                  {" "}{" "}
                  <motion.span
                    className="text-gray-700 dark:text-gray-200 font-semibold relative"
                    whileHover={{ scale: 1.05 }}
                  >
                   
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5a5250] dark:bg-[#7a7268]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#1a0f0a] to-[#6b4423] hover:from-[#4a3220] hover:to-[#1a0f0a] text-white shadow-xl hover:shadow-[#5c3d2e]/25 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
                >
                  <Link href="#contact" className="flex items-center gap-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    Let's Work Together
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-[#c4a878] dark:border-[#2a1810] text-[#1a0f0a] dark:text-[#7a5230] hover:bg-[#] dark:hover:bg-[#2a1810]/20 hover:border-[#8a6239] dark:hover:border-[#6b4423] shadow-lg hover:shadow-md transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold backdrop-blur-sm"
                >
                  <Link href="#projects" className="flex items-center gap-3">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    View Portfolio
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center justify-center gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">10+</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">Projects</div>
              </div>
              <div className="w-px h-12 bg-[#b4aea6] dark:bg-[#4a4238]"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">3+</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">Years Exp.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.5em] uppercase text-[#1a0f0a]/70 dark:text-[#f5f1ed]/60"
        animate={{ opacity: [0.4, 1, 0.4], y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span>Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-[#1a0f0a] to-transparent dark:via-[#f5f1ed]"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  );
}














