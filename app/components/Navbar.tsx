"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-[#0a1628]/90 backdrop-blur-xl shadow-2xl" : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-['Plus_Jakarta_Sans',_sans-serif] text-xl font-bold text-white tracking-tight">
            Aiko
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          <a href="#features" className="hover:text-[#25d366] transition-colors">{t("nav.features", "Features")}</a>
          <a href="#demo" className="hover:text-[#25d366] transition-colors">{t("nav.demo", "Demo")}</a>
          <a href="#specialties" className="hover:text-[#25d366] transition-colors">{t("nav.specialties", "Specialties")}</a>
          <a href="#pricing" className="hover:text-[#25d366] transition-colors">{t("nav.pricing", "Pricing")}</a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#demo"
            className="px-5 py-2.5 rounded-full bg-[#25d366] text-[#0a1628] text-sm font-bold hover:bg-[#20bf5b] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25d366]/30"
          >
            {t("nav.cta", "Try Free")}
          </a>
        </div>
      </div>
    </nav>
  );
}