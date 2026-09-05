import Link from "next/link";
import { Button } from "@/components/Button";
import p from "@/components/page.module.css";

export default function NotFound() {
  return (
    <section className={p.hero} data-theme-section="light" style={{ minHeight: "70vh" }}>
      <div className={`container ${p.heroInner}`}>
        <p className={`label ${p.eyebrow}`}>404</p>
        <h1 className={`display ${p.title}`}>This page is not in the record.</h1>
        <p className={`lead ${p.lead}`}>The address may have changed, or the link was incomplete. The pages below are where most visits start.</p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
          <Button href="/">Back to home</Button>
          <Link href="/capabilities" style={{ borderBottom: "1px solid var(--line-strong)" }}>
            Capabilities
          </Link>
          <Link href="/contact" style={{ borderBottom: "1px solid var(--line-strong)" }}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
