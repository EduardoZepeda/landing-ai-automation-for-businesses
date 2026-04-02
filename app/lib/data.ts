// ─── WhatsApp mock data ───────────────────────────────────────────────────────
export const API_URL = "https://example.org/api";

export type Message = { from: "user" | "bot"; text: string; time: string };

export const seedMessages: Message[] = [
  {
    from: "bot",
    text: "Hello! I'm your assistant. How can I help you today?",
    time: "09:00",
  },
  {
    from: "user",
    text: "I'd like to book an appointment for a cleaning.",
    time: "09:01",
  },
  {
    from: "bot",
    text: "Of course! I have availability on Wednesday 2nd at 10:00 or Friday 4th at 14:00. Which works best?",
    time: "09:01",
  },
];

// ─── Features data ───────────────────────────────────────────────────────────
export const features = [
  {
    icon: "MessageCircle",
    key: "features.autoresponder",
    title: "24/7 WhatsApp Autoresponder",
    desc: "Your assistant replies instantly to patients around the clock — or only during the hours you choose. No message goes unanswered.",
  },
  {
    icon: "Mic",
    key: "features.audio",
    title: "Understands Voice Messages",
    desc: "Patients can send audio notes and the assistant transcribes and processes them automatically, just like a text message.",
  },
  {
    icon: "Image",
    key: "features.images",
    title: "Reads & Analyses Images",
    desc: "Send a photo of a prescription, insurance card, or X-ray and the assistant extracts the relevant information instantly.",
  },
  {
    icon: "Table",
    key: "features.sheets",
    title: "Saves Data to Google Sheets",
    desc: "Every patient interaction, contact detail, and request is automatically logged to your Google Sheet — always up to date.",
  },
  {
    icon: "Calendar",
    key: "features.calendar",
    title: "Books via Google Calendar",
    desc: "Appointments are created, updated, and cancelled directly in your Google Calendar in real time, with zero manual input.",
  },
  {
    icon: "Bell",
    key: "features.reminders",
    title: "Reminders via WhatsApp & Email",
    desc: "Automated reminders are sent through both WhatsApp and email before each visit, reducing no-shows by up to 60%.",
  },
];

// ─── Specialties data ───────────────────────────────────────────────────────
export const specialties = [
  { icon: "Lollipop", key: "spec.dental", label: "Dental Clinics" },
  { icon: "Stethoscope", key: "spec.general", label: "General Practice" },
  { icon: "Brain", key: "spec.therapy", label: "Therapy & Psychology" },
  { icon: "Sparkles", key: "spec.aesthetic", label: "Aesthetic Medicine" },
  { icon: "Eye", key: "spec.optometry", label: "Optometry" },
  { icon: "Activity", key: "spec.physio", label: "Physiotherapy" },
  { icon: "Building2", key: "spec.hospital", label: "Private Hospitals" },
  { icon: "Syringe", key: "spec.derma", label: "Dermatology" },
];

// ─── Stats data ───────────────────────────────────────────────────────────────
export const stats = [
  { value: "24/7", label: "Always available" },
  { value: "−60%", label: "Fewer no-shows" },
  { value: "3 min", label: "Setup time" },
  { value: "20+", label: "Google integrations" },
];

// ─── Pricing data ─────────────────────────────────────────────────────────────
export const plans = [
  {
    key: "pricing.essential",
    name: "Essential",
    price: "$490",
    badge: null,
    desc: "One-time setup for solo practitioners and small clinics.",
    features: [
      "1 WhatsApp number configured",
      "Appointment booking flow",
      "Automated reminders setup",
      "Calendar integration",
      "30-day post-install support",
    ],
    note: "You pay providers (WhatsApp API, OpenAI) directly.",
    cta: "Get a Quote",
    highlight: false,
  },
  {
    key: "pricing.clinic",
    name: "Clinic",
    price: "$990",
    badge: "Most Requested",
    desc: "Full-featured setup for multi-practitioner clinics.",
    features: [
      "Up to 3 WhatsApp numbers",
      "Multi-doctor scheduling logic",
      "Custom conversation flows",
      "Analytics dashboard setup",
      "EHR / calendar integration",
      "60-day post-install support",
    ],
    note: "You pay providers (WhatsApp API, OpenAI) directly.",
    cta: "Get a Quote",
    highlight: true,
  },
  {
    key: "pricing.enterprise",
    name: "Enterprise",
    price: "Custom",
    badge: null,
    desc: "Tailored build for hospital groups and multi-location networks.",
    features: [
      "Unlimited WhatsApp numbers",
      "White-label & custom branding",
      "Full EHR / HIS integration",
      "Dedicated project manager",
      "Staff training sessions",
      "Ongoing retainer available",
    ],
    note: "Scope and pricing defined after discovery call.",
    cta: "Contact Us",
    highlight: false,
  },
];
