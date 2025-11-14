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
      className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-[#c4bfb8] via-[#d4c4b0] to-[#e0d8d0] dark:from-[#5c3d2e] dark:via-[#3d251e] dark:to-[#4a3220] overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={sectionVariants}
        >
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            variants={headingVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#d4c4b0] dark:bg-[#7a7270]/30 text-[#1a0f0a] dark:text-gray-100 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              Technical Expertise
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Skills &{" "}
              <span className="gradient-text bg-gradient-to-r from-[#7a7268] via-[#9a9290] to-[#7a7270] bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-white max-w-2xl mx-auto px-2">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white/80 dark:bg-[#7a7270]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/50"
          >
            <SkillChart />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}























