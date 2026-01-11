import { Card } from "@/components/ui/card"
import { Apple, Monitor } from "lucide-react"

export function DownloadSection() {
  return (
    <section className="py-16 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-12 text-muted-foreground">Download for...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
            <div className="p-12 flex flex-col items-center justify-center min-h-[250px]">
              <Monitor className="w-20 h-20 mb-6 text-foreground/90 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-semibold">Windows</h3>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
            <div className="p-12 flex flex-col items-center justify-center min-h-[250px]">
              <Apple className="w-20 h-20 mb-6 text-foreground/90 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-semibold mb-2">iOS</h3>
              <p className="text-sm text-muted-foreground">Coming soon...</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
