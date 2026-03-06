"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, Star, Clock, ArrowRight, Check, Camera, Compass } from "lucide-react"
import { TripPlannerDialog } from "@/components/trip-planner-dialog"

interface Destination {
  id: number
  name: string
  description: string
  image: string
  location: string
  rating: number
  duration: string
  category: string
  highlights: string[]
}

interface DestinationDialogProps {
  destination: Destination
  children: React.ReactNode
}

export function DestinationDialog({ destination, children }: DestinationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <Badge className="absolute top-4 left-4">{destination.category}</Badge>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <DialogTitle className="font-serif text-2xl font-bold">{destination.name}</DialogTitle>
            <div className="flex items-center gap-3 mt-2 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {destination.location}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                {destination.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {destination.duration}
              </span>
            </div>
          </div>
        </div>

        <DialogDescription className="text-base text-foreground leading-relaxed">
          {destination.description}
        </DialogDescription>

        <div className="mt-4">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            Highlights & Activities
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {destination.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            Best Time to Visit
          </h4>
          <p className="text-sm text-muted-foreground">
            November to February offers the best weather conditions with cooler temperatures 
            and clear skies, ideal for wildlife viewing and photography.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <TripPlannerDialog 
            trigger={
              <Button className="flex-1">
                Plan a Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            } 
          />
          <Button variant="outline" className="flex-1">
            View Gallery
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
