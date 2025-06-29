"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Sparkles, TrendingUp, Shield } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SearchSection() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const suggestions = [
    { icon: <Sparkles className="h-4 w-4" />, text: "Hot picks this week 🔥" },
    { icon: <Shield className="h-4 w-4" />, text: "Startups with strong moats" },
    { icon: <TrendingUp className="h-4 w-4" />, text: "Summarize all Series A decks" },
  ]

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setResults(data.results || [])
    } catch (err) {
      console.error("Search error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full mb-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            className="pl-10 py-6 text-lg rounded-lg border-muted"
            placeholder="E.g. Show AI startups with ARR > $1M and a strong moat"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md">
                  Search
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Use natural language, we'll parse it for you</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </form>

      <div className="flex flex-wrap gap-2 mt-3">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-sm bg-background/80 hover:bg-muted"
            onClick={() => setQuery(suggestion.text)}
          >
            {suggestion.icon}
            {suggestion.text}
          </Button>
        ))}
      </div>

      {/* 💡 Results Section */}
      <div className="mt-6">
        {loading && <p>Searching MindsDB...</p>}

        {!loading && results.length > 0 && (
          <ul className="space-y-4">
            {results.map((item, idx) => (
              <li key={idx} className="border p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs mt-2">{item.source} — {new Date(item.published_at).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}

        {!loading && results.length === 0 && query && (
          <p className="mt-4 text-muted-foreground">No matching news found.</p>
        )}
      </div>
    </div>
  )
}
