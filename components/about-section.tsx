"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Globe, 
  Languages, 
  Flag, 
  Calendar, 
  DollarSign, 
  Clock, 
  Thermometer,
  ArrowRight,
  Check
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const facts = [
  {
    icon: Globe,
    label: "Location",
    value: "Central Africa",
    description: "Landlocked country bordered by Libya, Sudan, CAR, Cameroon, Nigeria, and Niger",
  },
  {
    icon: MapPin,
    label: "Capital",
    value: "N'Djamena",
    description: "Located on the Chari River at the confluence with the Logone River",
  },
  {
    icon: Languages,
    label: "Official Languages",
    value: "French & Arabic",
    description: "Plus over 120 indigenous languages spoken by various ethnic groups",
  },
  {
    icon: Flag,
    label: "Independence",
    value: "August 11, 1960",
    description: "Gained independence from France after colonial rule",
  },
  {
    icon: DollarSign,
    label: "Currency",
    value: "CFA Franc (XAF)",
    description: "Central African CFA franc, shared with other Central African nations",
  },
  {
    icon: Clock,
    label: "Time Zone",
    value: "UTC+1",
    description: "West Africa Time, no daylight saving time observed",
  },
  {
    icon: Thermometer,
    label: "Climate",
    value: "Varied",
    description: "Tropical in the south, desert in the north, with distinct wet/dry seasons",
  },
  {
    icon: Calendar,
    label: "Best Time to Visit",
    value: "Nov - Feb",
    description: "Dry season with cooler temperatures, ideal for wildlife viewing",
  },
]

const timeline = [
  {
    year: "9000 BC",
    title: "Early Settlements",
    description: "The Sahara region was a fertile land with lakes and forests, home to early human settlements.",
  },
  {
    year: "900 AD",
    title: "Kanem Empire",
    description: "The powerful Kanem Empire emerged near Lake Chad, becoming a major trading hub.",
  },
  {
    year: "1500s",
    title: "Bornu Empire",
    description: "The Kanem-Bornu Empire reached its peak, controlling trans-Saharan trade routes.",
  },
  {
    year: "1900",
    title: "French Colonial Rule",
    description: "France established colonial control, making Chad part of French Equatorial Africa.",
  },
  {
    year: "1960",
    title: "Independence",
    description: "Chad gained independence from France on August 11, 1960.",
  },
  {
    year: "Today",
    title: "Modern Chad",
    description: "A nation rich in oil resources and ancient traditions, looking toward the future.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="secondary" className="mb-4">About Chad</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              The Heart of Africa
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Chad, officially the Republic of Chad, is a landlocked country in north-central 
                Africa. With an area of 1,284,000 square kilometers (496,000 sq mi), it is 
                Africa's fifth-largest country and the world's 20th largest.
              </p>
              <p>
                The nation is named after Lake Chad, which lies on its western border and is 
                the second-largest wetland in Africa. Chad is home to over 200 different ethnic 
                and linguistic groups, making it one of the most diverse countries on the continent.
              </p>
              <p>
                From the vast Sahara Desert in the north to the tropical savannas in the south, 
                Chad offers an incredible range of landscapes, wildlife, and cultural experiences 
                that remain largely undiscovered by international tourism.
              </p>
            </div>
            <div className="mt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">
                    Travel Information
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">Travel Information</DialogTitle>
                    <DialogDescription>
                      Essential information for planning your trip to Chad.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Visa Requirements</h4>
                      <p className="text-sm text-muted-foreground">
                        Most visitors require a visa to enter Chad. Apply at a Chadian embassy or 
                        consulate before travel. Tourist visas are typically valid for 30-90 days.
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Getting There</h4>
                      <p className="text-sm text-muted-foreground">
                        Hassan Djamous International Airport (NDJ) in N'Djamena is the main entry point. 
                        Airlines connecting to Chad include Ethiopian Airlines, Air France, and Turkish Airlines.
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Health & Safety</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        {["Yellow fever vaccination required", 
                          "Malaria prophylaxis recommended", 
                          "Travel insurance strongly advised",
                          "Drink bottled water only"].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-accent" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Best Time to Visit</h4>
                      <p className="text-sm text-muted-foreground">
                        November to February offers the best weather with cooler temperatures (20-30°C). 
                        Avoid June-September rainy season for travel to remote areas.
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Currency & Money</h4>
                      <p className="text-sm text-muted-foreground">
                        The CFA Franc (XAF) is the official currency. US Dollars and Euros can be 
                        exchanged in N'Djamena. Credit cards have limited acceptance outside major hotels.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop"
                  alt="Chad landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
                  alt="Chad wildlife"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1528277342758-f1d7613953a2?q=80&w=2067&auto=format&fit=crop"
                  alt="Chad desert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                  alt="Chad culture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Essential Facts
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((fact) => (
              <div 
                key={fact.label} 
                className="bg-secondary/50 rounded-xl p-5 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <fact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{fact.label}</span>
                </div>
                <p className="font-semibold text-foreground text-lg mb-1">{fact.value}</p>
                <p className="text-sm text-muted-foreground">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            A Brief History
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div 
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="ml-12 md:ml-0">
                      <Badge variant="outline" className="mb-2">{event.year}</Badge>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2" />
                  
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
