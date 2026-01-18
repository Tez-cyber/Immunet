import { Shield, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">IMMUNET</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              A digital tool helping Primary Health Centres track and recover children who miss routine immunization
              visits. Making every missed visit visible and actionable.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@immunet.health" className="hover:text-background transition-colors">
                  contact@immunet.health
                </a>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-background/70 hover:text-background transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-background/70 hover:text-background transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/70 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#impact" className="text-background/70 hover:text-background transition-colors">
                  Impact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Partners</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/10 rounded-lg p-3 flex items-center justify-center h-12">
                <span className="text-xs text-background/50">Partner Logo</span>
              </div>
              <div className="bg-background/10 rounded-lg p-3 flex items-center justify-center h-12">
                <span className="text-xs text-background/50">Partner Logo</span>
              </div>
              <div className="bg-background/10 rounded-lg p-3 flex items-center justify-center h-12">
                <span className="text-xs text-background/50">Partner Logo</span>
              </div>
              <div className="bg-background/10 rounded-lg p-3 flex items-center justify-center h-12">
                <span className="text-xs text-background/50">Partner Logo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">© 2026 IMMUNET. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Data Protection
              </a>
            </div>
          </div>
          <p className="text-xs text-background/40 mt-4 text-center md:text-left">
            IMMUNET is committed to protecting child health data. All information is encrypted, access-controlled, and
            handled in compliance with applicable health data regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
