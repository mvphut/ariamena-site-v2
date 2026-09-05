import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Terms" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of use for this website." lead="Short, plain terms for using ariamena.com. Work performed for clients is governed by separate written agreements." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.prose}`}>
          <h2>Use of the site</h2>
          <p>The content on this site describes Ariamena&apos;s approach and capabilities. It is provided for information and does not form an offer or a contract. Programs, scope, and terms are agreed in writing for each engagement.</p>
          <h2>Content</h2>
          <p>Text, visuals, and code on this site belong to Ariamena unless stated otherwise. You may quote short excerpts with attribution. Please ask before reproducing visuals or substantial text.</p>
          <h2>No warranties</h2>
          <p>The site is provided as is. We aim to keep it accurate and available, but we do not guarantee that it will be free of errors or interruptions.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to {site.email}.</p>
          <p className={p.note}>Legal entity details, governing law, and jurisdiction will be added once confirmed.</p>
        </div>
      </section>
    </>
  );
}
