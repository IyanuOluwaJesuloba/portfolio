'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  return (
    <div className={"min-h-screen bg-background"}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-5">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">IyanuOluwa Owoseni</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/IyanuOluwaJesuloba" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:jesulobaowoseni1@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container pl-5 py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm IyanuOluwa Owoseni
              <span className="block text-primary">Frontend Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/placeholder.svg?height=320&width=320" alt="John Doe" fill className="object-cover" priority />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</span>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate frontend developer with 2+ years of experience creating responsive, user-friendly web
                applications. I specialize in React, Next.js, and modern CSS frameworks like Tailwind.
              </p>
              <p className="text-lg">
                My approach combines technical expertise with a keen eye for design, ensuring that the websites I build
                are not only functional but also visually appealing and intuitive to use.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Experience</h3>
                  <p className="text-muted-foreground">2+ years in frontend development</p>
                </div>
                {/* <div>
                  <h3 className="font-medium text-lg">Education</h3>
                  <p className="text-muted-foreground">B.S. in Computer Science</p>
                  <p className="text-muted-foreground">University of Technology</p>
                </div> */}
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-muted-foreground">Ibadan, Oyo State, Nigeria</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Interests</h3>
                  <p className="text-muted-foreground">Web Accessibility, UI/UX Design, Open Source</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">2</span>
            Skills & Technologies
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="HTML5" />
                <SkillBadge name="CSS3" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Tailwind CSS" />
                {/* <SkillBadge name="Framer Motion" /> */}
                {/* <SkillBadge name="Redux" /> */}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub" />
                <SkillBadge name="VS Code" />
                <SkillBadge name="Figma" />
                {/* <SkillBadge name="Jest" />
                <SkillBadge name="Cypress" />
                <SkillBadge name="Webpack" /> */}
                <SkillBadge name="bun" />
              </div>
            </div>
            {/* <div>
              <h3 className="text-xl font-medium mb-4">Backend & Databases</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="Firebase" />
                <SkillBadge name="REST API" />
                <SkillBadge name="GraphQL" />
              </div>
            </div> */}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">3</span>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Brain-Wave (Work in Progress)"
              description="An AI that helps with video editing, picture creation and editing, etc."
              tags={["React", "Tailwind CSS"]}
              imageUrl="/Brainwave.png"
              githubUrl="https://github.com/IyanuOluwaJesuloba/brain_wave"
              liveUrl="https://brain-wave-zeta-six.vercel.app/"
            />
            <ProjectCard
              title="Smart-SEQ"
              description="A productivity application for managing tasks, with drag-and-drop functionality and team collaboration features."
              tags={["TypeScript", "React", "Tailwind CSS"]}
              imageUrl="/smart.png"
              githubUrl="https://github.com/IyanuOluwaJesuloba/Smart-SEQ"
              liveUrl="https://smart-seq-eight.vercel.app/"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website showcasing my work and skills, built with modern web technologies."
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            {/* <ProjectCard
              title="Weather Dashboard"
              description="A weather application that displays current conditions and forecasts based on user location or search."
              tags={["JavaScript", "React", "Weather API", "CSS"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            /> */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">4</span>
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm currently open to freelance opportunities and interesting projects. Whether you have a question or
                just want to say hi, I'll do my best to get back to you!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:jesulobaowoseni1@gmail.com" className="hover:text-primary transition-colors">
                    jesulobaowoseni1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/IyanuOluwaJesuloba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/IyanuOluwaJesuloba
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="www.linkedin.com/in/iyanuoluwa-owoseni-57052b251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/iyanuoluwaowoseni
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IyanuOluwa Owoseni. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
    
  )
}
