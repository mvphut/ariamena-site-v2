import type { Metadata } from "next";
import { HomeView } from "@/views/HomeView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: { absolute: `${ar.site.name} — ${ar.site.tagline}` }, description: ar.site.description };

export default function Page() {
  return <HomeView c={ar} />;
}
