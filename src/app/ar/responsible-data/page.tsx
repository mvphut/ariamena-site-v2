import type { Metadata } from "next";
import { ResponsibleView } from "@/views/ResponsibleView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "البيانات المسؤولة", description: ar.responsiblePage.hero.lead };

export default function Page() {
  return <ResponsibleView c={ar} />;
}
