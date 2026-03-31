"use client";

import { Rocket } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useInView } from "../lib/hooks";

export function CTABanner() {
  const { t } = useI18n();
  const { ref, inView } = useInView();
  return (
    <section className="py-28 bg-[#0d1f2d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#25d366]/10 via-transparent to-[#128c7e]/10" />
      <div ref={ref} className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <div className="flex justify-center mb-6">
          <Rocket size={48} className="text-[#25d366]" />
        </div>
        <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl md:text-5xl font-extrabold text-white mb-6">
          {t("cta.h2", "Ready to automate your clinic?")}
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          {t("cta.desc", "Pay once, own it forever. We set everything up, hand you the keys, and you keep 100% control — with no ongoing fees from us.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-10 py-4 rounded-full bg-[#25d366] text-[#003d2e] font-bold text-base hover:bg-[#20bf5b] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#25d366]/30"
          >
            {t("cta.primary", "See installation packages")}
          </a>
          <a
            href="#demo"
            className="px-10 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-white/50 transition-all"
          >
            {t("cta.secondary", "Try the live demo")}
          </a>
        </div>
      </div>
    </section>
  );
}