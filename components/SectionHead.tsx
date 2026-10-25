import Link from "next/link";

export const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M8 7h9v9" /></svg>
);

export default function SectionHead({ title, href, label = "Discover More" }: { title: string; href: string; label?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-[28px]">{title}</h2>
      <Link href={href} className="flex items-center gap-2 text-xs font-bold transition hover:text-accent">
        {label}
        <span className="grid h-5 w-5 place-items-center rounded-full border border-white/30"><Arrow /></span>
      </Link>
    </div>
  );
}

