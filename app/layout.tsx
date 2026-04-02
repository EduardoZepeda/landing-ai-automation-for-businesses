import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./lib/i18n";
import { JsonLd } from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: {
    default: "Aidenta - WhatsApp AI Assistant for Clinics",
    template: "%s | Aidenta",
  },
  description: "AI-powered WhatsApp assistant that handles appointments, reminders, and patient queries 24/7 for dental clinics, medical practices, and healthcare professionals.",
  keywords: ["AI assistant", "WhatsApp", "clinic automation", "appointment booking", "dental clinic", "medical practice", "healthcare", "24/7", "WhatsApp Business", "patient management"],
  authors: [{ name: "Aidenta" }],
  creator: "Aidenta",
  publisher: "Aidenta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Aidenta",
    title: "Aidenta - WhatsApp AI Assistant for Clinics",
    description: "AI-powered WhatsApp assistant that handles appointments, reminders, and patient queries 24/7 for dental clinics, medical practices, and healthcare professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aidenta - AI Assistant for Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidenta - WhatsApp AI Assistant for Clinics",
    description: "AI-powered WhatsApp assistant that handles appointments, reminders, and patient queries 24/7 for healthcare professionals.",
    creator: "@aidenta",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_URL}`,
      es: `${process.env.NEXT_PUBLIC_URL}?lang=es`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <JsonLd />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}