import type { Metadata } from "next";
import { TermsView } from "@/views/LegalViews";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Terms" };

export default function Page() {
  return <TermsView c={en} />;
}
