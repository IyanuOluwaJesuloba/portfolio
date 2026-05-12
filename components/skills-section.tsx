'use client';

import React from 'react';
import { Code } from "lucide-react";
import { SkillChart } from "@/components/skill-chart";
import { motion } from "framer-motion";
import { sectionVariants, headingVariants, cardVariants } from "@/lib/animations";

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-br from-[#c4bfb8] via-[#d4c4b0] to-[#e0d8d0] dark:from-[#5c3d2e] dark:via-[#3d251e] dark:to-[#4a3220] overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={sectionVariants}
        >
          <motion.div
            className="text-center mb-12"
            variants={headingVariants}
          >
            <div className="mx-auto flex w-fit items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4a4238] dark:text-[#e8e6e3]">
              <span className="inline-flex items-center gap-2">
                <Code className="h-4 w-4" />
                Skills
              </span>
              <span className="hidden sm:block h-px w-10 bg-[#7a7268]/40 dark:bg-[#e8e6e3]/20" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-5 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              A focused snapshot of the tools I use to build fast, accessible interfaces and dependable Web3 experiences.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#d4c4b0]/50 dark:border-[#4a3220]/60"
          >
            <SkillChart />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}























