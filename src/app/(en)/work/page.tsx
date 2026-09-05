import type { Metadata } from "next";
import { WorkView } from "@/views/WorkView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Work", description: en.workPage.hero.lead };

export default function Page() {
  return <WorkView c={en} />;
}
