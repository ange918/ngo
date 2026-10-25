import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero crumb="Contact" title="Get in touch" text="Questions, partnerships or press? We usually answer within one working day." />
      <section className="mx-auto grid max-w-[1000px] gap-8 px-5 lg:grid-cols-[1fr_1.5fr]">
        <Reveal className="space-y-4">
          {[["📧", "Email", "hello@nine.example"], ["💬", "Community", "discord.gg/nine"], ["📍", "Studio", "12 Rue des Arts, Paris"]].map(([e, t, v]) => (
            <div key={t} className="card flex items-center gap-4 p-5 transition hover:border-accent/40">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-xl">{e}</span>
              <div><p className="text-xs text-muted">{t}</p><p className="text-sm font-bold">{v}</p></div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={120}><ContactForm /></Reveal>
      </section>
    </>
  );
}
