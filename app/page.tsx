import React from 'react';
import { Header } from "@/components/header";
import { PremiumHeroSection } from "@/components/premium-hero-section";
import { AboutSection } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { OpenSourceSection } from "@/components/open-source-section";
import { PremiumCTASection } from "@/components/premium-cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#1a0f0a] dark:via-[#1a0f0a] dark:to-[#2a1810] transition-colors duration-500 overflow-x-hidden">
      <Header />

      <main className="pt-16">
        {/* Hero - First impression, verified positioning, terminal */}
        <PremiumHeroSection />

        {/* About - Honest background, dual market support */}
        <AboutSection />

        {/* Skills - Technical depth: React/Next.js, Solidity/EVM, Rust/Soroban/Stellar */}
        <SkillsSection />

        {/* Case Studies - Featured projects with measurable outcomes & architecture */}
        <CaseStudiesSection />

        {/* Services - Focused 2 core offerings + also available line */}
        <ServicesSection />

        {/* Experience - Honest 3-year timeline with freelance & OSS entries */}
        <ExperienceTimeline />

        {/* Open Source - Genuine ecosystem contributions */}
        <OpenSourceSection />

        {/* CTA - Urgency, trust signals, direct contact & scheduling */}
        <PremiumCTASection />

        {/* Contact - Direct form & booking link */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
