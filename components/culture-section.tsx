"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Music, Shirt, Sparkles, Users, ArrowRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const cultureItems = [
  {
    id: 1,
    title: "Traditional Music",
    description: "Chad's music reflects its diverse ethnic heritage, featuring unique instruments like the kakaki (long trumpet) and various drums. Traditional songs accompany ceremonies, celebrations, and daily life.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",
    icon: Music,
    highlights: ["Kakaki trumpet", "Balafon", "Traditional drums", "Vocal harmonies"],
  },
  {
    id: 2,
    title: "Traditional Fashion",
    description: "Chadian traditional attire varies by region and ethnic group. The boubou (flowing robe) is common, often made from locally woven cotton and featuring intricate embroidery.",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?q=80&w=2076&auto=format&fit=crop",
    icon: Shirt,
    highlights: ["Boubou robes", "Indigo dyeing", "Embroidery art", "Head wraps"],
  },
  {
    id: 3,
    title: "Festivals & Celebrations",
    description: "From the Gerewol festival of the Wodaabe people to Islamic celebrations and harvest festivals, Chad's calendar is filled with vibrant cultural events.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    icon: Sparkles,
    highlights: ["Gerewol Festival", "Eid celebrations", "Harvest festivals", "Tribal gatherings"],
  },
  {
    id: 4,
    title: "Ethnic Diversity",
    description: "With over 200 ethnic groups speaking more than 120 languages, Chad is one of Africa's most culturally diverse nations, each group maintaining unique traditions.",
    image: "https://images.unsplash.com/photo-1523365280197-f1783db9fe62?q=80&w=2070&auto=format&fit=crop",
    icon: Users,
    highlights: ["Sara people", "Toubou nomads", "Arab tribes", "Hadjerai groups"],
  },
]

export function CultureSection() {
  return (
    <section id="culture" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge variant="secondary" className="mb-4">Rich Heritage</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              A Tapestry of Cultures & Traditions
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Chad sits at the crossroads of Arab and African cultures, creating a unique 
              blend of traditions, languages, and customs. From the nomadic Toubou of the 
              Sahara to the Sara farmers of the south, each community contributes to the 
              nation's rich cultural mosaic.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Ethnic Groups</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">120+</p>
                <p className="text-sm text-muted-foreground">Languages Spoken</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">
                  Explore Culture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">Chadian Cultural Heritage</DialogTitle>
                  <DialogDescription>
                    Discover the rich tapestry of traditions that make Chad unique.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">
                      Chad is home to over 120 indigenous languages. French and Arabic are the official 
                      languages, with Sara being the most widely spoken indigenous language in the south.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Religious Traditions</h4>
                    <p className="text-sm text-muted-foreground">
                      The population is predominantly Muslim (about 52%), followed by Christianity (about 44%), 
                      with traditional African religions practiced by some communities.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Arts & Crafts</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional crafts include leather working, pottery, weaving, and metalwork. 
                      The Sara people are known for their elaborate scarification patterns, while 
                      northern groups create beautiful silver jewelry.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Oral Traditions</h4>
                    <p className="text-sm text-muted-foreground">
                      Storytelling, poetry, and oral histories are central to Chadian culture. Griots 
                      (traditional storytellers) preserve history and entertain at gatherings.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop"
                alt="Chadian culture and traditions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-serif text-lg font-medium">
                "The heart of Africa beats in the rhythm of Chad's diverse peoples."
              </p>
            </div>
          </div>
        </div>

        {/* Culture Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {item.highlights.map((highlight) => (
                    <Badge key={highlight} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
