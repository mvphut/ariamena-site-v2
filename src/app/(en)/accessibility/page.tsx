import type { Metadata } from "next";
import { AccessibilityView } from "@/views/LegalViews";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Accessibility" };

export default function Page() {
  return <AccessibilityView c={en} />;
}
