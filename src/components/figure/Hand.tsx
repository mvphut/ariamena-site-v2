/** An open hand holding a tool, built from thick round strokes, with optional landmarks. 260 x 200 box. */
export function Hand({ fill = "var(--clay)", stroke = "var(--data)", mode = "both" }: { fill?: string; stroke?: string; mode?: "silhouette" | "both" }) {
  return (
    <g>
      <path d="M14 168 116 62" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
      <g fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round">
        <rect x="76" y="92" width="112" height="100" rx="40" />
        <path d="M100 104 92 34M128 100 126 22M156 102 160 30M182 114 198 56" strokeWidth="22" fill="none" />
        <path d="M84 126 36 92" strokeWidth="24" fill="none" />
      </g>
      {mode === "both" ? (
        <g stroke={stroke} fill={stroke}>
          <path d="M132 190 100 104 92 34M132 190 128 100 126 22M132 190 156 102 160 30M132 190 182 114 198 56M132 190 84 126 36 92" fill="none" strokeWidth="1.2" />
          {[[132, 190], [100, 104], [92, 34], [128, 100], [126, 22], [156, 102], [160, 30], [182, 114], [198, 56], [84, 126], [36, 92]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" stroke="none" />
          ))}
        </g>
      ) : null}
    </g>
  );
}
