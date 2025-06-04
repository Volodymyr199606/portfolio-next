import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Star, GitFork, Calendar, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const languageColors: Record<string, string> = {
    Java: "bg-[#b07219]",
    TypeScript: "bg-[#3178c6]",
    JavaScript: "bg-[#f7df1e] text-black",
    Python: "bg-[#3572A5]",
    HTML: "bg-[#e34c26]",
    CSS: "bg-[#563d7c]",
    default: "bg-slate-700"
};


interface Project {
    id: number
    name: string
    description: string
    language: string
    stars: number
    forks: number
    url: string
    created_at: string
    updated_at: string
    topics: string[]
    homepage?: string
}

async function getProject(slug: string): Promise<Project | null> {
    const username = "Volodymyr199606"

    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${slug}`)

        if (!response.ok) {
            return null
        }

        const repo = await response.json()

        return {
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description provided",
            language: repo.language ?? "Not specified",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            topics: repo.topics || [],
            homepage: repo.homepage,
        }
    } catch (error) {
        console.error("Error fetching project:", error)
        return null
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await getProject(slug)

    if (!project) {
        notFound()
    }

    const createdDate = new Date(project.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    const updatedDate = new Date(project.updated_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
                    <div className="container mx-auto px-6 py-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 text-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
                        >
                            <ArrowLeft className="w-6 h-6" />
                            Back to Portfolio
                        </Link>
                    </div>
                </header>

                <main className="container mx-auto px-6 py-16">
                    {/* Project Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                                    {project.name}
                                </h1>
                                <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {project.description !== "No description provided" && (
                                        <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                    )}

                                </p>
                            </div>

                            {/* Project Stats */}
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3 px-5 py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                                    <Star className="w-6 h-6 text-yellow-500" />
                                    <span className="text-lg font-medium">{project.stars} stars</span>
                                </div>
                                <div className="flex items-center gap-3 px-5 py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                                    <GitFork className="w-6 h-6 text-blue-500" />
                                    <span className="text-lg font-medium">{project.forks} forks</span>
                                </div>
                                <div className="flex items-center gap-3 px-5 py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                                    <Code className="w-6 h-6 text-green-500" />
                                    <span className="text-lg font-medium">{project.language}</span>
                                </div>
                            </div>

                            {/* Topics */}
                            {project.topics.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">Topics</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.topics.map((topic) => (
                                            <Badge key={topic} variant="outline" className="text-base px-4 py-2">
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button asChild className="flex-1 h-14 text-lg">
                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-6 h-6 mr-3" />
                                        View on GitHub
                                    </Link>
                                </Button>
                                {project.homepage && (
                                    <Button variant="outline" asChild className="flex-1 h-14 text-lg">
                                        <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-6 h-6 mr-3" />
                                            Live Demo
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative">
                            <div className={`aspect-[4/3] rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-4xl font-bold text-white ${languageColors[project.language] || languageColors.default}`}>
                                {project.language}
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full animate-bounce" />
                            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full animate-pulse" />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            <section>
                                <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-3">Primary Language</h4>
                                            <p className="text-lg text-slate-600 dark:text-slate-400">{project.language}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold mb-3">Repository</h4>
                                            <Link
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                View Source Code
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-semibold mb-6">Project Info</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Calendar className="w-6 h-6 text-slate-500 mt-1" />
                                        <div>
                                            <div className="text-lg font-medium">Created</div>
                                            <div className="text-base text-slate-600 dark:text-slate-400">{createdDate}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Calendar className="w-6 h-6 text-slate-500 mt-1" />
                                        <div>
                                            <div className="text-lg font-medium">Last Updated</div>
                                            <div className="text-base text-slate-600 dark:text-slate-400">{updatedDate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
                                <div className="space-y-4">
                                    <Button variant="outline" size="lg" asChild className="w-full justify-start text-base h-12">
                                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-5 h-5 mr-3" />
                                            Clone Repository
                                        </Link>
                                    </Button>
                                    {project.homepage && (
                                        <Button variant="outline" size="lg" asChild className="w-full justify-start text-base h-12">
                                            <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-5 h-5 mr-3" />
                                                Visit Live Site
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await getProject(slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.name} - Volodymyr's Portfolio`,
        description: project.description,
    }
}
