"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant web applications using modern frameworks and best practices.",
    features: [
      "React & Next.js Applications",
      "TypeScript Implementation",
      "State Management (Redux)",
      "API Integration & Data Fetching",
      "Progressive Web Apps (PWA)"
    ],
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
    color: "from-[#faf9f7] to-cyan-500"
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, interactive user interfaces with attention to detail.",
    features: [
      "Figma to Code Conversion",
      "Responsive Design Implementation",
      "CSS Animations & Transitions",
      "Component Library Development",
      "Design System Implementation"
    ],
    technologies: ["Tailwind CSS", "Styled Components", "Framer Motion", "CSS3"],
    color: "from-[#faf9f7] to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes.",
    features: [
      "Responsive Web Design",
      "Touch-Friendly Interfaces",
      "Mobile Performance Optimization",
      "Cross-Browser Compatibility",
      "Accessibility Compliance"
    ],
    technologies: ["PWA", "Responsive Design", "Mobile UX"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Collaboration & Consulting",
    description: "Working with teams to deliver high-quality solutions and provide technical guidance.",
    features: [
      "Code Review & Mentoring",
      "Team Collaboration",
      "Project Management",
      "Best Practices Implementation"
    ],
    technologies: ["Git", "GitHub", "Code Review"],
    color: "from-teal-500 to-[#f9f8f7]"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section 
      id="services" 
      className="py-16 md:py-24 bg-gradient-to-br from-[#faf9f7] via-[#e8e3db] to-[#d4c4b0] dark:from-[#5c3d2e] dark:via-[#3d251e] dark:to-[#4a3220] overflow-hidden w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={cardVariants}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            variants={cardVariants}
          >
            <div className="mx-auto flex w-fit items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4a4238] dark:text-[#e8e6e3]">
              <span className="inline-flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Services
              </span>
              <span className="hidden sm:block h-px w-10 bg-[#7a7268]/40 dark:bg-[#e8e6e3]/20" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-5 tracking-tight">
              Services & Expertise
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              Comprehensive frontend development services to bring your digital vision to life with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border border-[#d4c4b0]/45 dark:border-[#4a3220]/55 bg-white/80 dark:bg-[#3d3530]/75 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group w-full rounded-xl">
                  <CardContent className="p-6 md:p-8">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-6 group-hover:scale-105 transition-transform duration-200`}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white mb-3 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#4a4238] dark:text-[#e8e6e3] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-xs sm:text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          <span className="text-[#4a4238] dark:text-[#e8e6e3]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#4a4238] dark:text-[#e8e6e3]">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {service.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-gray-100 border border-[#d4c4b0]/60 dark:border-[#4a3220]/60"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={cardVariants}
          >
            <p className="text-sm sm:text-base text-[#4a4238] dark:text-[#e8e6e3] mb-6">
              Ready to start your next project?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1a0f0a] text-white hover:bg-[#3d251e] dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white rounded-lg text-sm sm:text-base font-medium transition-colors"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
























