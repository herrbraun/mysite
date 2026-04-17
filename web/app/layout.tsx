import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "老秦的私人领地",
  description: "个人网站与博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
