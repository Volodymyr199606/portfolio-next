"use client"
import Link from "next/link"
import { Star, ExternalLink, Github, Globe } from "lucide-react"

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

// Function to determine header color based on language
function getLanguageColor(language: string): string {
    switch (language.toLowerCase()) {
        case "typescript":
            return "bg-blue-500 text-white"
        case "java":
            return "bg-amber-600 text-white"
        case "javascript":
            return "bg-yellow-500 text-white"
        case "python":
            return "bg-blue-700 text-white"
        case "html":
            return "bg-orange-600 text-white"
        case "css":
            return "bg-blue-600 text-white"
        default:
            return "bg-slate-600 text-white"
    }
}

// Function to get demo URL for projects
function getDemoUrl(projectName: string): string | null {
    switch (projectName) {
        case "smart-parking":
            return "https://smart-parking-vv3z.vercel.app/" // Replace with your actual demo URL
        case "portfolio-website":
            return "https://volodymyr-portfolio.vercel.app" // Replace with your actual demo URL
        case "weather-dashboard":
            return "https://weather-dashboard-demo.vercel.app" // Replace with your actual demo URL
        case "e-commerce-platform":
            return "https://ecommerce-demo.vercel.app" // Replace with your actual demo URL
        default:
            return null
    }
}

export function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
                // Special handling for smart-parking project
                const isSmartParking = project.name === "smart-parking"
                const primaryLanguage = isSmartParking ? "TypeScript" : project.language
                const headerColorClass = getLanguageColor(primaryLanguage)
                const demoUrl = getDemoUrl(project.name)

                return (
                    <div key={project.id} className="group relative">
                        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <Link href={`/projects/${project.name}`} className="block">
                                {/* Header with split colors for smart-parking */}
                                {isSmartParking ? (
                                    <div className="aspect-[16/10] overflow-hidden relative flex">
                                        {/* TypeScript half */}
                                        <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">
                                            <span className="text-lg font-semibold">TypeScript</span>
                                        </div>
                                        {/* Java half */}
                                        <div className="w-1/2 bg-amber-600 text-white flex items-center justify-center">
                                            <span className="text-lg font-semibold">Java</span>
                                        </div>
                                    </div>
                                ) : (
                                    /* Regular single-color header for other projects */
                                    <div
                                        className={`aspect-[16/10] overflow-hidden ${headerColorClass} flex items-center justify-center`}
                                    >
                                        <span className="text-xl font-semibold">{primaryLanguage}</span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Overlay buttons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div
                                        onClick={(e) => {
                                            e.preventDefault()
                                            window.open(project.url, "_blank")
                                        }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-slate-900 transition-colors cursor-pointer"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </div>

                                    {/* Live Demo button - only show if demo URL exists */}
                                    {demoUrl && (
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault()
                                                window.open(demoUrl, "_blank")
                                            }}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/90 text-white backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-green-600 transition-colors cursor-pointer"
                                        >
                                            <Globe className="w-4 h-4" />
                                            Live Demo
                                        </div>
                                    )}

                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/90 text-white backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                        View Details
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {project.name}
                                            </h3>
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
                                        <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {project.language}
                      </span>
                                            {isSmartParking && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          Java
                        </span>
                                            )}
                                        </div>
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault()
                                                window.open(project.url, "_blank")
                                            }}
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
