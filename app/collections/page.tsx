import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Art from "@/components/Art";
import { collections } from "@/lib/data";

export const metadata: Metadata = { title: "Collections" };

export default function Collections() {
  return (
    <>
      <PageHero crumb="Collections" title="All collections" text="Curated series from our artists. Each one tells its own story." />
      <section className="mx-auto grid max-w-[1180px] gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 100}>
            <Link href="/explore" className="card group block p-3 transition duration-300 hover:-translate-y-2 hover:border-accent/40">
              <div className="grid grid-cols-3 gap-2">
                {c.emojis.map((e, k) => (
                  <Art key={k} item={{ emoji: e, from: c.from, to: c.to }} size="text-4xl" className={`aspect-square rounded-xl ${k === 0 ? "col-span-2 row-span-2" : ""}`} />
                ))}
              </div>
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-lg font-extrabold">{c.name}</h3>
                <div className="mt-3 flex justify-between text-xs text-muted">
                  <span>{c.items || "Coming"} items</span>
                  <span>Floor Ξ {c.floor.toFixed(2)}</span>
                  <span className="font-bold text-accent">Ξ {c.volume}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
