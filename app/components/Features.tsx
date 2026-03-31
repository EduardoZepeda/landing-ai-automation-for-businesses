"use client";

import { MessageCircle, Mic, Image, Table, Calendar, Bell } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useInView } from "../lib/hooks";
import { features } from "../lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageCircle,
  Mic,
  Image,
  Table,
  Calendar,
  Bell,
};

function FeatureCard({ icon, featureKey, title, desc, delay, inView }: { icon: string; featureKey: string; title: string; desc: string; delay: number; inView: boolean }) {
  const { t } = useI18n();
  const IconComponent = iconMap[icon];
  return (
    <div
      className={`group relative p-7 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-[#25d366]/40 hover:bg-[#25d366]/5 transition-all duration-500 cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#25d366]/0 to-[#25d366]/0 group-hover:from-[#25d366]/5 group-hover:to-transparent transition-all duration-500" />
      <div className="text-3xl mb-4">
        {IconComponent && <IconComponent size={28} className="text-[#25d366]" />}
      </div>
      <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-white font-bold text-lg mb-2">
        {t(`${featureKey}.title`, title)}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {t(`${featureKey}.desc`, desc)}
      </p>
    </div>
  );
}

export function Features() {
  const { t } = useI18n();
  const { ref, inView } = useInView();
  return (
    <section id="features" className="py-32 bg-[#0d1f2d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25d366]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25d366]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#128c7e]/5 blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#25d366]/30 text-[#25d366] text-xs font-bold uppercase tracking-widest mb-5">
            {t("features.badge", "What it does")}
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("features.h2", "Everything your front desk does,")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25d366] to-[#128c7e]">
              {t("features.h2.accent", "automated.")}
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            {t("features.subtitle", "Stop losing patients to voicemail. Let Aidenta handle the scheduling so you can focus on care.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.key} icon={f.icon} featureKey={f.key} title={f.title} desc={f.desc} delay={i * 80} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
