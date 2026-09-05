"use client";

import { useInView } from "@/lib/useInView";
import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  id?: string;
  auto?: boolean;
};

export function Reveal({ as: Tag = "div", children, delay = 0, className = "", style, threshold = 0.2, id, auto = false }: Props) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${auto ? "auto" : ""} ${inView ? "is-in" : ""} ${className}`}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
