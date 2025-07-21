import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, GitBranch } from "lucide-react"
import { Repository } from "../lib/interfaces"

export function ProjectCard(repo: Repository) {
  return (
    <Card className="group h-40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border/50 hover:border-blue-500/30 bg-card/30 backdrop-blur-sm hover:bg-card/50 rounded-2xl overflow-hidden">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full p-0 no-underline"
      >
        <CardHeader className="pb-3 space-y-2 p-6">
          <CardTitle className="text-base font-semibold flex items-center justify-between group-hover:text-blue-500 transition-colors duration-300">
            <span className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border/30 group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                <GitBranch className="h-3.5 w-3.5 text-blue-500" />
              </div>
              <span className="truncate">{repo.name}</span>
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <ExternalLink className="h-4 w-4 text-blue-500" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 px-6 pb-6">
          <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {repo.description || "No description available"}
          </CardDescription>
        </CardContent>
      </a>
    </Card>
  )
}