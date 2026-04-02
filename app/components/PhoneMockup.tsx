"use client";

import { useState, useEffect } from "react";
import { Phone, MoreVertical, Smile, Send, Stethoscope } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { type Message } from "../lib/data";

const SESSION_COOKIE_NAME = "aidenta_session";

function generateUUID(): string {
  return crypto.randomUUID()
}

function getSessionId(): string {
  if (typeof document === "undefined") return "";

  const cookies = document.cookie.split("; ");
  const sessionCookie = cookies.find((c) => c.startsWith(SESSION_COOKIE_NAME + "="));

  if (sessionCookie) {
    return sessionCookie.split("=")[1];
  }

  const newId = generateUUID();
  document.cookie = `${SESSION_COOKIE_NAME}=${newId}; path=/; max-age=31536000; SameSite=Lax`;
  return newId;
}

export function PhoneMockup({
  messages,
  readOnly = false,
}: {
  messages: Message[];
  readOnly?: boolean;
}) {
  const { t } = useI18n();
  // Use prop messages for initial state, fall back to empty for interactive
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");

  // Sync messages from props after mount (handles SSR hydration)
  useEffect(() => {
    setMsgs(messages);
  }, [messages]);

  useEffect(() => {
    setSessionId(getSessionId());
  }, []);

  const now = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { from: "user", text: input.trim(), time: now() };
    setInput("");
    setLoading(true);

    setMsgs((m) => [...m, userMsg]);

    try {
      const res = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text, sessionId }),
      });
      const data = await res.json();

      // Extract response from data.text.body
      const botText =
        data?.text?.body || data?.reply || data?.message || data?.response || t("demo.fallback", "✅ Got it! I'll process your request shortly.");
      setMsgs((m) => [...m, { from: "bot", text: botText, time: now() }]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          from: "bot",
          text: t("demo.error", "Hmm, I couldn't connect right now. Please try again in a moment!"),
          time: now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative select-none" style={{ width: 320 }}>
      {/* Phone shell */}
      <div className="relative rounded-[44px] overflow-hidden bg-[#111b21] shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] border border-white/10">
        {/* Notch */}
        <div className="relative bg-[#111b21] pt-3 pb-1 flex justify-center">
          <div className="w-24 h-5 rounded-full bg-[#0a0f14] flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="w-8 h-1.5 rounded-full bg-slate-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          </div>
        </div>

        {/* WA header */}
        <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] flex items-center justify-center text-base shadow-lg">
            <Stethoscope size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm font-semibold truncate">
              {t("demo.contact.name", "Aidenta Assistant")}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366]" />
              <span className="text-[#25d366] text-xs">
                {t("demo.contact.status", "online")}
              </span>
            </div>
          </div>
          <div className="flex gap-3 text-slate-400">
            <Phone size={16} className="cursor-pointer hover:text-white transition-colors" />
            <MoreVertical size={16} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Chat area */}
        <div
          className="overflow-y-auto px-3 py-4 flex flex-col gap-2"
          style={{
            height: 380,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 30 L70 30 L55 45 L60 65 L40 52 L20 65 L25 45 L10 30 L30 30Z' fill='none' stroke='%23ffffff05' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundColor: "#0d1418",
          }}
        >
          {/* Date chip */}
          <div className="flex justify-center mb-2">
            <span className="px-3 py-1 rounded-full bg-[#1f2c34] text-slate-400 text-[10px] shadow">
              {t("demo.today", "TODAY")}
            </span>
          </div>

          {msgs.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm shadow-md relative ${m.from === "user"
                  ? "bg-[#005c4b] text-white rounded-tr-sm"
                  : "bg-[#1f2c34] text-slate-100 rounded-tl-sm"
                  }`}
                style={{ wordBreak: "break-word" }}
              >
                {m.text}
                <div className={`text-[9px] mt-0.5 flex items-center justify-end gap-1 ${m.from === "user" ? "text-[#a8d5c2]" : "text-slate-500"}`}>
                  {m.time}
                  {m.from === "user" && <span>✓✓</span>}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#1f2c34] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-typing-dot"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        {!readOnly && (
          <div className="bg-[#1f2c34] px-2 py-2.5 flex items-center gap-2">
            <button className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10">
              <Smile size={20} />
            </button>
            <input
              className="flex-1 bg-[#2a3942] text-white text-sm px-3 py-2 rounded-full outline-none placeholder-slate-500 focus:ring-1 focus:ring-[#25d366]/50 transition-all"
              placeholder={t("demo.input.placeholder", "Type a message…")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-full bg-[#25d366] hover:bg-[#20bf5b] disabled:bg-slate-700 disabled:cursor-not-allowed flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg shadow-[#25d366]/30"
            >
              <Send size={16} className="text-white" />
            </button>
          </div>
        )}

        {/* Bottom bar */}
        <div className="bg-[#111b21] py-3 flex justify-center gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-slate-600" />
          ))}
        </div>
      </div>

      {/* Glow under phone */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#25d366]/20 blur-2xl rounded-full" />
    </div>
  );
}