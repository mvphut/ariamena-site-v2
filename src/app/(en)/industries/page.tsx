import type { Metadata } from "next";
import { IndustriesView } from "@/views/IndustriesView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Industries", description: en.home.industries.body };

export default function Page() {
  return <IndustriesView c={en} />;
}
