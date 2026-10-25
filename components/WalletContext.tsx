"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Ctx = {
  address: string | null;
  open: boolean;
  setOpen: (v: boolean) => void;
  connect: (wallet: string) => void;
  disconnect: () => void;
  liked: Set<string>;
  toggleLike: (id: string) => void;
};

const WalletCtx = createContext<Ctx | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const a = localStorage.getItem("nine-wallet");
        if (a) setAddress(a);
        const l = localStorage.getItem("nine-liked");
        if (l) setLiked(new Set(JSON.parse(l)));
      } catch {}
    });
  }, []);

  const connect = useCallback((wallet: string) => {
    const hex = Array.from({ length: 4 }, () => Math.floor(Math.random() * 65536).toString(16).padStart(4, "0")).join("");
    const a = `0x${hex.slice(0, 4)}…${hex.slice(-4)}`;
    setAddress(a);
    setOpen(false);
    try { localStorage.setItem("nine-wallet", a); } catch {}
    void wallet;
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    try { localStorage.removeItem("nine-wallet"); } catch {}
  }, []);

  const toggleLike = useCallback((id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      try { localStorage.setItem("nine-liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);

  return (
    <WalletCtx.Provider value={{ address, open, setOpen, connect, disconnect, liked, toggleLike }}>
      {children}
    </WalletCtx.Provider>
  );
}

export function useWallet() {
  const c = useContext(WalletCtx);
  if (!c) throw new Error("useWallet must be used inside WalletProvider");
  return c;
}
