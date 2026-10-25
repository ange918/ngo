import Link from "next/link";
import { Logo } from "./Navbar";
import Newsletter from "./Newsletter";

const cols = [
  { title: "Marketplace", links: [["All items", "/explore"], ["Collections", "/collections"], ["Artists", "/artists"]] },
  { title: "Company", links: [["About us", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]] },
  { title: "Support", links: [["FAQ", "/faq"], ["How it works", "/#how"], ["Help center", "/contact"]] },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">The home of rare digital art. Hand-picked artists, transparent auctions, collectors first.</p>
          <div className="mt-6 flex gap-3">
            {["𝕏", "in", "◎", "▶"].map((s) => (
              <a key={s} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-line text-xs font-bold transition hover:-translate-y-1 hover:border-accent hover:text-accent">{s}</a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="mb-4 text-sm font-extrabold">{c.title}</h3>
            <ul className="space-y-2.5 text-sm text-muted">
              {c.links.map(([l, h]) => (
                <li key={l}><Link href={h} className="transition hover:text-accent">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-muted sm:flex-row">
          <span>© 2026 Nine. All rights reserved.</span>
          <Newsletter compact />
        </div>
      </div>
    </footer>
  );
}
