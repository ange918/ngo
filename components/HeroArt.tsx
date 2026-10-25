import { items, type Item } from "@/lib/data";
import Art from "./Art";

const cols: Item[][] = [
  [items[7], items[3]],
  [items[9], items[5]],
  [items[6], items[10]],
];
const avatars = ["🧑‍🎨", "👨‍🎤", "👩‍💻", "🥷"];

function MiniCard({ item, k }: { item: Item; k: number }) {
  return (
    <div className="card w-[165px] shrink-0 rounded-2xl !border-white/5 bg-[#1b1b1b] p-2.5 shadow-[0_20px_40px_-18px_rgba(0,0,0,0.9)]">
      <div className="relative overflow-hidden rounded-xl">
        <Art item={item} className="aspect-[1/0.9] rounded-xl" size="text-5xl" />
        <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-black/55 text-[9px]">♡</span>
      </div>
      <p className="mt-3 text-[13px] font-extrabold leading-tight">Dayco serpentine belt</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-2 text-[11px]">{avatars[k % 4]}</span>
          <span className="font-mono text-[8px] leading-tight text-muted">Created by<br /><b className="whitespace-nowrap text-[9px] text-white/80">Marvin McKinney</b></span>
        </div>
        <span className="whitespace-nowrap text-[11px] font-bold">♦ {item.price.toFixed(2)}</span>
      </div>
      <p className="mt-2 font-mono text-[8px] text-muted">Current Bid</p>
    </div>
  );
}

export default function HeroArt() {
  return (
    <div
      className="pointer-events-none relative h-[380px] overflow-hidden sm:h-[460px] lg:absolute lg:left-[360px] lg:top-0 lg:h-[390px] lg:w-[900px]"
      style={{ maskImage: "linear-gradient(to bottom, #000 62%, transparent 98%)", WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 98%)" }}
      aria-hidden
    >
      <div className="absolute left-[8%] top-[2%] flex gap-4 sm:left-[14%] lg:left-[30px]" style={{ transform: "rotate(-20deg) skewX(-4deg)", transformOrigin: "30% 30%" }}>
        {cols.map((col, c) => (
          <div key={c} className="flex flex-col gap-4" style={{ marginTop: c * 55 - 30 }}>
            {col.map((it, r) => <MiniCard key={it.id} item={it} k={c * 2 + r} />)}
          </div>
        ))}
      </div>
    </div>
  );
}
