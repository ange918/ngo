"use client";

import { useEffect } from "react";
import { useWallet } from "./WalletContext";

const wallets = [
  { name: "MetaMask", emoji: "🦊", tag: "Popular" },
  { name: "Coinbase Wallet", emoji: "🔵", tag: "" },
  { name: "WalletConnect", emoji: "🔗", tag: "" },
  { name: "Phantom", emoji: "👻", tag: "" },
];

export default function WalletModal() {
  const { open, setOpen, connect } = useWallet();

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, setOpen]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-label="Connect wallet" onClick={(e) => e.stopPropagation()} className="pop card w-full max-w-sm p-6">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Connect your wallet</h2>
          <button onClick={() => setOpen(false)} aria-label="Close" className="text-xl text-muted hover:text-white">×</button>
        </div>
        <p className="mb-5 text-xs text-muted">Choose a wallet to start bidding. This is a demo — no real wallet is used.</p>
        <div className="space-y-2.5">
          {wallets.map((w) => (
            <button key={w.name} onClick={() => connect(w.name)} className="flex w-full items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-left text-sm font-bold transition hover:border-accent hover:bg-surface">
              <span className="text-xl">{w.emoji}</span>
              {w.name}
              {w.tag && <span className="ml-auto rounded-full bg-accent px-2 py-0.5 text-[10px] text-accent-ink" style={{ color: "var(--accent-ink)" }}>{w.tag}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
