"use client";

import { useState } from "react";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
      className={`flex gap-2 ${compact ? "w-full max-w-xs" : "w-full max-w-md"}`}
    >
      {done ? (
        <p className="pop py-2 text-sm font-bold text-accent">✓ Thanks — you&apos;re on the list!</p>
      ) : (
        <>
          <input required type="email" placeholder="Your email" aria-label="Email" className="field !py-2.5 text-xs" />
          <button className="btn btn-accent !py-2.5">Subscribe</button>
        </>
      )}
    </form>
  );
}
