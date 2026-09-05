"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${open ? styles.open : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Logo />
        <nav className={styles.links} aria-label="Primary">
          {site.nav.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={styles.cta}>
          {site.cta.primary}
        </Link>
        <button
          ref={toggleRef}
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-menu" ref={panelRef} className={styles.panel} hidden={!open}>
        <nav aria-label="Mobile" className={styles.panelLinks}>
          {site.nav.map((l, i) => (
            <Link key={l.href} href={l.href} className={styles.panelLink} style={{ transitionDelay: `${80 + i * 40}ms` }} onClick={() => setOpen(false)}>
              <span className="label">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={`${styles.panelLink} ${styles.panelCta}`} style={{ transitionDelay: "320ms" }} onClick={() => setOpen(false)}>
            {site.cta.primary}
          </Link>
        </nav>
        <p className={`${styles.panelFoot} small`}>{site.tagline}</p>
      </div>
    </header>
  );
}
