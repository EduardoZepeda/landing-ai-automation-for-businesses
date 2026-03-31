"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { Specialties } from "./components/Specialties";
import { Stats } from "./components/Stats";
import { Pricing } from "./components/Pricing";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50%       { transform: translateY(8px) translateX(-50%); }
        }
        @keyframes typingDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1);   opacity: 1; }
        }

        .animate-fade-in        { animation: fadeIn  0.8s ease both; }
        .animate-fade-in-slow   { animation: fadeIn  1.4s ease 0.6s both; }
        .animate-slide-up       { animation: slideUp 0.7s ease 0.1s both; }
        .animate-slide-up-delay { animation: slideUp 0.7s ease 0.25s both; }
        .animate-slide-up-delay2{ animation: slideUp 0.7s ease 0.4s both; }
        .animate-float          { animation: float  4s ease-in-out infinite; }
        .animate-bounce-slow    { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-typing-dot     { animation: typingDot 1.2s infinite; }

        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a1628; }
        ::-webkit-scrollbar-thumb { background: #25d366; border-radius: 99px; }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <InteractiveDemo />
        <Specialties />
        <Stats />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
