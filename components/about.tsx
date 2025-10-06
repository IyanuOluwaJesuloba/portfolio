'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Download, Code, Heart, Users, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariants, headingVariants, cardVariants, staggerContainer } from "@/lib/animations";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10 relative overflow-hidden scroll-mt-20 w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 left-0 sm:left-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-0 sm:right-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={sectionVariants}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={headingVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="h-4 w-4" />
              Get to Know Me
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About{" "}
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </motion.div>

          {/* Main Content - Timeline Style */}
          <div className="max-w-6xl mx-auto mb-20">
            {/* Flowing Content Layout */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform -translate-x-0.5 hidden lg:block"></div>

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
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Code className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent lg:hidden"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      My Journey
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      I'm a passionate frontend developer with expertise in modern web technologies like React, Next.js,
                      and TypeScript. My journey expanded into blockchain development, where I specialize in smart contract
                      programming with Solidity, Web3.js, and Ethers.js. I transform complex ideas into beautiful, functional,
                      and secure digital solutions that bridge traditional web development with decentralized technologies.
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-2 border-4 border-white dark:border-gray-900 shadow-lg hidden lg:block"></div>

                  <div className="lg:pl-8 mt-8 lg:mt-0">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-l-4 border-purple-500 text-center lg:text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Technical Expertise</h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"].map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-purple-200 dark:border-purple-800"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
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
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Heart className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-l from-blue-500 to-transparent lg:hidden"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      What Drives Me
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      I believe in the power of technology to solve real-world problems and improve people's lives.
                      Every line of code I write is driven by the desire to create meaningful, user-centered experiences
                      that not only look great but also perform exceptionally well.
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 border-4 border-white dark:border-gray-900 shadow-lg hidden lg:block"></div>

                  <div className="lg:order-1 lg:pr-8 mt-8 lg:mt-0">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-r-4 border-blue-500 text-center lg:text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Core Values</h4>
                      <ul className="space-y-2">
                        {["User-Centered Design", "Performance Optimization", "Accessibility First", "Clean Code Practices"].map((value, index) => (
                          <motion.li
                            key={value}
                            className="flex items-center gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 justify-center lg:justify-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Users className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent lg:hidden"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Beyond Coding
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, writing technical articles, or mentoring aspiring developers. I'm always eager to
                      learn, share knowledge, and grow with the amazing developer community.
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-2 border-4 border-white dark:border-gray-900 shadow-lg hidden lg:block"></div>

                  <div className="lg:pl-8 mt-8 lg:mt-0">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-l-4 border-purple-500 text-center lg:text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Community Involvement</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">Writing</div>
                          <div className="text-gray-600 dark:text-gray-400">Technical articles</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">Mentoring</div>
                          <div className="text-gray-600 dark:text-gray-400">Helping developers</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">Learning</div>
                          <div className="text-gray-600 dark:text-gray-400">New technologies</div>
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
                <div className="bg-gradient-to-r from-purple-50 via-white to-blue-50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/50">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    With over 2 years of experience in frontend development, I specialize in creating responsive,
                    user-friendly web applications that combine technical excellence with exceptional design.
                    My approach focuses on writing clean, maintainable code while ensuring optimal performance
                    and accessibility.
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Ibadan, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Web Accessibility & Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Open to opportunities</span>
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
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Let's Connect
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                <Link href="/resume.pdf" target="_blank" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
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
              { number: "5+", label: "Projects Completed", icon: Code },
              { number: "2+", label: "Years Experience", icon: Calendar },
              { number: "95%", label: "Satisfaction Rate", icon: TrendingUp }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
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