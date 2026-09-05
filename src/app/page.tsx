import { Hero } from "@/components/home/Hero";
import { HumanTableau } from "@/components/home/HumanTableau";
import { DataTransform } from "@/components/home/DataTransform";
import { IndustriesSelector } from "@/components/home/IndustriesSelector";
import { Reach } from "@/components/home/Reach";
import { MethodStack } from "@/components/home/MethodStack";
import { Proof } from "@/components/home/Proof";
import { Responsible } from "@/components/home/Responsible";
import { CalmLines } from "@/components/home/CalmLines";
import { Outcome } from "@/components/home/Outcome";
import { FaqSection } from "@/components/home/FaqSection";
import { CTABand } from "@/components/CTABand";
import { Band } from "@/components/Band";

export default function Home() {
  return (
    <>
      <Hero />
      <HumanTableau />
      <Band from="mineral" to="graphite" theme="dark" height="30vh" />
      <DataTransform />
      <Band from="graphite" to="black" theme="dark" height="14vh" />
      <IndustriesSelector />
      <Reach />
      <Band from="black" to="indigo" theme="dark" height="16vh" />
      <MethodStack />
      <Proof />
      <Band from="black" to="cool" theme="cool" height="44vh">
        <CalmLines />
      </Band>
      <Responsible />
      <Band from="cool" to="warm" theme="light" height="16vh" />
      <Outcome />
      <FaqSection />
      <Band from="warm" to="black" theme="dark" height="22vh" />
      <CTABand />
    </>
  );
}
