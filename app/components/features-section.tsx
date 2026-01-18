import { Wifi, Smartphone, ListChecks, Heart, Lock, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Wifi,
    title: "Offline-First Design",
    description: "Continues working without internet. Syncs automatically when connectivity returns.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description: "Runs on basic phones, tablets, or shared facility devices. No special hardware required.",
  },
  {
    icon: ListChecks,
    title: "Weekly Missed-Case Lists",
    description: "Auto-generated lists of children who missed appointments, ready for follow-up.",
  },
  {
    icon: Heart,
    title: "Designed for Real Workflows",
    description: "Integrates into existing processes without disrupting daily operations.",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Child data is encrypted and access-controlled. Compliant with health data standards.",
  },
  {
    icon: GraduationCap,
    title: "Minimal Training",
    description: "Health workers learn the system in under 30 minutes. Simple, intuitive interface.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Key Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Built for the Realities of Primary Health Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IMMUNET is designed to work in low-resource settings—supporting health workers without overburdening them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
