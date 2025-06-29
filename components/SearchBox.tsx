"use client"

import { useState } from "react"
import { SearchResults } from "@/components/search-results"

export default function SearchBox() {
  const [query, setQuery] = useState("")
  const [submittedQuery, setSubmittedQuery] = useState("")

  const handleSearch = () => {
    if (query.trim()) {
      setSubmittedQuery(query.trim())
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Search startups (e.g. Gen Z, farmers, AI)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {submittedQuery && <SearchResults query={submittedQuery} />}
    </div>
  )
}
