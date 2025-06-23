import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "あなたの名前 - Portfolio",
  description: "フルスタック開発者として、React、Next.js、TypeScriptを使用してWebアプリケーションを開発しています。",
  keywords: "フロントエンド, バックエンド, React, Next.js, TypeScript, ソフトウェアエンジニア",
  authors: [{ name: "あなたの名前" }],
  creator: "あなたの名前",
  openGraph: {
    title: "あなたの名前 - Portfolio",
    description: "フルスタック開発者として、React、Next.js、TypeScriptを使用してWebアプリケーションを開発しています。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
