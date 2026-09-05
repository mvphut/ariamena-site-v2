import { PageHero } from "@/components/PageHero";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function PrivacyView({ c }: { c: Content }) {
  const { site } = c;
  if (site.locale === "ar") {
    return (
      <>
        <PageHero eyebrow="الخصوصية" title="إشعار الخصوصية لهذا الموقع." lead="يصف هذا الإشعار ما يجمعه هذا الموقع وكيف يُستخدم. ينطبق على ariamena.com فقط. برامج البيانات التي تُنفَّذ للعملاء تحكمها اتفاقياتها الخاصة." />
        <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
          <div className={`container ${p.prose}`}>
            <h2>ما يجمعه هذا الموقع</h2>
            <p>عند استخدام نموذج التواصل أو مراسلتنا بالبريد الإلكتروني، نتلقى المعلومات التي تختار إرسالها: اسمك وبريدك الإلكتروني ومؤسستك ورسالتك. نستخدمها للرد عليك ومناقشة العمل الذي سألت عنه.</p>
            <p>لا يضع هذا الموقع ملفات تعريف ارتباط إعلانية ولا يستخدم أدوات تتبع من أطراف ثالثة. قد تسجّل البنية التحتية للاستضافة سجلات تقنية قياسية، مثل عنوان IP ووقت الطلب، لأغراض الأمن والموثوقية.</p>
            <h2>مدة الاحتفاظ</h2>
            <p>تُحفظ المراسلات ما دامت لازمة للرد ومتابعة برنامج محتمل، وتُحذف عندما لا تعود لازمة لهذا الغرض.</p>
            <h2>خياراتك</h2>
            <p>يمكنك طلب معرفة المعلومات التي نحتفظ بها عنك، أو طلب تصحيحها، أو طلب حذفها، بمراسلة {site.email}.</p>
            <h2>ملفات تعريف الارتباط والتحليلات</h2>
            <p>لا يضع هذا الموقع ملفات تعريف ارتباط للتتبع. إذا اخترت في إشعار الخصوصية عند زيارتك الأولى، يُحفظ اختيارك في متصفحك حتى لا نسألك مجددًا. التحليلات المجهولة دون ملفات تعريف ارتباط لا تعمل إلا إذا فعّلتها، ويمكن إيقافها في أي وقت من رابط إعدادات ملفات تعريف الارتباط في التذييل.</p>
            <h2>التواصل</h2>
            <p>يمكن إرسال الأسئلة حول هذا الإشعار إلى {site.email}.</p>
            <p className={p.note}>آخر تحديث: سبتمبر 2026. سيُستكمل هذا الإشعار بتفاصيل الكيان القانوني والقانون الحاكم وجهات المعالجة عند تأكيدها.</p>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice for this website." lead="This notice describes what this website collects and how it is used. It applies to ariamena.com only. Data programs run for clients are governed by their own agreements." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.prose}`}>
          <h2>What this site collects</h2>
          <p>When you use the contact form or write to us by email, we receive the information you choose to send: your name, email address, organization, and message. We use it to reply to you and to discuss the work you asked about.</p>
          <p>This site does not set advertising cookies and does not use third-party trackers. Hosting infrastructure may record standard technical logs, such as IP address and request time, for security and reliability.</p>
          <h2>How long it is kept</h2>
          <p>Correspondence is kept for as long as needed to respond and to follow up on a potential program, and is deleted when it is no longer needed for that purpose.</p>
          <h2>Your choices</h2>
          <p>You can ask what information we hold about you, ask for it to be corrected, or ask for it to be deleted, by writing to {site.email}.</p>
          <h2>Cookies and analytics</h2>
          <p>This site sets no tracking cookies. If you make a choice in the privacy notice shown on your first visit, that choice is stored in your browser so we do not ask again. Anonymous, cookieless analytics run only if you turn them on, and can be turned off at any time from the Cookie settings link in the footer.</p>
          <h2>Contact</h2>
          <p>Questions about this notice can be sent to {site.email}.</p>
          <p className={p.note}>Last updated September 2026. This notice will be extended with legal entity details, governing law, and any processors used once those are confirmed.</p>
        </div>
      </section>
    </>
  );
}

export function TermsView({ c }: { c: Content }) {
  const { site } = c;
  if (site.locale === "ar") {
    return (
      <>
        <PageHero eyebrow="الشروط" title="شروط استخدام هذا الموقع." lead="شروط مختصرة وواضحة لاستخدام ariamena.com. العمل المنفَّذ للعملاء تحكمه اتفاقيات مكتوبة منفصلة." />
        <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
          <div className={`container ${p.prose}`}>
            <h2>استخدام الموقع</h2>
            <p>يصف المحتوى في هذا الموقع نهج أريامينا وقدراتها. يُقدَّم للمعلومات ولا يشكّل عرضًا أو عقدًا. تُتفق البرامج والنطاق والشروط كتابيًا لكل تعاقد.</p>
            <h2>المحتوى</h2>
            <p>النصوص والرسوم والشيفرة في هذا الموقع ملك لأريامينا ما لم يُذكر خلاف ذلك. يمكنك اقتباس مقتطفات قصيرة مع الإسناد. يُرجى الاستئذان قبل إعادة نشر الرسوم أو نصوص مطوّلة.</p>
            <h2>لا ضمانات</h2>
            <p>يُقدَّم الموقع كما هو. نسعى لإبقائه دقيقًا ومتاحًا، لكننا لا نضمن خلوّه من الأخطاء أو الانقطاعات.</p>
            <h2>التواصل</h2>
            <p>يمكن إرسال الأسئلة حول هذه الشروط إلى {site.email}.</p>
            <p className={p.note}>آخر تحديث: سبتمبر 2026. ستُضاف تفاصيل الكيان القانوني والقانون الحاكم والاختصاص القضائي عند تأكيدها.</p>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of use for this website." lead="Short, plain terms for using ariamena.com. Work performed for clients is governed by separate written agreements." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.prose}`}>
          <h2>Use of the site</h2>
          <p>The content on this site describes Ariamena&apos;s approach and capabilities. It is provided for information and does not form an offer or a contract. Programs, scope, and terms are agreed in writing for each engagement.</p>
          <h2>Content</h2>
          <p>Text, visuals, and code on this site belong to Ariamena unless stated otherwise. You may quote short excerpts with attribution. Please ask before reproducing visuals or substantial text.</p>
          <h2>No warranties</h2>
          <p>The site is provided as is. We aim to keep it accurate and available, but we do not guarantee that it will be free of errors or interruptions.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to {site.email}.</p>
          <p className={p.note}>Last updated September 2026. Legal entity details, governing law, and jurisdiction will be added once confirmed.</p>
        </div>
      </section>
    </>
  );
}

export function AccessibilityView({ c }: { c: Content }) {
  const { site, accessibilityPage } = c;
  const ar = site.locale === "ar";
  return (
    <>
      <PageHero eyebrow={ar ? "إمكانية الوصول" : "Accessibility"} title={ar ? "بيان إمكانية الوصول." : "Accessibility statement."} lead={accessibilityPage.intro} />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.prose}`}>
          <h2>{ar ? "ما يفعله هذا الموقع" : "What this site does"}</h2>
          <ul>
            {accessibilityPage.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <h2>{ar ? "المعيار" : "Standard"}</h2>
          <p>{ar ? "بُني الموقع ليلبي مستوى AA من WCAG 2.1. تعمل الفحوص الآلية مع كل إصدار، وتُراجع الصفحات يدويًا على أحجام سطح المكتب والجهاز اللوحي والهاتف، بالتنقل بلوحة المفاتيح فقط ومع تفعيل تقليل الحركة." : "The site is built to meet WCAG 2.1 level AA. Automated checks run on every build, and pages are reviewed by hand at desktop, tablet, and phone sizes with keyboard-only navigation and reduced motion enabled."}</p>
          <h2>{ar ? "إن لم يعمل شيء" : "If something does not work"}</h2>
          <p>{ar ? `راسل ${site.email} مع ذكر الصفحة وما كنت تحاول فعله. نرد خلال يومي عمل ونصلح المشكلات المؤكدة في الإصدار التالي.` : `Write to ${site.email} with the page and what you were trying to do. We reply within two working days and fix confirmed problems in the next release.`}</p>
          <p className={p.note}>{ar ? `آخر تحديث ${accessibilityPage.updated}.` : `Last updated ${accessibilityPage.updated}.`}</p>
        </div>
      </section>
    </>
  );
}
