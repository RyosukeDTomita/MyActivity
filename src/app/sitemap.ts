import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// output: 'export'ではルートを静的だと明示しないとビルドが失敗する
export const dynamic = "force-static";

// ビルド時にout/sitemap.xmlとして生成される。
// タブ(profile/activities)はクエリではなくクライアント状態なのでURLは1つだけ。
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
