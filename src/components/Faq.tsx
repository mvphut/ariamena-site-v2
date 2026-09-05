import styles from "./Faq.module.css";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className={styles.list}>
      {items.map((it) => (
        <details key={it.q} className={styles.item}>
          <summary className={styles.q}>
            <span>{it.q}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <p className={styles.a}>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
