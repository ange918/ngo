import Link from "next/link";
import HeroArt from "@/components/HeroArt";
import HeroWalletButton from "@/components/HeroWalletButton";
import ArtCard from "@/components/ArtCard";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import { items, artists, collections } from "@/lib/data";
import Art from "@/components/Art";
import SectionHead, { Arrow } from "@/components/SectionHead";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pt-24">
        {/* static decorations */}
        <span className="absolute left-[8%] top-44 hidden h-9 w-9 place-items-center rounded-full bg-red-500 text-[11px] text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.25)] sm:grid">▲</span>
        <span className="absolute left-[36%] top-[26rem] hidden h-6 w-6 place-items-center rounded-full bg-amber-300 text-[9px] font-black text-amber-800 sm:grid">$</span>
        <span className="absolute left-[25%] top-28 text-[10px] text-indigo-400">✦</span>
        <span className="absolute right-[7%] top-52 text-[10px] text-indigo-400">✦</span>
        <span className="absolute left-[16%] top-40 h-[3px] w-[3px] rounded-full bg-white/70" />
        <span className="absolute left-[12%] top-[17.5rem] h-1 w-1 rounded-full bg-pink-400" />
        <span className="absolute left-[30%] top-[22rem] h-[3px] w-[3px] rounded-full bg-white/70" />
        <span className="absolute right-[10%] top-32 h-[3px] w-[3px] rounded-full bg-white/70" />

        <div className="relative mx-auto grid max-w-[700px] items-start px-5 lg:min-h-[390px]">
          <div className="fade-up relative z-10 max-w-md pt-10 lg:pt-14">
            <h1 className="text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-[40px]">Discover Rare &amp;<br />Unique Digital Art</h1>
            <p className="mt-6 max-w-sm font-mono text-[11px] leading-relaxed text-white/60">
              Discover, collect and sell extraordinary NFTs on the world&apos;s first &amp; largest NFT marketplace
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/explore" className="btn btn-accent !px-6">Explore More <Arrow /></Link>
              <HeroWalletButton />
            </div>
          </div>
          <HeroArt />
        </div>

        {/* stats + steps */}
        <div id="how" className="relative mx-auto mt-4 max-w-[700px] scroll-mt-24 px-5 pb-4">
          <div className="fade-up overflow-hidden rounded-2xl border border-line bg-surface" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-3 divide-x divide-line border-b border-line text-center">
              {[["1.5K+", "Collections"], ["217K+", "Artworks"], ["3.7K+", "Artists"]].map(([n, l]) => (
                <div key={l} className="px-3 py-7">
                  <p className="text-3xl font-extrabold sm:text-[34px]">{n}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted">{l}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
              {[
                ["👛", "#f5b942", "Set Up Your Wallet", "Fusce non dignissim velit, sit amet semper eros. Quisque orci est"],
                ["🧾", "#b6e04a", "Create collection", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
                ["📊", "#a07cf0", "Add your NFTs", "Suspendisse porttitor id est non accumsan. Cras vel viverra velit"],
                ["💰", "#7ed957", "Sell your NFTs", "Maecenas non semper quam. Vivamus et arcu condimentum ipsum"],
              ].map(([e, c, t, d], i) => (
                <div key={t} className="border-t border-line p-5 sm:border-t-0">
                  <span className="grid h-8 w-8 place-items-center rounded-lg text-base" style={{ background: `${c}33` }}>{e}</span>
                  <p className="mt-6 font-mono text-[8px] tracking-wider text-muted">STEP {i + 1}</p>
                  <h3 className="mt-2 text-[13px] font-extrabold">{t}</h3>
                  <p className="mt-3 font-mono text-[9px] leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED ---------------- */}
      <section className="mx-auto mt-24 max-w-[1180px] px-5">
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
