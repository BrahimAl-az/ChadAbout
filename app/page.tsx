import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NationalSymbolsSection } from "@/components/national-symbols-section"
import { MapSection } from "@/components/map-section"
import { DestinationsSection } from "@/components/destinations-section"
import { CultureSection } from "@/components/culture-section"
import { CuisineSection } from "@/components/cuisine-section"
import { CitiesSection } from "@/components/cities-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function DiscoverChadPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NationalSymbolsSection />
      <MapSection />
      <DestinationsSection />
      <CultureSection />
      <StatsSection />
      <CuisineSection />
      <CitiesSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
