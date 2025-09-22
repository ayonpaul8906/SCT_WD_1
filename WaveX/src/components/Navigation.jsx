"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">WaveX</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
              >
                Reviews
              </button>
              <div className="flex items-center space-x-2 px-3 py-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
