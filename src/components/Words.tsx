"use client";

import { useInView } from "@/lib/useInView";
import type { ElementType } from "react";

type Props = {
  text: string;
  accent?: string;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
  id?: string;
};

/** Splits a headline into words and rises them in on intersection. `accent` marks a phrase to set in serif italic. */
export function Words({ text, accent, as: Tag = "h2", className = "", stagger = 55, delay = 0, id }: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  const words = text.split(" ");
  let accentStart = -1;
  let accentEnd = -1;
  if (accent) {
    const aw = accent.split(" ");
    for (let i = 0; i <= words.length - aw.length; i++) {
      if (aw.every((w, j) => words[i + j] === w)) {
        accentStart = i;
        accentEnd = i + aw.length - 1;
        break;
      }
    }
  }
  return (
    <Tag ref={ref} id={id} className={`words ${inView ? "is-in" : ""} ${className}`} aria-label={text}>
      {words.map((w, i) => {
        const isAccent = i >= accentStart && i <= accentEnd;
        return (
          <span className="w" key={i} aria-hidden="true">
            <span className={isAccent ? "serif" : undefined} style={{ ["--d" as string]: `${delay + i * stagger}ms` }}>
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
