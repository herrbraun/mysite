import Link from "next/link";

export default function ChristmasPage() {
  const memories = [
    { date: "2.10", title: "初春见面", file: "/shengdan_image/2.10.jpg" },
    { date: "4.4", title: "大理回忆", file: "/shengdan_image/4.4.jpg" },
    { date: "6.7", title: "生日旅行", file: "/shengdan_image/6.7.jpg" },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50/90 p-8">
        <p className="text-sm tracking-[0.2em] text-emerald-700">CHRISTMAS PAGE</p>
        <h1 className="site-title mt-3 text-4xl text-emerald-900 md:text-5xl">圣诞纪念页（Next.js 版）</h1>
        <p className="mt-4 max-w-2xl leading-8 text-emerald-900/80">
          这里先放一个轻量迁移版，已接入你原来的图片资源和音乐文件。后续如果你愿意，我可以再把旧版的动画与交互完整移植过来。
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {memories.map((item) => (
          <article key={item.date} className="overflow-hidden rounded-2xl border border-emerald-200 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.file} alt={item.title} className="h-56 w-full object-cover" />
            <div className="p-4">
              <p className="text-xs tracking-[0.2em] text-emerald-700">{item.date}</p>
              <h2 className="site-title mt-2 text-2xl text-emerald-900">{item.title}</h2>
            </div>
          </article>
        ))}
      </section>

      <audio controls className="mt-8 w-full" src="/bgm.mp3">
        你的浏览器不支持音频播放。
      </audio>

      <Link href="/" className="ink-link mt-8 inline-block">
        返回首页
      </Link>
    </main>
  );
}
