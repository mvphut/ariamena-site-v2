"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { en } from "@/content/site";
import { ar } from "@/content/ar";
import styles from "./CookieConsent.module.css";

type Consent = { analytics: boolean; ts: number };
const KEY = "ariamena-consent";
export const OPEN_EVENT = "ariamena:open-consent";

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function loadAnalytics() {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  if (!src || document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  s.setAttribute("data-domain", "ariamena.com");
  document.head.appendChild(s);
}

export function CookieConsent() {
  const pathname = usePathname();
  const isAr = !!pathname && /^\/ar(\/|$)/.test(pathname);
  const t = (isAr ? ar : en).site.ui.cookie;
  const base = isAr ? "/ar" : "";
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics] = useState(true);

  useEffect(() => {
    const existing = read();
    const t = setTimeout(() => {
      if (!existing) setVisible(true);
      else if (existing.analytics) loadAnalytics();
    }, 900);
    const onOpen = () => {
      setPrefs(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  const save = (a: boolean) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ analytics: a, ts: Date.now() }));
    } catch {}
    if (a) loadAnalytics();
    setVisible(false);
    setPrefs(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.wrap} role="dialog" aria-labelledby="consent-title" aria-describedby="consent-desc">
      <div className={styles.card}>
        <p id="consent-title" className={`label ${styles.title}`}>
          {t.title}
        </p>
        <p id="consent-desc" className={styles.text}>
          {t.text}{" "}
          <Link href={`${base}/privacy`} className={styles.link}>
            {t.link}
          </Link>
        </p>
        {prefs ? (
          <div className={styles.prefs}>
            <label className={styles.pref}>
              <span>
                <b>{t.essential}</b>
                <small>{t.essentialNote}</small>
              </span>
              <input type="checkbox" checked disabled aria-label="Essential storage, always on" />
            </label>
            <label className={styles.pref}>
              <span>
                <b>{t.analytics}</b>
                <small>{t.analyticsNote}</small>
              </span>
              <input type="checkbox" checked disabled aria-label={t.analyticsNote} />
            </label>
          </div>
        ) : null}
        <div className={styles.actions}>
          {prefs ? (
            <button type="button" className={styles.primary} onClick={() => save(analytics)}>
              {t.save}
            </button>
          ) : (
            <>
              <button type="button" className={styles.primary} onClick={() => save(true)}>
                {t.onlyEssential}
              </button>
              <button type="button" className={styles.textBtn} onClick={() => setPrefs(true)}>
                {t.prefs}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function ConsentSettingsButton({ className = "", label = "Cookie settings" }: { className?: string; label?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {label}
    </button>
  );
}
