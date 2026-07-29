# Claude Development Guidelines

This repository contains a Next.js personal portfolio website. Here are the development guidelines for working with this project:

## Development Setup

0. **Node.js**: Requires Node.js 20.9+ (CI uses 22, see `.github/workflows/deploy.yml`)
1. **Dependencies**: Run `npm install` to install all required packages
2. **Development server**: Use `npm run dev` to start the development server
3. **Build**: Use `npm run build` to create a production build (static export to `out/`)
4. **Lint**: Use `npm run lint` to check code quality (Next.js 16で`next lint`が廃止されたためESLint CLIを直接呼ぶ)
5. **E2E Test**: Use `npm run test:e2e` to run Playwright tests (初回のみ`npx playwright install chromium`が必要)

## Key Files

- `src/app/page.tsx` - Main portfolio page with profile configuration
- `src/app/layout.tsx` - Layout component with metadata(OGP/Twitter Card/canonical/JSON-LD)
- `src/app/sitemap.ts` - sitemap.xmlの生成
- `src/data/site.ts` - 公開URL(basePath込み)とOG画像URLの定義
- `src/components/BrandIcons.tsx` - GitHub/LinkedInのブランドアイコン(lucide-react v1で削除されたためインラインSVGで保持)
- `public/images/` - Static images directory(`og-image.png`は1200x630のOGP画像)
- `e2e/` - Playwright E2Eテスト
- `README.md` - Project documentation

## E2E Testing

`e2e/language.spec.ts`はProfile/Activitiesの両タブがja/enで描画されることだけを検証する簡易テスト。

- 期待値は`src/translations/translations.ts`から直接importする。文面を編集してもテストは壊れない
- 言語切り替えボタンは`data-testid="language-switcher"`で参照する
- `playwright.config.ts`の`webServer`が`npm run dev`を自動起動する。`next.config.ts`の`basePath`があるため、URLは`/MyActivity/`配下(`/`は404)

## SEO

- URLやメタデータの定義箇所は`src/data/site.ts`の`siteUrl`に集約する。`basePath`があるため`metadataBase`は`https://ryosukedtomita.github.io/MyActivity/`(basePath込み)を渡す
- `src/app/sitemap.ts`には`export const dynamic = "force-static"`が必須。`output: 'export'`では静的であることを明示しないとビルドが失敗する
- JSON-LD(`Person`)の`sameAs`は`profileData.links`から生成する。リンクを増やしたら自動で反映される
- **robots.txtは置いていない**。クローラはオリジン直下(`https://ryosukedtomita.github.io/robots.txt`)しか読まないため、`/MyActivity/robots.txt`を置いても無視される。制御が必要ならユーザーサイト側のリポジトリに置く
- ja/enはクライアント側で切り替えるためURLが同一で、英語版は個別にインデックスされない。hreflangも張れない

## Customization Guide

### Profile Setup
The main profile configuration is in `src/app/page.tsx`. Update the `profile` object with:
- Personal information (name, title, description)
- Contact details and location
- Social media links
- Skills and experience

### Image Setup
1. Add your profile image to `public/images/`
2. Update the `profile.avatar` path in `page.tsx`
3. Replace placeholder images as needed

## Testing Pull Requests

This project is configured to work with GitHub's pull request system. To test PR creation:

1. Make changes on a feature branch
2. Ensure changes are committed and pushed
3. Create a pull request from your branch to `main`

## Code Quality

- Use TypeScript for type safety
- Follow React/Next.js best practices
- Maintain responsive design with Tailwind CSS
- Use CSS animations (defined in `globals.css`) consistently; do not add animation libraries such as Framer Motion (kept out to minimize bundle size)

## Deployment

This project is configured for GitHub Pages deployment:
- Push to `main` branch for automatic deployment
- Ensure `next.config.ts` is properly configured for static export
- Static files are generated in the `out` directory

### CI

- `.github/workflows/test.yml` - E2E(Playwright)。`pull_request`で実行され、`workflow_call`で`deploy.yml`からも呼ばれる
- `.github/workflows/deploy.yml` - `test` → `build` → `deploy`の順に実行。E2Eが落ちるとデプロイされない

ワークフローの静的チェックにはaquaで管理した2つのツールを使う(`aqua.yaml`)。

```sh
aqua i                          # 初回のみ
aqua exec -- ghalint run        # ワークフローのポリシー違反を検出
aqua exec -- pinact run --check # actionsがSHA固定されているか検証
aqua exec -- pinact run -u      # actionsを最新版に更新して再固定
```

- actionsは`uses: owner/repo@<40桁SHA> # vX.Y.Z`の形で固定する。タグは可変なので直接参照しない
- `permissions`はワークフロー全体を`{}`にして、各ジョブで必要な権限だけ与える