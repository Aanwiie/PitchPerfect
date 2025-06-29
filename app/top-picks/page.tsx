"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { NavBar } from "@/components/nav-bar"

const topProjects = [
  { name: "NeuralLinkX", blurb: "AI‑driven mental‑wellness companion." },
  { name: "EcoVerse", blurb: "Blockchain marketplace for green‑energy credits." },
  { name: "ByteBazaar", blurb: "Next‑gen e‑commerce engine for indie brands." },
  { name: "QuantumPay", blurb: "Ultrafast, feeless global payments network." },
  { name: "SynthOS", blurb: "Modular operating system for spatial computing." },
  { name: "BioPrint Labs", blurb: "3‑D‑printed organ scaffolds for research." },
]

export default function TopPicks() {
  const [votes, setVotes] = useState<Record<string, number>>({})

  const handleVote = (name: string, change: number) => {
    setVotes((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + change,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col content-background text-white">
      <NavBar />

      <section className="flex-1 container mx-auto px-6 py-16">
        {/* Beautiful heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            <span className="text-red-500">Top Picks</span > <span className="text-black">of the Week</span>
          </h1>
          <div className="mt-4 h-1 w-24 mx-auto bg-red-500 rounded-full" />
          <p className="mt-6 text-black text-base sm:text-lg">
            Vote for your favorite upcoming tech startups redefining the future.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {topProjects.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-3xl p-[2px] bg-gradient-to-br
                         from-red-600/60 via-red-800/30 to-white/10
                         shadow-[0_10px_35px_rgba(255,0,0,0.15)]
                         hover:shadow-[0_10px_50px_rgba(255,0,0,0.35)]
                         transition-all duration-300"
            >
              <div className="rounded-[inherit] bg-zinc-900/90 backdrop-blur-lg p-6 md:p-8 h-full flex flex-col justify-between">
                
                {/* Project title and tag */}
                <div className="mb-4 border-b border-red-700 pb-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold group-hover:text-red-500 transition-colors">
                      {p.name}
                    </h2>
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {p.blurb}
                  </p>
                </div>

                {/* Vote section */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-700">
                  <span className="text-xs uppercase tracking-wide text-gray-400">
                    Cast Your Vote
                  </span>
                  <div className="flex items-center gap-4 text-gray-300">
                    <button
                      onClick={() => handleVote(p.name, 1)}
                      className="hover:text-red-500 transition-colors"
                      aria-label={`Upvote ${p.name}`}
                    >
                      <ThumbsUp className="h-5 w-5" />
                    </button>

                    <span className="text-base font-semibold text-white">
                      {votes[p.name] ?? 0}
                    </span>

                    <button
                      onClick={() => handleVote(p.name, -1)}
                      className="hover:text-red-400 transition-colors"
                      aria-label={`Downvote ${p.name}`}
                    >
                      <ThumbsDown className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
