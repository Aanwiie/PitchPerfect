import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          Built with 💡{" "}
          <Link href="https://mindsdb.com" className="underline underline-offset-4 hover:text-primary">
            MindsDB
          </Link>
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
