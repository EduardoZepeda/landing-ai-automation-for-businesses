"use client";

import { useI18n } from "../lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-slate-300 text-sm font-medium hover:border-[#25d366]/50 hover:text-[#25d366] transition-all"
    >
      <Globe size={14} />
      <span className="uppercase">{locale}</span>
    </button>
  );
}