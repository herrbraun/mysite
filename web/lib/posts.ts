import { prisma } from "@/lib/prisma";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const fallbackPosts: BlogPost[] = [
  {
    id: "seed-1",
    slug: "welcome-to-new-blog",
    title: "博客升级记录：从静态页到可维护站点",
    summary: "这是第一篇初始化文章，用来确认列表页、详情页和路由都已经连通。",
    content:
      "这次把网站从单页静态展示升级到了 Next.js 结构。下一步会接入 PostgreSQL 并支持后台发布文章。",
    published: true,
    createdAt: new Date("2026-04-17T00:00:00.000Z"),
    updatedAt: new Date("2026-04-17T00:00:00.000Z"),
  },
];

export async function getPosts(): Promise<BlogPost[]> {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("USER:PASSWORD")) {
    return fallbackPosts;
  }

  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    return posts;
  } catch {
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("USER:PASSWORD")) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  try {
    return await prisma.post.findUnique({ where: { slug } });
  } catch {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }
}
