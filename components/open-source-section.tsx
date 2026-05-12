'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, GitPullRequest, Github } from 'lucide-react';
import { openSourceContributions } from '@/lib/portfolio-data';
import { sectionVariants, headingVariants, cardVariants } from '@/lib/animations';

export function OpenSourceSection() {
  const shouldReduceMotion = useReducedMotion()

  if (!openSourceContributions.length) return null;

  return (
    <motion.section
      id="open-source"
      className="py-16 md:py-24 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] relative overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="max-w-7xl mx-auto" variants={sectionVariants}>
          <motion.div className="text-center mb-12 md:mb-16" variants={headingVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-gray-100 rounded-full text-sm font-medium mb-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            >
              <Github className="h-4 w-4" />
              Open Source
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight">
              Contributions &{' '}
              <span className="gradient-text bg-gradient-to-r from-[#7a7268] via-[#9a9290] to-[#4a3220] bg-clip-text text-transparent">
                PRs
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              Selected open source work—pull requests and improvements shipped to real codebases.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" variants={cardVariants}>
            {openSourceContributions.map((item, index) => (
              <motion.div
                key={`${item.repoUrl}-${index}`}
                variants={cardVariants}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full border border-[#d4c4b0]/40 dark:border-[#4a3220]/50 bg-white/80 dark:bg-[#3d3530]/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-base sm:text-lg font-bold text-black dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="bg-[#d4c4b0] dark:bg-[#7a7270]/30 text-[#1a0f0a] dark:text-gray-100">
                        OSS
                      </Badge>
                    </div>

                    <p className="text-sm text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed mb-5 flex-1">
                      {item.description}
                    </p>

                    {item.tags?.length ? (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.tags.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-gray-100 border border-[#d4c4b0]/50 dark:border-[#4a3220]/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    <div className="flex gap-3">
                      <Button asChild variant="outline" className="flex-1 border-[#d4c4b0] dark:border-[#4a3220]">
                        <Link href={item.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Repo
                          <ExternalLink className="h-3.5 w-3.5 ml-2" />
                        </Link>
                      </Button>

                      {item.prUrl ? (
                        <Button asChild className="flex-1 bg-gradient-to-r from-[#7a7268] to-[#4a3220] hover:from-[#4a3220] hover:to-[#7a7268] text-white">
                          <Link href={item.prUrl} target="_blank" rel="noopener noreferrer">
                            <GitPullRequest className="h-4 w-4 mr-2" />
                            PR
                            <ExternalLink className="h-3.5 w-3.5 ml-2" />
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
