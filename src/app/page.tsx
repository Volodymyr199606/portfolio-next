import { Github, Mail, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProjectGrid } from "@/components/project-grid"
import { ThemeToggle } from "@/components/theme-toggle"

export default async function Home() {
  const projects = await getGithubProjects()

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-foreground">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none" />

        <div className="relative z-10">
          <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
              <Link href="/" className="font-semibold text-xl tracking-tight">
                Volodymyr
              </Link>
              <div className="flex items-center gap-8">
                <nav className="hidden sm:flex items-center gap-8">
                  <Link href="#work" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Work
                  </Link>
                  <Link href="#about" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About
                  </Link>
                  <Link href="#contact" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </header>


          <main className="pt-16">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-24 md:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Available for work
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                      Full Stack Developer
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                      I create exceptional digital experiences through clean code and thoughtful design. Specializing in
                      modern web technologies and user-centered solutions.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="#work"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                    >
                      View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      Get In Touch
                    </Link>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>Available Now</span>
                    </div>
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-xl border-4 border-slate-300 dark:border-slate-700 overflow-hidden shadow-sm">
                      <Image
                          src="/photo.jpg"
                          alt="Volodymyr - Full Stack Developer"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority
                      />
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="container mx-auto px-6 py-24">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A collection of projects that showcase my skills in development — from concept to deployment.
                    Most of my earlier projects focused on Java backend development, and I am now expanding into full-stack projects.
                  </p>
                </div>
                <ProjectGrid projects={projects} />
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="container mx-auto px-6 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                      I’m a Software Engineer with hands-on experience delivering real-world software solutions.
                      I’m driven by a passion for problem-solving, a strong sense of ownership, and a commitment
                      to building high-quality, impactful products.
                      I started my journey building Java backend systems and have recently transitioned into full-stack
                      development, combining robust backend logic with responsive, user-centered interfaces.
                    </p>
                      I thrive in collaborative, fast-paced environments where I can contribute to meaningful projects,
                      continuously learn, and grow as both a developer and a teammate. My goal is to create software
                      that’s not only functional, but also scalable, maintainable, and a pleasure to use.
                    <p>
                      When I am not coding, you will find me exploring new technologies, contributing to open-source
                      projects, or sharing knowledge with the developer community. I believe in writing clean,
                      maintainable code and following best practices.
                    </p>
                    <p>
                      Currently, I am focused on modern web technologies and always eager to take on new challenges
                      that push the boundaries of what is possible on the web.
                    </p>

                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {["Java", "TypeScript", "Python", "C++", "JavaScript"].map((lang) => (
                          <div key={lang} className="space-y-2">
                            <span className="font-medium text-slate-700 dark:text-slate-200">{lang}</span>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-full" />

                            </div>
                          </div>
                      ))}
                    </div>

                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Spring Boot",
                        "GraphQL",
                        "JUnit",
                        "Jira",
                        "GitHub",
                        "MySQL",
                        "Next.js",
                        "React",
                        "Node.js"
                      ].map((tool) => (
                          <span
                              key={tool}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700"
                          >{tool}
                          </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container mx-auto px-6 py-24">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lets Work Together</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    I am always interested in new opportunities and exciting projects. Lets discuss how we can bring your
                    ideas to life.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                      href="https://github.com/Volodymyr199606"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </Link>
                  <Link
                      href="mailto:your.email@example.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Me
                  </Link>
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-base font-medium text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Volodymyr. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                    href="https://github.com/Volodymyr199606"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </footer>

        </div>
      </div>
  )
}

async function getGithubProjects() {
  const username = "Volodymyr199606"

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)

    if (!response.ok) {
      throw new Error("Failed to fetch projects")
    }

    type GitHubRepo = {
      id: number;
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      html_url: string;
    };

    const repos: GitHubRepo[] = await response.json();
    return repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description provided",
      language: repo.language || "Not specified",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
    }));

  } catch (error) {
    console.error("Error fetching GitHub projects:", error)
    return []
  }
}
