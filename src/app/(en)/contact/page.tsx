import type { Metadata } from "next";
import { ContactView } from "@/views/ContactView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: en.contactPage.hero.lead };

export default function Page() {
  return <ContactView c={en} />;
}
