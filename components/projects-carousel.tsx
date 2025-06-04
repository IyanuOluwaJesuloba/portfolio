import { useState, useEffect } from "react"
import { ProjectCard } from "./project-card"

interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

interface ProjectsCarouselProps {
  projects: Project[]
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="transition-all duration-700">
        <ProjectCard {...projects[current]} />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-purple-600" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}