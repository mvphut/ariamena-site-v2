import type { Metadata } from "next";
import { CapabilitiesView } from "@/views/CapabilitiesView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "القدرات", description: ar.capabilities.hero.lead };

export default function Page() {
  return <CapabilitiesView c={ar} />;
}
