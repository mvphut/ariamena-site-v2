"use client";

import { useEffect } from "react";

/** Mirrors the wrapper's language and direction onto <html> so scrollbars, form controls, and screen readers follow. */
export function HtmlLang({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    const el = document.documentElement;
    const prev = { lang: el.lang, dir: el.dir };
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = prev.lang || "en";
      el.dir = prev.dir || "ltr";
    };
  }, [lang, dir]);
  return null;
}
