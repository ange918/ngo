"use client";

import Link from "next/link";
import type { Item } from "@/lib/data";
import Art from "./Art";
import Countdown from "./Countdown";
import { useWallet } from "./WalletContext";

export default function ArtCard({ item }: { item: Item }) {
  const { liked, toggleLike } = useWallet();
  const isLiked = liked.has(item.id);
  return (
    <div className="group card relative overflow-hidden p-3 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(212,245,60,0.25)]">
      <Link href={`/explore/${item.id}`} className="relative block overflow-hidden rounded-xl">
        <Art item={item} className="aspect-[4/3.4] rounded-xl" />
        <span className="absolute right-2 top-2 flex items-center gap-2 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold backdrop-blur">
          <Countdown seconds={item.endsIn} />
        </span>
      </Link>
      <button
        onClick={() => toggleLike(item.id)}
        aria-label="Like"
        className={`absolute right-5 top-11 grid h-7 w-7 place-items-center rounded-full bg-black/55 text-xs backdrop-blur transition hover:scale-110 ${isLiked ? "text-red-400" : "text-white"}`}
      >
        {isLiked ? "♥" : "♡"}
      </button>
      <div className="px-1 pb-1 pt-4">
        <Link href={`/explore/${item.id}`} className="block truncate text-sm font-bold hover:text-accent">{item.title}</Link>
        <div className="mt-3 flex items-center justify-between text-xs text-muted">
          <span>{item.artist}</span>
          <span className="font-bold text-foreground">Ξ {item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
