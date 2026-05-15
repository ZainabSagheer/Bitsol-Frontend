import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Entropy } from "@/components/ui/entropy";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bitsolmarketing.com"),
  title: {
    default: "BITSOL Marketing | AI Digital Marketing Agency Pakistan",
    template: "%s | BITSOL Marketing",
  },
  description:
    "BITSOL Marketing is a full-service AI digital marketing agency in Pakistan. We deliver AI SEO, chatbot development, Meta ads, automation, and growth marketing globally.",
  keywords: [
    "AI digital marketing agency",
    "AI marketing agency Pakistan",
    "AI SEO services",
    "AI chatbot development",
    "digital marketing agency Pakistan",
    "WhatsApp AI automation",
    "Meta ads agency",
    "growth marketing agency",
    "web development Pakistan",
    "BITSOL Marketing",
  ],
  authors: [{ name: "BITSOL Marketing Team" }],
  creator: "BITSOL Marketing PVT LTD",
  publisher: "BITSOL Marketing PVT LTD",
  alternates: {
    canonical: "https://bitsolmarketing.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitsolmarketing.com",
    siteName: "BITSOL Marketing",
    title: "BITSOL Marketing | AI Digital Marketing Agency Pakistan",
    description:
      "Full-service AI digital marketing agency offering SEO, chatbot development, Meta ads, automation and growth marketing for businesses in Pakistan and globally.",
    images: [
      {
        url: "https://bitsolmarketing.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BITSOL Marketing — AI Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BITSOL Marketing | AI Digital Marketing Agency",
    description:
      "AI SEO, chatbot development, Meta ads & automation for businesses in Pakistan and worldwide.",
    images: ["https://bitsolmarketing.com/opengraph-image"],
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

import { ThemeProvider } from "@/components/theme-provider";
import { ContactPopup } from "@/components/ContactPopup";
import { FloatingDock } from "@/components/FloatingDock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BITSOL Marketing PVT LTD",
              "url": "https://bitsolmarketing.com",
              "logo": "https://bitsolmarketing.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-310-317-5175",
                "contactType": "customer service",
                "areaServed": "WW",
                "availableLanguage": ["English", "Urdu"]
              },
              "sameAs": [
                "https://www.facebook.com/bitsolmarketing/",
                "https://www.linkedin.com/company/bitsolpvtltd/",
                "https://www.instagram.com/bitsolmarketing"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-white dark:bg-[#050816] text-slate-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Entropy className="opacity-40" />
            <SmoothScroll>
              <div className="flex min-h-screen flex-col relative z-10">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </SmoothScroll>
            <ContactPopup />
            <FloatingDock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
