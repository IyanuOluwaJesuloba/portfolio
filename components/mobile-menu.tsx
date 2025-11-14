"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Portfolio", href: "#featured-projects" },
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
        className="md:hidden text-black dark:text-white hover:text-[#1a0f0a] dark:hover:text-gray-700"
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-white dark:bg-[#7a7270] shadow-xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#b8b0a8] dark:border-[#4a4238]">
                  <h2 className="text-lg font-semibold text-black dark:text-white">
                    Menu
                  </h2>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMenu}
                      className="text-black dark:text-white"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6">
                  <motion.ul
                    className="space-y-4"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                      }
                    }}
                  >
                    {menuItems.map((item, index) => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className="block py-3 px-4 text-lg font-medium text-[#4a4238] dark:text-[#e8e6e3] hover:text-[#1a0f0a] dark:hover:text-[#1a0f0a] hover:bg-[#f5f1ed] dark:hover:bg-[#7a7270]/20 rounded-lg transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-[#b8b0a8] dark:border-[#4a4238]">
                  <motion.div variants={itemVariants}>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#7a7268] to-[#9a9290] hover:from-[#4a3220] hover:to-[#7a7268]"
                    >
                      <Link href="#contact" onClick={toggleMenu}>
                        Get In Touch
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}






















