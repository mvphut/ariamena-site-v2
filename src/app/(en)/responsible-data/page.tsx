import type { Metadata } from "next";
import { ResponsibleView } from "@/views/ResponsibleView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Responsible Data", description: en.responsiblePage.hero.lead };

export default function Page() {
  return <ResponsibleView c={en} />;
}
