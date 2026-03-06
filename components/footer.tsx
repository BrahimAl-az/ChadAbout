"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { TripPlannerDialog } from "@/components/trip-planner-dialog"
import { Button } from "@/components/ui/button"

const footerLinks = {
  destinations: [
    { label: "Zakouma National Park", href: "#destinations" },
    { label: "Ennedi Plateau", href: "#destinations" },
    { label: "Lake Chad", href: "#destinations" },
    { label: "Tibesti Mountains", href: "#destinations" },
    { label: "Ounianga Lakes", href: "#destinations" },
  ],
  culture: [
    { label: "Traditional Music", href: "#culture" },
    { label: "Festivals", href: "#culture" },
    { label: "Cuisine", href: "#cuisine" },
    { label: "Fashion", href: "#culture" },
    { label: "Languages", href: "#culture" },
  ],
  travel: [
    { label: "Plan Your Trip", href: "#plan" },
    { label: "Visa Information", href: "#about" },
    { label: "Best Time to Visit", href: "#about" },
    { label: "Getting Around", href: "#about" },
    { label: "Travel Safety", href: "#about" },
  ],
  about: [
    { label: "About Chad", href: "#about" },
    { label: "History", href: "#about" },
    { label: "Geography", href: "#map" },
    { label: "National Symbols", href: "#symbols" },
    { label: "Contact Us", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">C</span>
              </div>
              <span className="font-serif text-xl font-bold">Discover Chad</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-xs">
              Your gateway to exploring the breathtaking landscapes, rich culture, and warm 
              hospitality of Central Africa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                <span>N'Djamena, Chad</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <span>info@discoverchad.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4" />
                <span>+235 22 52 XX XX</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Culture</h4>
            <ul className="space-y-2">
              {footerLinks.culture.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Travel Info</h4>
            <ul className="space-y-2">
              {footerLinks.travel.map((link) => (
                <li key={link.label}>
                  {link.href === "#plan" ? (
                    <TripPlannerDialog 
                      trigger={
                        <button className="text-sm text-background/70 hover:text-background transition-colors text-left">
                          {link.label}
                        </button>
                      }
                    />
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Discover Chad. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
