"use client";

import { useI18n } from "../lib/i18n";
import { useInView } from "../lib/hooks";
import { stats } from "../lib/data";

export function Stats() {
  const { t } = useI18n();
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-gradient-to-r from-[#128c7e] to-[#25d366] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl md:text-5xl font-extrabold text-white mb-2">
                {s.value}
              </div>
              <div className="text-[#003d2e] font-semibold text-sm">{t(`stats.${i}`, s.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
