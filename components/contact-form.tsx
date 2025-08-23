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
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: 'jesulobaowoseni1@gmail.com'
    }

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
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
    <Card className="border-2 border-purple-100 shadow-lg overflow-hidden">
      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center justify-center min-h-[300px] text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Mail className="h-12 w-12 text-purple-600 mb-4" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-2 text-gray-900"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Message Sent!
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out. I'll get back to you as soon as possible.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-purple-600 hover:bg-purple-700"
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
              className="space-y-6"
            >
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div variants={fieldVariants} className="grid grid-cols-2 gap-6 ">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    required 
                    className="border-purple-500 focus:border-purple-500 focus:ring-purple-500 text-gray-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="border-purple-500 focus:border-purple-500 focus:ring-purple-500 text-gray-500 transition-all duration-200"
                  />
                </div>
              </motion.div>
              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="Subject of your message" 
                  required 
                  className="border-purple-500 focus:border-purple-500 focus:ring-purple-500 text-gray-500 transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Your message" 
                  rows={5} 
                  required 
                  className="border-purple-500 focus:border-purple-500 focus:ring-purple-500 text-gray-500 transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 group transition-all duration-200"
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
