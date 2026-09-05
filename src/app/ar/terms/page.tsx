import type { Metadata } from "next";
import { TermsView } from "@/views/LegalViews";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "الشروط" };

export default function Page() {
  return <TermsView c={ar} />;
}
