import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="flex-1 p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 flex gap-4 bg-gray-50">
        <Button variant="outline" size="sm" asChild className="flex-1 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 text-gray-600">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4 text-black" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="flex-1 bg-purple-600 hover:bg-purple-700">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
