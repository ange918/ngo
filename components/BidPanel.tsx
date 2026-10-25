"use client";

import { useState } from "react";
import type { Item } from "@/lib/data";
import Countdown from "./Countdown";
import { useWallet } from "./WalletContext";

export default function BidPanel({ item }: { item: Item }) {
  const { address, setOpen, liked, toggleLike } = useWallet();
  const min = +(item.price * 1.05).toFixed(2);
  const [bid, setBid] = useState(String(min));
  const [bids, setBids] = useState([
    { who: "0x4f2a…91bc", amt: item.price, t: "2h ago" },
    { who: "0x81de…03fa", amt: +(item.price * 0.9).toFixed(2), t: "5h ago" },
  ]);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return setOpen(true);
    const v = parseFloat(bid);
    if (!(v >= min)) return setErr(`Minimum bid is Ξ ${min.toFixed(2)}`);
    setErr("");
    setBids((b) => [{ who: address, amt: v, t: "just now" }, ...b]);
    setBid((v * 1.05).toFixed(2));
  };

  const top = bids[0];
  return (
    <div className="card mt-8 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted">Current bid</p>
          <p className="mt-1 text-2xl font-extrabold">Ξ {top.amt.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted">Auction ends in</p>
          <p className="mt-1 font-mono text-lg font-bold text-accent"><Countdown seconds={item.endsIn} /></p>
        </div>
      </div>
      <form onSubmit={submit} className="mt-5 flex gap-3">
        <input value={bid} onChange={(e) => setBid(e.target.value)} inputMode="decimal" aria-label="Bid amount" className="field" />
        <button className="btn btn-accent !px-7">{address ? "Place Bid" : "Connect"}</button>
        <button type="button" onClick={() => toggleLike(item.id)} aria-label="Like" className={`btn btn-ghost !px-4 ${liked.has(item.id) ? "!text-red-400" : ""}`}>{liked.has(item.id) ? "♥" : "♡"}</button>
      </form>
      {err && <p className="mt-2 text-xs text-red-400">{err}</p>}
      <ul className="mt-6 divide-y divide-line text-xs">
        {bids.map((b, i) => (
          <li key={i} className={`flex items-center justify-between py-3 ${i === 0 ? "fade-up" : ""}`}>
            <span className="font-mono text-muted">{b.who}</span>
            <span className="font-bold">Ξ {b.amt.toFixed(2)}</span>
            <span className="text-muted">{b.t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
