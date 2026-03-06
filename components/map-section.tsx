"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker,
  ZoomableGroup
} from "react-simple-maps"
import { MapPin, Mountain, Waves, TreePine, Building2 } from "lucide-react"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const markers = [
  { 
    name: "N'Djamena", 
    coordinates: [15.0444, 12.1348] as [number, number],
    type: "capital",
    description: "Capital city and largest urban center"
  },
  { 
    name: "Lake Chad", 
    coordinates: [14.0, 13.0] as [number, number],
    type: "water",
    description: "Historic lake and vital water source"
  },
  { 
    name: "Ennedi Plateau", 
    coordinates: [21.8, 17.0] as [number, number],
    type: "landmark",
    description: "UNESCO World Heritage Site"
  },
  { 
    name: "Tibesti Mountains", 
    coordinates: [17.5, 20.8] as [number, number],
    type: "mountain",
    description: "Highest peak: Emi Koussi (3,445m)"
  },
  { 
    name: "Zakouma National Park", 
    coordinates: [19.8, 10.8] as [number, number],
    type: "nature",
    description: "Premier wildlife sanctuary"
  },
]

const markerIcons = {
  capital: Building2,
  water: Waves,
  landmark: MapPin,
  mountain: Mountain,
  nature: TreePine,
}

const borderCountries = [
  { name: "Libya", direction: "North" },
  { name: "Sudan", direction: "East" },
  { name: "Central African Republic", direction: "South" },
  { name: "Cameroon", direction: "Southwest" },
  { name: "Nigeria", direction: "West" },
  { name: "Niger", direction: "Northwest" },
]

export function MapSection() {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null)

  return (
    <section id="map" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Geography</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Where is Chad?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A landlocked nation in the heart of Africa, spanning from the Sahara Desert to tropical savannas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-card border-border/50">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-secondary/30">
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      center: [18, 15],
                      scale: 600
                    }}
                    className="w-full h-full"
                  >
                    <ZoomableGroup center={[18, 15]} zoom={1}>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const isChad = geo.properties.name === "Chad"
                            const isNeighbor = borderCountries.some(
                              c => c.name === geo.properties.name
                            )
                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={
                                  isChad 
                                    ? "hsl(var(--primary))" 
                                    : isNeighbor 
                                      ? "hsl(var(--secondary))" 
                                      : "hsl(var(--muted))"
                                }
                                stroke="hsl(var(--border))"
                                strokeWidth={0.5}
                                style={{
                                  default: { outline: "none" },
                                  hover: { 
                                    outline: "none",
                                    fill: isChad 
                                      ? "hsl(var(--primary))" 
                                      : "hsl(var(--accent))"
                                  },
                                  pressed: { outline: "none" },
                                }}
                              />
                            )
                          })
                        }
                      </Geographies>
                      
                      {markers.map((marker) => {
                        const Icon = markerIcons[marker.type as keyof typeof markerIcons]
                        return (
                          <Marker 
                            key={marker.name} 
                            coordinates={marker.coordinates}
                            onMouseEnter={() => setHoveredMarker(marker.name)}
                            onMouseLeave={() => setHoveredMarker(null)}
                          >
                            <g className="cursor-pointer">
                              <circle
                                r={hoveredMarker === marker.name ? 8 : 6}
                                fill={marker.type === "capital" ? "hsl(var(--accent))" : "hsl(var(--primary-foreground))"}
                                stroke="hsl(var(--foreground))"
                                strokeWidth={2}
                                className="transition-all duration-200"
                              />
                              {hoveredMarker === marker.name && (
                                <text
                                  textAnchor="middle"
                                  y={-15}
                                  className="fill-foreground text-xs font-semibold"
                                  style={{ 
                                    fontSize: "10px",
                                    pointerEvents: "none"
                                  }}
                                >
                                  {marker.name}
                                </text>
                              )}
                            </g>
                          </Marker>
                        )
                      })}
                    </ZoomableGroup>
                  </ComposableMap>
                </div>
              </CardContent>
            </Card>
            
            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary" />
                <span className="text-sm text-muted-foreground">Chad</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-secondary" />
                <span className="text-sm text-muted-foreground">Neighboring Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-foreground" />
                <span className="text-sm text-muted-foreground">Capital</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-foreground border-2 border-foreground" />
                <span className="text-sm text-muted-foreground">Points of Interest</span>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Geographic Stats */}
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Geographic Profile
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Total Area</span>
                    <span className="font-semibold text-foreground">1,284,000 km²</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">World Rank</span>
                    <span className="font-semibold text-foreground">20th Largest</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Africa Rank</span>
                    <span className="font-semibold text-foreground">5th Largest</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Highest Point</span>
                    <span className="font-semibold text-foreground">Emi Koussi (3,445m)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Coordinates</span>
                    <span className="font-semibold text-foreground">15°N, 19°E</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bordering Countries */}
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Bordering Countries
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {borderCountries.map((country) => (
                    <div 
                      key={country.name}
                      className="bg-secondary/50 rounded-lg p-3 text-center hover:bg-secondary transition-colors"
                    >
                      <p className="font-semibold text-foreground text-sm">{country.name}</p>
                      <p className="text-xs text-muted-foreground">{country.direction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Locations */}
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Key Locations
                </h3>
                <div className="space-y-3">
                  {markers.map((marker) => {
                    const Icon = markerIcons[marker.type as keyof typeof markerIcons]
                    return (
                      <div 
                        key={marker.name}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                        onMouseEnter={() => setHoveredMarker(marker.name)}
                        onMouseLeave={() => setHoveredMarker(null)}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{marker.name}</p>
                          <p className="text-xs text-muted-foreground">{marker.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
