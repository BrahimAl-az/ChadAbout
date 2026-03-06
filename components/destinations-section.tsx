"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight, Clock } from "lucide-react"
import { DestinationDialog } from "@/components/destination-dialog"

const destinations = [
  {
    id: 1,
    name: "Zakouma National Park",
    description: "One of Africa's most important wilderness areas, home to the largest elephant population in Central Africa and diverse wildlife.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    location: "Salamat Region",
    rating: 4.9,
    duration: "3-5 days",
    category: "Wildlife",
    highlights: ["Elephant herds", "Safari drives", "Bird watching", "Camping"],
  },
  {
    id: 2,
    name: "Ennedi Plateau",
    description: "A UNESCO World Heritage Site featuring stunning sandstone formations, ancient rock art, and dramatic natural arches.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031&auto=format&fit=crop",
    location: "Ennedi Region",
    rating: 4.8,
    duration: "5-7 days",
    category: "UNESCO Site",
    highlights: ["Rock formations", "Ancient petroglyphs", "Desert landscapes", "Aloba Arch"],
  },
  {
    id: 3,
    name: "Lake Chad",
    description: "Once one of Africa's largest lakes, this unique ecosystem supports fishing communities and diverse birdlife.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop",
    location: "Lac Region",
    rating: 4.6,
    duration: "2-3 days",
    category: "Natural Wonder",
    highlights: ["Fishing villages", "Birdwatching", "Boat tours", "Sunset views"],
  },
  {
    id: 4,
    name: "Tibesti Mountains",
    description: "The highest mountain range in the Sahara, featuring volcanic peaks, hot springs, and prehistoric rock art.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    location: "Tibesti Region",
    rating: 4.7,
    duration: "7-10 days",
    category: "Adventure",
    highlights: ["Emi Koussi volcano", "Hot springs", "Rock engravings", "Desert trekking"],
  },
  {
    id: 5,
    name: "Guelta d'Archei",
    description: "A legendary desert oasis where the last surviving Saharan crocodiles live in a dramatic canyon setting.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    location: "Ennedi Region",
    rating: 4.9,
    duration: "1-2 days",
    category: "Natural Wonder",
    highlights: ["Desert crocodiles", "Camel caravans", "Oasis swimming", "Photography"],
  },
  {
    id: 6,
    name: "Ounianga Lakes",
    description: "A UNESCO World Heritage Site featuring 18 interconnected lakes in the heart of the Sahara Desert.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2073&auto=format&fit=crop",
    location: "Ennedi Region",
    rating: 4.8,
    duration: "2-3 days",
    category: "UNESCO Site",
    highlights: ["Colored lakes", "Desert oasis", "Swimming", "Unique ecosystems"],
  },
]

const categories = ["All", "Wildlife", "UNESCO Site", "Natural Wonder", "Adventure"]

export function DestinationsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredDestinations = activeCategory === "All" 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory)

  return (
    <section id="destinations" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Popular Destinations</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Chad's Natural Wonders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From ancient rock formations to pristine wildlife reserves, discover the diverse 
            landscapes that make Chad a truly unique destination.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredDestinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4">{destination.category}</Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin className="h-4 w-4" />
                    {destination.location}
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 3).map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      {destination.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {destination.duration}
                    </span>
                  </div>
                  <DestinationDialog destination={destination}>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </DestinationDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setActiveCategory("All")}
          >
            {activeCategory === "All" ? "Viewing All Destinations" : "View All Destinations"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
