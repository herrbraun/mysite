import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14">
      <article className="paper-card rounded-3xl p-8 md:p-10">
        <p className="text-xs tracking-[0.2em] text-slate-500">{post.createdAt.toISOString().slice(0, 10)}</p>
        <h1 className="site-title mt-3 text-4xl leading-tight text-slate-900 md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">{post.summary}</p>
        <div className="mt-8 border-t border-[var(--color-line)] pt-6 text-base leading-8 text-slate-800">{post.content}</div>
      </article>

      <Link href="/blog" className="ink-link mt-8 inline-block">
        返回博客列表
      </Link>
    </main>
  );
}
