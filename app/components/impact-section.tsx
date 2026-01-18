import { TrendingUp, Users, MapPin } from "lucide-react"

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Measurable Results for Communities That Need It Most
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IMMUNET reduces dropouts, increases catch-up vaccinations, and improves coverage—especially for underserved
            and mobile populations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <p className="text-4xl font-bold text-primary mb-2">23%</p>
            <p className="text-lg font-medium text-foreground mb-2">Reduction in Dropouts</p>
            <p className="text-sm text-muted-foreground">More children completing their full vaccination schedule</p>
          </div>

          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-4xl font-bold text-primary mb-2">89%</p>
            <p className="text-lg font-medium text-foreground mb-2">Catch-Up Rate</p>
            <p className="text-sm text-muted-foreground">Children who return after receiving follow-up outreach</p>
          </div>

          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="text-4xl font-bold text-primary mb-2">12</p>
            <p className="text-lg font-medium text-foreground mb-2">Active Pilot Sites</p>
            <p className="text-sm text-muted-foreground">Primary Health Centres across Lagos State</p>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
                "For the first time, we can see which children haven't returned. The weekly list makes it possible to
                reach them before they fall too far behind."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">AO</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Adaeze Okonkwo</p>
                  <p className="text-sm text-muted-foreground">Community Health Worker, Ikeja PHC</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/african-healthcare-worker-with-tablet-reviewing-pa.jpg"
                alt="Health worker using IMMUNET"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
