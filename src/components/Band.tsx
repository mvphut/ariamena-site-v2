import type { CSSProperties } from "react";

type Props = { from: string; to: string; height?: string; theme: "light" | "dark" | "cool"; children?: React.ReactNode };

/** A gradient transition between two section grounds. `theme` is the text theme the nav switches to once the band's midpoint passes. */
export function Band({ from, to, height = "26vh", theme, children }: Props) {
  const style: CSSProperties = {
    height,
    background: `linear-gradient(180deg, var(--${from}) 0%, var(--${to}) 100%)`,
    position: "relative",
    overflow: "hidden",
  };
  return (
    <div style={style} data-theme-section={theme} data-band="" aria-hidden="true">
      {children}
    </div>
  );
}
