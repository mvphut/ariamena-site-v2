import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeObserver } from "@/components/ThemeObserver";
import { Grain } from "@/components/Grain";
import { CookieConsent } from "@/components/CookieConsent";
import { PreviewBadge } from "@/components/PreviewBadge";
import { MotionProvider } from "@/components/MotionProvider";
import { Spotlight } from "@/components/Spotlight";
import { site } from "@/content/site";

import "./globals.css";
import "@/components/figure/figure.css";

const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["italic"], variable: "--font-serif", display: "optional" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "optional" });

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  icons: {
    icon: [
      { url: `${bp}/favicon-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${bp}/favicon-16.png`, sizes: "16x16", type: "image/png" },
      { url: `${bp}/icon.svg`, type: "image/svg+xml" },
    ],
    apple: `${bp}/apple-touch-icon.png`,
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
    images: [{ url: `${bp}/og.png`, width: 1200, height: 630, alt: "Ariamena. AI learns from the real world." }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline, images: [`${bp}/og.png`] },
  robots: { index: true, follow: true },
  alternates: { languages: { en: "/", ar: "/ar" } },
};

export const viewport: Viewport = {
  themeColor: "#f4efe7",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: `https://${site.domain}`,
  logo: `https://${site.domain}/icon.svg`,
  description: site.tagline,
  email: site.email,
  sameAs: [site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.words .w>span{transform:none!important}`}</style>
        </noscript>
        <ThemeObserver />
        <MotionProvider />
        <Spotlight />
        {children}
        <Grain />
        <PreviewBadge />
        <CookieConsent />
      </body>
    </html>
  );
}
