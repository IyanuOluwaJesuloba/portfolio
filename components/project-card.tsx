import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Calendar, Users, Globe } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  status?: string
  year?: string
  team?: string
  features?: string[]
}

const techIcons: { [key: string]: string } = {
  "React": "⚛️",
  "Next.js": "▲",
  "TypeScript": "📘",
  "JavaScript": "🟨",
  "Tailwind CSS": "🎨",
  "CSS3": "🎨",
  "HTML5": "🌐",
  "Node.js": "🟢",
  "MongoDB": "🍃",
  "Firebase": "🔥",
  "Vercel": "▲",
  "Git": "📝"
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  status = "Completed",
  year = "2024",
  team = "Solo",
  features = []
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

      <Card className="relative overflow-hidden flex flex-col h-full border-0 bg-white dark:bg-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-500 rounded-2xl mx-auto max-w-sm sm:max-w-none">
        <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />

          {/* Enhanced Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
          />

          {/* Animated Status Badge */}
          <motion.div
            className="absolute top-2 left-2 sm:top-4 sm:left-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Badge
              className={`${
                status === "Work in Progress"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 shadow-orange-500/25"
                  : "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/25"
              } text-white border-0 shadow-lg backdrop-blur-sm text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1`}
            >
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1 sm:mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {status}
            </Badge>
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
              className="h-8 w-8 sm:h-10 sm:w-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/20 shadow-lg"
              onClick={() => setShowPreview(!showPreview)}
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
                  whileHover={{ scale: 1.05 }}
                >
                  <Globe className="h-3 w-3" />
                  Live
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Particles Effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <CardContent className="flex-1 p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-5">
          <div className="space-y-2 sm:space-y-3">
            <motion.h3
              className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed h-16 sm:h-20 md:h-24 overflow-hidden">
              {description}
            </p>
          </div>

          {/* Technology Stack with Enhanced Design */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent dark:from-purple-800"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 transition-all duration-200 cursor-pointer border border-purple-200 dark:border-purple-800 shadow-sm text-xs sm:text-sm"
                  >
                    <span className="mr-1 sm:mr-1.5 text-xs sm:text-sm">{techIcons[tag] || "🔧"}</span>
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
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent dark:from-green-800"></div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800 overflow-hidden">
                <ul className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  {features.slice(0, 3).map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="border-t border-gray-100 dark:border-gray-800 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-gray-50/50 to-purple-50/30 dark:from-gray-800/50 dark:to-purple-900/20">
          <div className="flex flex-row gap-2 sm:gap-3 w-full">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full group hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-600 text-gray-600 dark:text-gray-400 transition-all duration-300 border-2"
              >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm">
                  <SiGithub className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform duration-200" />
                  Source Code
                </Link>
              </Button>
            </motion.div>
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="sm"
                asChild
                className="w-full group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 border-0"
              >
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm">
                  <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  Live Demo
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
