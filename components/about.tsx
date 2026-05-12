'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Download, Code, Heart, Users, Calendar, TrendingUp, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { sectionVariants, headingVariants, cardVariants, staggerContainer } from "@/lib/animations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-[#e8e3db] via-[#d4c4b0] to-[#c4bfb8] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] relative overflow-hidden scroll-mt-20 w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <motion.div
        className="pointer-events-none absolute top-10 left-0 sm:left-10 w-64 h-64 bg-gradient-to-br from-[#8a6239]/10 to-[#7a7268]/10 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-0 sm:right-10 w-48 h-48 bg-gradient-to-br from-[#7a7268]/10 to-[#8a6239]/10 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -40, 0],
                y: [0, 40, 0],
                scale: [1, 0.9, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={sectionVariants}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            variants={headingVariants}
          >
            <div className="mx-auto flex w-fit items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4a4238] dark:text-[#e8e6e3]">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                About
              </span>
              <span className="hidden sm:block h-px w-10 bg-[#7a7268]/40 dark:bg-[#e8e6e3]/20" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-5 tracking-tight">
              Building with intention
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              Frontend developer and Web3 fullstack engineer focused on clean UI, performance, and dependable execution.
            </p>
          </motion.div>

          {/* Main Content - Timeline Style */}
          <div className="max-w-5xl mx-auto mb-16 md:mb-20">
            {/* Flowing Content Layout */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px bg-[#7a7268]/35 dark:bg-[#e8e6e3]/15 transform -translate-x-px hidden lg:block"></div>

              {/* Content Sections */}
              <div className="space-y-16">
                {/* Journey Section */}
                <motion.div
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true}}
                >
                  <div className="text-center lg:text-right lg:pr-8">
                    <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
                      <motion.div
                        className="w-14 h-14 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full flex items-center justify-center shadow-sm"
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: 120 }}
                        transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
                      >
                        <Code className="h-7 w-7 text-white dark:text-[#1a0f0a]" />
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#7a7268] to-transparent lg:hidden"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">
                      My Journey
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed">
                      I'm a passionate frontend developer with expertise in modern web technologies like React, Next.js,
                      and TypeScript. My journey expanded into blockchain development, where I specialize in smart contract
                      programming with Solidity, Web3.js, and Ethers.js. I transform complex ideas into beautiful, functional,
                      and secure digital solutions that bridge traditional web development with decentralized technologies.
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-3.5 h-3.5 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full transform -translate-x-[7px] border-2 border-white/80 dark:border-[#3d251e] hidden lg:block"></div>

                  <div className="lg:pl-8 mt-8 lg:mt-0">
                    <div className="bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm rounded-xl p-6 md:p-7 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 border-l-2 border-l-[#7a7268]/70 text-center lg:text-left shadow-sm">
                      <h4 className="font-semibold text-black dark:text-white mb-3">Technical Expertise</h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"].map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-gray-100 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-[#d4c4b0]/60 dark:border-[#4a3220]/60"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Motivation Section */}
                <motion.div
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:order-2 lg:pl-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-6 justify-center lg:flex-row-reverse lg:justify-start">
                      <motion.div
                        className="w-14 h-14 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full flex items-center justify-center shadow-sm"
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: 120 }}
                        transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
                      >
                        <Heart className="h-7 w-7 text-white dark:text-[#1a0f0a]" />
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-l from-[#5a5250] to-transparent lg:hidden"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">
                      What Drives Me
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed">
                      I believe in the power of technology to solve real-world problems and improve people's lives.
                      Every line of code I write is driven by the desire to create meaningful, user-centered experiences
                      that not only look great but also perform exceptionally well.
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-3.5 h-3.5 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full transform -translate-x-[7px] border-2 border-white/80 dark:border-[#3d251e] hidden lg:block"></div>

                  <div className="lg:order-1 lg:pr-8 mt-8 lg:mt-0">
                    <div className="bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm rounded-xl p-6 md:p-7 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 border-r-2 border-r-[#7a7268]/70 text-center lg:text-left shadow-sm">
                      <h4 className="font-semibold text-black dark:text-white mb-3">Core Values</h4>
                      <ul className="space-y-2">
                        {["User-Centered Design", "Performance Optimization", "Accessibility First", "Clean Code Practices"].map((value, index) => (
                          <motion.li
                            key={value}
                            className="flex items-center gap-3 text-sm sm:text-base text-[#4a4238] dark:text-[#e8e6e3] justify-center lg:justify-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-[#5a5250] rounded-full"></div>
                            {value}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Community Section */}
                <motion.div
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center lg:text-right lg:pr-8">
                    <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
                      <motion.div
                        className="w-14 h-14 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full flex items-center justify-center shadow-sm"
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: 120 }}
                        transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
                      >
                        <Users className="h-7 w-7 text-white dark:text-[#1a0f0a]" />
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#7a7268] to-transparent lg:hidden"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">
                      Beyond Coding
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, writing technical articles, or mentoring aspiring developers. I'm always eager to
                      learn, share knowledge, and grow with the amazing developer community.
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-3.5 h-3.5 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full transform -translate-x-[7px] border-2 border-white/80 dark:border-[#3d251e] hidden lg:block"></div>

                  <div className="lg:pl-8 mt-8 lg:mt-0">
                    <div className="bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm rounded-xl p-6 md:p-7 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 border-l-2 border-l-[#7a7268]/70 text-center lg:text-left shadow-sm">
                      <h4 className="font-semibold text-black dark:text-white mb-3">Community Involvement</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-black dark:text-white">Writing</div>
                          <div className="text-black dark:text-white">Technical articles</div>
                        </div>
                        <div>
                          <div className="font-medium text-black dark:text-white">Mentoring</div>
                          <div className="text-black dark:text-white">Helping developers</div>
                        </div>
                        <div>
                          <div className="font-medium text-black dark:text-white">Learning</div>
                          <div className="text-black dark:text-white">New technologies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Professional Summary */}
            <motion.div
              className="text-center mt-20 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/70 dark:bg-[#3d3530]/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 shadow-sm">
                  <p className="text-sm sm:text-base md:text-lg text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed mb-8">
                    With over 3 years of experience in frontend development, I specialize in creating responsive,
                    user-friendly web applications that combine technical excellence with exceptional design.
                    My approach focuses on writing clean, maintainable code while ensuring optimal performance
                    and accessibility.
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#7a7268] rounded-full"></div>
                      <span className="text-sm sm:text-base text-black dark:text-white">Ibadan, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#5a5250] rounded-full"></div>
                      <span className="text-sm sm:text-base text-black dark:text-white">Web Accessibility & Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#7a7268] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#7a7268] rounded-full"></div>
                      <span className="text-sm sm:text-base text-black dark:text-white">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#1a0f0a] text-white hover:bg-[#3d251e] dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white transition-colors"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Let's Connect
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#d4c4b0] dark:border-[#4a3220]/70 text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#1a0f0a]/20 w-full sm:w-auto"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Resume
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 sm:w-48">
                  <DropdownMenuItem asChild>
                    <a
                      href="/Iyanuoluwa Owoseni-- Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      View Resume
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/Iyanuoluwa Owoseni-- Resume.pdf"
                      download
                      className="cursor-pointer"
                    >
                      Download Resume
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: "10+", label: "Projects Completed", icon: Code },
              { number: "3+", label: "Years Experience", icon: Calendar },
              { number: "95%", label: "Satisfaction Rate", icon: TrendingUp }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="text-center group"
              >
                <div className="bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60">
                  <motion.div
                    className="w-11 h-11 mx-auto mb-4 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <stat.icon className="h-6 w-6 text-white dark:text-[#1a0f0a]" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#4a4238] dark:text-[#e8e6e3] font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}






















