import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice for this website." lead="This notice describes what this website collects and how it is used. It applies to ariamena.com only. Data programs run for clients are governed by their own agreements." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.prose}`}>
          <h2>What this site collects</h2>
          <p>When you use the contact form or write to us by email, we receive the information you choose to send: your name, email address, organization, and message. We use it to reply to you and to discuss the work you asked about.</p>
          <p>This site does not set advertising cookies and does not use third-party trackers. Hosting infrastructure may record standard technical logs, such as IP address and request time, for security and reliability.</p>
          <h2>How long it is kept</h2>
          <p>Correspondence is kept for as long as needed to respond and to follow up on a potential program, and is deleted when it is no longer needed for that purpose.</p>
          <h2>Your choices</h2>
          <p>You can ask what information we hold about you, ask for it to be corrected, or ask for it to be deleted, by writing to {site.email}.</p>
          <h2>Contact</h2>
          <p>Questions about this notice can be sent to {site.email}.</p>
          <p className={p.note}>This notice will be extended with legal entity details, governing law, and any processors used once those are confirmed.</p>
        </div>
      </section>
    </>
  );
}
