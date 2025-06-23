# Personal Portfolio Website

Next.js + TypeScript + Tailwind CSSで作成した自己紹介ポートフォリオサイトです。GitHub Pagesで公開することを前提としています。

## 特徴

- 🎨 モダンでレスポンシブなデザイン
- ⚡ Next.js App Routerを使用した高速なサイト
- 🎭 Framer Motionによるスムーズなアニメーション
- 🎯 TypeScriptによる型安全性
- 📱 モバイルフレンドリー
- 🌙 ダークモード対応
- 🔗 SNSリンクの美しい配置

## セットアップ

### 1. プロフィール情報の編集

`src/app/page.tsx`の`profile`オブジェクトを編集してください：

```typescript
const profile = {
  name: "あなたの名前",
  title: "Software Engineer",
  description: "あなたの自己紹介文",
  location: "Tokyo, Japan",
  email: "your.email@example.com",
  avatar: "/images/profile.jpg", // 実際の画像パスに変更
  // ... その他の設定
};
```

### 2. プロフィール画像の追加

- `public/images/`ディレクトリに自分の画像をアップロード
- `profile.avatar`のパスを更新

### 3. SNSリンクの設定

`profile.links`配列で各SNSのURLを設定してください：

```typescript
links: [
  {
    name: "GitHub",
    url: "https://github.com/yourusername", // 実際のURLに変更
    icon: Github,
    description: "ソースコードとプロジェクト"
  },
  // ... 他のSNS
]
```

### 4. メタデータの更新

`src/app/layout.tsx`のメタデータも更新してください。

## 開発

開発サーバーを起動：

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)でサイトを確認できます。

## GitHub Pagesへのデプロイ

### 自動デプロイ（推奨）

1. GitHubリポジトリの設定でPages機能を有効化
2. SourceをGitHub Actionsに設定
3. `main`ブランチにプッシュすると自動でデプロイされます

### 手動デプロイ

```bash
npm run build
```

生成された`out`ディレクトリの内容をGitHub Pagesにアップロードしてください。

## カスタマイズ

- 色やスタイルは`tailwind.config.js`で調整可能
- アニメーションは`framer-motion`で実装
- アイコンは`lucide-react`を使用

## 技術スタック

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## ライセンス

MIT License

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
