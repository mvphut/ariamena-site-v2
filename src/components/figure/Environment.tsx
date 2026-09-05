/** Abstract environment line-work used behind figures. 480 x 330 box. */
export function Environment({ stroke = "currentColor", opacity = 0.2 }: { stroke?: string; opacity?: number }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth="1" opacity={opacity}>
      <path d="M0 250h480M0 290h480M60 250v-160h130v160M330 250v-190h110v190M330 90h110M330 150h110M330 210h110M60 130h130" />
      <path d="M20 250 0 330M120 250l-40 80M220 250l-20 80M320 250v80M420 250l40 80" />
      <rect x="200" y="200" width="120" height="50" rx="2" />
    </g>
  );
}
