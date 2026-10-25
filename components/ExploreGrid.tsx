"use client";

import { useMemo, useState } from "react";
import { items } from "@/lib/data";
import ArtCard from "./ArtCard";

const cats = ["All", "Animals", "Cyber", "Fantasy", "Vehicles"] as const;
const sorts = [
  ["ending", "Ending soon"],
  ["low", "Price: low to high"],
  ["high", "Price: high to low"],
  ["liked", "Most liked"],
] as const;

export default function ExploreGrid() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<(typeof sorts)[number][0]>("ending");
  const [shown, setShown] = useState(8);

  const list = useMemo(() => {
    const l = items.filter((i) => (cat === "All" || i.category === cat) && (i.title + i.artist + i.collection).toLowerCase().includes(q.toLowerCase()));
    return l.sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : sort === "liked" ? b.likes - a.likes : a.endsIn - b.endsIn);
  }, [cat, q, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => { setCat(c); setShown(8); }} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${cat === c ? "border-accent bg-accent text-black" : "border-line text-muted hover:border-accent hover:text-accent"}`}>{c}</button>
          ))}
        </div>
        <div className="flex gap-3">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search items, artists…" aria-label="Search" className="field !py-2.5 text-xs lg:w-64" />
          <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} aria-label="Sort" className="field !w-auto !py-2.5 text-xs">
            {sorts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="card py-20 text-center text-sm text-muted">No items match your search.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.slice(0, shown).map((it) => (
            <div key={it.id} className="fade-up"><ArtCard item={it} /></div>
          ))}
        </div>
      )}

      {shown < list.length && (
        <div className="mt-10 text-center"><button onClick={() => setShown((s) => s + 4)} className="btn btn-ghost">Load more</button></div>
      )}
    </div>
  );
}
