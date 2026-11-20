"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { PORTFOLIO_CONFIG } from "@/lib/constants"

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#case-studies" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Open Source", href: "#open-source" },
  { name: "Contact", href: "#contact" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="lg:hidden text-black dark:text-white hover:text-[#1a0f0a] dark:hover:text-gray-300"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-[#faf9f7] dark:bg-[#1a0f0a] border-l border-[#d4c4b0]/50 dark:border-white/10 shadow-2xl lg:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#d4c4b0]/50 dark:border-white/10">
                  <div>
                    <h2 className="text-base font-bold text-[#1a0f0a] dark:text-[#f5f1ed]">
                      IyanuOluwa
                    </h2>
                    <p className="text-xs text-[#7a7268] dark:text-white/60">
                      Frontend & Web3 Engineer
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMenu}
                      className="text-[#1a0f0a] dark:text-[#f5f1ed]"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6 overflow-y-auto">
                  <motion.ul
                    className="space-y-2"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.05, delayChildren: 0.05 }
                      }
                    }}
                  >
                    {menuItems.map((item) => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className="block py-2.5 px-3.5 text-base font-medium text-[#4a4238] dark:text-[#d4c4b0] hover:text-[#1a0f0a] dark:hover:text-white hover:bg-[#1a0f0a]/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* Footer CTAs */}
                <div className="p-6 border-t border-[#d4c4b0]/50 dark:border-white/10 space-y-2.5">
                  <Button
                    asChild
                    className="w-full bg-[#1a0f0a] text-white hover:bg-[#3d251e] dark:bg-[#f5f1ed] dark:text-[#1a0f0a] dark:hover:bg-white font-bold"
                  >
                    <Link href="#contact" onClick={toggleMenu}>
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#8a6239] dark:border-[#d4af37] text-[#8a6239] dark:text-[#d4af37] hover:bg-[#8a6239]/10 font-bold"
                  >
                    <a
                      href={PORTFOLIO_CONFIG.SOCIAL_LINKS.BOOKING}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Book a 1:1 Call
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
