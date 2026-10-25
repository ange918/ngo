import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { artists } from "@/lib/data";
import FollowButton from "@/components/FollowButton";

export const metadata: Metadata = { title: "Artists" };

export default function Artists() {
  return (
    <>
      <PageHero crumb="Artists" title="Our artists" text="Every creator on Nine is reviewed and hand-picked by the team." />
      <section className="mx-auto grid max-w-[1180px] gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a, i) => (
          <Reveal key={a.handle} delay={(i % 3) * 100}>
            <div className="card group overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-accent/40">
              <div className="h-24" style={{ background: `linear-gradient(120deg, ${a.color}66, transparent)` }} />
              <div className="-mt-10 px-6 pb-6">
                <span className="grid h-20 w-20 place-items-center rounded-full border-4 border-surface bg-surface-2 text-4xl transition group-hover:scale-110">{a.emoji}</span>
                <h3 className="mt-4 font-extrabold">{a.name}</h3>
                <p className="font-mono text-[11px] text-muted">{a.handle}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-muted"><b className="text-foreground">{a.followers}</b> followers · <b className="text-foreground">{a.sales}</b> sales</div>
                  <FollowButton />
                </div>
                <Link href="/explore" className="mt-4 block text-xs font-bold text-accent hover:underline">View works →</Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
