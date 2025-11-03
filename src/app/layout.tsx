import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "セキュリティエンジニアとして活動。Qiitaを中心に技術記事の投稿やLT等の発信にも力を入れている。最近は育児の傍らでHaskellでの競技プログラミングに力を入れている。",
  keywords: "フロントエンド, バックエンド, React, Next.js, TypeScript, ソフトウェアエンジニア",
  authors: [{ name: "sigma profile" }],
  creator: "sigma profile",
  openGraph: {
    title: "sigma profile - Portfolio",
    description: "セキュリティエンジニアとして活動。Qiitaを中心に技術記事の投稿やLT等の発信にも力を入れている。最近は育児の傍らでHaskellでの競技プログラミングに力を入れている。",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
