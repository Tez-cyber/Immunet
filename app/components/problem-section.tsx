import { AlertCircle, Database, UserX } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Vaccines Given Are Recorded. <span className="text-muted-foreground">Visits Missed Are Forgotten.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Many children in Nigeria start their immunization schedule but never finish it. Health systems track what's
            given—not what's missed. Without visibility, there's no follow-up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Records Only Vaccinations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Current systems capture vaccines administered, but have no mechanism to flag children who don't return for
              their next dose.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <UserX className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Children Fall Through Cracks</h3>
            <p className="text-muted-foreground leading-relaxed">
              Without automated tracking, busy health workers can't identify which families need follow-up—especially in
              high-volume facilities.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Incomplete Protection</h3>
            <p className="text-muted-foreground leading-relaxed">
              A child who receives only one or two doses remains vulnerable. Incomplete schedules leave communities at
              risk of outbreaks.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">1 in 4</p>
              <p className="text-xl text-foreground font-medium mb-4">
                children in Nigeria do not complete their routine immunization schedule
              </p>
              <p className="text-muted-foreground">Source: Nigeria Demographic and Health Survey</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary rounded-full" />
                </div>
                <span className="text-sm font-medium text-foreground w-16">75%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Percentage of children who start but don't complete the full vaccination schedule
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
