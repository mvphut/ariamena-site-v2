import type { Metadata } from "next";
import { AccessibilityView } from "@/views/LegalViews";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "إمكانية الوصول" };

export default function Page() {
  return <AccessibilityView c={ar} />;
}
