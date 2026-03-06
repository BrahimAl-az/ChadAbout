"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TripPlannerDialog } from "@/components/trip-planner-dialog"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

const navLinksData = [
  { href: "#symbols", labelKey: "symbols" as const },
  { href: "#map", labelKey: "map" as const },
  { href: "#destinations", labelKey: "destinations" as const },
  { href: "#culture", labelKey: "culture" as const },
  { href: "#cuisine", labelKey: "cuisine" as const },
  { href: "#cities", labelKey: "cities" as const },
  { href: "#about", labelKey: "about" as const },
]

export function Header() {
  const { t, isRTL } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">C</span>
            </div>
            <span className={`font-serif text-xl font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
              {t("discoverChad")}
            </span>
          </Link>

          <nav className={`hidden lg:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            {navLinksData.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <LanguageSwitcher isScrolled={isScrolled} />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className={isScrolled ? "" : "text-white hover:bg-white/10"}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">{t("toggleTheme")}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{t("toggleMenu")}</span>
            </Button>

            <TripPlannerDialog className="hidden lg:flex" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className={`container mx-auto px-4 py-4 flex flex-col gap-2 ${isRTL ? "items-end" : ""}`}>
            {navLinksData.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <TripPlannerDialog trigger={<Button className="mt-4 w-full">{t("planYourTrip")}</Button>} />
          </nav>
        </div>
      )}
    </header>
  )
}
