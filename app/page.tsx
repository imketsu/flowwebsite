import { Hero } from "@/components/hero"
import { DownloadSection } from "@/components/download-section"
import { FeaturesGrid } from "@/components/features-grid"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DownloadSection />
      <FeaturesGrid />
    </main>
  )
}
