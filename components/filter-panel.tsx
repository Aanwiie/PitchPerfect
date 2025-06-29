"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp, RefreshCw } from "lucide-react"

export function FilterPanel() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [industry, setIndustry] = useState("")
  const [fundingStage, setFundingStage] = useState("")
  const [arrRange, setArrRange] = useState([0])
  const [includeRisky, setIncludeRisky] = useState(false)

  const handleReset = () => {
    setIndustry("")
    setFundingStage("")
    setArrRange([0])
    setIncludeRisky(false)
  }

  const handleApply = () => {
    console.log({ industry, fundingStage, arrRange, includeRisky })
  }

  return (
    <div className="w-full mb-8 border rounded-lg overflow-hidden bg-card">
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="font-medium">Advanced Filters</h3>
        <Button variant="ghost" size="sm">
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>

      {isExpanded && (
        <div className="p-4 pt-0 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Industry</label>
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
              <label className="text-sm font-medium">Funding Stage</label>
              <Select value={fundingStage} onValueChange={setFundingStage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
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
                <label className="text-sm font-medium">ARR Range</label>
                <span className="text-sm text-muted-foreground">${arrRange[0]}M</span>
              </div>
              <Slider defaultValue={[0]} max={10} step={0.1} value={arrRange} onValueChange={setArrRange} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0M</span>
                <span>$10M+</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 self-end">
              <Checkbox id="risky" checked={includeRisky} onCheckedChange={(checked) => setIncludeRisky(!!checked)} />
              <label
                htmlFor="risky"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Include risky startups
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button size="sm" onClick={handleApply}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
