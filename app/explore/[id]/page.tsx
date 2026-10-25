import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Art from "@/components/Art";
import ArtCard from "@/components/ArtCard";
import BidPanel from "@/components/BidPanel";
import Reveal from "@/components/Reveal";
import { items } from "@/lib/data";

export function generateStaticParams() {
  return items.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const item = items.find((i) => i.id === id);
  return { title: item?.title ?? "Item" };
}

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = items.find((i) => i.id === id);
  if (!item) notFound();
  const related = items.filter((i) => i.id !== item.id && (i.category === item.category || i.collection === item.collection)).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-32">
      <p className="mb-8 font-mono text-[11px] text-white/50">
        <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/explore" className="hover:text-accent">Explore</Link> / <span className="text-accent">{item.title}</span>
      </p>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="fade-up">
          <div className="group card p-3"><Art item={item} className="aspect-square rounded-2xl" size="text-[11rem]" /></div>
        </div>
        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-accent">{item.category}</span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{item.title}</h1>
          <p className="mt-3 text-sm text-muted">From <span className="font-bold text-foreground">{item.collection}</span> · by <span className="font-bold text-foreground">{item.artist}</span> · ♥ {item.likes}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted">{item.description}</p>
          <BidPanel item={item} />
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line text-xs">
            {[["Blockchain", "Ethereum"], ["Token standard", "ERC-721"], ["Royalty", "5%"], ["Edition", "1 of 1"]].map(([k, v]) => (
              <div key={k} className="bg-surface px-4 py-3"><dt className="text-muted">{k}</dt><dd className="mt-1 font-bold">{v}</dd></div>
            ))}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <Reveal><h2 className="mb-8 text-2xl font-extrabold">You may also like</h2></Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => <Reveal key={r.id} delay={i * 80}><ArtCard item={r} /></Reveal>)}
          </div>
        </section>
      )}
    </div>
  );
}
