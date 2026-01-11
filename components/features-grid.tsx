import { Card } from "@/components/ui/card"
import { Shield, Zap, Sparkles, BookOpen, Code2, Gift } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure",
    description: "We make sure your time using our exploit is secure and undetected",
  },
  {
    icon: Zap,
    title: "Unrestricted Execution",
    description:
      "Featuring 100% UNC for premium users. Flow is able to run any script on the market that you may throw at it",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Got a bug in your code and don't know how to fix it? FlowAI can help you!",
  },
  {
    icon: BookOpen,
    title: "Script Hub",
    description: "Integrated Script Hub right within the UI so you never need to go searching for scripts",
  },
  {
    icon: Code2,
    title: "Decompiler",
    description: "Flow features a state-of-the-art decompiler, being able to decompile almost any script",
  },
  {
    icon: Gift,
    title: "Free!",
    description:
      "And the best part? Flow is free! By clicking the 'Get Key' button at the top you can access all features",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-card via-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
