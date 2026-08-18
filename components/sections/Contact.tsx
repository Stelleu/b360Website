"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { contact } from "@/lib/content";

const fieldClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-gold";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeader index={contact.index} title={contact.title} />
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-cream/70">
              {contact.intro}
            </p>
            <div className="mt-10 space-y-8">
              <div>
                <p className="eyebrow mb-3">Email</p>
                <a href={`mailto:${contact.email}`} className="text-xl hover:text-gold">
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-3">Presence</p>
                {contact.locations.map((loc) => (
                  <p key={loc} className="text-cream/70">
                    {loc}
                  </p>
                ))}
              </div>
              <div>
                <p className="eyebrow mb-3">Social</p>
                <div className="flex flex-wrap gap-4">
                  {contact.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-cream/70 hover:text-gold"
                    >
                      {s.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                  Name
                  <input
                    required
                    name="name"
                    className={`${fieldClass} mt-2`}
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className={`${fieldClass} mt-2`}
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                Subject
                <select
                  required
                  name="subject"
                  defaultValue=""
                  className={`${fieldClass} mt-2 appearance-none`}
                >
                  <option value="" disabled className="bg-ink">
                    Select a subject
                  </option>
                  {contact.subjects.map((s) => (
                    <option key={s} value={s} className="bg-ink">
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={`${fieldClass} mt-2 resize-none`}
                  placeholder="Tell us about the talent, the partnership, or the idea."
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Message sent"
                    : "Send message"}
              </button>
              {status === "error" && (
                <p className="text-sm text-heat">
                  Something went wrong. Please email us directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
