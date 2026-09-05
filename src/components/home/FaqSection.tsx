import { SectionHeader } from "@/components/SectionHeader";
import { Faq } from "@/components/Faq";
import { en, type Content } from "@/content/site";
import s from "./home.module.css";

export function FaqSection({ c = en }: { c?: Content }) {
  return (
    <section className={`section theme-light ${s.faqSec}`} data-theme-section="light" aria-labelledby="faq-title">
      <div className={`container ${s.faqGrid}`}>
        <div>
          <SectionHeader id="faq-title" eyebrow={c.homeExtra.faq.eyebrow} title={c.homeExtra.faq.title} />
        </div>
        <Faq items={c.faq} />
      </div>
    </section>
  );
}
