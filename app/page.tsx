
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section"
import { ProblemSection } from "./components/problem-section"
import { SolutionSection } from "./components/solution-section"
import { FeaturesSection } from "./components/features-section"
import { ImpactSection } from "./components/impact-section"
import { CTASection } from "./components/cta-section"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
