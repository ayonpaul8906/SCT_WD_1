import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"

export function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "AirMax Pro",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 1234,
      image: "/premium-black-wireless-headphones.jpg",
      badge: "Best Seller",
      colors: ["#000000", "#FFFFFF", "#FF6B6B"],
    },
    {
      id: 2,
      name: "SoundWave Elite",
      price: 249,
      originalPrice: 329,
      rating: 4.8,
      reviews: 892,
      image: "/white-wireless-headphones-with-gold-accents.jpg",
      badge: "New",
      colors: ["#FFFFFF", "#FFD700", "#C0C0C0"],
    },
    {
      id: 3,
      name: "Bass Master",
      price: 199,
      originalPrice: 279,
      rating: 4.7,
      reviews: 567,
      image: "/red-wireless-headphones-modern-design.jpg",
      badge: "Limited Edition",
      colors: ["#FF4444", "#000000", "#FFFFFF"],
    },
  ]

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Our Premium Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our carefully curated selection of premium wireless headphones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="relative mb-6">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{product.badge}</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 w-8 h-8 p-0 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  <Badge variant="secondary" className="text-xs">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-border hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
