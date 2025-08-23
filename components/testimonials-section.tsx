"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Linkedin, Twitter } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "IyanuOluwa delivered exceptional work on our React application. His attention to detail and ability to translate complex designs into pixel-perfect code is outstanding. The project was completed ahead of schedule with excellent performance optimization.",
    project: "E-commerce Platform",
    technologies: ["React", "Next.js", "TypeScript"],
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    company: "StartupXYZ",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "Working with IyanuOluwa was a pleasure. He brought fresh ideas to our frontend architecture and helped us implement modern best practices. His code quality is top-notch and he's great at collaborating with the team.",
    project: "SaaS Dashboard",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    social: {
      github: "https://github.com/michaelchen",
      linkedin: "https://linkedin.com/in/michael-chen"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "Design Studio",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "IyanuOluwa has an incredible ability to bring designs to life. He understands the nuances of design and implements them with precision. The animations and interactions he created exceeded our expectations.",
    project: "Portfolio Website",
    technologies: ["Next.js", "Framer Motion", "CSS3"],
    social: {
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      twitter: "https://twitter.com/emilyrodriguez"
    }
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "InnovateLab",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "IyanuOluwa's technical expertise and problem-solving skills are impressive. He optimized our application performance significantly and introduced modern development practices that improved our entire workflow.",
    project: "Web Application",
    technologies: ["React", "TypeScript", "Performance Optimization"],
    social: {
      github: "https://github.com/davidthompson",
      linkedin: "https://linkedin.com/in/david-thompson"
    }
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Project Manager",
    company: "Digital Agency",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "Professional, reliable, and skilled. IyanuOluwa consistently delivered high-quality work and was excellent at communicating progress. He's someone you can trust with complex projects.",
    project: "Multi-page Website",
    technologies: ["Next.js", "Tailwind CSS", "SEO"],
    social: {
      linkedin: "https://linkedin.com/in/lisa-wang",
      twitter: "https://twitter.com/lisawang"
    }
  },
  {
    id: 6,
    name: "James Miller",
    role: "Startup Founder",
    company: "TechStart",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "IyanuOluwa helped us build our MVP from scratch. His understanding of modern web technologies and user experience principles was crucial to our success. Highly recommended!",
    project: "MVP Development",
    technologies: ["React", "Next.js", "API Integration"],
    social: {
      github: "https://github.com/jamesmiller",
      linkedin: "https://linkedin.com/in/james-miller"
    }
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

export function TestimonialsSection() {
  return (
    <motion.section 
      id="testimonials" 
      className="py-12 md:py-20 bg-white dark:bg-gray-900"
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Star className="h-4 w-4" />
              Client Testimonials
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What Clients{" "}
              <span className="gradient-text">Say</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feedback from clients and colleagues I've had the pleasure of working with on various projects.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote className="h-5 w-5 text-white" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Project Info */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                        Project: {testimonial.project}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {testimonial.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center gap-2">
                        {testimonial.social.linkedin && (
                          <Link 
                            href={testimonial.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        )}
                        {testimonial.social.twitter && (
                          <Link 
                            href={testimonial.social.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <Twitter className="h-4 w-4" />
                          </Link>
                        )}
                        {testimonial.social.github && (
                          <Link 
                            href={testimonial.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                          >
                            <SiGithub className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            className="mt-16 text-center"
            variants={cardVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  8+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
