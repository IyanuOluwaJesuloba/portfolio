"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Terminal,
  Layers,
  Shield,
  Coins
} from "lucide-react"

interface Skill {
  name: string
  level: number
  category: string
  icon: any
  color: string
}

const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", icon: Code2, color: "#61DAFB" },
  { name: "TypeScript", level: 90, category: "Frontend", icon: Code2, color: "#3178C6" },
  { name: "Next.js", level: 88, category: "Frontend", icon: Globe, color: "#000000" },
  { name: "Tailwind CSS", level: 92, category: "Styling", icon: Palette, color: "#06B6D4" },
  { name: "JavaScript", level: 94, category: "Frontend", icon: Code2, color: "#F7DF1E" },
  { name: "HTML5", level: 96, category: "Frontend", icon: Code2, color: "#E34F26" },
  { name: "CSS3", level: 93, category: "Styling", icon: Palette, color: "#1572B6" },
  { name: "Git", level: 85, category: "Tools", icon: GitBranch, color: "#F05032" },
  { name: "Figma", level: 80, category: "Design", icon: Layers, color: "#F24E1E" },
  { name: "VS Code", level: 90, category: "Tools", icon: Terminal, color: "#007ACC" },
]

export function SkillChart() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = Array.from(new Set(skills.map(skill => skill.category)))
  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center">
        <motion.button
          onClick={() => setSelectedCategory(null)}
          className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Skills
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
        layout
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className="group"
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon 
                    className="h-4 w-4 sm:h-5 sm:w-5" 
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>
              <motion.span 
                className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400"
                animate={{ 
                  scale: hoveredSkill === skill.name ? 1.1 : 1,
                  color: hoveredSkill === skill.name ? skill.color : undefined
                }}
              >
                {skill.level}%
              </motion.span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-2 sm:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Summary */}
      <motion.div 
        className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl border border-purple-200 dark:border-purple-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
              {skills.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Avg. Proficiency
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
              {categories.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Categories
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
              2+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
