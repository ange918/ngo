"use client";

import { useWallet } from "./WalletContext";

export default function HeroWalletButton() {
  const { address, setOpen } = useWallet();
  return (
    <button onClick={() => setOpen(true)} className="btn btn-light !px-6">
      {address ?? "Wallet Connect"}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect x="2" y="6" width="20" height="14" rx="3" /><path d="M16 13h2M2 10h20" /></svg>
    </button>
  );
}
