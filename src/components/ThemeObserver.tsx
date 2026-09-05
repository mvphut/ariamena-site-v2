"use client";

import { useEffect } from "react";
import { subscribeScroll } from "@/lib/scroll";

/** Sets data-theme on <html> from the section under the navigation bar, and drives the paper-grain overlay. */
export function ThemeObserver() {
  useEffect(() => {
    let marks: { top: number; theme: string }[] = [];
    const collect = () => {
      const y = window.scrollY;
      marks = Array.from(document.querySelectorAll<HTMLElement>("[data-theme-section]")).map((el) => {
        const r = el.getBoundingClientRect();
        const isBand = el.hasAttribute("data-band");
        return { top: r.top + y + (isBand ? r.height / 2 : 0), theme: el.dataset.themeSection || "light" };
      });
      marks.sort((a, b) => a.top - b.top);
    };
    collect();
    const ro = new ResizeObserver(collect);
    ro.observe(document.body);
    let current = "";
    const unsub = subscribeScroll((y) => {
      const probe = y + 48;
      let theme = "light";
      for (const m of marks) if (m.top <= probe) theme = m.theme;
      if (theme !== current) {
        current = theme;
        document.documentElement.dataset.theme = theme;
      }
    });
    return () => {
      unsub();
      ro.disconnect();
    };
  }, []);
  return null;
}
