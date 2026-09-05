import type { Metadata } from "next";
import { CapabilitiesView } from "@/views/CapabilitiesView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Capabilities", description: en.capabilities.hero.lead };

export default function Page() {
  return <CapabilitiesView c={en} />;
}
