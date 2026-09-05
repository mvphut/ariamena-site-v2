import type { Metadata } from "next";
import { WorkView } from "@/views/WorkView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "أعمالنا", description: ar.workPage.hero.lead };

export default function Page() {
  return <WorkView c={ar} />;
}
