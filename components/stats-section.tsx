"use client"

import { Badge } from "@/components/ui/badge"
import { Mountain, Users, TreePalm, Bird } from "lucide-react"

const stats = [
  {
    icon: Mountain,
    value: "1,284,000",
    unit: "km²",
    label: "Land Area",
    description: "5th largest country in Africa",
  },
  {
    icon: Users,
    value: "18",
    unit: "million",
    label: "Population",
    description: "Growing and diverse nation",
  },
  {
    icon: TreePalm,
    value: "3",
    unit: "UNESCO Sites",
    label: "World Heritage",
    description: "Unique natural wonders",
  },
  {
    icon: Bird,
    value: "530+",
    unit: "species",
    label: "Bird Species",
    description: "Rich biodiversity",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Chad by Numbers</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
            A Land of Endless Discovery
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
                <span className="text-lg text-primary-foreground/70">{stat.unit}</span>
              </div>
              <p className="font-medium text-lg mb-1">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
