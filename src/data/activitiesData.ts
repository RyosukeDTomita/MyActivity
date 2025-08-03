export interface LTPresentation {
  date: string;
  title: string;
  eventUrl: string;
  slideUrl: string;
  youtubeUrl?: string;
}

export interface PodcastAppearance {
  date?: string;
  title: string;
  links: {
    podcast?: string;
    amazonMusic?: string;
    spotify?: string;
    youtube?: string;
  };
}

export interface TechBlogPost {
  date: string;
  title: string;
  platform: 'Qiita' | 'Zenn' | 'Other';
  url: string;
  tags?: string[];
  description?: string;
}

export const podcastAppearances: PodcastAppearance[] = [
  {
    date: "2025/07/24",
    title: "#123 成長のきっかけは、アウトプットに強制感をもたせたこと/富田涼介①",
    links: {
      podcast: "https://podcasts.apple.com/jp/podcast/123-%E6%88%90%E9%95%B7%E3%81%AE%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%AF-%E3%82%A2%E3%82%A6%E3%83%88%E3%83%97%E3%83%83%E3%83%88%E3%81%AB%E5%BC%B7%E5%88%B6%E6%84%9F%E3%82%92%E6%8C%81%E3%81%9F%E3%81%9B%E3%81%9F%E3%81%93%E3%81%A8-nri%E3%82%BB%E3%82%AD%E3%83%A5%E3%82%A2%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%82%BA-%E5%AF%8C%E7%94%B0%E6%B6%BC%E4%BB%8B/id1653563200?i=1000718692119",
      amazonMusic: "https://music.amazon.co.jp/podcasts/3e2c415b-5a48-4a1b-8810-5c0be5488e9a/episodes/616ce0ab-a966-4580-8e98-1dcbf024372d/%E8%81%B4%E3%81%8F%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2type-123-%E6%88%90%E9%95%B7%E3%81%AE%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%AF%E3%80%81%E3%82%A2%E3%82%A6%E3%83%88%E3%83%97%E3%83%83%E3%83%88%E3%81%AB%E5%BC%B7%E5%88%B6%E6%84%9F%E3%82%92%E6%8C%81%E3%81%9F%E3%81%9B%E3%81%9F%E3%81%93%E3%81%A8%EF%BC%8Fnri%E3%82%BB%E3%82%AD%E3%83%A5%E3%82%A2%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%82%BA-%E5%AF%8C%E7%94%B0%E6%B6%BC%E4%BB%8B%E2%91%A0",
      spotify: "https://open.spotify.com/episode/1bEnIamRjXVpCFMOebS0CK",
      youtube: "https://www.youtube.com/watch?v=4zHdDy07j2c"
    }
  },
  {
    date: "2025/07/31",
    title: "#124 考えうる最悪な想定を超えなければ、前向きになれる/富田涼介②",
    links: {
      podcast: "https://podcasts.apple.com/jp/podcast/124-%E8%80%83%E3%81%88%E3%81%86%E3%82%8B%E6%9C%80%E6%82%AA%E3%81%AA%E6%83%B3%E5%AE%9A%E3%82%92%E8%B6%8A%E3%81%88%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0-%E5%89%8D%E5%90%91%E3%81%8D%E3%81%AB%E3%81%AA%E3%82%8C%E3%82%8B-nri%E3%82%BB%E3%82%AD%E3%83%A5%E3%82%A2%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%82%BA-%E5%AF%8C%E7%94%B0%E6%B6%BC%E4%BB%8B/id1653563200?i=1000719803026",
      amazonMusic: "https://music.amazon.co.jp/podcasts/3e2c415b-5a48-4a1b-8810-5c0be5488e9a/episodes/2e749c6f-56bb-4342-b0e9-c3f8acdf223a/%E8%81%B4%E3%81%8F%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2type-124-%E8%80%83%E3%81%88%E3%81%86%E3%82%8B%E6%9C%80%E6%82%AA%E3%81%AA%E6%83%B3%E5%AE%9A%E3%82%92%E8%B6%8A%E3%81%88%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%80%81%E5%89%8D%E5%90%91%E3%81%8D%E3%81%AB%E3%81%AA%E3%82%8C%E3%82%8B%EF%BC%8Fnri%E3%82%BB%E3%82%AD%E3%83%A5%E3%82%A2%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%82%BA-%E5%AF%8C%E7%94%B0%E6%B6%BC%E4%BB%8B%E2%91%A1",
      spotify: "https://open.spotify.com/episode/4nV7TgdJdsXrL78JH1WSxu",
      youtube: "https://www.youtube.com/watch?v=kffGRaxi-A8"
    }
  },
  {
    date: "2025/08/07",
    title: "#125 会社名を背負って記事を書く、責任の大きさが成長を後押ししてくれた/富田涼介③",
    links: {}
  },
  {
    date: "2025/08/21",
    title: "#126 成長を加速させるのは\"傲慢さ\"かもしれない/富田涼介④",
    links: {}
  }
];

export const ltPresentations: LTPresentation[] = [
  {
    date: "2025/07/02",
    title: "MCPのセキュリティ",
    eventUrl: "https://increments.connpass.com/event/356654/",
    slideUrl: "https://speakerdeck.com/ryosukedtomita/number-qiitabash-mcpnosekiyuritei",
    youtubeUrl: "https://www.youtube.com/watch?v=ahgWRiOqOrU"
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

export const techBlogPosts: TechBlogPost[] = [];

// Helper function to convert YouTube URL to embed URL
export function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}
