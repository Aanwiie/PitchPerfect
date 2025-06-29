"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"

export function SearchInterface() {
  const [query, setQuery] = useState("")
  const [industry, setIndustry] = useState("")
  const [fundingStage, setFundingStage] = useState("")
  const [arrRange, setArrRange] = useState([0])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would connect to your backend/MindsDB
    console.log({ query, industry, fundingStage, arrRange })
  }

  return (
    <div className="flex flex-col space-y-6 p-6 border rounded-lg bg-card">
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="space-y-2">
          <div className="relative">
            <Input
              className="pl-10 py-6 text-lg"
              placeholder="Ask a question like 'What's their moat?'"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Industry
            </label>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fintech">Fintech</SelectItem>
                <SelectItem value="healthtech">HealthTech</SelectItem>
                <SelectItem value="climatetech">ClimateTech</SelectItem>
                <SelectItem value="ai">AI/ML</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Funding Stage
            </label>
            <Select value={fundingStage} onValueChange={setFundingStage}>
              <SelectTrigger>
                <SelectValue placeholder="Select funding stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="series-a">Series A</SelectItem>
                <SelectItem value="series-b">Series B</SelectItem>
                <SelectItem value="series-c">Series C+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                ARR Range
              </label>
              <span className="text-sm text-muted-foreground">${arrRange[0]}M</span>
            </div>
            <Slider defaultValue={[0]} max={100} step={1} value={arrRange} onValueChange={setArrRange} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0M</span>
              <span>$100M+</span>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Search Startups
        </Button>
      </form>
    </div>
  )
}
