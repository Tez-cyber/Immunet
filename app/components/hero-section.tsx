import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Now piloting in Ilorin
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Every Child Deserves a <span className="text-primary">Complete Shield</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              IMMUNET makes missed immunization visits visible and actionable—helping health workers track, remind, and
              recover every child who falls behind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Play className="w-4 h-4" />
                Watch How It Works
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">23%</p>
                <p className="text-sm text-muted-foreground">Dropout reduction</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">12 PHCs</p>
                <p className="text-sm text-muted-foreground">Active pilot sites</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">5,000+</p>
                <p className="text-sm text-muted-foreground">Children tracked</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-2xl border border-border p-6 shadow-xl">
              <img
                src="/african-mother-holding-baby-at-health-clinic-warm-.jpg"
                alt="Mother with child at immunization clinic"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Next appointment set</p>
                    <p className="text-xs text-muted-foreground">DPT-3 due in 4 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
