import type { Metadata } from "next";
import { MethodView } from "@/views/MethodView";
import { en } from "@/content/site";

export const metadata: Metadata = { title: "Method", description: en.methodPage.hero.lead };

export default function Page() {
  return <MethodView c={en} />;
}
