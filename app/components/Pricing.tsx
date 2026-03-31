"use client";

import { MessageCircle, Bot, Calendar, Check, Info, Lock } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useInView } from "../lib/hooks";
import { plans } from "../lib/data";

export function Pricing() {
  const { t } = useI18n();
  const { ref, inView } = useInView();
  return (
    <section id="pricing" className="py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#25d366]/4 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        <div className={`text-center mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#25d366]/30 text-[#25d366] text-xs font-bold uppercase tracking-widest mb-5">
            {t("pricing.badge", "Investment")}
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("pricing.h2", "One-time installation.")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25d366] to-[#128c7e]">
              {t("pricing.h2.accent", "No recurring fees from us.")}
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {t("pricing.subtitle", "We build and configure your AI assistant. You maintain full ownership and pay WhatsApp & AI providers directly at their standard rates — typically under $30/month.")}
          </p>
        </div>

        {/* Provider cost explainer */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {[
            { icon: MessageCircle, label: t("pricing.provider.wa", "WhatsApp Business API"), cost: t("pricing.provider.wa.cost", "~$5–15 / mo") },
            { icon: Bot, label: t("pricing.provider.ai", "OpenAI / AI model"), cost: t("pricing.provider.ai.cost", "~$5–15 / mo") },
            { icon: Calendar, label: t("pricing.provider.cal", "Calendar provider"), cost: t("pricing.provider.cal.cost", "Free tier available") },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm">
              <item.icon size={16} className="text-slate-400" />
              <span className="text-slate-400">{item.label}</span>
              <span className="text-[#25d366] font-semibold">{item.cost}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <div
              key={p.key}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-700 ${p.highlight
                  ? "border-[#25d366]/60 bg-gradient-to-b from-[#25d366]/10 to-[#128c7e]/5 shadow-2xl shadow-[#25d366]/10 md:scale-105"
                  : "border-white/[0.08] bg-white/[0.02]"
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#25d366] text-[#003d2e] text-xs font-bold whitespace-nowrap">
                  {t(`${p.key}.badge`, p.badge)}
                </div>
              )}

              <div className="mb-6">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                  {t(`${p.key}.name`, p.name)}
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl font-extrabold text-white leading-none">
                    {t(`${p.key}.price`, p.price)}
                  </span>
                  {p.price !== "Custom" && (
                    <span className="text-[#25d366] text-sm font-semibold mb-0.5">
                      {t(`${p.key}.once`, "one-time")}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {t(`${p.key}.desc`, p.desc)}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className="w-5 h-5 rounded-full bg-[#25d366]/20 text-[#25d366] flex-shrink-0 mt-0.5" />
                    {t(`${p.key}.feature${fi}`, f)}
                  </li>
                ))}
              </ul>

              {/* Provider note */}
              <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] mb-6">
                <Info size={14} className="text-[#25d366] mt-0.5 flex-shrink-0" />
                <p className="text-slate-500 text-xs leading-relaxed">
                  {t(`${p.key}.note`, p.note)}
                </p>
              </div>

              <a
                href="#"
                className={`w-full py-3.5 rounded-full text-center font-bold text-sm transition-all hover:scale-105 active:scale-95 ${p.highlight
                    ? "bg-[#25d366] text-[#003d2e] hover:bg-[#20bf5b] shadow-lg shadow-[#25d366]/30"
                    : "border border-white/20 text-white hover:border-[#25d366]/50 hover:bg-[#25d366]/5"
                  }`}
              >
                {t(`${p.key}.cta`, p.cta)}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <Lock size={14} />
            {t("pricing.footer", "All packages include source code handoff. You own everything we build.")}
          </p>
        </div>
      </div>
    </section>
  );
}