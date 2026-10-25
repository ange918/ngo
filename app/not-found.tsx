import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-5 text-center">
      <div className="hero-grid" />
      <div className="relative">
        <p className="shine-text text-8xl font-extrabold sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-extrabold">This page got lost in the metaverse</h1>
        <p className="mt-3 font-mono text-[11px] text-white/60">The page you are looking for does not exist or was moved.</p>
        <Link href="/" className="btn btn-accent mt-8">Back to home</Link>
      </div>
    </section>
  );
}
