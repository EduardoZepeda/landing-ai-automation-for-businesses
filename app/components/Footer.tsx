"use client";

import { Stethoscope } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="py-12 bg-[#070f1a] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Stethoscope size={20} className="text-[#25d366]" />
          <span className="font-['Plus_Jakarta_Sans',_sans-serif] text-white font-bold">Aiko</span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          {t("footer.copy", "© 2026 Aiko. All rights reserved.")}
        </p>
        <div className="flex gap-6 text-slate-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">{t("footer.privacy", "Privacy")}</a>
          <a href="#" className="hover:text-white transition-colors">{t("footer.terms", "Terms")}</a>
          <a href="#" className="hover:text-white transition-colors">{t("footer.contact", "Contact")}</a>
        </div>
      </div>
    </footer>
  );
}