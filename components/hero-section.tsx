"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Calendar, Users, Play, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollDown = () => {
    document.getElementById("symbols")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
    <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Chad Travel Video</DialogTitle>
        <div className="aspect-video bg-black flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">{t("discoverChad")}</h3>
            <p className="text-white/70 mb-4">
              Experience the breathtaking beauty of Chad through our official tourism video.
            </p>
            <p className="text-sm text-white/50">
              Video content coming soon. Stay tuned for stunning footage of Chad's landscapes, 
              wildlife, and rich cultural heritage.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-in">
            Welcome to Central Africa
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base px-8" onClick={scrollToDestinations}>
              {t("exploreDestinations")}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              onClick={() => setVideoOpen(true)}
            >
              <Play className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("watchVideo")}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold">1.284M</p>
              <p className="text-sm text-white/70">{t("sqKm")}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold">200+</p>
              <p className="text-sm text-white/70">{t("ethnicGroups")}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold">3</p>
              <p className="text-sm text-white/70">{t("unescoSites")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
    </>
  )
}
