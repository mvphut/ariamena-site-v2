import { site } from "@/content/site";
import styles from "./PreviewBadge.module.css";

export function PreviewBadge() {
  if (!site.preview) return null;
  return (
    <div className={styles.badge} role="note">
      <span className={styles.dot} aria-hidden="true" />
      Preview · example content
    </div>
  );
}
