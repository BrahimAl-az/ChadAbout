"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Check, Loader2 } from "lucide-react"

const destinations = [
  "Zakouma National Park",
  "Ennedi Plateau",
  "Lake Chad",
  "Tibesti Mountains",
  "N'Djamena",
  "Ounianga Lakes",
]

interface TripPlannerDialogProps {
  trigger?: React.ReactNode
  className?: string
}

export function TripPlannerDialog({ trigger, className }: TripPlannerDialogProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelers: "2",
    startDate: "",
    endDate: "",
    destinations: [] as string[],
    interests: "",
  })

  const toggleDestination = (dest: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setStep(1)
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      travelers: "2",
      startDate: "",
      endDate: "",
      destinations: [],
      interests: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen)
      if (!newOpen) {
        setTimeout(resetForm, 300)
      }
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className={className} size="sm">
            Plan Your Trip
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <DialogHeader className="mb-4">
              <DialogTitle className="font-serif text-2xl">Request Received!</DialogTitle>
              <DialogDescription className="text-base">
                Thank you for your interest in visiting Chad. Our travel experts will 
                contact you within 24-48 hours to help plan your perfect trip.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Plan Your Chad Adventure</DialogTitle>
              <DialogDescription>
                Fill out the form below and our travel experts will create a personalized 
                itinerary for your trip to Chad.
              </DialogDescription>
            </DialogHeader>

            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    s <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of Travelers
                    </Label>
                    <Input
                      id="travelers"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.travelers}
                      onChange={(e) => setFormData(prev => ({ ...prev, travelers: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="button" className="w-full" onClick={() => setStep(2)}>
                    Continue
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Start Date
                      </Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Destinations (select all that interest you)
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {destinations.map((dest) => (
                        <Badge
                          key={dest}
                          variant={formData.destinations.includes(dest) ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary/80"
                          onClick={() => toggleDestination(dest)}
                        >
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="button" className="flex-1" onClick={() => setStep(3)}>
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="interests">Special Interests or Requirements</Label>
                    <textarea
                      id="interests"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tell us about your interests (wildlife, photography, adventure, culture, etc.) and any special requirements..."
                      value={formData.interests}
                      onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                    />
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
                    <p className="font-medium text-foreground">Your Trip Summary:</p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">{formData.travelers}</span> traveler(s) 
                      {formData.startDate && formData.endDate && (
                        <> from <span className="font-medium text-foreground">{formData.startDate}</span> to <span className="font-medium text-foreground">{formData.endDate}</span></>
                      )}
                    </p>
                    {formData.destinations.length > 0 && (
                      <p className="text-muted-foreground">
                        Destinations: <span className="font-medium text-foreground">{formData.destinations.join(", ")}</span>
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button type="submit" className="flex-1" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
