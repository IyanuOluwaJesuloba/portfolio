import React from 'react';
import { Header } from "@/components/header";
import { PremiumHeroSection } from "@/components/premium-hero-section";
import { AboutSection } from "@/components/about";
import { ExpertiseSection } from "@/components/expertise-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { StatsSection } from "@/components/stats-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-premium";
import { NewsletterSection } from "@/components/newsletter-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { TechStackShowcase } from "@/components/code-showcase";
import { OpenSourceSection } from "@/components/open-source-section";
import { PremiumCTASection } from "@/components/premium-cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#3d3530] transition-colors duration-500 overflow-hidden">
      <Header />
      
      <main className="pt-16 overflow-hidden">
        {/* Hero - First impression and value prop */}
        <PremiumHeroSection />
        
        {/* About - Build connection and credibility */}
        <AboutSection />
        
        {/* Expertise - Demonstrate mastery and depth */}
        <ExpertiseSection />
        
        {/* Case Studies - Show real results */}
        <CaseStudiesSection />
        
        {/* Stats - Quick wins and metrics */}
        <StatsSection />
        
        {/* Skills - Technical credibility */}
        <SkillsSection />
        
        {/* Projects - Breadth of work */}
        <ProjectsSection />
        
        {/* Services - What you offer */}
        <ServicesSection />
        
        {/* Testimonials - Social proof */}
        <TestimonialsSection />
        
        {/* Experience - Timeline */}
        <ExperienceTimeline />
        
        {/* Tech Stack - Technical depth */}
        <TechStackShowcase />
        
        {/* Open Source - Community contribution */}
        <OpenSourceSection />
        
        {/* Newsletter - Lead capture */}
        <NewsletterSection />
        
        {/* Premium CTA - Build urgency */}
        <PremiumCTASection />
        
        {/* Contact - Final conversion */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}




