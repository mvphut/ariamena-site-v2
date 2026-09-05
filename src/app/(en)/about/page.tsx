import type { Metadata } from "next";
import { AboutView } from "@/views/AboutView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "About", description: en.aboutPage.hero.lead };

export default function Page() {
  return <AboutView c={en} />;
}
