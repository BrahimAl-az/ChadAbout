"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Utensils, Flame, Leaf } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const dishes = [
  {
    id: 1,
    name: "Boule",
    description: "The staple food of Chad, a thick porridge made from millet, sorghum, or maize flour. Served with various sauces and stews.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080&auto=format&fit=crop",
    category: "Staple",
    ingredients: ["Millet flour", "Water", "Served with sauce"],
    spiceLevel: 1,
  },
  {
    id: 2,
    name: "Daraba",
    description: "A nutritious vegetable stew made with okra, tomatoes, and dried fish or meat, often served over boule.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    category: "Stew",
    ingredients: ["Okra", "Tomatoes", "Dried fish", "Spices"],
    spiceLevel: 2,
  },
  {
    id: 3,
    name: "Kissar",
    description: "Thin, spongy pancakes similar to Ethiopian injera, made from fermented sorghum batter and used to scoop up stews.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081&auto=format&fit=crop",
    category: "Bread",
    ingredients: ["Sorghum flour", "Fermented batter", "Water"],
    spiceLevel: 0,
  },
  {
    id: 4,
    name: "Jarret de Boeuf",
    description: "Slow-cooked beef shank braised with aromatic spices, a dish reflecting French colonial influence on Chadian cuisine.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    category: "Meat",
    ingredients: ["Beef shank", "Onions", "Tomatoes", "Spices"],
    spiceLevel: 2,
  },
  {
    id: 5,
    name: "Banda (Smoked Fish)",
    description: "A traditional method of preserving fish from Lake Chad, smoked over wood fires and used in various dishes.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    category: "Seafood",
    ingredients: ["Fresh fish", "Wood smoke", "Salt"],
    spiceLevel: 1,
  },
  {
    id: 6,
    name: "Karkanji",
    description: "A refreshing hibiscus drink, deep red in color, served cold and sweetened. Popular throughout Chad and the Sahel region.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=2074&auto=format&fit=crop",
    category: "Beverage",
    ingredients: ["Hibiscus flowers", "Sugar", "Water", "Ginger"],
    spiceLevel: 0,
  },
]

export function CuisineSection() {
  return (
    <section id="cuisine" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Taste of Chad</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Traditional Chadian Cuisine
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the flavors of Chad, where African traditions meet Sahelian influences 
            to create hearty, flavorful dishes that bring communities together.
          </p>
        </div>

        {/* Featured Dish */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
              alt="Chadian cuisine spread"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end p-8">
              <div className="text-white">
                <Badge className="mb-3">Featured Experience</Badge>
                <h3 className="font-serif text-3xl font-bold mb-2">Culinary Journey</h3>
                <p className="text-white/80 max-w-md">
                  Experience authentic Chadian cooking with local families and learn the 
                  traditional methods passed down through generations.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary/50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Key Ingredients of Chadian Cooking
            </h3>
            <div className="space-y-4">
              {[
                { name: "Millet & Sorghum", desc: "The foundation of most Chadian dishes, these grains are ground into flour for boule and kissar." },
                { name: "Peanuts", desc: "Used to make sauces, oils, and pastes that add richness to stews and grilled meats." },
                { name: "Dried Fish", desc: "A protein staple, especially from Lake Chad, used to flavor soups and sauces." },
                { name: "Okra", desc: "Known locally as 'gombo,' it thickens sauces and adds nutrition to many dishes." },
              ].map((ingredient) => (
                <div key={ingredient.name} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{ingredient.name}</h4>
                    <p className="text-sm text-muted-foreground">{ingredient.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <Card key={dish.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4">{dish.category}</Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    {dish.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Flame
                        key={i}
                        className={`h-4 w-4 ${
                          i < dish.spiceLevel ? "text-primary fill-primary" : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      {dish.spiceLevel === 0 ? "Mild" : dish.spiceLevel === 1 ? "Medium" : "Spicy"}
                    </span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Recipe
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">{dish.name}</DialogTitle>
                        <DialogDescription>{dish.category} dish from Chad</DialogDescription>
                      </DialogHeader>
                      <div className="relative h-48 -mx-6 overflow-hidden">
                        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-4 mt-4">
                        <p className="text-muted-foreground">{dish.description}</p>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Main Ingredients</h4>
                          <div className="flex flex-wrap gap-2">
                            {dish.ingredients.map((ing) => (
                              <Badge key={ing} variant="secondary">{ing}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 bg-secondary/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            Traditional Chadian recipes are passed down through generations. Visit local 
                            restaurants in N'Djamena or experience home cooking with local families to 
                            taste authentic {dish.name}.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline">
                Explore All Dishes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">Chadian Cuisine Guide</DialogTitle>
                <DialogDescription>
                  A complete guide to traditional Chadian foods and beverages.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Chadian cuisine varies by region, reflecting the country's diverse geography and 
                  ethnic composition. The staple foods are millet, sorghum, and rice, typically 
                  served with rich sauces and stews.
                </p>
                <div className="grid gap-3">
                  {dishes.map((dish) => (
                    <div key={dish.id} className="flex gap-4 p-3 bg-secondary/50 rounded-lg">
                      <img 
                        src={dish.image} 
                        alt={dish.name} 
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground">{dish.name}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
