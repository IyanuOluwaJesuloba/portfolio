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
      className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10 overflow-hidden w-full"
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
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              Technical Expertise
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
              Skills &{" "}
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl border border-purple-200/50 dark:border-purple-800/50"
          >
            <SkillChart />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
