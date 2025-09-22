import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { ProductShowcase } from "./components/ProductShowcase"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/Footer"


function App() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
