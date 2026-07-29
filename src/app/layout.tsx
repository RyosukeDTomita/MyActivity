import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "sigma profile - Portfolio",
  description: "セキュリティエンジニアとして、認証基盤のSI開発/保守、セキュリティ診断、シフトレフトセキュリティを中心に経験。現在はSpringベースの内製フレームワークの開発に従事。Qiitaへの技術記事投稿や勉強会での発信も継続中。最近のマイブームはHaskell AtCoder。",
  keywords: "フロントエンド, バックエンド, React, Next.js, TypeScript, ソフトウェアエンジニア",
  authors: [{ name: "sigma profile" }],
  creator: "sigma profile",
  openGraph: {
    title: "sigma profile - Portfolio",
    description: "セキュリティエンジニアとして、認証基盤のSI開発/保守、セキュリティ診断、シフトレフトセキュリティを中心に経験。現在はSpringベースの内製フレームワークの開発に従事。Qiitaへの技術記事投稿や勉強会での発信も継続中。最近のマイブームはHaskell AtCoder。",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
