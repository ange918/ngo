import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ArtCard from "@/components/ArtCard";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import { items, artists, collections } from "@/lib/data";
import Art from "@/components/Art";
import SectionHead, { Arrow } from "@/components/SectionHead";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pb-10 pt-32">
        <div className="hero-grid" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />

        {/* floating decorations */}
        <span className="float absolute left-[20%] top-[8.5rem] hidden text-2xl text-indigo-400 sm:block" style={{ "--r": "-12deg" } as React.CSSProperties}>✿</span>
        <span className="float absolute left-[24%] top-[18rem] hidden h-11 w-11 place-items-center rounded-full bg-teal-300 text-xl font-black text-teal-900 shadow-[0_0_30px_rgba(94,234,212,0.4)] sm:grid" style={{ "--r": "-14deg", animationDelay: "0.4s" } as React.CSSProperties}>₿</span>
        <span className="float absolute right-[22%] top-[17rem] hidden h-11 w-11 place-items-center rounded-full bg-amber-500 text-xl font-black text-indigo-900 shadow-[0_0_30px_rgba(245,158,11,0.4)] sm:grid" style={{ "--r": "12deg", animationDelay: "1.1s" } as React.CSSProperties}>◆</span>
        <span className="twinkle absolute right-[14%] top-[10rem] text-white">✦</span>
        <span className="twinkle absolute right-[21%] top-[22rem] text-3xl text-white" style={{ animationDelay: "1s" }}>✦</span>
        <span className="twinkle absolute left-[12%] top-[14rem] h-1 w-1 rounded-full bg-white" />
        <span className="twinkle absolute left-[30%] top-[24rem] h-1 w-1 rounded-full bg-white" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-[1180px] px-5 text-center">
          <h1 className="fade-up text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ animationDelay: "0.05s" }}>World Of Top Works</h1>
          <p className="fade-up mx-auto mt-8 max-w-md font-mono text-[11px] leading-relaxed text-white/60" style={{ animationDelay: "0.2s" }}>
            Welcome to the world of rare digital art. Explore the best art from hand-picked digital artist out there and find the hidden gem.
          </p>
          <div className="fade-up mt-9 flex justify-center gap-3" style={{ animationDelay: "0.35s" }}>
            <Link href="/explore" className="btn btn-accent !px-6">Discover More <Arrow /></Link>
            <Link href="/collections" className="btn btn-light !px-6">All Collections <Arrow /></Link>
          </div>
        </div>

        <div className="fade-up relative mt-10" style={{ animationDelay: "0.5s" }}>
          <div className="mx-auto max-w-[1180px] px-5"><HeroCarousel /></div>
        </div>
      </section>

      {/* ---------------- FEATURED ---------------- */}
      <section className="mx-auto mt-20 max-w-[1180px] px-5">
        <Reveal><SectionHead title="Featured Item" href="/explore" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(3, 7).map((it, i) => (
            <Reveal key={it.id} delay={i * 90}><ArtCard item={it} /></Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="mt-24 overflow-hidden border-y border-line py-5" aria-hidden>
        <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm font-bold uppercase tracking-[0.25em] text-white/30">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Rare art", "Hand-picked artists", "Live auctions", "Verified ownership", "Low fees", "Community first"].map((t) => (
                <span key={t + k} className="flex items-center gap-12">{t}<span className="text-accent">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section id="how" className="mx-auto mt-28 max-w-[1180px] scroll-mt-24 px-5">
        <Reveal className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">How it <span className="shine-text">works</span></h2>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-white/60">Four simple steps from curious visitor to proud collector.</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Connect wallet", "Link your wallet in one click. We never hold your keys.", "👛"],
            ["02", "Explore art", "Browse drops, collections and artists curated by hand.", "🔭"],
            ["03", "Place a bid", "Bid in live auctions or buy instantly at a fixed price.", "⚡"],
            ["04", "Collect & trade", "Your piece lands in your wallet. Keep it or resell.", "🏆"],
          ].map(([n, t, d, e], i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="card group h-full p-6 transition duration-300 hover:-translate-y-2 hover:border-accent/50">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-2xl transition group-hover:scale-110 group-hover:bg-accent/15">{e}</span>
                  <span className="font-mono text-3xl font-bold text-white/10 transition group-hover:text-accent/40">{n}</span>
                </div>
                <h3 className="mt-6 text-base font-extrabold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- COLLECTIONS ---------------- */}
      <section className="mx-auto mt-28 max-w-[1180px] px-5">
        <Reveal><SectionHead title="Top Collections" href="/collections" label="All Collections" /></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {collections.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <Link href="/collections" className="card group block p-3 transition duration-300 hover:-translate-y-2 hover:border-accent/40">
                <div className="grid grid-cols-3 gap-2">
                  {c.emojis.map((e, k) => (
                    <Art key={k} item={{ emoji: e, from: c.from, to: c.to }} size="text-4xl" className={`aspect-square rounded-xl ${k === 0 ? "col-span-2 row-span-2" : ""}`} />
                  ))}
                </div>
                <div className="flex items-center justify-between px-2 pb-2 pt-4">
                  <div>
                    <h3 className="font-extrabold">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted">Floor Ξ {c.floor.toFixed(2)}</p>
                  </div>
                  <span className="text-xs font-bold text-accent">Ξ {c.volume} vol.</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <Stats />

      {/* ---------------- ARTISTS ---------------- */}
      <section className="mx-auto mt-28 max-w-[1180px] px-5">
        <Reveal><SectionHead title="Top Artists" href="/artists" label="All Artists" /></Reveal>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {artists.map((a, i) => (
            <Reveal key={a.handle} delay={i * 70}>
              <Link href="/artists" className="card group block p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-accent/40">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full text-4xl transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${a.color}55, ${a.color}11)`, boxShadow: `0 0 0 2px ${a.color}66` }}>{a.emoji}</span>
                <p className="mt-4 truncate text-sm font-extrabold">{a.name}</p>
                <p className="mt-1 text-[11px] text-muted">{a.sales} sales</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="mx-auto mt-28 max-w-3xl px-5">
        <Reveal className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Frequently asked</h2>
        </Reveal>
        <Reveal><Faq /></Reveal>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto mt-28 max-w-[1180px] px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <div className="hero-grid opacity-60" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[90px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">Never miss a <span className="shine-text">drop</span></h2>
              <p className="mx-auto mt-4 max-w-md font-mono text-[11px] leading-relaxed text-white/60">Get early access to new collections and artist interviews, straight to your inbox.</p>
              <div className="mt-8 flex justify-center"><Newsletter /></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
