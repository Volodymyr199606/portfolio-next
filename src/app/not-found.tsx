import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-md mx-auto px-6">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold text-slate-900 dark:text-white">404</h1>
                    <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">Project Not Found</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        The project youare looking for does not exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/#work">
                            <Home className="w-4 h-4 mr-2" />
                            View All Projects
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
