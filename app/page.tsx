'use client';

import React from 'react';
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { TechStackShowcase } from "@/components/code-showcase";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#3d3530] transition-colors duration-500 overflow-hidden">
      <Header />
      
      <main className="pt-16 overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceTimeline />
        <TechStackShowcase />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}




