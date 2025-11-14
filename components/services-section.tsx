"use client"

import { motion } from "framer-motion"
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
    color: "from-[#faf9f7]0 to-cyan-500"
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
    color: "from-[#faf9f7]0 to-pink-500"
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
    color: "from-teal-500 to-[#f9f8f7]0"
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
  return (
    <motion.section 
      id="services" 
      className="py-12 md:py-20 bg-gradient-to-br from-[#faf9f7] via-[#e8e3db] to-[#d4c4b0] dark:from-[#5c3d2e] dark:via-[#3d251e] dark:to-[#4a3220] overflow-hidden w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={cardVariants}
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
              viewport={{ once: true }}
            >
              <Code2 className="h-4 w-4" />
              What I Do
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              Services &{" "}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg text-black dark:text-white max-w-2xl mx-auto">
              Comprehensive frontend development services to bring your digital vision to life with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-[#f9f8f7] dark:from-[#4a4a4a] dark:to-[#7a7270] shadow-lg hover:shadow-xl transition-all duration-300 group w-full">
                  <CardContent className="p-6 md:p-8">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-200`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[#1a0f0a] dark:group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-black dark:text-white mb-6 leading-relaxed">
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
                            className="text-xs bg-[#d4c4b0] dark:bg-[#7a7270]/30 text-[#1a0f0a] dark:text-[#1a0f0a] hover:bg-[#d4c4b0] dark:hover:bg-[#7a7270]/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="mt-6 pt-6 border-t border-[#b8b0a8] dark:border-[#4a4238]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      
                    </motion.div>
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
            <p className="text-sm sm:text-base text-black dark:text-white mb-6">
              Ready to start your next project?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#7a7268] to-[#4a3220] hover:from-[#4a3220] hover:to-[#7a7270] text-white rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-[#5c3d2e]/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
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
























