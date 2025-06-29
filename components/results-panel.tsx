"use client"

import { StartupCard } from "@/components/startup-card"

// Mock data - in a real app this would come from your backend/MindsDB
const mockStartups = [
  {
    id: 1,
    name: "Quantum Finance",
    industry: "Fintech",
    arr: 2.4,
    stage: "Series A",
    description:
      "Quantum Finance is revolutionizing the banking industry with their AI-powered financial planning tools that help consumers optimize their savings and investments through personalized recommendations and automated portfolio management.",
  },
  {
    id: 2,
    name: "MediSync",
    industry: "HealthTech",
    arr: 5.7,
    stage: "Series B",
    description:
      "MediSync has developed a breakthrough platform that connects electronic health records across different healthcare providers, enabling seamless data sharing while maintaining strict privacy controls and compliance with healthcare regulations.",
  },
  {
    id: 3,
    name: "GreenLoop",
    industry: "ClimateTech",
    arr: 1.2,
    stage: "Seed",
    description:
      "GreenLoop is tackling carbon capture with a novel approach that uses engineered microalgae to absorb CO2 at rates 10x higher than natural solutions. Their modular systems can be deployed at industrial facilities to reduce emissions at the source.",
  },
  {
    id: 4,
    name: "NeuralWorks",
    industry: "AI",
    arr: 3.8,
    stage: "Series A",
    description:
      "NeuralWorks has created an enterprise-grade platform that allows non-technical business users to build, train, and deploy machine learning models without writing code, democratizing AI capabilities across organizations.",
  },
  {
    id: 5,
    name: "SupplyIQ",
    industry: "SaaS",
    arr: 8.2,
    stage: "Series B",
    description:
      "SupplyIQ offers a comprehensive supply chain management solution that uses predictive analytics to forecast disruptions, optimize inventory levels, and reduce logistics costs for global manufacturing companies.",
  },
]

export function ResultsPanel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Results</h2>
        <span className="text-sm text-muted-foreground">{mockStartups.length} startups found</span>
      </div>

      <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
        {mockStartups.map((startup) => (
          <StartupCard
            key={startup.id}
            name={startup.name}
            industry={startup.industry}
            arr={startup.arr}
            stage={startup.stage}
            description={startup.description}
          />
        ))}
      </div>
    </div>
  )
}
