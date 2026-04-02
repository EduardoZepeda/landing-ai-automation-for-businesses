"use client";

import { MessageCircle, ArrowRight, User } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { PhoneMockup } from "./PhoneMockup";
import { useMemo } from "react";

export function Hero() {
  const { t } = useI18n();

  const heroDemoMessages = useMemo(() => [
    { from: "bot" as const, text: t("heroDemo.messages.bot1", "Hello! I'm your assistant. How can I help you today?"), time: "09:00" },
    { from: "user" as const, text: t("heroDemo.messages.user1", "I'd like to book an appointment for a cleaning."), time: "09:01" },
    { from: "bot" as const, text: t("heroDemo.messages.bot2", "Of course! I have availability on Wednesday 2nd at 10:00 or Friday 4th at 14:00. Which works best?"), time: "09:01" },
  ], [t]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1628]">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#25d366]/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#128c7e]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.05]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25d366]/30 bg-[#25d366]/10 text-[#25d366] text-sm font-semibold mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
              {t("hero.badge", "WhatsApp-powered AI Agent")}
            </div>
            <h1 className="font-['Plus_Jakarta_Sans',_sans-serif] text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.0] tracking-tight mb-6 animate-slide-up">
              {t("hero.h1.line1", "Your business")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25d366] to-[#128c7e]">
                {t("hero.h1.line2", "always open.")}
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-10 animate-slide-up-delay leading-relaxed">
              {t(
                "hero.description",
                "An intelligent WhatsApp assistant that handles appointments, reminders, and patient queries 24/7 — for dentists, doctors, therapists, and beyond."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delay2">
              <a
                href="#demo"
                className="px-8 py-4 rounded-full bg-[#25d366] text-[#0a1628] font-bold text-base hover:bg-[#20bf5b] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#25d366]/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t("hero.cta.primary", "See Live Demo")}
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-white/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                {t("hero.cta.secondary", "Learn More")}
                <ArrowRight size={16} />
              </a>
            </div>
            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start animate-fade-in-slow">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 border-2 border-[#0a1628] flex items-center justify-center">
                    <User size={16} className="text-slate-300" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  {t("hero.social.count", "500+ clinics")}
                </div>
                <div className="text-slate-400 text-xs">
                  {t("hero.social.sub", "already automating appointments")}
                </div>
              </div>
            </div>
          </div>

          {/* Right: hero phone mockup (static preview) */}
          <div className="flex-shrink-0 animate-float">
            <PhoneMockup messages={heroDemoMessages} readOnly />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-[#25d366]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#25d366]" />
      </div>
    </section>
  );
}
