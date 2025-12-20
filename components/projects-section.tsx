'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";
import { sectionVariants, headingVariants, cardVariants } from "@/lib/animations";

const projects = [
  {
    title: "Brain-Wave",
    description: "An AI-powered platform that revolutionizes content creation with advanced video editing, image generation, and editing capabilities. Built with modern React architecture and sleek UI design.",
    tags: ["React", "Tailwind CSS", "AI Integration", "Responsive Design"],
    imageUrl: "/Brainwave.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/brain_wave",
    liveUrl: "https://brain-wave-zeta-six.vercel.app/",
    status: "Work in Progress",
    year: "2025",
    team: "Solo",
    features: [
      "AI-powered video editing tools",
      "Advanced image generation",
      "Real-time preview capabilities",
      "Responsive design across devices"
    ]
  },
  {
    title: "MentorMatch",
    description: "A mentor matching application designed to connect experienced professionals with mentees seeking guidance and support. The application features a comprehensive matching algorithm, and a user-friendly interface for seamless communication.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    imageUrl: "/project2.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/mentorship-platform--3-",
    liveUrl: "https://mentorship-platform-3.vercel.app/",
    status: "Work In Progress",
    year: "2025",
    team: "Solo",
    features: [
      "Comprehensive matching algorithm for ideal mentor-mentee pairs",
      "Comprehensive analytics for data-driven decision making",
      "User-friendly interface for easy navigation and use"
    ]
  },
  {
    title: "Collective Investment Platform",
    description: "An innovative fintech solution that enables groups to collectively invest in Play-to-Earn blockchain games. Features secure investment tracking, automated returns distribution, and comprehensive analytics.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "/Saving-app.jpg",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/saving_app",
    liveUrl: "https://saving-app-jet.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: [
      "Secure group investment management",
      "Automated ROI distribution",
      "Real-time performance tracking",
      "Blockchain integration"
    ]
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website for a client, showcasing their skills and experience as a shopify designer. Features a clean and minimalistic design, advanced animations, and a responsive layout across devices.",
    tags: ["TypeScript","Next.js", "Tailwind CSS"],
    imageUrl: "/Portfolio.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/Ebube.Portfolio",
    liveUrl: "https://ebubeportfolio.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: [
      "Responsive design for optimal viewing on various devices",
      "Advanced animations for enhanced user experience",
      "Clean and minimalistic design for effective communication of skills and experience",
    ]
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-20 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] relative overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f7]/30 via-transparent to-[#f9f8f7]/30 dark:from-[#1a0f0a]/10 dark:to-[#7a7270]/10 w-full" />
      <motion.div
        className="absolute top-20 right-0 sm:right-20 w-72 h-72 bg-gradient-to-br from-[#8a6239]/10 to-[#8a6239]/10 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f0ede9] to-[#f0ede9] dark:from-[#1a0f0a]/30 dark:to-[#7a7270]/30 text-[#1a0f0a] dark:text-gray-100 rounded-full text-sm font-medium mb-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="h-4 w-4" />
              Portfolio Showcase
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
              Featured{" "}
              <span className="gradient-text bg-gradient-to-r from-[#7a7268] via-[#7a7268] to-[#4a3220] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              Discover my latest work featuring cutting-edge technologies, innovative solutions, and exceptional user experiences that drive real business results.
            </p>
          </motion.div>

          {/* Featured Project Showcase */}
          <motion.div
            className="mb-16 px-2 sm:px-0"
            variants={cardVariants}
          >
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Main Featured Project */}
              <motion.div
                className="order-2 lg:order-1"
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#7a7268] to-[#7a7268] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-[#7a7270] rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <motion.div
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
                        Live Project
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                      {projects[0].title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-black dark:text-white mb-4 sm:mb-6 leading-relaxed">
                      {projects[0].description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3] mb-2 sm:mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                        {projects[0].features?.slice(0, 4).map((feature, index) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-black dark:text-white"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#f5f1ed]0 rounded-full flex-shrink-0"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3] mb-2 sm:mb-3 uppercase tracking-wide">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {projects[0].tags.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#f0ede9] to-[#f0ede9] dark:from-[#1a0f0a]/30 dark:to-[#7a7270]/30 text-[#1a0f0a] dark:text-[#1a0f0a] rounded-full text-xs font-medium border border-[#d4c4b0] dark:border-[#4a3220]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row gap-2 sm:gap-3 md:gap-4">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-[#7a7268] to-[#7a7268] hover:from-[#7a7268] hover:to-[#4a3220] text-white shadow-lg hover:shadow-[#f5f1ed]0/25 transition-all duration-300 text-xs sm:text-sm"
                      >
                        <a href={projects[0].liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#c4a878] dark:border-[#7a7268] text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20 text-xs sm:text-sm"
                      >
                        <a href={projects[0].githubUrl} target="_blank" rel="noopener noreferrer">
                          <SiGithub className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Preview */}
              <motion.div
                className="order-1 lg:order-2"
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#7a7268] to-[#7a7268] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-[#7a7270] rounded-2xl p-2 sm:p-3 md:p-4 shadow-2xl">
                    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#e8e6e3] to-[#e0d8d0] dark:from-[#4a4a4a] dark:to-[#7a7270]">
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
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 dark:bg-[#7a7270]/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                      </motion.div>

                      <motion.div
                        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white/90 dark:bg-[#7a7270]/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-xs sm:text-sm font-medium text-black dark:text-white">
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
            className="mb-16 px-2 sm:px-0"
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 sm:mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
              {projects.slice(1).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#faf9f7] to-[#f9f8f7] dark:from-[#1a0f0a]/20 dark:to-[#7a7270]/20 rounded-2xl p-6 md:p-8 lg:p-12 border border-[#d4c4b0]/50 dark:border-[#4a3220]/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black dark:text-white mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with modern web technologies and exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#7a7268] to-[#7a7268] hover:from-[#7a7268] hover:to-[#4a3220] text-white shadow-lg hover:shadow-[#f5f1ed]0/25 transition-all duration-300"
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
                  className="border-[#c4a878] dark:border-[#7a7268] text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20"
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
  );
}
























