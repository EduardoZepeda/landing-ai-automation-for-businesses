"use client";

import { Lollipop, Stethoscope, Brain, Sparkles, Eye, Activity, Building2, Syringe } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useInView } from "../lib/hooks";
import { specialties } from "../lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lollipop,
  Stethoscope,
  Brain,
  Sparkles,
  Eye,
  Activity,
  Building2,
  Syringe,
};

export function Specialties() {
  const { t } = useI18n();
  const { ref, inView } = useInView();
  return (
    <section id="specialties" className="py-28 bg-[#0d1f2d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25d366]/20 to-transparent" />
      <div ref={ref} className="max-w-6xl mx-auto px-6 text-center">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#25d366]/30 text-[#25d366] text-xs font-bold uppercase tracking-widest mb-5">
            {t("specialties.badge", "Made for")}
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl md:text-5xl font-extrabold text-white">
            {t("specialties.h2", "Every healthcare professional")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {specialties.map((s, i) => {
            const IconComponent = iconMap[s.icon];
            return (
              <div
                key={s.key}
                className={`group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#25d366]/40 hover:bg-[#25d366]/5 transition-all duration-500 cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent size={32} className="text-[#25d366]" />}
                </div>
                <div className="text-white text-sm font-semibold">{t(s.key, s.label)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}