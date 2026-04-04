"use client";

import { useI18n } from "../lib/i18n";

export function JsonLd() {
  const { t } = useI18n();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Aiko",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser, WhatsApp",
    offers: {
      "@type": "Offer",
      price: "275",
      priceCurrency: "USD",
    },
    description: t("jsonLd.description", "AI-powered WhatsApp assistant that handles appointments, reminders, and patient queries 24/7 for dental clinics, medical practices, and healthcare professionals."),
    url: process.env.NEXT_PUBLIC_URL,
    author: {
      "@type": "Organization",
      name: "Aiko",
      url: process.env.NEXT_PUBLIC_URL,
    },
    provider: {
      "@type": "Organization",
      name: "Aiko",
      url: process.env.NEXT_PUBLIC_URL,
    },
    featureList: [
      t("jsonLd.feature0", "24/7 WhatsApp autoresponder"),
      t("jsonLd.feature1", "Automatic appointment booking"),
      t("jsonLd.feature2", "WhatsApp and email reminders"),
      t("jsonLd.feature3", "Google Calendar integration"),
      t("jsonLd.feature4", "Patient management"),
    ],
    softwareVersion: "1.0.0",
    releaseNotes: t("jsonLd.releaseNotes", "Initial release of AI assistant for healthcare clinics."),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}