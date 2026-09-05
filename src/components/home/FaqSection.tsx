import { SectionHeader } from "@/components/SectionHeader";
import { Faq } from "@/components/Faq";
import { faq, homeExtra } from "@/content/site";
import s from "./home.module.css";

export function FaqSection() {
  return (
    <section className={`section theme-light ${s.faqSec}`} data-theme-section="light" aria-labelledby="faq-title">
      <div className={`container ${s.faqGrid}`}>
        <div>
          <SectionHeader id="faq-title" eyebrow={homeExtra.faq.eyebrow} title={homeExtra.faq.title} />
        </div>
        <Faq items={faq} />
      </div>
    </section>
  );
}
