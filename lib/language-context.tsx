"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Language, translations, TranslationKey } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem("chad-language") as Language
    if (saved && ["en", "fr", "ar"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("chad-language", language)
    
    // Set document direction for RTL languages
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  const isRTL = language === "ar"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
