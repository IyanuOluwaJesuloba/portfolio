import React from 'react';
import { Header } from "@/components/header";
import { PremiumHeroSection } from "@/components/premium-hero-section";
import { AboutSection } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { OpenSourceSection } from "@/components/open-source-section";
import { TestimonialsSection } from "@/components/testimonials-premium";
import { PremiumCTASection } from "@/components/premium-cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] transition-colors duration-500 overflow-x-hidden">
      <Header />

      <main className="pt-16">
        {/* Hero - First impression and value prop */}
        <PremiumHeroSection />

        {/* About - Connection, credibility, and resume */}
        <AboutSection />

        {/* Skills - Technical credibility */}
        <SkillsSection />

        {/* Case Studies - All projects with click-to-view detail */}
        <CaseStudiesSection />

        {/* Services - What you offer */}
        <ServicesSection />

        {/* Experience - Career timeline */}
        <ExperienceTimeline />

        {/* Open Source - Community contribution */}
        <OpenSourceSection />

        {/* Testimonials - Social proof */}
        <TestimonialsSection />

        {/* CTA - Build urgency before contact */}
        <PremiumCTASection />

        {/* Contact - Final conversion */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
