import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-14">
      <header className="mb-10">
        <p className="text-sm tracking-[0.22em] text-slate-500">BLOG</p>
        <h1 className="site-title mt-3 text-4xl text-slate-900 md:text-5xl">老秦的博客</h1>
        <p className="mt-4 text-slate-700">记录项目、技术和生活观察。当前支持静态兜底数据，接入数据库后自动切换动态内容。</p>
      </header>

      <section className="grid gap-5">
        {posts.map((post) => (
          <article key={post.id} className="paper-card rounded-2xl p-6">
            <p className="text-xs tracking-[0.2em] text-slate-500">{post.createdAt.toISOString().slice(0, 10)}</p>
            <h2 className="site-title mt-2 text-3xl text-slate-900">
              <Link href={`/blog/${post.slug}`} className="ink-link">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-slate-700">{post.summary ?? "暂无摘要"}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
