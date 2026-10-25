"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useWallet } from "./WalletContext";
import WalletModal from "./WalletModal";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Explore",
    href: "/explore",
    children: [
      { label: "All items", href: "/explore" },
      { label: "Collections", href: "/collections" },
      { label: "Artists", href: "/artists" },
    ],
  },
  {
    label: "Pages",
    href: "/faq",
    children: [
      { label: "How it works", href: "/#how" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Nine home">
      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden>
        <path d="M17 1l15 8.5v19L17 37 2 28.5v-19L17 1z" fill="#d4f53c" />
        <text x="17" y="26" textAnchor="middle" fontSize="20" fontWeight="800" fill="#15170a" fontFamily="inherit">9</text>
      </svg>
      <span className="text-xl font-extrabold tracking-tight">Nine<span className="text-accent">9</span></span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { address, setOpen, disconnect } = useWallet();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobile = openPath === pathname;
  const setMobile = (v: boolean | ((x: boolean) => boolean)) =>
    setOpenPath((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const active = (n: NavItem) =>
    n.href === "/" ? pathname === "/" : pathname.startsWith(n.href) || n.children?.some((c) => pathname === c.href);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-line bg-background/80 py-3 backdrop-blur-xl" : "py-5"}`}>
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <div key={n.label} className="group relative">
                <Link
                  href={n.href}
                  className={`flex items-center gap-1 py-2 text-[13px] font-medium transition-colors hover:text-accent ${active(n) ? "text-accent" : ""}`}
                >
                  {n.label}
                  {n.children && <span className="text-[8px] opacity-70 transition-transform group-hover:rotate-180">▾</span>}
                </Link>
                {n.children && (
                  <div className="invisible absolute left-1/2 top-full w-44 -translate-x-1/2 translate-y-2 rounded-xl border border-line bg-surface p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {n.children.map((c) => (
                      <Link key={c.label} href={c.href} className="block rounded-lg px-3 py-2 text-[13px] text-muted transition hover:bg-surface-2 hover:text-accent">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <form onSubmit={(e) => { e.preventDefault(); const q = new FormData(e.currentTarget).get("q"); router.push(`/explore?q=${encodeURIComponent(String(q ?? ""))}`); }} className="relative hidden lg:block">
              <input name="q" placeholder="Search By Keyword..." aria-label="Search" className="field !w-52 xl:!w-72 !rounded-lg !bg-surface/70 !py-2.5 !pr-10 !text-[11px]" />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            </form>
            {address ? (
              <button onClick={disconnect} title="Disconnect" className="btn btn-accent !py-2.5">
                <span className="h-2 w-2 rounded-full bg-green-700" /> {address}
              </button>
            ) : (
              <button onClick={() => setOpen(true)} className="btn btn-light !py-2.5">
                Wallet Connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect x="2" y="6" width="20" height="14" rx="3" /><path d="M16 13h2M2 10h20" /></svg>
              </button>
            )}
            <button onClick={() => setMobile((v) => !v)} aria-label="Menu" className="flex w-6 flex-col items-end gap-[5px]">
              <span className={`h-[2px] bg-white transition-all ${mobile ? "w-6 translate-y-[7px] rotate-45" : "w-6"}`} />
              <span className={`h-[2px] bg-white transition-all ${mobile ? "w-0 opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-white transition-all ${mobile ? "w-6 -translate-y-[7px] -rotate-45" : "w-6"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* slide-in menu */}
      <div className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity ${mobile ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMobile(false)} />
      <aside className={`fixed right-0 top-0 z-30 h-full w-72 border-l border-line bg-surface px-7 pt-24 transition-transform duration-300 ${mobile ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="space-y-1">
          {[...nav.flatMap((n) => (n.children ? [{ label: n.label, href: n.href }, ...n.children.slice(1)] : [n]))]
            .filter((v, i, a) => a.findIndex((x) => x.href === v.href) === i)
            .map((n) => (
              <li key={n.href + n.label}>
                <Link href={n.href} className="block rounded-lg px-3 py-3 text-lg font-bold transition hover:bg-surface-2 hover:text-accent">{n.label}</Link>
              </li>
            ))}
        </ul>
        <button onClick={() => { setMobile(false); setOpen(true); }} className="btn btn-accent mt-8 w-full justify-center">Wallet Connect</button>
      </aside>

      <WalletModal />
    </>
  );
}
