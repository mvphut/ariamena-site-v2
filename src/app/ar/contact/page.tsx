import type { Metadata } from "next";
import { ContactView } from "@/views/ContactView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "تواصل معنا", description: ar.contactPage.hero.lead };

export default function Page() {
  return <ContactView c={ar} />;
}
