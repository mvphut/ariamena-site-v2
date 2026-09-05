import type { Metadata } from "next";
import { IndustriesView } from "@/views/IndustriesView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "القطاعات", description: ar.home.industries.body };

export default function Page() {
  return <IndustriesView c={ar} />;
}
