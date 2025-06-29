import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import SearchBox from "@/components/SearchBox"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen content-background">
      <NavBar />
      <main>
        <HeroSection />
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <SearchBox />
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
