"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Translations = typeof en;
type Locale = "en" | "es";

const translations: Record<Locale, Translations> = { en, es };

// Default locale to use during SSR to prevent hydration mismatch
const DEFAULT_LOCALE: Locale = "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback: string) => string;
  isMounted: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

// No-op function for SSR
const noop = () => {};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client after hydration
    const stored = localStorage.getItem("locale") as Locale;
    if (stored && (stored === "en" || stored === "es")) {
      setLocaleState(stored);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "es") {
        setLocaleState("es");
      }
    }
    setIsMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string, fallback: string): string => {
    // During SSR or before hydration, return the fallback to avoid mismatch
    if (!isMounted) return fallback;
    
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

  // No-op setLocale for SSR
  const noopSetLocale = () => {};

  // Use default locale during SSR to prevent hydration mismatch
  const contextValue: I18nContextType = isMounted
    ? { locale, setLocale, t, isMounted }
    : { locale: DEFAULT_LOCALE, setLocale: noopSetLocale, t: () => "", isMounted: false };

  return (
    <I18nContext.Provider value={contextValue}>
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