import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Amiri } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HtmlLang } from "@/components/HtmlLang";
import { ar } from "@/content/ar";

const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "600"], variable: "--font-arabic", display: "swap" });
const arabicSerif = Amiri({ subsets: ["arabic"], weight: ["400"], variable: "--font-arabic-serif", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${ar.site.name} — ${ar.site.tagline}`, template: `%s — ${ar.site.name}` },
  description: ar.site.description,
  openGraph: { title: ar.site.name, description: ar.site.tagline, locale: "ar_AR" },
  alternates: { languages: { en: "/", ar: "/ar" } },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`arWrap ${arabic.variable} ${arabicSerif.variable}`} dir="rtl" lang="ar">
      <HtmlLang lang="ar" dir="rtl" />
      <a href="#main" className="skip-link">
        {ar.site.ui.skip}
      </a>
      <Nav c={ar} />
      <main id="main">{children}</main>
      <Footer c={ar} />
    </div>
  );
}
