"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-200
        ${isScrolled
          ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-black"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* ─── Logo ─────────────────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-r from-[#b91c1c] to-[#b91c1c]/80">
            <span className="font-bold text-white">P</span>
          </div>
          <span className="hidden text-xl font-semibold tracking-tight sm:inline-block text-black dark:text-white">
            PitchPerfect AI                                                                       
          </span>
        </Link>

        {/* ─── Primary Links ───────────────────────────────────────────────────── */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/top-picks" className="hover:text-primary transition-colors">Top Picks</Link>
        </nav>

        {/* ─── Utilities (Search + Theme) ──────────────────────────────────────── */}
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 border-gray-300 dark:border-gray-600"
            >
              <Search className="h-4 w-4" />
              <span>New Search</span>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
