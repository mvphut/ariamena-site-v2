import { Reveal } from "./Reveal";
import { Words } from "./Words";

type Props = {
  number?: string;
  eyebrow: string;
  title: string;
  accent?: string;
  body?: string;
  id?: string;
  as?: "h1" | "h2";
};

export function SectionHeader({ number, eyebrow, title, accent, body, id, as = "h2" }: Props) {
  return (
    <div className="section-head">
      <div>
        <Reveal className="label eyebrow" as="p">
          {number ? <span>{number}</span> : null}
          <span>{eyebrow}</span>
        </Reveal>
        <Words as={as} id={id} text={title} accent={accent} className={as === "h1" ? "display" : "h2"} />
      </div>
      {body ? (
        <Reveal as="p" className="body lead" delay={200}>
          {body}
        </Reveal>
      ) : null}
    </div>
  );
}
