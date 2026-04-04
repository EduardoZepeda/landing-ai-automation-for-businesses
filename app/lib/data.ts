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
    key: "pricing.basic",
    name: "Basic",
    price: "$275",
    badge: null,
    desc: "Perfect for small businesses just getting started with automation.",
    features: [
      "Text messages handling",
      "Appointment scheduling",
      "Google Sheets data storage",
      "WhatsApp integration",
    ],
    note: "You pay providers (WhatsApp API, OpenAI) directly.",
    cta: "Get Started",
    highlight: false,
  },
  {
    key: "pricing.business",
    name: "Business",
    price: "$350",
    badge: "Most Popular",
    desc: "Everything you need to fully automate your client communication.",
    features: [
      "Text messages handling",
      "Appointment scheduling",
      "Google Sheets data storage",
      "WhatsApp integration",
      "Image analysis & processing",
      "Voice message transcription",
      "Reminders via WhatsApp & email",
    ],
    note: "You pay providers (WhatsApp API, OpenAI) directly.",
    cta: "Get Started",
    highlight: true,
  },
  {
    key: "pricing.customized",
    name: "Customized",
    price: "Custom",
    badge: null,
    desc: "A tailor-made solution built specifically for your unique needs.",
    features: [
      "Custom integrations & workflows",
      "Dedicated support & training",
    ],
    note: "Let's talk about what you need. We'll build it together.",
    cta: "Contact Us",
    highlight: false,
  },
];
