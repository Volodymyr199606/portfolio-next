import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
    id: number
    name: string
    description: string
    language: string
    stars: number
    forks: number
    url: string
}

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{project.name}</CardTitle>
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub repository</span>
                    </Link>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-3 border-t">
                <Badge variant="outline">{project.language}</Badge>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        <span>{project.stars}</span>
                    </div>
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-foreground"
                    >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span className="sr-only">Visit repository</span>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
