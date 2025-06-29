"use client"

import { useState, useEffect } from "react"
import { searchNews } from "@/utils/searchNews"
import { StartupCard } from "@/components/startup-card"

interface NewsItem {
  title: string
  content: string
  source?: string
}

export function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const fetchResults = async () => {
      setLoading(true)
      setError("")

      try {
        const data = await searchNews(query)
        console.log("🎯 Search results:", data)
        setResults(data)
      } catch (err: any) {
        console.error("❌ Fetch error:", err)
        setError(err.message || "Error fetching results")
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [query])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Results</h2>
        <span className="text-sm text-muted-foreground">
          {loading
            ? "Loading..."
            : error
            ? `⚠️ ${error}`
            : `${results.length} startups found`}
        </span>
      </div>

      {!loading && !error && results.length === 0 && (
        <p className="text-center text-muted-foreground">
          No matching results found.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((item, index) => (
          <StartupCard
            key={index}
            name={item.title}
            logo={item.title?.[0] || "N"}
            industry={item.source || "Uncategorized"}
            arr={0}
            stage="–"
            description={item.content}
            risk="low"
          />
        ))}
      </div>
    </div>
  )
}
