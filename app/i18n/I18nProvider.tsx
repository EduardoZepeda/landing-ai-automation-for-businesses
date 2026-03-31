"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Translations = typeof en;
type Locale = "en" | "es";

const translations: Record<Locale, Translations> = { en, es };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale;
    if (stored && (stored === "en" || stored === "es")) {
      setLocale(stored);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "es") {
        setLocale("es");
      }
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string, fallback: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return fallback;
      }
    }

    return typeof value === "string" ? value : fallback;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}