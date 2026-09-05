import Link from "next/link";
import { en, type Content } from "@/content/site";
import { LogoMark } from "./Logo";
import { ConsentSettingsButton } from "./CookieConsent";
import styles from "./Footer.module.css";

export function Footer({ c = en }: { c?: Content }) {
  const { company, site } = c;
  return (
    <footer className={`${styles.footer} theme-dark`} data-theme-section="dark">
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.lockup}>
            <LogoMark size={26} />
            <span>ariamena</span>
          </div>
          <p className={`${styles.tag} small`}>{site.tagline}</p>
          <p className={`${styles.meta} label`}>{company.bases.join(" · ")}</p>
        </div>
        <nav aria-label="Footer" className={styles.cols}>
          <ul>
            {site.footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
            {site.legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <ConsentSettingsButton className={styles.textBtn} label={site.ui.cookie.settings} />
            </li>
          </ul>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span className="label">© {new Date().getFullYear()} {site.name}</span>
        <span className="label">{site.ui.footerLine}</span>
      </div>
    </footer>
  );
}
