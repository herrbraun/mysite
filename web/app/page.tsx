import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-5 py-16">
      <section className="paper-card w-full max-w-4xl rounded-3xl p-10 md:p-14">
        <p className="mb-6 text-sm tracking-[0.24em] text-slate-500">HILAOZONG.XYZ</p>
        <h1 className="site-title text-4xl leading-tight text-slate-900 md:text-6xl">你好，我是老秦</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          这里是我的个人站点。现在除了展示页，也已经有了完整博客入口，后续会更新技术笔记、生活记录和一些项目复盘。
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/blog"
            className="group rounded-2xl border border-sky-200 bg-[var(--color-accent-soft)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="site-title text-3xl text-[var(--color-accent)]">进入博客</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">浏览最新文章，支持后续接入数据库动态发布。</p>
            <span className="mt-4 inline-block text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              GO TO BLOG
            </span>
          </Link>

          <Link
            href="/christmas"
            className="group rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="site-title text-3xl text-emerald-800">圣诞纪念页</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">保留你原有纪念页入口，后续可以逐步迁移动效与音乐逻辑。</p>
            <span className="mt-4 inline-block text-sm font-semibold tracking-wide text-emerald-800">OPEN PAGE</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
