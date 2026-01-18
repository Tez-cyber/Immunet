import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, FileText, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Join the Mission to Protect Every Child
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Whether you're a health ministry, grant organization, NGO, or technology partner—there's a role for you in
            scaling IMMUNET across Nigeria and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center border border-primary-foreground/20">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Partner With Us</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">For health ministries and implementing partners</p>
            <Button variant="secondary" size="sm" className="w-full gap-2">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center border border-primary-foreground/20">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Support the Pilot</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">For grant organizations and donors</p>
            <Button variant="secondary" size="sm" className="w-full gap-2">
              Fund the Mission
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center border border-primary-foreground/20">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Request a Demo</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">See IMMUNET in action</p>
            <Button variant="secondary" size="sm" className="w-full gap-2">
              Schedule Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
