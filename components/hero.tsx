"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToDownloads = () => {
    const downloadSection = document.getElementById("download-section")
    downloadSection?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Repeating background text */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
        <div className="absolute inset-0 flex flex-col gap-8 -rotate-12 scale-150">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex gap-12 whitespace-nowrap animate-marquee">
              {Array.from({ length: 6 }).map((_, j) => (
                <span key={j} className="text-6xl font-bold tracking-wider text-foreground">
                  EXECUTE THE FLOW
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Let the{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            FLOW
          </span>{" "}
          begin
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            className="text-base px-8 bg-secondary hover:bg-secondary/80 text-foreground"
            onClick={scrollToDownloads}
          >
            Download
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            asChild
          >
            <a href="https://discord.gg/kzuhQzv3TQ" target="_blank" rel="noopener noreferrer">
              Get Key
            </a>
          </Button>
        </div>
        <p className="text-muted-foreground text-sm mt-6">Brought to you by the Flow Development Team</p>
      </div>
    </section>
  )
}
