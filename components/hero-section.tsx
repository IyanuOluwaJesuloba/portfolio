'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Code, Globe } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedBackground />

      {/* Enhanced Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white/30 to-blue-50/50 dark:from-purple-900/20 dark:via-gray-900/50 dark:to-blue-900/20 -z-10"
        style={{ y, opacity }}
      />

      {/* Additional Visual Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20"></div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Text Content */}
          <motion.div
            className="space-y-10 text-center lg:text-left"
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
                    className="block text-gray-900 dark:text-gray-100 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Hi, I'm{" "}
                  </motion.span>
                  <motion.span
                    className="block gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  >
                    IyanuOluwa Owoseni,
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur-xl"
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
                    className="block text-purple-600 dark:text-purple-400 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
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
                <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl font-light mx-auto lg:mx-0">
                  I create{" "}
                  <motion.span
                    className="text-purple-600 dark:text-purple-400 font-semibold relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    user-friendly interfaces that make complex systems simple and accessible for all users
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                  {" "}{" "}
                  <motion.span
                    className="text-blue-600 dark:text-blue-400 font-semibold relative"
                    whileHover={{ scale: 1.05 }}
                  >
                   
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
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
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
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
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-purple-500/25 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
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
                  className="border-2 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-600 shadow-lg hover:shadow-md transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold backdrop-blur-sm"
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
              className="flex items-center justify-center lg:justify-start gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">2+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Section */}
          <motion.div
            className="relative flex items-center justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          >
            {/* Main Visual Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-300/30 dark:border-purple-600/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-blue-300/30 dark:border-blue-600/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 border-2 border-purple-300/30 dark:border-purple-600/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Central Content */}
              <motion.div
                className="absolute inset-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-800/20 shadow-2xl flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="h-10 w-10 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">Frontend</div>
                    <div className="text-base sm:text-lg text-purple-600 dark:text-purple-400">Developer</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: "⚛️", position: "top-0 left-1/4", delay: 0 },
                { icon: "📱", position: "top-1/4 right-0", delay: 0.5 },
                { icon: "🎨", position: "bottom-0 right-1/4", delay: 1 },
                { icon: "⚡", position: "bottom-1/4 left-0", delay: 1.5 },
                { icon: "🚀", position: "top-1/2 left-0", delay: 2 },
                { icon: "💻", position: "top-1/2 right-0", delay: 2.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-xl border border-gray-200 dark:border-gray-700`}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
