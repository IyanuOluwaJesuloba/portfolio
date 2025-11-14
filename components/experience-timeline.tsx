"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  TrendingUp,
  Users,
  Code,
  ExternalLink
} from "lucide-react"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const experiences = [
  {
    title: "Frontend Developer",
    company: "Bethel Labs",
    location: "Remote",
    period: "June, 2025 - September, 2025",
    type: "Full-Time",
    description: "Built scalable frontend solutions with focus on performance, accessibility, and modern web standards.",
    achievements: [
      "Engineered interactive component libraries and reusable UI systems",
      "Collaborated with designers to translate Figma mockups into pixel-perfect implementations",
      "Integrated third-party APIs with seamless user experiences"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-[#faf9f7]0 to-[#f9f8f7]0",
    current: false
  },
  {
    title: "Frontend Developer",
    company: "Orglobal Tech Network",
    location: "Ibadan, Nigeria",
    period: "November, 2024 - May, 2025",
    type: "Full-time",
    description: "Developed modern web applications for various clients, focusing on React ecosystem and user experience optimization.",
    achievements: [
      "Built 5+ responsive web applications using React and Next.js",
      "Improved client website performance by 40% through optimization techniques",
      "Implemented modern UI/UX designs with 95% client satisfaction rate",
      "Collaborated with diverse teams"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-[#faf9f7]0 to-[#f9f8f7]0",
    current: false
  },
  {
    title: "Web Development Intern",
    company: "Orglobal Tech Network",
    location: "Ibadan, Nigeria",
    period: "June, 2024 - August, 2024",
    type: "Internship",
    description: "Gained hands-on experience in software development while contributing to real-world projects.",
    achievements: [
      "Developed responsive components for the company's product",
      "Participated in code reviews and learned industry best practices",
      "Contributed to improving the development workflow and documentation",
      "Mentored students and helped onboard new team members"
    ],
    technologies: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "CSS3", "Git"],
    color: "from-green-500 to-teal-500",
    current: false
  },

]

const stats = [
  { icon: Code, label: "Projects Completed", value: "10+", color: "text-gray-700" },
  { icon: Award, label: "Years Experience", value: "3+", color: "text-gray-700" },
  { icon: TrendingUp, label: "Success Rate", value: "95%", color: "text-orange-600" }
]

export function ExperienceTimeline() {
  return (
    <motion.section 
      id="experience" 
      className="py-12 md:py-20 bg-gradient-to-br from-[#d4c4b0] via-[#c4bfb8] to-[#e0d8d0] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] overflow-hidden w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={itemVariants}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={cardVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4c4b0] dark:bg-[#7a7270]/30 text-[#1a0f0a] dark:text-gray-100 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Briefcase className="h-4 w-4" />
              Professional Journey
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              Experience &{" "}
              <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-base sm:text-lg text-black dark:text-white max-w-2xl mx-auto">
              My professional journey in software development, from learning the fundamentals to building complex applications.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="border-0 bg-white/80 dark:bg-[#3d3530]/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#f0ede9] to-[#e8e3db] dark:from-[#f5f1ed]/30 dark:to-[#f5f1ed] flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </motion.div>
                    <div className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-black dark:text-white">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="relative"
            variants={containerVariants}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7a7268] to-[#9a9290] transform md:-translate-x-0.5" />

            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} transform md:-translate-x-2 z-10 border-4 border-white dark:border-[#2a1810]`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                <motion.div
                  key={experience.title}
                  className={`flex-1 w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-0 bg-white dark:bg-[#3d3530] shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7a7268] max-w-lg mx-auto md:max-w-none">
                    <CardContent className="p-4 md:p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[#1a0f0a] dark:text-gray-100 font-medium mb-2">
                            <span>{experience.company}</span>
                            {experience.current && (
                              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {experience.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-black dark:text-white">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-black dark:text-white mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3] mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="text-sm text-black dark:text-white flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-1.5 h-1.5 bg-[#7a7268] rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3] mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-[#d4c4b0] dark:bg-[#7a7270]/30 text-[#1a0f0a] dark:text-gray-100"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
























