import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";
import { Magnetic } from "./Magnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  className?: string;
  magnetic?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", magnetic = false }: Props) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  const link = (
    <Link href={href} className={cls}>
      <span>{children}</span>
      {variant === "link" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </Link>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
