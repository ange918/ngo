import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Art from "@/components/Art";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <>
      <PageHero crumb="Blog" title="News & stories" text="Guides, interviews and announcements from the Nine team." />
      <section className="mx-auto grid max-w-[1180px] gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 100}>
            <Link href={`/blog/${p.slug}`} className="card group block overflow-hidden p-3 transition duration-300 hover:-translate-y-2 hover:border-accent/40">
              <Art item={p} className="aspect-[16/10] rounded-xl" size="text-7xl" />
              <div className="px-2 pb-3 pt-5">
                <div className="flex items-center gap-3 font-mono text-[11px] text-muted"><span className="text-accent">{p.tag}</span>{p.date} · {p.read}</div>
                <h3 className="mt-3 font-extrabold leading-snug transition group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
