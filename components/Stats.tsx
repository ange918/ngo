"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1600);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString("en-US")}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { n: 12400, s: "+", l: "Artworks listed" },
    { n: 3200, s: "+", l: "Active collectors" },
    { n: 480, s: "", l: "Hand-picked artists" },
    { n: 98, s: "%", l: "Happy collectors" },
  ];
  return (
    <section className="mx-auto mt-28 max-w-[1180px] px-5">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-surface px-6 py-10 text-center transition hover:bg-surface-2">
            <p className="text-3xl font-extrabold text-accent sm:text-4xl"><Counter to={s.n} suffix={s.s} /></p>
            <p className="mt-2 font-mono text-[11px] text-muted">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
