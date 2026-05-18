"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Copy,
  ExternalLink,
  Terminal,
  FileCode,
  Zap,
  Globe,
  Layers,
  TrendingUp,
  CheckCircle,
  Mail,
  Shield
} from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionA = motion.a

const techStack = [
  {
    category: "Frontend Development",
    icon: Code2,
    color: "from-[#faf9f7] to-[#7a7268]",
    technologies: [
      { name: "React", level: 95, description: "Component-based UI development with hooks and context" },
      { name: "Next.js", level: 90, description: "Full-stack React framework with SSR and API routes" },
      { name: "TypeScript", level: 88, description: "Type-safe JavaScript for scalable applications" },
      { name: "Tailwind CSS", level: 92, description: "Utility-first CSS framework for rapid UI development" },
      { name: "JavaScript ES6+", level: 94, description: "Modern JavaScript features and best practices" },
      { name: "HTML5 & CSS3", level: 96, description: "Semantic markup and advanced styling techniques" }
    ]
  },
  {
    category: "Smart Contract Development",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    technologies: [
      { name: "Solidity", level: 85, description: "Smart contract development for Ethereum and EVM chains" },
      { name: "Foundry", level: 82, description: "JavaScript library for blockchain interactions" },
      { name: "Hardhat", level: 80, description: "Development environment for smart contract testing" },
      { name: "OpenZeppelin", level: 85, description: "Secure smart contract libraries and standards" },
    ]
  },
  {
    category: "Development Tools",
    icon: Terminal,
    color: "from-[#faf9f7] to-pink-600",
    technologies: [
      { name: "Git & GitHub", level: 92, description: "Version control and collaborative development" },
      { name: "VS Code", level: 94, description: "Primary development environment with extensions" },
      { name: "Node.js", level: 86, description: "JavaScript runtime for backend development" },
      { name: "npm/yarn", level: 90, description: "Package management and dependency handling" },
      { name: "Webpack/Vite", level: 78, description: "Module bundling and build optimization" },
      { name: "ESLint/Prettier", level: 88, description: "Code quality and formatting tools" }
    ]
  },
  {
    category: "Blockchain Ecosystem",
    icon: Globe,
    color: "from-orange-500 to-red-600",
    technologies: [
      { name: "Ethereum", level: 75, description: "Primary blockchain for smart contract deployment" },
     
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
};

export function TechStackShowcase() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection
      id="tech-stack"
      className="py-16 md:py-24 bg-gradient-to-br from-[#e0d8d0] via-[#f0e8e0] to-[#faf9f7] dark:from-[#5c3d2e] dark:via-[#3d251e] dark:to-[#4a3220] overflow-hidden w-full relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Subtle Background Elements */}
      <MotionDiv
        className="pointer-events-none absolute top-10 left-0 sm:left-10 w-64 h-64 bg-gradient-to-br from-[#8a6239]/10 to-[#7a7268]/10 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      <MotionDiv
        className="pointer-events-none absolute bottom-10 right-0 sm:right-10 w-48 h-48 bg-gradient-to-br from-[#7a7268]/10 to-[#8a6239]/10 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -40, 0],
                y: [0, 40, 0],
                scale: [1, 0.9, 1],
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv
          className="max-w-5xl mx-auto"
          variants={cardVariants}
        >
          {/* Professional Header */}
          <MotionDiv
            className="text-center mb-12"
            variants={cardVariants}
          >
            <div className="mx-auto flex w-fit items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4a4238] dark:text-[#e8e6e3]">
              <span className="inline-flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Stack
              </span>
              <span className="hidden sm:block h-px w-10 bg-[#7a7268]/40 dark:bg-[#e8e6e3]/20" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-5 tracking-tight">
              Tools I work with
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              Specialized in frontend development, combining modern web technologies with creative ideas to create exceptional digital experiences.
            </p>
          </MotionDiv>

          <MotionDiv
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {techStack.map((group) => (
              <MotionDiv
                key={group.category}
                variants={cardVariants}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full border border-[#d4c4b0]/45 dark:border-[#4a3220]/55 bg-white/80 dark:bg-[#3d3530]/75 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center shadow-sm`}>
                        <group.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-black dark:text-white leading-snug">
                          {group.category}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4a4238] dark:text-[#e8e6e3] leading-relaxed">
                          Tools I use frequently in real projects.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.technologies.slice(0, 6).map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="text-xs bg-[#f0ede9] dark:bg-[#1a0f0a]/30 text-[#1a0f0a] dark:text-gray-100 border border-[#d4c4b0]/60 dark:border-[#4a3220]/60"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* Smart Contract Development
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Smart Contract Developer
              </h3>
              <p className="text-black dark:text-white text-center mb-6">
                Building secure and efficient smart contracts for decentralized applications on various blockchain networks.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Solidity", "Foundry", "Hardhat"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div> 
          */}


          {/* Enhanced Bottom CTA */}
          <MotionDiv
            className="mt-20"
            variants={cardVariants}
          >
            <div className="bg-white/70 dark:bg-[#3d3530]/60 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 text-center shadow-sm">
              <MotionDiv
                className="w-14 h-14 bg-[#1a0f0a] dark:bg-[#f5f1ed] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
              >
                <Code2 className="h-7 w-7 text-white dark:text-[#1a0f0a]" />
              </MotionDiv>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">
                Frontend Development
              </h3>
              <p className="text-[#4a4238] dark:text-[#e8e6e3] mb-8 max-w-3xl mx-auto leading-relaxed">
                Combining modern frontend technologies to create innovative web applications. Let's build something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionA
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a0f0a] text-white hover:bg-[#3d251e] dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white rounded-lg font-semibold transition-colors"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </MotionA>
                <MotionA
                  href="https://github.com/IyanuOluwaJesuloba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#d4c4b0] dark:border-[#4a3220]/70 text-[#1a0f0a] dark:text-[#faf9f7] hover:bg-[#f5f1ed] dark:hover:bg-[#1a0f0a]/20 rounded-lg font-semibold transition-colors"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiGithub className="h-5 w-5" />
                  View Code
                  <ExternalLink className="h-4 w-4" />
                </MotionA>
              </div>

             
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
























