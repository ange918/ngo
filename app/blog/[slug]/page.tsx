import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Art from "@/components/Art";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p?.title ?? "Post", description: p?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 pt-32">
      <p className="font-mono text-[11px] text-white/50"><Link href="/blog" className="hover:text-accent">← Back to blog</Link></p>
      <div className="fade-up mt-6 font-mono text-[11px] text-muted"><span className="text-accent">{post.tag}</span> · {post.date} · {post.read} read</div>
      <h1 className="fade-up mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl" style={{ animationDelay: "0.1s" }}>{post.title}</h1>
      <div className="fade-up mt-8" style={{ animationDelay: "0.2s" }}><Art item={post} className="aspect-[16/8] rounded-3xl" size="text-9xl" /></div>
      <div className="mt-10 space-y-5 text-[15px] leading-8 text-white/75">
        <p className="text-lg font-semibold text-white">{post.excerpt}</p>
        {post.body.map((b, i) => <Reveal key={i}><p>{b}</p></Reveal>)}
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="mb-5 font-extrabold">Keep reading</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {more.map((m) => (
            <Link key={m.slug} href={`/blog/${m.slug}`} className="card p-5 transition hover:-translate-y-1 hover:border-accent/40">
              <span className="font-mono text-[11px] text-accent">{m.tag}</span>
              <p className="mt-2 text-sm font-bold">{m.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
