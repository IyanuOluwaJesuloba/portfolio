import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Palette, 
  FileCode, 
  FileType, 
  FileJson, 
  FileText, 
  GitBranch, 
  Github, 
  Code, 
  PenTool,
  Terminal
} from "lucide-react"

interface SkillBadgeProps {
  name: string
}

const skillIcons: { [key: string]: any } = {
  "HTML5": FileCode,
  "CSS3": FileType,
  "JavaScript": FileJson,
  "TypeScript": FileText,
  "React": Code2,
  "Next.js": Code,
  "Tailwind CSS": Palette,
  "Git": GitBranch,
  "GitHub": Github,
  "VS Code": Code,
  "Figma": PenTool,
  "bun": Terminal
}

export function SkillBadge({ name }: SkillBadgeProps) {
  const Icon = skillIcons[name]
  
  return (
    <Badge variant="secondary" className="px-3 py-1 text-sm flex items-center gap-2 bg-purple-100 text-purple-700 hover:bg-purple-200">
      {Icon && <Icon className="h-4 w-4" />}
      {name}
    </Badge>
  )
}
