'use client';

import React from 'react';
import Link from "next/link";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { sectionVariants, headingVariants, cardVariants, fadeInUp, staggerContainer } from "@/lib/animations";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-br from-[#faf9f7] via-[#d4c4b0] to-[#c4bfb8] dark:from-[#4a3220] dark:via-[#3d251e] dark:to-[#5c3d2e] overflow-hidden w-full"
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
          <motion.div
            className="text-center mb-12"
            variants={headingVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4c4b0] dark:bg-[#4a3220]/30 text-[#1a0f0a] dark:text-gray-100 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Mail className="h-4 w-4" />
              Let's Connect
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              Get In{" "}
              <span className="gradient-text bg-gradient-to-r from-[#7a7270] via-[#9a9290] to-[#7a7270] bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-black dark:text-white max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting projects. Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
              >
                {[
                  {
                    icon: Mail,
                    href: "mailto:jesulobaowoseni1@gmail.com",
                    text: "jesulobaowoseni1@gmail.com",
                    label: "Email",
                    description: "Send me an email anytime"
                  },
                  {
                    icon: SiGithub,
                    href: "https://github.com/IyanuOluwaJesuloba",
                    text: "github.com/IyanuOluwaJesuloba",
                    label: "GitHub",
                    description: "Check out my repositories"
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/iyanuoluwa-owoseni/",
                    text: "linkedin.com/in/iyanuoluwa-owoseni",
                    label: "LinkedIn",
                    description: "Let's connect professionally"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-[#3d3530]/80 backdrop-blur-sm border border-[#b8b0a8] dark:border-[#4a4238] hover:border-[#c4a878] dark:hover:border-[#6b4423] hover:shadow-lg hover:shadow-[#5c3d2e]/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="p-3 rounded-lg bg-gradient-to-br from-[#f0ede9] to-[#f9f8f7] dark:from-[#1a0f0a]/30 dark:to-[#4a3220]/30"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="h-6 w-6 text-[#1a0f0a] dark:text-gray-100" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-[#1a0f0a] transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#f5f1ed]0 dark:text-[#d4c4b0] mb-1">
                          {item.description}
                        </p>
                        <p className="text-xs sm:text-sm text-[#1a0f0a] dark:text-gray-100 font-medium">
                          {item.text}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-black group-hover:text-[#1a0f0a] dark:group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-200" />
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <div className="bg-white/80 dark:bg-[#7a7270]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/50">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}























