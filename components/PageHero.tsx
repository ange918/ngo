import Link from "next/link";

export default function PageHero({ title, text, crumb }: { title: string; text?: string; crumb: string }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 text-center">
      <div className="hero-grid" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
      <span className="absolute left-[18%] top-40 text-white">✦</span>
      <span className="absolute right-[16%] top-52 text-2xl text-white">✦</span>
      <div className="relative mx-auto max-w-2xl px-5">
        <p className="fade-up font-mono text-[11px] text-white/50"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-accent">{crumb}</span></p>
        <h1 className="fade-up mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ animationDelay: "0.1s" }}>{title}</h1>
        {text && <p className="fade-up mx-auto mt-6 max-w-md font-mono text-[11px] leading-relaxed text-white/60" style={{ animationDelay: "0.2s" }}>{text}</p>}
      </div>
    </section>
  );
}
