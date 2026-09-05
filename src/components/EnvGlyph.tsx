const glyphs: Record<string, React.ReactNode> = {
  manufacturing: <><path d="M8 44V22l12 8V22l12 8V22l12 8v14z" /><path d="M8 52h48M16 44v8M28 44v8M40 44v8" /><rect x="44" y="12" width="8" height="18" /></>,
  education: <><rect x="10" y="12" width="44" height="26" rx="1" /><path d="M20 22h24M20 28h16M14 52h10M27 52h10M40 52h10M19 46v6M32 46v6M45 46v6" /></>,
  healthcare: <><path d="M8 48V26h30v22M8 34h30M8 48h48M56 48V38H38" /><rect x="14" y="12" width="12" height="10" rx="1" /><path d="M18 17h4M20 15v4" /></>,
  retail: <><path d="M10 14h44l-3 10H13z" /><path d="M14 24v28h36V24M14 36h36M22 36v16M40 36v16" /></>,
  logistics: <><rect x="10" y="30" width="16" height="16" /><rect x="26" y="30" width="16" height="16" /><rect x="18" y="14" width="16" height="16" /><path d="M6 52h52M46 30h10v16H46zM12 46v6M54 46v6" /></>,
  robotics: <><path d="M12 52h20M22 52V38l-8-14 14-10 6 8-8 6 6 10" /><circle cx="46" cy="16" r="4" /><path d="M34 22l8-4M40 38h12v8H40zM46 38v-8" /></>,
  "smart-environments": <><path d="M10 52V22l22-12 22 12v30" /><path d="M10 52h44M24 52V38h16v14" /><path d="M26 26a8 8 0 0 1 12 0M22 21a14 14 0 0 1 20 0" /></>,
  construction: <><path d="M8 52h48M14 52V20M14 20h34M22 20v-8h16v8M40 20v12M40 32h-6M34 32v6M46 52V38h6v14" /></>,
  agriculture: <><path d="M6 52c8-10 14-10 22 0 8-10 14-10 22 0M6 42c8-10 14-10 22 0 8-10 14-10 22 0" /><circle cx="46" cy="16" r="6" /><path d="M46 6v3M46 23v3M36 16h3M53 16h3" /></>,
  mobility: <><path d="M6 46h52M12 46V34l8-10h20l10 10v12" /><circle cx="20" cy="46" r="4" /><circle cx="44" cy="46" r="4" /><path d="M20 24v10M30 24v10M6 54h52" strokeDasharray="4 3" /></>,
  hospitality: <><path d="M12 52V30M52 52V30M8 30h48" /><path d="M20 30v-6h24v6M24 24c0-8 16-8 16 0" /><path d="M14 40h10M40 40h10" /></>,
  offices: <><rect x="16" y="14" width="32" height="20" rx="1" /><path d="M32 34v8M22 42h20M8 52h48" /><circle cx="14" cy="42" r="3" /><path d="M8 52v-4c0-2 2-4 6-4s6 2 6 4v4" /><circle cx="50" cy="42" r="3" /><path d="M44 52v-4c0-2 2-4 6-4s6 2 6 4v4" /></>,
  homes: <><path d="M8 30 32 12l24 18M14 26v26h36V26" /><path d="M20 44h24M20 44v-6h24v6M22 52v-8M42 52v-8" /><rect x="36" y="30" width="8" height="8" /></>,
};

export function EnvGlyph({ slug, size = 64, className = "" }: { slug: string; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {glyphs[slug] ?? glyphs.offices}
    </svg>
  );
}
