"use client"

import { NavBar } from "@/components/nav-bar"

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />

      <section className="flex-1 container mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="text-red-500">About</span> PitchPerfect
          </h1>
          <div className="mt-4 h-1 w-20 mx-auto bg-red-500 rounded-full" />
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            We help creators, startups, and changemakers turn ideas into <em>powerful stories</em>.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Clarity in Every Word",
              desc: "We refine raw thoughts into structured, compelling pitches—tailored for your audience and purpose.",
            },
            {
              title: "Design That Speaks",
              desc: "From decks to visual assets, we make sure your story not only sounds right, but looks sharp and professional.",
            },
            {
              title: "Confidence Through Practice",
              desc: "Practice makes pitch‑perfect. Our tools and feedback loops help you deliver with clarity and confidence.",
            },
          ].map(({ title, desc }) => (
            <article
              key={title}
              className="group relative rounded-3xl p-[2px] bg-gradient-to-br
                         from-red-600/60 via-red-800/30 to-white/10
                         shadow-[0_10px_35px_rgba(255,0,0,0.15)]
                         hover:shadow-[0_10px_50px_rgba(255,0,0,0.35)]
                         transition-all duration-300"
            >
              <div className="rounded-[inherit] bg-zinc-900/90 backdrop-blur-lg p-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-500 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-1">{desc}</p>
                <div className="mt-6 h-[2px] w-12 bg-red-600 group-hover:w-20 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call‑to‑action strip */}
      <aside className="bg-zinc-900 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-bold">
            Ready to make your pitch <span className="text-red-500">perfect</span>?
          </h2>
          <a
            href="#contact"
            className="inline-block rounded-full bg-red-600 px-8 py-3 text-white font-semibold
                       shadow-md hover:bg-red-500 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </aside>
    </div>
  )
}
