'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowRight, Code, Globe, ChevronLeft, ChevronRight, Download, Sparkles, Linkedin, Users, Calendar, TrendingUp, Heart } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import Image from "next/image"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"

import { SkillChart } from "@/components/skill-chart"
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { MobileMenu } from "@/components/mobile-menu"
import { ServicesSection } from "@/components/services-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { TechStackShowcase } from "@/components/code-showcase"

import { motion, useScroll, useTransform } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projects = [
    {
      title: "Brain-Wave",
      description: "An AI-powered platform that revolutionizes content creation with advanced video editing, image generation, and editing capabilities. Built with modern React architecture and sleek UI design.",
      tags: ["React", "Tailwind CSS", "AI Integration", "Responsive Design"],
      imageUrl: "/Brainwave.png",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/brain_wave",
      liveUrl: "https://brain-wave-zeta-six.vercel.app/",
      status: "Work in Progress",
      year: "2024",
      team: "Solo",
      features: [
        "AI-powered video editing tools",
        "Advanced image generation",
        "Real-time preview capabilities",
        "Responsive design across devices"
      ]
    },
    {
      title: "Smart-SEQ",
      description: "A comprehensive productivity application designed for modern teams. Features intuitive drag-and-drop task management, real-time collaboration, and advanced project tracking capabilities.",
      tags: ["TypeScript", "React", "Tailwind CSS", "Drag & Drop"],
      imageUrl: "/smart.png",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/Smart-SEQ",
      liveUrl: "https://smart-seq-eight.vercel.app/",
      status: "Completed",
      year: "2024",
      team: "Solo",
      features: [
        "Drag-and-drop task management",
        "Real-time team collaboration",
        "Advanced project analytics",
        "Customizable workflows"
      ]
    },
    {
      title: "Collective Investment Platform",
      description: "An innovative fintech solution that enables groups to collectively invest in Play-to-Earn blockchain games. Features secure investment tracking, automated returns distribution, and comprehensive analytics.",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Blockchain"],
      imageUrl: "/Saving-app.jpg",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/saving_app",
      liveUrl: "https://saving-app-jet.vercel.app/",
      status: "Completed",
      year: "2024",
      team: "Solo",
      features: [
        "Secure group investment management",
        "Automated ROI distribution",
        "Real-time performance tracking",
        "Blockchain integration"
      ]
    },
    {
      title: "Synergy Marketplace",
      description: "A modern e-commerce platform that connects families with local producers, promoting community-driven commerce. Features advanced search, secure payments, and producer verification systems.",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "E-commerce"],
      imageUrl: "/Synergy-app.jpg",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/synergy-real",
      liveUrl: "https://synergy-app-livid.vercel.app/",
      status: "Completed",
      year: "2024",
      team: "Solo",
      features: [
        "Advanced product search & filtering",
        "Secure payment processing",
        "Producer verification system",
        "Community-driven reviews"
      ]
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 transition-colors duration-500">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-xl text-gray-800 dark:text-gray-200"
            >
              <Link href="/" className="flex items-center gap-2 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <motion.div
                    className="absolute inset-0 bg-purple-600/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-serif">
                  IyanuOluwa
                </span>
              </Link>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex gap-8"
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
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group font-medium"
                  >
                    {item}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300"
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
              className="flex items-center gap-2"
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
                    <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20">
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
                  variant="outline"
                  size="sm"
                  className="ml-2 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hidden sm:flex"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </motion.div>

              <MobileMenu />
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="pt-16">
        {/* Enhanced Hero Section */}
        <motion.section
          id="hero"
          className="relative min-h-screen flex items-center overflow-hidden"
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight"
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
                        IyanuOluwa
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
                        className="block text-purple-600 dark:text-purple-400 mt-4 text-3xl md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        Frontend (Web2) & Smart Contract Developer
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
                    <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl font-light mx-auto lg:mx-0">
                      I create{" "}
                      <motion.span
                        className="text-purple-600 dark:text-purple-400 font-semibold relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        user-friendly interfaces
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.span>
                      {" "}and{" "}
                      <motion.span
                        className="text-blue-600 dark:text-blue-400 font-semibold relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        secure smart contracts
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.span>
                    </div>

                    {/* Key Skills Preview */}
                    <motion.div
                      className="flex flex-wrap gap-3 justify-center lg:justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      {/* {["React", "Next.js", "Solidity", "Foundry", "TypeScript", "Hardhat"].map((skill, index) => (
                        <motion.span
                          key={}
                          className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))} */}
                    </motion.div>
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
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-purple-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                    >
                      <Link href="#contact" className="flex items-center gap-3">
                        <Mail className="h-6 w-6" />
                        Let's Work Together
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-6 w-6" />
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
                      className="border-2 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-600 shadow-lg hover:shadow-md transition-all duration-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                    >
                      <Link href="#projects" className="flex items-center gap-3">
                        <Globe className="h-6 w-6" />
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
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                  {/* <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">8+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                  </div> */}
                  <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Visual Section */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                {/* Main Visual Container */}
                <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
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
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Frontend</div>
                        <div className="text-lg text-purple-600 dark:text-purple-400">Developer</div>
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

        {/* Enhanced About Section */}
        <motion.section
          id="about"
          className="py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10 relative overflow-hidden scroll-mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Background Elements */}
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  About{" "}
                  <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          My Journey
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
                                className="px-3 py-1 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium shadow-sm border border-purple-200 dark:border-purple-800"
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
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          What Drives Me
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
                                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 justify-center lg:justify-start"
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
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          Beyond Coding
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
                      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                        With over 2 years of experience in frontend development, I specialize in creating responsive,
                        user-friendly web applications that combine technical excellence with exceptional design.
                        My approach focuses on writing clean, maintainable code while ensuring optimal performance
                        and accessibility.
                      </p>

                      {/* Quick Info */}
                      <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">📍 Ibadan, Nigeria</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">🎯 Web Accessibility & Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">✨ Open to opportunities</span>
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
                      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={sectionVariants}
            >
              <motion.div
                className="text-center mb-12"
                variants={headingVariants}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Code className="h-4 w-4" />
                  Technical Expertise
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Skills &{" "}
                  <span className="gradient-text">Technologies</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200/50 dark:border-purple-800/50"
              >
                <SkillChart />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-12 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-900/10 dark:to-blue-900/10" />
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-7xl mx-auto"
              variants={sectionVariants}
            >
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
                  <Globe className="h-4 w-4" />
                  Portfolio Showcase
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Featured{" "}
                  <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Discover my latest work featuring cutting-edge technologies, innovative solutions, and exceptional user experiences that drive real business results.
                </p>
              </motion.div>

              {/* Featured Project Showcase */}
              <motion.div
                className="mb-16"
                variants={cardVariants}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Main Featured Project */}
                  <motion.div
                    className="order-2 lg:order-1"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            className="w-3 h-3 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            Live Project
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          {projects[0].title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                          {projects[0].description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {projects[0].features?.slice(0, 4).map((feature, index) => (
                              <motion.div
                                key={feature}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                {feature}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {projects[0].tags.map((tech) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <Button
                            asChild
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                          >
                            <Link href={projects[0].liveUrl} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          >
                            <Link href={projects[0].githubUrl} target="_blank" rel="noopener noreferrer">
                              <SiGithub className="mr-2 h-4 w-4" />
                              Source Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Preview */}
                  <motion.div
                    className="order-1 lg:order-2"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-2xl">
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                          <Image
                            src={projects[0].imageUrl}
                            alt={projects[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                          {/* Floating Elements */}
                          <motion.div
                            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Globe className="h-5 w-5 text-purple-600" />
                          </motion.div>

                          <motion.div
                            className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {projects[0].status}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Other Projects Grid */}
              <motion.div
                className="mb-16"
                variants={cardVariants}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                  More Projects
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.slice(1).map((project, index) => (
                    <motion.div
                      key={project.title}
                      variants={cardVariants}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Call to Action */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-800/50">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                    Let's collaborate to bring your ideas to life with modern web technologies and exceptional user experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      <Link href="#contact">
                        <Mail className="mr-2 h-5 w-5" />
                        Start a Project
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      <Link href="https://github.com/IyanuOluwaJesuloba" target="_blank" rel="noopener noreferrer">
                        <SiGithub className="mr-2 h-5 w-5" />
                        View All Projects
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <ServicesSection />

        {/* Experience Timeline */}
        <ExperienceTimeline />



        {/* Tech Stack Showcase */}
        <TechStackShowcase />


        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={sectionVariants}
            >
              <motion.div
                className="text-center mb-12"
                variants={headingVariants}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Mail className="h-4 w-4" />
                  Let's Connect
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Get In{" "}
                  <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  I'm currently open to new opportunities and interesting projects. Let's discuss how we can work together!
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  variants={fadeInUp}
                  className="space-y-8"
                >
                  <motion.div
                    className="space-y-6"
                    variants={staggerContainer}
                  >
                    {[
                      {
                        icon: Mail,
                        href: "mailto:jesulobaowoseni1@gmail.com",
                        text: "jesulobaowoseni1@gmail.com",
                        label: "Email",
                        description: "Send me an email anytime"
                      },
                      {
                        icon: SiGithub,
                        href: "https://github.com/IyanuOluwaJesuloba",
                        text: "github.com/IyanuOluwaJesuloba",
                        label: "GitHub",
                        description: "Check out my repositories"
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/iyanuoluwa-owoseni/",
                        text: "linkedin.com/in/iyanuoluwa-owoseni",
                        label: "LinkedIn",
                        description: "Let's connect professionally"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.text}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            className="p-3 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              {item.description}
                            </p>
                            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                              {item.text}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200" />
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200/50 dark:border-purple-800/50">
                    <ContactForm />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-8 md:py-12"
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
                <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="font-bold text-lg text-gray-900 dark:text-gray-100 font-serif">
                  IyanuOluwa
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} IyanuOluwa Owoseni. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </motion.div>

            <motion.div
              className="flex gap-3"
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
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full"
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
    </div>
  )
}
 