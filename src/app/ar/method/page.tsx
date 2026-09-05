import type { Metadata } from "next";
import { MethodView } from "@/views/MethodView";
import { ar } from "@/content/ar";

export const metadata: Metadata = { title: "المنهجية", description: ar.methodPage.hero.lead };

export default function Page() {
  return <MethodView c={ar} />;
}
