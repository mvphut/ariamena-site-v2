// Generates docs/04-website-copy.md from src/content/site.ts (single source of truth).
import { writeFileSync } from "node:fs";
const m = await import("../src/content/site.ts");
const { site, home, industries, methodStages, principles, capabilities, methodPage, responsiblePage, aboutPage, contactPage } = m;
const L = [];
const h = (n, t) => L.push(`${"#".repeat(n)} ${t}`, "");
const p = (t) => L.push(t, "");
h(1, "Ariamena — Full website copy");
p(`Positioning: **${site.tagline}**`);
h(2, "Navigation");
p(site.nav.map((n) => n.label).join(" · ") + ` · [${site.cta.primary}]`);
h(2, "Home");
h(3, "Hero");
p(`Eyebrow: ${home.hero.eyebrow}`); p(`H1: ${home.hero.title.join(" ")}`); p(`Lead: ${home.hero.lead}`); p(`CTAs: [${site.cta.primary}] [${site.cta.secondary}]`);
p(`Scene labels: ${Object.values(home.hero.labels).join(" / ")}`);
for (const k of ["human", "data", "industries", "method", "responsible", "outcome"]) {
  const s = home[k];
  h(3, `${s.number} — ${s.eyebrow}`);
  p(`H2: ${s.title}`); p(s.body);
  if (k === "human") p("Evidence captions: " + s.fragments.map((f) => `${f.caption} (${f.note})`).join("; "));
  if (k === "data") { p("States: " + s.states.map((x) => `${x.label} — ${x.hint}`).join(" / ")); s.stages.forEach((st) => p(`- **${st.name}.** ${st.text}`)); }
  if (k === "industries") industries.forEach((i) => p(`- **${i.name}.** ${i.statement}`));
  if (k === "method") { methodStages.forEach((st) => p(`- **${st.n} ${st.title}** (${st.layer}). ${st.text}`)); p("Layers: " + s.layers.join(" → ")); }
  if (k === "responsible") principles.forEach((pr) => p(`- **${pr.title}.** ${pr.text}`));
  if (k === "outcome") s.notes.forEach((n) => p(`- **${n.title}.** ${n.text}`));
}
h(3, "CTA"); p(`H2: ${home.cta.title}`); p(home.cta.body); p(`[${site.cta.primary}] · ${site.email}`);
h(3, "Footer"); p(site.footerLinks.map((l) => l.label).join(" · ") + " · LinkedIn · " + site.legalLinks.map((l) => l.label).join(" · "));
h(2, "Capabilities"); p(`H1: ${capabilities.hero.title}`); p(capabilities.hero.lead);
capabilities.items.forEach((c, i) => { p(`**0${i + 1} ${c.title}.** ${c.text}`); c.points.forEach((pt) => p(`- ${pt}`)); });
p("Modalities: " + capabilities.modalities.join(" · "));
h(2, "Industries"); industries.forEach((i) => { p(`**${i.name}.** ${i.statement}`); i.captures.forEach((c) => p(`- ${c}`)); });
p("Note shown on page: These are environments Ariamena is built to scope and run programs in. They are not claims of active sites or existing clients.");
h(2, "Method"); p(`H1: ${methodPage.hero.title}`); p(methodPage.hero.lead);
methodStages.forEach((st) => p(`**${st.n} ${st.title}** — ${st.layer}. ${st.text}`));
p(`**${methodPage.receive.title}**`); methodPage.receive.items.forEach((x) => p(`- ${x}`));
p(`**${methodPage.need.title}**`); methodPage.need.items.forEach((x) => p(`- ${x}`));
h(2, "Responsible Data"); p(`H1: ${responsiblePage.hero.title}`); p(responsiblePage.hero.lead);
principles.forEach((pr) => p(`**${pr.title}.** ${pr.text}`));
p("**In practice**"); responsiblePage.practice.forEach((x) => p(`- **${x.title}.** ${x.text}`));
h(2, "About"); p(`H1: ${aboutPage.hero.title}`); p(aboutPage.hero.lead); p(`**${aboutPage.name.title}.** ${aboutPage.name.text}`);
aboutPage.beliefs.forEach((b) => p(`- **${b.title}.** ${b.text}`)); p(`**${aboutPage.work.title}.** ${aboutPage.work.text}`);
h(2, "Contact"); p(`H1: ${contactPage.hero.title}`); p(contactPage.hero.lead);
p("Fields: " + [contactPage.form.name, contactPage.form.email, contactPage.form.org, contactPage.form.envs, contactPage.form.need].join(" · ") + ` · [${contactPage.form.submit}]`);
p(`Confirmation: ${contactPage.form.sent}`); p(`Direct: ${contactPage.direct.text} ${site.email}`);
writeFileSync(new URL("../../docs/04-website-copy.md", import.meta.url), L.join("\n"));
console.log("wrote docs/04-website-copy.md", L.length, "lines");
