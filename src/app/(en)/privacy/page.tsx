import type { Metadata } from "next";
import { PrivacyView } from "@/views/LegalViews";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return <PrivacyView c={en} />;
}
