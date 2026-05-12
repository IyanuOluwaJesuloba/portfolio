'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setEmail('');
    setIsLoading(false);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="newsletter"
      className="py-20 md:py-28 bg-gradient-to-br from-[#faf9f7] via-[#f0e8e0] to-[#e8e3db] dark:from-[#3d251e] dark:via-[#3d251e] dark:to-[#4a3220] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6239] dark:text-[#d4c4b0] mb-4 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Stay Updated
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-4">
              Get Insights on Building
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a6239] to-[#7a7268]">
                Next-Gen Products
              </span>
            </h2>
            <p className="text-lg text-[#4a4238] dark:text-[#d4c4b0] mt-4">
              Weekly tips, industry insights, and exclusive resources delivered to your inbox.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="p-8 md:p-10 rounded-xl border border-[#d4c4b0]/50 dark:border-[#4a3220]/60 bg-white/75 dark:bg-[#3d3530]/70 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-2">
                  You're In!
                </h3>
                <p className="text-[#4a4238] dark:text-[#d4c4b0]">
                  Check your email for exclusive insights and welcome resources.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8a6239] dark:text-[#d4c4b0] pointer-events-none" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-12 text-base border-[#d4c4b0] dark:border-[#4a3220] focus-visible:ring-[#8a6239] dark:focus-visible:ring-[#d4c4b0]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#1a0f0a] to-[#6b4423] hover:from-[#4a3220] hover:to-[#1a0f0a] text-white font-semibold h-12 text-base transition-all"
                >
                  {isLoading ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Subscribing...
                    </motion.span>
                  ) : (
                    'Subscribe for Free'
                  )}
                </Button>

                <p className="text-xs text-[#4a4238] dark:text-[#d4c4b0] text-center">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Weekly Insights', desc: 'Industry trends and best practices' },
              { title: 'Exclusive Resources', desc: 'Tools, guides, and templates' },
              { title: 'Early Access', desc: 'First to know about new projects' },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="text-center p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-[#1a0f0a] dark:text-[#f5f1ed] mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-[#4a4238] dark:text-[#d4c4b0]">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
