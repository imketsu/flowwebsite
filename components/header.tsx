import { FlowIcon } from "./flow-icon"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FlowIcon />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            HOME
          </a>
          <a
            href="https://discord.gg/kzuhQzv3TQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            PURCHASE
          </a>
        </nav>
      </div>
    </header>
  )
}
