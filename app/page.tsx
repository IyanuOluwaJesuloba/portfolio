'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight, Code, Palette, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { motion, AnimatePresence } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Portfolio() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  
  const projects = [
    {
      title: "Brain-Wave (Work in Progress)",
      description: "An AI that helps with video editing, picture creation and editing, etc.",
      tags: ["React", "Tailwind CSS"],
      imageUrl: "/Brainwave.png",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/brain_wave",
      liveUrl: "https://brain-wave-zeta-six.vercel.app/"
    },
    {
      title: "Smart-SEQ",
      description: "A productivity application for managing tasks, with drag-and-drop functionality and team collaboration features.",
      tags: ["TypeScript", "React", "Tailwind CSS"],
      imageUrl: "/smart.png",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/Smart-SEQ",
      liveUrl: "https://smart-seq-eight.vercel.app/"
    },
    {
      title: "Saving-app",
      description: "This app helps a group of people collectively invest in a Play-to-Earn blockchain game that yields a 20% return on the total invested amount per gameplay",
      tags: ["TypeScript", "React","Next.Js", "Tailwind CSS"],
      imageUrl: "/Saving-app.jpg",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/saving_app",
      liveUrl: "https://saving-app-jet.vercel.app/"
    },
    {
      title: "Synergy-app",
      description: "Synergy brings the age-old wisdom of community buying into the digital age. By connecting families who buy together with producers who grow with care.",
      tags: ["TypeScript", "React","Next.Js", "Tailwind CSS"],
      imageUrl: "/Saving-app.jpg",
      githubUrl: "https://github.com/IyanuOluwaJesuloba/synergy-real",
      liveUrl: "https://synergy-app-livid.vercel.app/"
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-purple-300">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-xl text-gray-800"
            >
              <Link href="/" className="flex items-center gap-2 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="h-6 w-6 text-purple-600" />
                </motion.div>
                <span className="group-hover:text-purple-600 transition-colors">IyanuOluwa</span>
              </Link>
            </motion.div>
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex gap-8"
            >
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-purple-600 transition-colors relative group"
                  >
                    {item}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/IyanuOluwaJesuloba", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/iyanuoluwa-owoseni/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:jesulobaowoseni1@gmail.com", label: "Email" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="pt-16">
        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="relative min-h-[90vh] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-100 to-gray-100 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 justify-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-700 to-purple-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Hi, I'm IyanuOluwa
                    <motion.span 
                      className="block text-purple-500 mt-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Frontend Developer
                    </motion.span>
                  </motion.h1>
                  <motion.p 
                    className="text-xl text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    I build exceptional and accessible digital experiences for the web.
                  </motion.p>
                </div>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 group shadow-lg hover:shadow-purple-300/50">
                    <Link href="#contact" className="flex items-center gap-2">
                      Get in touch
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-purple-300 text-purple-600 hover:bg-purple-100 hover:border-purple-400 shadow-sm hover:shadow-md transition-all duration-300">
                    <Link href="#projects">View my work</Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-200 rounded-full blur-2xl opacity-60"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-300 shadow-xl hover:shadow-2xl hover:shadow-purple-300/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src="/hero.jpeg" alt="IyanuOluwa Owoseni" fill className="object-cover" priority />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-12 md:py-20 scroll-mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={sectionVariants}
            >
              <motion.h2 
                className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-900"
                variants={headingVariants}
              >
                <motion.span 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  1
                </motion.span>
                About Me
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                  variants={fadeInUp} 
                  className="space-y-6"
                >
                  {[
                    "I'm a passionate frontend developer with 2+ years of experience creating responsive, user-friendly web applications. I specialize in React, Next.js, and modern CSS frameworks like Tailwind.",
                    "My approach combines technical expertise with a keen eye for design, ensuring that the websites I build are not only functional but also visually appealing and intuitive to use.",
                    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events."
                  ].map((text, index) => (
                    <motion.p 
                      key={index}
                      className="text-lg leading-relaxed text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </motion.div>
                <motion.div variants={cardVariants}>
                  <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 space-y-6">
                      {[
                        { title: "Experience", content: "2+ years in frontend development" },
                        { title: "Location", content: "Ibadan, Oyo State, Nigeria" },
                        { title: "Interests", content: "Web Accessibility, UI/UX Design, Open Source" }
                      ].map((item, index) => (
                        <motion.div 
                          key={item.title}
                          className="space-y-2"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="font-semibold text-xl text-purple-600">{item.title}</h3>
                          <p className="text-gray-600">{item.content}</p>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="py-12 md:py-20 bg-gradient-to-br from-purple-100 via-white to-purple-100"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={sectionVariants}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3 text-gray-900"
                variants={headingVariants}
              >
                <motion.span 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  2
                </motion.span>
                Skills & Technologies
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Frontend Development",
                    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
                  },
                  {
                    icon: Palette,
                    title: "Tools & Others",
                    skills: ["Git", "GitHub", "VS Code", "Figma", "bun"]
                  }
                ].map((category, index) => (
                  <motion.div 
                    key={category.title}
                    variants={cardVariants}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50"
                      >
                        <category.icon className="h-6 w-6 text-purple-600" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">{category.title}</h3>
                    </div>
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      variants={staggerContainer}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <SkillBadge name={skill} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="py-12 md:py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={sectionVariants}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3 text-gray-900"
                variants={headingVariants}
              >
                <motion.span 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  3
                </motion.span>
                Featured Projects
              </motion.h2>
              
              <div 
                className="relative bg-purple-50/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-purple-100"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <motion.div 
                  key={currentProject}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto"
                >
                  <ProjectCard {...projects[currentProject]} />
                </motion.div>

                <div className="flex justify-center items-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevProject}
                    className="rounded-full hover:bg-purple-100 border-purple-200 text-purple-600"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentProject === index ? 'bg-purple-600 w-4' : 'bg-purple-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProject}
                    className="rounded-full hover:bg-purple-100 border-purple-200 text-purple-600"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-12 md:py-20 bg-gradient-to-br from-purple-100 via-white to-purple-50"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={sectionVariants}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3 text-gray-900"
                variants={headingVariants}
              >
                <motion.span 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  4
                </motion.span>
                Get In Touch
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                  variants={fadeInUp} 
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      Let's Connect
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      I'm currently open to different opportunities and interesting projects. Whether you have a question or
                      just want to say hi, I'll do my best to get back to you!
                    </motion.p>
                  </div>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                  >
                    {[
                      { icon: Mail, href: "mailto:jesulobaowoseni1@gmail.com", text: "jesulobaowoseni1@gmail.com" },
                      { icon: Github, href: "https://github.com/IyanuOluwaJesuloba", text: "github.com/IyanuOluwaJesuloba" },
                      { icon: Linkedin, href: "www.linkedin.com/in/iyanuoluwa-owoseni-57052b251", text: "linkedin.com/in/iyanuoluwaowoseni" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.text}
                        className="flex items-center gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50"
                        >
                          <item.icon className="h-5 w-5 text-purple-600" />
                        </motion.div>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-600 transition-colors group-hover:translate-x-1 transition-transform"
                        >
                          {item.text}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <Card className="border-2 border-purple-200 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                    <CardContent className="p-8">
                      <ContactForm />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        className="border-t bg-white py-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} IyanuOluwa Owoseni. All rights reserved.
            </motion.div>
            <motion.div 
              className="flex gap-4"
              variants={staggerContainer}
            >
              {[
                { icon: Github, href: "https://github.com/IyanuOluwaJesuloba", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:jesulobaowoseni1@gmail.com", label: "Email" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
