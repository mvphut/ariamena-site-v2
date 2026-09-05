import type { Metadata } from "next";
import { AboutView } from "@/views/AboutView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "من نحن", description: ar.aboutPage.hero.lead };

export default function Page() {
  return <AboutView c={ar} />;
}
