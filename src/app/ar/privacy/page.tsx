import type { Metadata } from "next";
import { PrivacyView } from "@/views/LegalViews";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "الخصوصية" };

export default function Page() {
  return <PrivacyView c={ar} />;
}
