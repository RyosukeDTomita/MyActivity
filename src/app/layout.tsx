import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { profileData } from "@/data/profileData";
import { translations } from "@/translations/translations";
import { ogImageUrl, siteUrl } from "@/data/site";

const title = "sigma profile - Portfolio";
const description = "セキュリティエンジニアとして、認証基盤のSI開発/保守、セキュリティ診断、シフトレフトセキュリティを中心に経験。現在はSpringベースの内製フレームワークの開発に従事。Qiitaへの技術記事投稿や勉強会での発信も継続中。最近のマイブームはHaskell AtCoder。";

export const metadata: Metadata = {
  // 相対URL(canonical/OG画像)の解決基準。basePathを含む絶対URLを渡す
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  authors: [{ name: "sigma profile" }],
  creator: "sigma profile",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${siteUrl}/`,
    siteName: title,
    locale: "ja_JP",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl],
  },
};

// 氏名検索でのリッチな表示を狙うPersonスキーマ。
// sameAsのURLはprofileDataから引き、リンク一覧と二重管理にしない
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: translations.ja.profile.name,
  jobTitle: translations.ja.profile.title,
  description: translations.ja.profile.description,
  url: `${siteUrl}/`,
  image: ogImageUrl,
  sameAs: profileData.links.map((link) => link.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://ghchart.rshah.org" />
        <link rel="dns-prefetch" href="https://ghchart.rshah.org" />
        {/* profile.webpのpreloadはnext/imageのpriorityが自動生成するため手動指定しない */}
        {/* Critical CSS: inline above-the-fold styles to unblock first paint */}
        <style>{`
          body{margin:0;background:#ffffff;color:#171717}
          @media(prefers-color-scheme:dark){body{background:#0a0a0a;color:#ededed}}
          .min-h-screen{min-height:100vh}
          .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
          .from-slate-50{--tw-gradient-from:#f8fafc;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(248,250,252,0))}
          .to-slate-100{--tw-gradient-to:#f1f5f9}
          @media(prefers-color-scheme:dark){
            .dark\\:from-slate-900{--tw-gradient-from:#0f172a;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(15,23,42,0))}
            .dark\\:to-slate-800{--tw-gradient-to:#1e293b}
          }
        `}</style>
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
