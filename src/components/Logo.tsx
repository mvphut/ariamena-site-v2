import Link from "next/link";
import styles from "./Logo.module.css";

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M50 8 63 34H37Z" />
      <path d="M33 41h34l9 18H24z" />
      <path d="M21 66h22l-5 24H10zM57 66h22l11 24H62z" />
    </svg>
  );
}

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className={styles.logo} aria-label="Ariamena home">
      <LogoMark />
      <span className={styles.word}>
        ariamena<i aria-hidden="true" />
      </span>
    </Link>
  );
}
