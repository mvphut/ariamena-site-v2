import { bonePath, poses, type Pose } from "./poses";

type ShapeProps = {
  pose?: keyof typeof poses;
  mode?: "silhouette" | "skeleton" | "both";
  x?: number;
  y?: number;
  scale?: number;
  fill?: string;
  stroke?: string;
  box?: boolean;
  className?: string;
  flip?: boolean;
};

/** Renders the figure as an SVG group so it can be composed into scenes. Same geometry for silhouette and skeleton. */
export function FigureShape({ pose = "standing", mode = "silhouette", x = 0, y = 0, scale = 1, fill = "var(--clay)", stroke = "var(--data)", box = false, className = "", flip = false }: ShapeProps) {
  const p: Pose = poses[pose];
  const head = p[0];
  const [LS, RS, LH, RH] = [p[2], p[3], p[8], p[9]];
  const transform = `translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})${flip ? " translate(-230 0)" : ""}`;
  return (
    <g transform={transform} className={className}>
      {mode !== "skeleton" ? (
        <g className="fig-sil" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={head[0]} cy={head[1]} r="24" stroke="none" />
          <path d={`M${head[0]} ${head[1] + 24}L${p[1][0]} ${p[1][1]}`} strokeWidth="16" fill="none" />
          <path d={`M${LS[0]} ${LS[1]}L${RS[0]} ${RS[1]}L${RH[0]} ${RH[1]}L${LH[0]} ${LH[1]}Z`} strokeWidth="22" />
          <path d={`M${LS[0]} ${LS[1]}L${p[4][0]} ${p[4][1]}L${p[6][0]} ${p[6][1]}M${RS[0]} ${RS[1]}L${p[5][0]} ${p[5][1]}L${p[7][0]} ${p[7][1]}`} strokeWidth="22" fill="none" />
          <path d={`M${LH[0]} ${LH[1]}L${p[10][0]} ${p[10][1]}L${p[12][0]} ${p[12][1]}M${RH[0]} ${RH[1]}L${p[11][0]} ${p[11][1]}L${p[13][0]} ${p[13][1]}`} strokeWidth="26" fill="none" />
        </g>
      ) : null}
      {mode !== "silhouette" ? (
        <g className="fig-skel" stroke={stroke} fill={stroke}>
          <path className="fig-bones" d={bonePath(p)} fill="none" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
          <circle className="fig-head" cx={head[0]} cy={head[1]} r="24" fill="none" strokeWidth="1.5" strokeDasharray="3 4" pathLength={1} />
          <g className="fig-pts" stroke="none">
            {p.map(([px, py], i) => (
              <circle key={i} cx={px} cy={py} r="3.4" style={{ ["--i" as string]: i }} />
            ))}
          </g>
          {box ? (
            <g className="fig-box" fill="none" strokeWidth="1">
              <rect x="34" y="6" width="190" height="316" strokeDasharray="4 3" />
              <path d="M34 6h14M34 6v14M224 6h-14M224 6v14M34 322h14M34 322v-14M224 322h-14M224 322v-14" strokeWidth="2" />
            </g>
          ) : null}
        </g>
      ) : null}
    </g>
  );
}

type FigureProps = ShapeProps & { width?: number | string; height?: number | string; title?: string; svgClassName?: string };

export function Figure({ width = "100%", height = "100%", title, svgClassName = "", ...shape }: FigureProps) {
  return (
    <svg viewBox="0 0 230 330" width={width} height={height} className={svgClassName} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <FigureShape {...shape} />
    </svg>
  );
}
