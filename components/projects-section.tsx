'use client';

import React, { useMemo, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ProjectCard } from "@/components/project-card";
import { motion, useReducedMotion } from "framer-motion";
import { sectionVariants, headingVariants, cardVariants } from "@/lib/animations";
import { PortfolioProjectCategory, portfolioProjects } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | PortfolioProjectCategory>("all");
  const shouldReduceMotion = useReducedMotion()

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return portfolioProjects;
    const normalizedActiveCategory = activeCategory.toLowerCase().trim();
    return portfolioProjects.filter((p) => p.category.toLowerCase().trim() === normalizedActiveCategory);
  }, [activeCategory]);

  const featuredProjects = filteredProjects.slice(0, 2);
  const moreProjects = filteredProjects.slice(2);

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] relative overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf9f7]/30 via-transparent to-[#f9f8f7]/30 dark:from-[#1a0f0a]/10 dark:to-[#7a7270]/10 w-full" />
      <motion.div
        className="pointer-events-none absolute top-20 right-0 sm:right-20 w-72 h-72 bg-gradient-to-br from-[#8a6239]/10 to-[#8a6239]/10 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 8,
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
          <motion.div
            className="text-center mb-12"
            variants={headingVariants}
          >
            <div className="mx-auto flex w-fit items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4a4238] dark:text-[#e8e6e3]">
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Selected Work
              </span>
              <span className="hidden sm:block h-px w-10 bg-[#7a7268]/40 dark:bg-[#e8e6e3]/20" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-5 tracking-tight">
              Projects that ship
            </h2>
            <div className="mx-auto max-w-3xl space-y-5">
              <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed">
                A curated mix of Web2 products and Web3 builds—focused on clean UI engineering, performance, and real-world usability.
              </p>

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Project category filters">
              {(
                [
                  { label: "All", value: "all" as const },
                  { label: "Web2", value: "web2" as const },
                  { label: "Web3", value: "web3" as const },
                ]
              ).map((item) => {
                const isActive = item.value === activeCategory;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setActiveCategory(item.value)}
                    aria-pressed={isActive}
                    aria-controls="projects-grid"
                    className={
                      isActive
                        ? "px-4 py-2 rounded-md text-sm font-medium bg-[#1a0f0a] text-white dark:bg-[#f5f1ed] dark:text-[#1a0f0a] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a7268] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f7] dark:focus-visible:ring-offset-[#3d251e]"
                        : "px-4 py-2 rounded-md text-sm font-medium border border-[#d4c4b0]/70 dark:border-[#4a3220]/60 bg-white/30 dark:bg-[#1a0f0a]/10 text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-white/60 dark:hover:bg-[#1a0f0a]/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a7268] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f7] dark:focus-visible:ring-offset-[#3d251e]"
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
              <div className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
                Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
              </div>
            </div>
          </motion.div>

          {/* Featured Project Showcase */}
          {featuredProjects.length ? featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const detailOrder = isEven ? "order-2 lg:order-1" : "order-2 lg:order-2";
            const previewOrder = isEven ? "order-1 lg:order-2" : "order-1 lg:order-1";

            return (
              <motion.div
                key={project.title}
                className="mb-12 px-2 sm:px-0"
                variants={cardVariants}
              >
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  {/* Main Featured Project */}
                  <motion.div
                    className={detailOrder}
                    variants={cardVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="relative bg-white/85 dark:bg-[#3d3530]/85 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-7 shadow-sm border border-[#d4c4b0]/50 dark:border-[#4a3220]/60">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <motion.div
                            className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
                            Live Project
                          </span>
                          <Badge
                            variant="secondary"
                            className="ml-1 bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-gray-100 border border-[#d4c4b0]/60 dark:border-[#4a3220]/60"
                          >
                            {project.category.toUpperCase()}
                          </Badge>
                          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                        </div>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                          {project.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3] mb-4 sm:mb-5">
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#7a7268]" />
                            {project.year ?? ""}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#7a7268]" />
                            {project.team ?? ""}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#7a7268]" />
                            {project.category.toUpperCase()}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-black dark:text-white mb-4 sm:mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-3 sm:mb-4 md:mb-6">
                          <h4 className="text-xs sm:text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3] mb-2 sm:mb-3 uppercase tracking-wide">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                            {project.features?.slice(0, 4).map((feature, featureIndex) => (
                              <motion.div
                                key={`${feature}-${featureIndex}`}
                                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-black dark:text-white"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#7a7268] rounded-full flex-shrink-0"></div>
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
                            {project.tags.map((tech) => (
                              <motion.span
                                key={tech}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#f0ede9] to-[#f0ede9] dark:from-[#1a0f0a]/30 dark:to-[#7a7270]/30 text-[#1a0f0a] dark:text-[#f5f1ed] rounded-full text-xs font-medium border border-[#d4c4b0] dark:border-[#4a3220]"
                                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
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
                            className="flex-1 bg-gradient-to-r from-[#7a7268] to-[#7a7268] hover:from-[#7a7268] hover:to-[#4a3220] text-white shadow-lg hover:shadow-[#7a7268]/25 transition-all duration-300 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a7268] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#3d3530]"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 border-[#c4a878] dark:border-[#7a7268] text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a7268] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#3d3530]"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
                    className={previewOrder}
                    variants={cardVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      <div className="relative bg-white/85 dark:bg-[#3d3530]/85 backdrop-blur-sm rounded-xl p-2.5 md:p-3 shadow-sm border border-[#d4c4b0]/50 dark:border-[#4a3220]/60">
                        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[#e8e6e3] to-[#e0d8d0] dark:from-[#4a4a4a] dark:to-[#7a7270]">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                          {/* Floating Elements */}
                          <motion.div
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 dark:bg-[#3d3530]/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
                          >
                            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                          </motion.div>

                          <motion.div
                            className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white/90 dark:bg-[#3d3530]/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-xs sm:text-sm font-medium text-black dark:text-white">
                              {project.status}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          }) : (
            <div className="mb-12 px-2 sm:px-0 text-center text-sm sm:text-base text-[#4a4238] dark:text-[#e8e6e3]">
              No featured projects found for this filter.
            </div>
          )}

          {/* Other Projects Grid */}
          <motion.div
            className="mb-16 px-2 sm:px-0"
            variants={cardVariants}
          >
            <div className="mb-6 sm:mb-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">
                More Projects
              </h3>
              <div className="mt-2 flex items-center justify-center gap-3 text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
                <span>{moreProjects.length} shown</span>
                <span className="h-1 w-1 rounded-full bg-[#7a7268]" />
                <span>Click a card to explore</span>
              </div>
              <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#7a7268]/40 to-transparent" />
            </div>
            {moreProjects.length ? (
              <div id="projects-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
                {moreProjects.map((project, index) => (
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
            ) : (
              <div className="text-center text-sm sm:text-base text-[#4a4238] dark:text-[#e8e6e3]">
                No projects found for this filter.
              </div>
            )}
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/70 dark:bg-[#3d3530]/60 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 shadow-sm">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black dark:text-white mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to bring your ideas to life with modern web technologies and exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1a0f0a] text-white hover:bg-[#3d251e] dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white transition-colors"
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
                  className="border-[#d4c4b0] dark:border-[#4a3220]/70 text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-[#f5f1ed] dark:hover:bg-[#1a0f0a]/20"
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
























