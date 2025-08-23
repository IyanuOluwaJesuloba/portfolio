"use client"

import { motion } from "framer-motion"
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

const techStack = [
  {
    category: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-purple-600",
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
    color: "from-purple-500 to-pink-600",
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

export function   TechStackShowcase() {

  return (
    <motion.section
      id="tech-stack"
      className="py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={cardVariants}
        >
          {/* Professional Header */}
          <motion.div
            className="text-center mb-16"
            variants={cardVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Terminal className="h-4 w-4" />
              Technical Expertise
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Technology{" "}
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specialized in frontend development and smart contract programming, combining modern web technologies with blockchain innovation to create exceptional digital experiences.
            </p>
          </motion.div>

          {/* Dual Expertise Overview */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {/* Frontend Development */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code2 className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  Creating beautiful, responsive, and performant user interfaces with modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Smart Contract Development */}
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Smart Contract Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
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
          </motion.div>


          {/* Enhanced Bottom CTA */}
          <motion.div
            className="mt-20"
            variants={cardVariants}
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-800/50 text-center">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Frontend & Smart Contract Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                Combining modern frontend technologies with blockchain development to create innovative web applications and decentralized solutions. Let's build something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </motion.a>
                <motion.a
                  href="https://github.com/IyanuOluwaJesuloba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiGithub className="h-5 w-5" />
                  View Code
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>

             
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
