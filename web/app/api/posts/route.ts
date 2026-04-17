import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getPosts } from "@/lib/posts";

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("USER:PASSWORD")) {
    return NextResponse.json({ error: "DATABASE_URL 未配置，暂不能写入数据库。" }, { status: 400 });
  }

  const body = (await request.json()) as {
    title?: string;
    slug?: string;
    summary?: string;
    content?: string;
    published?: boolean;
  };

  if (!body.title || !body.slug || !body.content) {
    return NextResponse.json({ error: "title/slug/content 为必填字段。" }, { status: 400 });
  }

  const created = await prisma.post.create({
    data: {
      title: body.title,
      slug: body.slug,
      summary: body.summary ?? null,
      content: body.content,
      published: body.published ?? true,
    },
  });

  return NextResponse.json(created, { status: 201 });
}
