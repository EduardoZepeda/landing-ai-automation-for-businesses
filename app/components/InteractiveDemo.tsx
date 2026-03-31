"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { useInView } from "../lib/hooks";
import { seedMessages } from "../lib/data";
import { PhoneMockup } from "./PhoneMockup";

export function InteractiveDemo() {
  const { t } = useI18n();
  const { ref, inView } = useInView();
  const [liveMessages, setLiveMessages] = useState(seedMessages);

  return (
    <section id="demo" className="py-32 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#25d366]/6 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#128c7e]/8 blur-[80px]" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#25d366]/30 text-[#25d366] text-xs font-bold uppercase tracking-widest mb-6">
              {t("demo.badge", "Try it now")}
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {t("demo.h2", "Chat with Aidenta")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25d366] to-[#128c7e]">
                {t("demo.h2.accent", "right now.")}
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              {t("demo.description", "Type anything in the chat — ask to book an appointment, check availability, or just say hello. Experience your future assistant.")}
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                t("demo.hint1", "\"Book me an appointment for next Monday\""),
                t("demo.hint2", "\"What are your available hours?\""),
                t("demo.hint3", "\"Cancel my appointment on Friday\""),
              ].map((h, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#25d366]/20 flex items-center justify-center text-[#25d366] text-xs flex-shrink-0">→</span>
                  <span className="italic text-slate-400">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive phone */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <PhoneMockup messages={liveMessages} />
          </div>
        </div>
      </div>
    </section>
  );
}
