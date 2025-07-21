export interface LTPresentation {
  date: string;
  title: string;
  eventUrl: string;
  slideUrl: string;
  youtubeUrl?: string;
}

export const ltPresentations: LTPresentation[] = [
  {
    date: "2025/07/02",
    title: "MCPのセキュリティ",
    eventUrl: "https://increments.connpass.com/event/356654/",
    slideUrl: "https://speakerdeck.com/ryosukedtomita/number-qiitabash-mcpnosekiyuritei"
  },
  {
    date: "2025/05/28",
    title: "TDDでAIに設計イメージを伝える",
    eventUrl: "https://increments.connpass.com/event/351227/",
    slideUrl: "https://speakerdeck.com/ryosukedtomita/number-qiitabash-tdddeainishe-ji-imeziwochuan-eru",
    youtubeUrl: "https://www.youtube.com/watch?v=lP9SbkZCDSI"
  },
  {
    date: "2025/04/14",
    title: "ネット上のたくさんの誰かのおかげでエンジニアになれた話と\nQiitaを書くようになって得た知見の共有",
    eventUrl: "https://increments.connpass.com/event/347388/",
    slideUrl: "https://speakerdeck.com/ryosukedtomita/14",
    youtubeUrl: "https://www.youtube.com/watch?v=lNkD_DECvtQ"
  }
];

// Helper function to convert YouTube URL to embed URL
export function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}