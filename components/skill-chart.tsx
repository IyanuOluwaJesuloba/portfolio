"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import {
  Code2,
  Palette,
  Database,
  Globe,
  GitBranch,
  Terminal,
  Layers,
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
  const shouldReduceMotion = useReducedMotion()

  const categories = Array.from(new Set(skills.map(skill => skill.category)))
  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <motion.button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-[#1a0f0a] text-white dark:bg-[#f5f1ed] dark:text-[#1a0f0a] shadow-sm'
              : 'border border-[#d4c4b0]/70 dark:border-[#4a3220]/60 bg-white/30 dark:bg-[#1a0f0a]/10 text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-white/60 dark:hover:bg-[#1a0f0a]/20'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          All Skills
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-[#1a0f0a] text-white dark:bg-[#f5f1ed] dark:text-[#1a0f0a] shadow-sm'
                : 'border border-[#d4c4b0]/70 dark:border-[#4a3220]/60 bg-white/30 dark:bg-[#1a0f0a]/10 text-[#1a0f0a] dark:text-[#f5f1ed] hover:bg-white/60 dark:hover:bg-[#1a0f0a]/20'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
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
            className="group rounded-xl border border-[#d4c4b0]/45 dark:border-[#4a3220]/55 bg-white/70 dark:bg-[#3d3530]/60 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow"
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  className="p-2 rounded-lg group-hover:scale-105 transition-transform duration-200"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon 
                    className="h-4 w-4 sm:h-5 sm:w-5" 
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-black dark:text-white tracking-tight">
                    {skill.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
                    {skill.category}
                  </p>
                </div>
              </div>
              <motion.span 
                className="text-base sm:text-lg font-bold text-[#1a0f0a] dark:text-gray-100"
                animate={{ 
                  scale: hoveredSkill === skill.name ? 1.05 : 1,
                  color: hoveredSkill === skill.name ? skill.color : undefined
                }}
              >
                {skill.level}%
              </motion.span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-2.5 bg-[#b8b0a8]/60 dark:bg-[#1a0f0a]/25 rounded-full overflow-hidden">
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
                animate={
                  shouldReduceMotion || hoveredSkill !== skill.name
                    ? undefined
                    : { x: ['-100%', '100%'] }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }
                }
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Summary */}
      <motion.div 
        className="mt-4 sm:mt-6 md:mt-8 p-4 md:p-6 bg-white/55 dark:bg-[#1a0f0a]/15 rounded-xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#1a0f0a] dark:text-gray-100">
              {skills.length}
            </div>
            <div className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#1a0f0a] dark:text-gray-100">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
              Avg. Proficiency
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#1a0f0a] dark:text-gray-100">
              {categories.length}
            </div>
            <div className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
              Categories
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#1a0f0a] dark:text-gray-100">
              3+
            </div>
            <div className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3]">
              Years Experience
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}























