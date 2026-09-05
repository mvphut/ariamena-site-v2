"use client";

import { useState } from "react";
import { contactPage, industries, site } from "@/content/site";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [envs, setEnvs] = useState<string[]>([]);
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const toggle = (slug: string) => setEnvs((v) => (v.includes(slug) ? v.filter((x) => x !== slug) : [...v, slug]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const payload = { ...data, environments: envs };
    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        setStatus(res.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }
    const envNames = industries.filter((i) => envs.includes(i.slug)).map((i) => i.name).join(", ");
    const body = [`Name: ${data.name}`, `Organization: ${data.org}`, `Environments: ${envNames || "-"}`, "", "What the AI needs to understand:", data.need].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Data program conversation")}&body=${encodeURIComponent(body)}`;
    setStatus("fallback");
  };

  if (status === "sent") {
    return (
      <p className={styles.status} role="status">
        {contactPage.form.sent}
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className="label">{contactPage.form.name}</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span className="label">{contactPage.form.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label className={styles.field}>
        <span className="label">{contactPage.form.org}</span>
        <input name="org" type="text" autoComplete="organization" />
      </label>
      <fieldset className={styles.fieldset}>
        <legend className="label">{contactPage.form.envs}</legend>
        <div className={styles.chips}>
          {industries.map((ind) => (
            <label key={ind.slug} className={`${styles.chip} ${envs.includes(ind.slug) ? styles.chipOn : ""}`}>
              <input type="checkbox" name="env" value={ind.slug} checked={envs.includes(ind.slug)} onChange={() => toggle(ind.slug)} />
              {ind.name}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={styles.field}>
        <span className="label">{contactPage.form.need}</span>
        <textarea name="need" rows={6} required />
      </label>
      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : contactPage.form.submit}
        </button>
        {status === "fallback" ? (
          <p className={styles.status} role="status">
            {contactPage.form.fallback}
          </p>
        ) : null}
        {status === "error" ? (
          <p className={styles.status} role="alert">
            {contactPage.form.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
