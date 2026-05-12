import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Calendar, Users, Globe } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import type { PortfolioProjectCategory } from "@/lib/portfolio-data"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  category?: PortfolioProjectCategory
  status?: string
  year?: string
  team?: string
  features?: string[]
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  category,
  status = "Completed",
  year = "2024",
  team = "Solo",
  features = []
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.004 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Card className="relative z-10 overflow-hidden flex flex-col h-full border border-[#d4c4b0]/45 dark:border-[#4a3220]/55 bg-white/85 dark:bg-[#3d3530]/85 backdrop-blur-sm shadow-sm group-hover:shadow-md transition-all duration-300 rounded-xl mx-auto max-w-sm sm:max-w-none">
        <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          {/* Enhanced Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.38 : 0.14 }}
            transition={{ duration: 0.4 }}
          />

          {/* Animated Status Badge */}
          <motion.div
            className="absolute top-2 left-2 sm:top-4 sm:left-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <div className="flex items-center gap-2">
              <Badge
                className={
                  status === "Work in Progress"
                    ? "bg-white/20 text-white border border-white/20 backdrop-blur-sm text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1"
                    : "bg-white/20 text-white border border-white/20 backdrop-blur-sm text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1"
                }
              >
                {status}
              </Badge>

              {category && (
                <Badge className="bg-white/15 text-white border border-white/20 backdrop-blur-sm text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1">
                  {category.toUpperCase()}
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Enhanced Quick Actions */}
          <motion.div
            className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-2"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : -10
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 sm:h-10 sm:w-10 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border border-white/20 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
              onClick={() => setShowPreview(!showPreview)}
              aria-label={showPreview ? "Hide project preview" : "Show project preview"}
              aria-pressed={showPreview}
              aria-expanded={showPreview}
            >
              <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </motion.div>

          {/* Enhanced Project Meta Info */}
          <motion.div
            className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-1.5 sm:p-2 md:p-3 border border-white/20">
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    {year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    {team}
                  </div>
                </div>
                <motion.div
                  className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                >
                  <Globe className="h-3 w-3" />
                  Live
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Particles Effect */}
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 w-2 h-2 bg-[#7a5230] rounded-full"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 30, -20, 0],
                    y: [0, -20, 30, 0],
                    opacity: [0, 1, 1, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        </div>

        <CardContent className="flex-1 p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-5">
          <div className="space-y-2 sm:space-y-3">
            <motion.h3
              className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>
            <p className="text-xs sm:text-sm md:text-base text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed h-16 sm:h-20 md:h-24 overflow-hidden">
              {description}
            </p>
          </div>

          {/* Technology Stack with Enhanced Design */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="text-xs sm:text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3]">Tech Stack</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-[#f0e8e0] to-transparent dark:from-[#4a3220]"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-[#f5f1ed] transition-colors cursor-pointer border border-[#d4c4b0]/70 dark:border-[#4a3220]/70 shadow-none text-xs sm:text-sm"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Features Preview */}
          {features && features.length > 0 && (
            <motion.div
              className="space-y-3 h-40"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showPreview ? 1 : 0,
                height: showPreview ? "10rem" : 0
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <h4 className="text-xs sm:text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3]">Key Features</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent dark:from-green-800"></div>
              </div>
              <div className="bg-white/60 dark:bg-[#1a0f0a]/20 rounded-lg p-3 border border-[#d4c4b0]/40 dark:border-[#4a3220]/40 overflow-hidden">
                <ul className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3] space-y-2">
                  {features.slice(0, 3).map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#7a7268] rounded-full flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="border-t border-[#b8b0a8]/70 dark:border-[#4a3220]/40 p-3 sm:p-4 md:p-6 bg-white/30 dark:bg-[#1a0f0a]/10">
          <div className="flex flex-row gap-2 sm:gap-3 w-full">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1a0f0a] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3d251e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a7268] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white dark:focus-visible:ring-offset-[#3d3530] sm:text-sm"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Live Demo
              </a>
            </motion.div>
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#d4c4b0] bg-transparent px-4 py-2 text-xs font-semibold text-[#1a0f0a] transition-colors hover:bg-[#f5f1ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a7268] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-[#4a3220]/70 dark:text-[#f5f1ed] dark:hover:bg-[#1a0f0a]/20 dark:focus-visible:ring-offset-[#3d3530] sm:text-sm"
              >
                <SiGithub className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:rotate-12" />
                Source Code
              </a>
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}






















