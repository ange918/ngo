"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const o = open === i;
        return (
          <div key={f.q} className={`card overflow-hidden transition-colors ${o ? "border-accent/40" : ""}`}>
            <button onClick={() => setOpen(o ? null : i)} aria-expanded={o} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold">
              {f.q}
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-base transition-transform duration-300 ${o ? "rotate-45 border-accent text-accent" : ""}`}>+</span>
            </button>
            <div className={`grid transition-all duration-300 ${o ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="px-6 pb-5 text-sm leading-relaxed text-muted">{f.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
