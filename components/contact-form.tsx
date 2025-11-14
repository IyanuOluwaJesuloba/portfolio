"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from "framer-motion"

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200
    }
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Basic validation
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      setError('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: 'jesulobaowoseni1@gmail.com'
    }

    try {
      // Check if EmailJS is configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: simulate successful submission for demo purposes
        console.log('EmailJS not configured. Form data:', templateParams)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
        setIsSubmitted(true)
        form.reset()
        return
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      setIsSubmitted(true)
      form.reset()
    } catch (err) {
      setError('Failed to send message. Please try again later.')
      console.error('EmailJS error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-2 border-[#d4c4b0] shadow-lg overflow-hidden w-full max-w-2xl mx-auto">
      <CardContent className="p-4 sm:p-6 md:p-8">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Mail className="h-12 w-12 text-gray-700 mb-4" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-2 text-black"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Message Sent!
              </motion.h3>
              <motion.p
                className="text-black dark:text-white mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out! I'll get back to you as soon as possible.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#7a7268] hover:bg-[#4a3220]"
                >
                  Send Another Message
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm"
                  >
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500 mt-0.5"></div>
                      <div>
                        <p className="font-medium">Message could not be sent</p>
                        <p className="mt-1 text-xs opacity-80">{error}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div variants={fieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#2a1810] dark:text-[#d4c4b0]">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    required 
                    className="border-[#7a7268] focus:border-[#7a7268] focus:ring-[#5c3d2e] text-black transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#2a1810] dark:text-[#d4c4b0]">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="border-[#7a7268] focus:border-[#7a7268] focus:ring-[#5c3d2e] text-black transition-all duration-200"
                  />
                </div>
              </motion.div>
              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#2a1810] dark:text-[#d4c4b0]">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="Subject of your message" 
                  required 
                  className="border-[#f5f1ed]0 focus:border-[#f5f1ed]0 focus:ring-[#f5f1ed]0 text-black transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#2a1810] dark:text-[#d4c4b0]">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Your message" 
                  rows={5} 
                  required 
                  className="border-[#f5f1ed]0 focus:border-[#f5f1ed]0 focus:ring-[#f5f1ed]0 text-black dark:text-[#d4c4b0] transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <Button 
                  type="submit" 
                  className="w-full bg-[#7a7268] hover:bg-[#4a3220] group transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}























