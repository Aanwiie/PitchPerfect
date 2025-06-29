"use client"

import { Search, Bookmark, Upload } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function MobileNav() {
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-50">
      <div className="flex items-center justify-around h-16">
        <button className="flex flex-col items-center justify-center w-1/3 h-full text-muted-foreground hover:text-primary transition-colors">
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center justify-center w-1/3 h-full text-muted-foreground hover:text-primary transition-colors">
          <Bookmark className="h-5 w-5" />
          <span className="text-xs mt-1">Saved</span>
        </button>
        <button className="flex flex-col items-center justify-center w-1/3 h-full text-muted-foreground hover:text-primary transition-colors">
          <Upload className="h-5 w-5" />
          <span className="text-xs mt-1">Upload</span>
        </button>
      </div>
    </div>
  )
}
