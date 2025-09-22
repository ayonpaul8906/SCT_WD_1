import { Button } from "./ui/button"
import { ArrowRight, Gift, Truck, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-accent/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Upgrade Your Audio Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join thousands of satisfied customers and discover the difference premium audio makes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              Shop Now - 25% Off
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Free Shipping</div>
                <div className="text-sm text-muted-foreground">On orders over $199</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">2-Year Warranty</div>
                <div className="text-sm text-muted-foreground">Full coverage included</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Gift className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Free Returns</div>
                <div className="text-sm text-muted-foreground">30-day return policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
