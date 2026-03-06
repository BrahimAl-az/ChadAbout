"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function NationalSymbolsSection() {
  const { t, isRTL } = useLanguage()
  return (
    <section id="symbols" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isRTL ? "text-right" : ""}`}>
          <Badge variant="secondary" className="mb-4">{t("nationalSymbols")}</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("nationalSymbols")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("nationalSymbolsSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Flag Card */}
          <Card className="overflow-hidden bg-card border-border/50 hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[3/2] relative overflow-hidden bg-muted">
              <img
                src="/images/chad-flag.jpg"
                alt="Flag of Chad"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Flag of Chad
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The national flag of Chad is a vertical tricolor consisting of a blue, gold (yellow), 
                and red field. It was adopted in 1959, a year before independence from France.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#002664] flex-shrink-0 mt-0.5 border border-border/50" />
                  <div>
                    <span className="font-semibold text-foreground">Blue</span>
                    <p className="text-sm text-muted-foreground">Represents the sky, hope, and the southern agricultural regions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#FECB00] flex-shrink-0 mt-0.5 border border-border/50" />
                  <div>
                    <span className="font-semibold text-foreground">Gold/Yellow</span>
                    <p className="text-sm text-muted-foreground">Symbolizes the sun and the desert in the north</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#C60C30] flex-shrink-0 mt-0.5 border border-border/50" />
                  <div>
                    <span className="font-semibold text-foreground">Red</span>
                    <p className="text-sm text-muted-foreground">Represents the blood shed for independence and national unity</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coat of Arms Card */}
          <Card className="overflow-hidden bg-card border-border/50 hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[3/2] relative overflow-hidden bg-muted flex items-center justify-center p-8">
              <img
                src="/images/chad-coat-of-arms.jpg"
                alt="Coat of Arms of Chad"
                className="w-full h-full object-contain"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Coat of Arms
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The coat of arms of Chad was adopted in 1970. It features a shield with wavy lines 
                representing Lake Chad, supported by a goat and a lion.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Shield</span>
                    <p className="text-sm text-muted-foreground">Wavy blue and gold lines symbolize Lake Chad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Supporters</span>
                    <p className="text-sm text-muted-foreground">A goat (left) and lion (right) represent the north and south</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Motto</span>
                    <p className="text-sm text-muted-foreground">"Unité, Travail, Progrès" (Unity, Work, Progress)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* National Anthem */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-card border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                National Anthem
              </h3>
              <p className="text-primary font-semibold text-lg mb-2">La Tchadienne</p>
              <p className="text-muted-foreground mb-6">
                "The Chadian" - Adopted upon independence in 1960
              </p>
              <div className="bg-secondary/50 rounded-lg p-6">
                <p className="text-foreground italic leading-relaxed">
                  "Peuple Tchadien, debout et à l'ouvrage!<br />
                  Tu as conquis la terre et ton droit;<br />
                  Ta liberté naîtra de ton courage.<br />
                  Lève les yeux, l'avenir est à toi."
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  "Chadian people, arise and to work!<br />
                  You have conquered the land and your rights;<br />
                  Your freedom will be born of your courage.<br />
                  Raise your eyes, the future is yours."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
