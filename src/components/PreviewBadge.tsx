"use client";

import { usePathname } from "next/navigation";
import { en } from "@/content/site";
import { ar } from "@/content/ar";
import styles from "./PreviewBadge.module.css";

export function PreviewBadge() {
  const pathname = usePathname();
  const isAr = !!pathname && /^\/ar(\/|$)/.test(pathname);
  const site = (isAr ? ar : en).site;
  if (!site.preview) return null;
  return (
    <div className={styles.badge} role="note">
      <span className={styles.dot} aria-hidden="true" />
      {site.ui.preview}
    </div>
  );
}
