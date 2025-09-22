import { Shield, Headphones, Battery, Bluetooth } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Headphones,
      title: "Premium Sound Quality",
      description: "Experience studio-grade audio with our advanced drivers and acoustic engineering.",
    },
    {
      icon: Shield,
      title: "Active Noise Cancellation",
      description: "Block out distractions with industry-leading noise cancellation technology.",
    },
    {
      icon: Battery,
      title: "30-Hour Battery Life",
      description: "All-day listening with quick charge technology for uninterrupted music.",
    },
    {
      icon: Bluetooth,
      title: "Seamless Connectivity",
      description: "Latest Bluetooth 5.3 for stable connection and multi-device pairing.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose Our Headphones?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the perfect blend of cutting-edge technology and premium design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
