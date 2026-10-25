"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroItems } from "@/lib/data";
import Art from "./Art";
import Countdown from "./Countdown";
import { useWallet } from "./WalletContext";

const N = heroItems.length;
const PAGES = 4;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [vw, setVw] = useState(1200);
  const { liked, toggleLike } = useWallet();
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const on = () => setVw(window.innerWidth);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  const go = useCallback((dir: number) => setActive((a) => (a + dir + N) % N), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 3800);
    return () => clearInterval(t);
  }, [paused, go]);

  const step = vw < 640 ? 62 : vw < 1024 ? 100 : 118;
  const cardW = vw < 640 ? 170 : 205;
  const page = Math.min(PAGES - 1, Math.floor(active / 2));

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        startX.current = null;
      }}
    >
      <div className="relative mx-auto h-[310px] overflow-visible" style={{ perspective: 1400 }}>
        {heroItems.map((item, i) => {
          let d = i - active;
          if (d > N / 2) d -= N;
          if (d < -N / 2) d += N;
          const abs = Math.abs(d);
          const center = d === 0;
          const hidden = abs > 3;
          return (
            <div
              key={item.id}
              onClick={() => !center && setActive(i)}
              className="absolute left-1/2 top-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,0.8,0.25,1)]"
              style={{
                width: cardW,
                transform: `translate(-50%, -50%) translateX(${d * step}px) rotateY(${-d * 9}deg) scale(${center ? 1 : 0.9 - abs * 0.02})`,
                zIndex: 10 - abs,
                opacity: hidden ? 0 : 1,
                pointerEvents: hidden ? "none" : "auto",
                cursor: center ? "default" : "pointer",
                filter: center ? "none" : `brightness(${0.9 - abs * 0.06})`,
              }}
            >
              {center ? (
                <div className="group card rounded-3xl !border-white/5 bg-[#1c1c1c] p-2.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)]">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Art item={item} className="aspect-[1/1.02] rounded-2xl" size="text-[7rem]" />
                    <span className="absolute right-2 top-2 flex items-center gap-1.5 text-[10px] font-bold">
                      <span className="rounded-full bg-black/55 px-2.5 py-1 backdrop-blur"><Countdown seconds={item.endsIn} /></span>
                      <button onClick={() => toggleLike(item.id)} aria-label="Like" className={`grid h-6 w-6 place-items-center rounded-full bg-black/55 backdrop-blur ${liked.has(item.id) ? "text-red-400" : ""}`}>
                        {liked.has(item.id) ? "♥" : "♡"}
                      </button>
                    </span>
                    <Link href={`/explore/${item.id}`} className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#e9ecec] px-6 py-2 text-[11px] font-bold text-black transition hover:scale-105 hover:bg-accent">
                      Place Bid
                    </Link>
                  </div>
                  <div className="px-2 pb-3 pt-4 text-center">
                    <p className="text-[13px] font-bold">{item.title}</p>
                    <p className="mt-1.5 text-xs font-bold text-white/90"><span className="text-white/50">♦</span> {item.price.toFixed(2).replace(".", ",")}</p>
                  </div>
                </div>
              ) : (
                <Art item={item} justify={d < 0 ? "flex-start" : "flex-end"} className="aspect-[1/1.42] rounded-3xl shadow-xl" size="text-7xl" />
              )}
            </div>
          );
        })}

        <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-accent hover:text-black sm:-left-4 xl:-left-10">‹</button>
        <button onClick={() => go(1)} aria-label="Next" className="absolute right-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-accent hover:text-black sm:-right-4 xl:-right-10">›</button>
      </div>

      <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[11px]">
        {Array.from({ length: PAGES }, (_, p) => (
          <button key={p} onClick={() => setActive(p * 2)} className={`flex items-center gap-3 font-bold transition-colors ${p === page ? "text-accent" : "text-white/80 hover:text-accent"}`}>
            {p + 1}
            {p === page && p < PAGES - 1 && <span className="h-px w-9 bg-accent/70" />}
          </button>
        ))}
      </div>
    </div>
  );
}
