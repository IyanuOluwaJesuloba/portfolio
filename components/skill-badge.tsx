import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiFigma,
  SiBun
} from "@icons-pack/react-simple-icons"

interface SkillBadgeProps {
  name: string
  variant?: "default" | "interactive"
}

const skillIcons: { [key: string]: any } = {
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Git": SiGit,
  "GitHub": SiGithub,
  "VS Code": SiVisualstudiocode,
  "Figma": SiFigma,
  "bun": SiBun
}

const skillColors: { [key: string]: string } = {
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "React": "#61DAFB",
  "Next.js": "#000000",
  "Tailwind CSS": "#06B6D4",
  "Git": "#F05032",
  "GitHub": "#181717",
  "VS Code": "#007ACC",
  "Figma": "#F24E1E",
  "bun": "#000000"
}

export function SkillBadge({ name, variant = "default" }: SkillBadgeProps) {
  const Icon = skillIcons[name]
  const color = skillColors[name]

  if (variant === "interactive") {
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Badge
          variant="secondary"
          className="px-4 py-2 text-sm flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 cursor-pointer group"
        >
          {Icon && (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon
                className="h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                style={{ color: color }}
              />
            </motion.div>
          )}
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {name}
          </span>
        </Badge>
      </motion.div>
    )
  }

  return (
    <Badge
      variant="secondary"
      className="px-3 py-1 text-sm flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-200"
    >
      {Icon && <Icon className="h-4 w-4" style={{ color: color }} />}
      <span>{name}</span>
    </Badge>
  )
}
