import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, GitBranch } from "lucide-react"
import { Repository } from "../lib/interfaces"

export function ProjectCard(repo: Repository) {
  return (
    <Card className="group h-40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-border">
      <a 
        href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full p-0 no-underline"
      >
        <CardHeader className="pb-2 space-y-1">
          <CardTitle className="text-base font-semibold flex items-center justify-between group-hover:text-primary transition-colors">
            <span className="flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              {repo.name}
            </span>
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="line-clamp-3 text-sm leading-relaxed">
            {repo.description || "No description available"}
          </CardDescription>
        </CardContent>
      </a>
    </Card>
  )
}