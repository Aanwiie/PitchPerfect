"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Flame } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface StartupCardProps {
  name: string
  logo: string
  industry: string
  arr: number
  stage: string
  description: string
  risk: "low" | "medium" | "high"
}

export function StartupCard({ name, logo, industry, arr, stage, description, risk }: StartupCardProps) {
  const [showSummary, setShowSummary] = useState(false)
  const [showRisk, setShowRisk] = useState(false)

  // These would come from your AI backend in a real implementation
  const summary =
    "This startup has developed a proprietary platform that leverages machine learning to optimize their core offering. Their team consists of industry veterans with previous exits. Current traction shows 15% MoM growth with a 92% retention rate."

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return (
          <Badge
            variant="outline"
            className="bg-green-500/10 text-green-500 border-green-500/20 flex items-center gap-1"
          >
            <CheckCircle className="h-3 w-3" />
            Safe
          </Badge>
        )
      case "medium":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 flex items-center gap-1"
          >
            <AlertTriangle className="h-3 w-3" />
            Moderate Risk
          </Badge>
        )
      case "high":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 flex items-center gap-1">
            <Flame className="h-3 w-3" />
            High Risk
          </Badge>
        )
      default:
        return null
    }
  }

  const getRiskDetails = (risk: string) => {
    switch (risk) {
      case "low":
        return "Strong team with proven track record. Product has market fit and growing customer base. Financials are solid with clear path to profitability."
      case "medium":
        return "Promising product but facing significant competition. Team has some gaps in key areas. Burn rate is higher than industry average."
      case "high":
        return "Unproven market with regulatory challenges. Team lacks experience in the industry. High cash burn with unclear path to profitability."
      default:
        return ""
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md w-10 h-10 flex items-center justify-center font-bold">
              {logo}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {industry}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  ${arr}M ARR
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {stage}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>

        {showSummary && (
          <div className="mt-4 p-3 bg-muted/50 rounded-md">
            <h4 className="font-medium text-sm mb-1">AI Summary</h4>
            <p className="text-sm">{summary}</p>
          </div>
        )}

        {showRisk && (
          <div className="mt-4 p-3 bg-muted/50 rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-medium text-sm">Risk Assessment:</h4>
              {getRiskBadge(risk)}
            </div>
            <p className="text-sm">{getRiskDetails(risk)}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setShowSummary(!showSummary)
                  if (!showSummary) setShowRisk(false)
                }}
              >
                {showSummary ? (
                  <>
                    Hide Summary <ChevronUp className="h-3 w-3 ml-1" />
                  </>
                ) : (
                  <>
                    Summarize Deck <ChevronDown className="h-3 w-3 ml-1" />
                  </>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI-generated summary of the pitch deck</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setShowRisk(!showRisk)
                  if (!showRisk) setShowSummary(false)
                }}
              >
                {showRisk ? (
                  <>
                    Hide Risk <ChevronUp className="h-3 w-3 ml-1" />
                  </>
                ) : (
                  <>
                    Classify Risk <ChevronDown className="h-3 w-3 ml-1" />
                  </>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI risk assessment based on pitch deck analysis</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  )
}
