import styles from "./DataCard.module.css";

export function DataCard({ rows, title = "Data card", className = "" }: { rows: { label: string; value: string }[]; title?: string; className?: string }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.head}>
        <span className="label">{title}</span>
        <span className={`label ${styles.ship}`}>ships with every delivery</span>
      </div>
      <dl className={styles.rows}>
        {rows.map((r) => (
          <div key={r.label} className={styles.row}>
            <dt className="label">{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
