"use client"

import Link from "next/link"
import { Star, ExternalLink, Github } from "lucide-react"

const languageColors: Record<string, string> = {
    Java: "bg-[#b07219]",
    TypeScript: "bg-[#3178c6]",
    JavaScript: "bg-[#f7df1e] text-black",
    Python: "bg-[#3572A5]",
    HTML: "bg-[#e34c26]",
    CSS: "bg-[#563d7c]",
    default: "bg-slate-700",
}


interface Project {
    id: number
    name: string
    description: string
    language: string
    stars: number
    forks: number
    url: string
}

interface ProjectGridProps {
    readonly projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="group relative">
                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div>
                            <div className={`flex items-center justify-center h-40 text-white text-lg font-semibold ${languageColors[project.language] || languageColors.default}`}>
                                {project.language}
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        window.open(project.url, "_blank")
                                    }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-slate-900 transition-colors cursor-pointer"
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </button>

                                <Link
                                    href={`/projects/${project.name}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/90 text-white backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Details
                                </Link>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={`/projects/${project.name}`}
                                            className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                                        >
                                            {project.name}
                                        </Link>
                                        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                                            <Star className="w-4 h-4" />
                                            <span>{project.stars}</span>
                                        </div>
                                    </div>
                                    {project.description && project.description !== "No description provided" && (
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
          {project.language}
        </span>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

