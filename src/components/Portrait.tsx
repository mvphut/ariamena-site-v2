import styles from "./Portrait.module.css";

/** Abstract portrait: silhouette and initials. Replace with a photograph when available. */
export function Portrait({ initials, size = 160 }: { initials: string; size?: number }) {
  return (
    <div className={styles.wrap} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 160 160" width={size} height={size}>
        <defs>
          <linearGradient id={`pg-${initials}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--mineral)" />
            <stop offset="1" stopColor="var(--clay)" />
          </linearGradient>
        </defs>
        <rect width="160" height="160" rx="8" fill={`url(#pg-${initials})`} />
        <circle cx="80" cy="62" r="26" fill="var(--ink)" fillOpacity="0.22" />
        <path d="M28 160c4-38 26-56 52-56s48 18 52 56z" fill="var(--ink)" fillOpacity="0.22" />
        <text x="14" y="148" fill="var(--ink)" fontSize="12" letterSpacing="2" className="mono">
          {initials}
        </text>
      </svg>
    </div>
  );
}
