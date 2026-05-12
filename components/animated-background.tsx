"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < (shouldReduceMotion ? 0 : 50); i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    window.addEventListener('resize', generateParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (!shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('resize', generateParticles)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [shouldReduceMotion])

  useEffect(() => {
    if (shouldReduceMotion) return

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          const proposedX = particle.x + particle.speedX
          const proposedY = particle.y + particle.speedY

          const nextX =
            proposedX > window.innerWidth ? 0 : proposedX < 0 ? window.innerWidth : proposedX
          const nextY =
            proposedY > window.innerHeight ? 0 : proposedY < 0 ? window.innerHeight : proposedY

          return {
            ...particle,
            x: nextX,
            y: nextY,
          }
        })
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8a6239]/20 to-[#8a6239]/20 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#8a6239]/20 to-[#8a6239]/20 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 0.8, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#8a6239] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.5, 1],
                  opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      {/* Mouse Follower */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute w-6 h-6 bg-gradient-to-r from-[#faf9f7]/30 to-pink-500/30 rounded-full blur-sm"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      )}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  )
}























