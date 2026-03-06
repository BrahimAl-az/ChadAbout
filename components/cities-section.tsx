"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Building2, ArrowRight, Plane, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TripPlannerDialog } from "@/components/trip-planner-dialog"

const cities = [
  {
    id: 1,
    name: "N'Djamena",
    title: "The Capital City",
    description: "Chad's vibrant capital sits at the confluence of the Chari and Logone rivers. Home to colorful markets, the National Museum, and the gateway to exploring Chad.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    population: "1.5 million",
    founded: "1900",
    highlights: ["Grand Market", "National Museum", "Félix Éboué Avenue", "Central Mosque"],
    hasAirport: true,
  },
  {
    id: 2,
    name: "Moundou",
    title: "The Southern Hub",
    description: "Chad's second-largest city and industrial center, known for its cotton industry, breweries, and as a gateway to the southern regions.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
    population: "300,000",
    founded: "Early 1900s",
    highlights: ["Cotton industry", "Gala Brewery", "Local markets", "Sara culture"],
    hasAirport: true,
  },
  {
    id: 3,
    name: "Abéché",
    title: "Gateway to the East",
    description: "A historic trading city and former capital of the Wadai Sultanate, featuring traditional architecture and serving as the gateway to eastern Chad.",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2090&auto=format&fit=crop",
    population: "100,000",
    founded: "14th century",
    highlights: ["Sultan's Palace ruins", "Traditional architecture", "Wadai history", "Eastern markets"],
    hasAirport: true,
  },
  {
    id: 4,
    name: "Sarh",
    title: "Heart of Sara Country",
    description: "Located in the fertile southern region, Sarh is an important agricultural center and cultural hub of the Sara people.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
    population: "120,000",
    founded: "Colonial era",
    highlights: ["Sara traditions", "Cotton fields", "River fishing", "Traditional crafts"],
    hasAirport: false,
  },
  {
    id: 5,
    name: "Faya-Largeau",
    title: "Saharan Outpost",
    description: "An oasis town in the heart of the Sahara, serving as the main settlement of the Borkou region with date palm groves and desert landscapes.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop",
    population: "50,000",
    founded: "Ancient oasis",
    highlights: ["Date palm oasis", "Desert gateway", "Salt caravans", "Toubou culture"],
    hasAirport: true,
  },
  {
    id: 6,
    name: "Bongor",
    title: "River Town",
    description: "A riverside city on the Logone River, known for its fishing industry and as a crossing point to neighboring Cameroon.",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop",
    population: "45,000",
    founded: "Colonial era",
    highlights: ["River fishing", "Border crossing", "Local markets", "Mayo-Kebbi culture"],
    hasAirport: false,
  },
]

export function CitiesSection() {
  return (
    <section id="cities" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Cities to Explore</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Urban Gateways of Chad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the bustling capital to historic trading posts, each city offers a unique 
            window into Chadian life, history, and culture.
          </p>
        </div>

        {/* Featured City - N'Djamena */}
        <div className="mb-12">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto">
                <img
                  src={cities[0].image}
                  alt={cities[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t" />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Badge>Capital City</Badge>
                  {cities[0].hasAirport && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Plane className="h-3 w-3" />
                      Airport
                    </Badge>
                  )}
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {cities[0].name}
                </h3>
                <p className="text-primary font-medium mb-4">{cities[0].title}</p>
                <p className="text-muted-foreground mb-6">
                  {cities[0].description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{cities[0].population}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>Founded {cities[0].founded}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cities[0].highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary">{highlight}</Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-fit">
                      Explore N'Djamena
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-2xl">N'Djamena - The Capital</DialogTitle>
                      <DialogDescription>
                        Gateway to Chad and the heart of the nation.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="relative h-48 -mx-6 overflow-hidden">
                        <img 
                          src={cities[0].image} 
                          alt="N'Djamena" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <p className="text-muted-foreground">
                        N'Djamena, Chad's vibrant capital, sits at the confluence of the Chari and 
                        Logone rivers. The city is a blend of traditional African culture and modern 
                        urban life, serving as the political, economic, and cultural center of Chad.
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Top Attractions</h4>
                        <div className="space-y-2">
                          {["Grand Market - One of Central Africa's largest markets", 
                            "National Museum - Artifacts and cultural exhibits", 
                            "Central Mosque - Beautiful Islamic architecture",
                            "Chari River - Scenic waterfront and boat tours"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-accent" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <TripPlannerDialog 
                        trigger={
                          <Button className="w-full">
                            Plan Your Visit to N'Djamena
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        } 
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.slice(1).map((city) => (
            <Card 
              key={city.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {city.hasAirport && (
                  <Badge variant="secondary" className="absolute top-4 right-4 flex items-center gap-1">
                    <Plane className="h-3 w-3" />
                    Airport
                  </Badge>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-white">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.title}</p>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {city.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {city.population}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {city.founded}
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="group/btn w-full justify-between">
                      Explore City
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-2xl">{city.name}</DialogTitle>
                      <DialogDescription>{city.title}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="relative h-40 -mx-6 overflow-hidden">
                        <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-muted-foreground">{city.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {city.highlights.map((h) => (
                          <Badge key={h} variant="secondary">{h}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {city.population}
                        </span>
                        {city.hasAirport && (
                          <span className="flex items-center gap-1">
                            <Plane className="h-4 w-4" />
                            Has Airport
                          </span>
                        )}
                      </div>
                      <TripPlannerDialog 
                        trigger={
                          <Button className="w-full">
                            Plan Visit to {city.name}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        } 
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
