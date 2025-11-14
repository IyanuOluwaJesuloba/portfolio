"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Performant React Applications: A Complete Guide",
    excerpt: "Learn how to optimize React applications for better performance using modern techniques like code splitting, lazy loading, and memoization.",
    content: "In this comprehensive guide, we'll explore various techniques to build high-performance React applications. From understanding the React rendering process to implementing advanced optimization strategies...",
    category: "React",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    image: "/placeholder.jpg",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    stats: {
      views: 1250,
      likes: 89,
      comments: 23
    },
    featured: true,
    externalUrl: "https://medium.com/@iyanuoluwa/react-performance-guide"
  },
  {
    id: 2,
    title: "TypeScript Best Practices for Frontend Developers",
    excerpt: "Discover essential TypeScript patterns and practices that will make your frontend code more maintainable and type-safe.",
    content: "TypeScript has become an essential tool for modern frontend development. In this article, we'll cover the best practices that every frontend developer should know...",
    category: "TypeScript",
    readTime: "6 min read",
    publishDate: "2024-01-08",
    image: "/placeholder.jpg",
    tags: ["TypeScript", "Best Practices", "Frontend", "Development"],
    stats: {
      views: 980,
      likes: 67,
      comments: 15
    },
    featured: false,
    externalUrl: "https://dev.to/iyanuoluwa/typescript-best-practices"
  },
  {
    id: 3,
    title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
    excerpt: "Explore modern CSS layout techniques and how to create responsive designs that work across all devices.",
    content: "CSS has evolved significantly over the years. Modern CSS provides powerful layout tools like Grid and Flexbox that make creating responsive designs easier than ever...",
    category: "CSS",
    readTime: "10 min read",
    publishDate: "2023-12-20",
    image: "/placeholder.jpg",
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
    stats: {
      views: 1450,
      likes: 102,
      comments: 31
    },
    featured: true,
    externalUrl: "https://css-tricks.com/modern-css-techniques"
  },
  {
    id: 4,
    title: "Next.js 14: What's New and How to Migrate",
    excerpt: "A comprehensive overview of Next.js 14 features and a step-by-step migration guide from previous versions.",
    content: "Next.js 14 brings exciting new features and improvements. In this article, we'll explore what's new and provide a practical migration guide...",
    category: "Next.js",
    readTime: "7 min read",
    publishDate: "2023-12-10",
    image: "/placeholder.jpg",
    tags: ["Next.js", "Migration", "React", "Web Development"],
    stats: {
      views: 890,
      likes: 54,
      comments: 18
    },
    featured: false,
    externalUrl: "https://nextjs.org/blog/nextjs-14"
  },
  {
    id: 5,
    title: "Accessibility in Modern Web Development",
    excerpt: "Learn how to build accessible web applications that work for everyone, including users with disabilities.",
    content: "Web accessibility is not just a nice-to-have feature—it's essential for creating inclusive digital experiences. This guide covers practical accessibility techniques...",
    category: "Accessibility",
    readTime: "9 min read",
    publishDate: "2023-11-25",
    image: "/placeholder.jpg",
    tags: ["Accessibility", "A11y", "Web Standards", "Inclusive Design"],
    stats: {
      views: 720,
      likes: 78,
      comments: 12
    },
    featured: false,
    externalUrl: "https://web.dev/accessibility"
  },
  {
    id: 6,
    title: "State Management in React: Redux vs Zustand vs Context",
    excerpt: "Compare different state management solutions for React applications and learn when to use each one.",
    content: "Choosing the right state management solution is crucial for React applications. In this comparison, we'll look at Redux, Zustand, and Context API...",
    category: "React",
    readTime: "12 min read",
    publishDate: "2023-11-15",
    image: "/placeholder.jpg",
    tags: ["React", "State Management", "Redux", "Zustand"],
    stats: {
      views: 1680,
      likes: 134,
      comments: 45
    },
    featured: true,
    externalUrl: "https://blog.logrocket.com/state-management-react"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <motion.section 
      id="blog" 
      className="py-12 md:py-20 bg-white dark:bg-[#2a1810]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={cardVariants}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={cardVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4c4b0] dark:bg-[#2a1810]/30 text-[#1a0f0a] dark:text-[#1a0f0a] rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="h-4 w-4" />
              Technical Writing
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              Blog &{" "}
              <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              Sharing knowledge and insights about frontend development, best practices, and the latest web technologies.
            </p>
          </motion.div>

          {/* Featured Posts */}
          <motion.div 
            className="mb-16"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-[#1a0f0a] dark:text-[#1a0f0a]" />
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full border-0 bg-gradient-to-br from-white to-[#f5f1ed] dark:from-[#3d3530] dark:to-[#2a1810] shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-[#2a1810] text-white">
                          {post.category}
                        </Badge>
                        <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                          Featured
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#1a0f0a] dark:group-hover:text-[#1a0f0a] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-black dark:text-white mb-4 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-[#f5f1ed]0 dark:text-black mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-xs text-[#f5f1ed]0 dark:text-black">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.stats.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.stats.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {post.stats.comments}
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-[#d4c4b0] dark:bg-[#2a1810]/30 text-[#1a0f0a] dark:text-[#1a0f0a]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-[#f5f1ed] dark:group-hover:bg-[#2a1810]/20 group-hover:border-[#c4a878] dark:group-hover:border-[#6b4423]"
                        >
                          <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                            Read Article
                            <ExternalLink className="h-3 w-3 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div 
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-[#1a0f0a] dark:text-[#1a0f0a]" />
              Recent Articles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-0 bg-white/80 dark:bg-[#3d3530]/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-[#d4c4b0] dark:bg-[#2a1810]/30 text-[#1a0f0a] dark:text-[#1a0f0a]">
                        {post.category}
                      </Badge>
                      <h4 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#1a0f0a] dark:group-hover:text-[#1a0f0a] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-black dark:text-white mb-4 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-[#f5f1ed]0 dark:text-black mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-[#f5f1ed]0 dark:text-black">
                          <span>{post.stats.views} views</span>
                          <span>{post.stats.likes} likes</span>
                        </div>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-[#1a0f0a] dark:text-[#1a0f0a] hover:bg-[#f5f1ed] dark:hover:bg-[#2a1810]/20 p-2"
                        >
                          <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={cardVariants}
          >
            <p className="text-black dark:text-white mb-6">
              Want to read more articles?
            </p>
            <motion.a
              href="https://medium.com/@iyanuoluwa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#1a0f0a] to-[#4a3220] hover:from-[#4a3220] hover:to-[#2a1810] text-white rounded-lg font-medium shadow-lg hover:shadow-[#5c3d2e]/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-5 w-5" />
              View All Articles
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}


















