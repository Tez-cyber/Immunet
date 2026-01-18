import { Calendar, Bell, ClipboardList, ArrowRight } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            A Simple System That Makes Every Missed Visit Visible
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IMMUNET is a lightweight, cloud-based tool that records each child's next due date at the point of care,
            sends reminders, and automatically flags missed appointments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
                <img
                  src="/mobile-phone-showing-health-worker-app-interface-c.jpg"
                  alt="IMMUNET mobile interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm font-medium">Works offline</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Record Next Due Date</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At each visit, health workers enter the child's next appointment. The system calculates and stores the
                  expected return date automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Automated Reminders</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Parents receive SMS reminders before appointments. If they miss the date, the system flags the child
                  for follow-up.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Weekly Follow-up Lists</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each week, health workers receive a focused list of children to follow up with via call or home
                  visit—no manual tracking needed.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                See all features
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
