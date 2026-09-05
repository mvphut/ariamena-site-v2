"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const existing = read();
    const t = setTimeout(() => {
      if (!existing) setVisible(true);
      else if (existing.analytics) loadAnalytics();
    }, 900);
    const onOpen = () => {
      const c = read();
      setAnalytics(!!c?.analytics);
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
          Privacy on this site
        </p>
        <p id="consent-desc" className={styles.text}>
          This site sets no tracking cookies. Essential storage only remembers this choice. Anonymous, cookieless analytics run only if you turn them on.{" "}
          <Link href="/privacy" className={styles.link}>
            Privacy notice
          </Link>
        </p>
        {prefs ? (
          <div className={styles.prefs}>
            <label className={styles.pref}>
              <span>
                <b>Essential</b>
                <small>Remembers your choice. Always on.</small>
              </span>
              <input type="checkbox" checked disabled aria-label="Essential storage, always on" />
            </label>
            <label className={styles.pref}>
              <span>
                <b>Analytics</b>
                <small>Anonymous page counts, no cookies, no personal data.</small>
              </span>
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            </label>
          </div>
        ) : null}
        <div className={styles.actions}>
          {prefs ? (
            <button type="button" className={styles.primary} onClick={() => save(analytics)}>
              Save preferences
            </button>
          ) : (
            <>
              <button type="button" className={styles.primary} onClick={() => save(false)}>
                Essential only
              </button>
              <button type="button" className={styles.secondary} onClick={() => save(true)}>
                Allow analytics
              </button>
              <button type="button" className={styles.textBtn} onClick={() => setPrefs(true)}>
                Preferences
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function ConsentSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
