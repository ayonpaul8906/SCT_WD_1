"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Music Producer",
      avatar: "/professional-woman-smiling.png",
      rating: 5,
      content:
        "These headphones have completely transformed my music production workflow. The sound quality is exceptional, and the comfort during long sessions is unmatched.",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Podcast Host",
      avatar: "/professional-man-with-headphones.jpg",
      rating: 5,
      content:
        "As a podcast host, audio quality is everything. These headphones deliver crystal-clear sound and the noise cancellation helps me focus during recordings.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Audiophile",
      avatar: "/young-woman-listening-to-music.jpg",
      rating: 5,
      content:
        "I've tried many premium headphones, but these are in a league of their own. The bass response is perfect, and the battery life exceeds expectations.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 md:p-12 shadow-sm">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-accent/20" />

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground mb-8 text-pretty">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Button variant="ghost" size="sm" onClick={prevTestimonial} className="hover:bg-accent/10">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button variant="ghost" size="sm" onClick={nextTestimonial} className="hover:bg-accent/10">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
