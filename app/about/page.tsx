import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import Art from "@/components/Art";
import { artists, items } from "@/lib/data";

export const metadata: Metadata = { title: "About us" };

export default function About() {
  return (
    <>
      <PageHero crumb="About us" title="We celebrate digital artists" text="Nine started as a small group of collectors who wanted a fairer, friendlier place to discover rare art." />

      <section className="mx-auto max-w-[1180px] px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Art item={items[0]} className="aspect-[3/4] rounded-3xl" size="text-8xl" />
              <Art item={items[7]} className="mt-10 aspect-[3/4] rounded-3xl" size="text-8xl" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl font-extrabold tracking-tight">A marketplace built around <span className="shine-text">people</span></h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">We hand-pick every artist before they can list. We keep fees low and auctions transparent. And we believe that owning a piece of art should feel as good online as it does in a gallery.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Every artist is reviewed by a human", "2% flat fee, no hidden costs", "Royalties paid on every resale", "Support that actually answers"].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-black text-black">✓</span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="mx-auto mt-28 max-w-[1180px] px-5">
        <Reveal className="mb-10 text-center"><h2 className="text-3xl font-extrabold tracking-tight">Our values</h2></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {[["🎯", "Curation", "Quality over quantity. Fewer pieces, better pieces."], ["🤝", "Fairness", "Artists keep what they earn — and keep earning."], ["🔍", "Transparency", "Prices, fees and rules are always visible up front."]].map(([e, t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="card h-full p-7 transition duration-300 hover:-translate-y-2 hover:border-accent/40">
                <span className="text-3xl">{e}</span>
                <h3 className="mt-5 font-extrabold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1180px] px-5">
        <Reveal className="mb-10 text-center"><h2 className="text-3xl font-extrabold tracking-tight">Meet the team</h2></Reveal>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {artists.slice(0, 4).map((a, i) => (
            <Reveal key={a.handle} delay={i * 90}>
              <div className="card p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-accent/40">
                <span className="mx-auto grid h-24 w-24 place-items-center rounded-full text-5xl" style={{ background: `linear-gradient(135deg, ${a.color}55, ${a.color}11)` }}>{a.emoji}</span>
                <p className="mt-4 font-extrabold">{a.name}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">{["Founder", "Head of art", "Community", "Engineering"][i]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
