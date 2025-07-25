'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Presentation, Podcast, Music, Play, BookOpen, Hash } from 'lucide-react';
import { ltPresentations, podcastAppearances, techBlogPosts, getYouTubeEmbedUrl } from '@/data/activitiesData';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function Activities() {
  const { language } = useLanguage();
  const t = translations[language].profile.activities;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Podcast Appearances Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          聴くエンジニアtype
        </h2>
        
        <div className="space-y-6">
          {podcastAppearances.map((podcast, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {podcast.title}
              </h3>
              
              {podcast.date && (
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{podcast.date}</span>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                {podcast.links.podcast && (
                  <a
                    href={podcast.links.podcast}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Podcast className="w-4 h-4" />
                    <span>Apple Podcast</span>
                  </a>
                )}
                
                {podcast.links.amazonMusic && (
                  <a
                    href={podcast.links.amazonMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Music className="w-4 h-4" />
                    <span>Amazon Music</span>
                  </a>
                )}
                
                {podcast.links.spotify && (
                  <a
                    href={podcast.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Music className="w-4 h-4" />
                    <span>Spotify</span>
                  </a>
                )}
                
                {podcast.links.youtube && (
                  <a
                    href={podcast.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Play className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LT Presentations Section */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {t.ltPresentations}
      </h2>
      
      <div className="space-y-6">
        {ltPresentations.map((lt, index) => {
          const embedUrl = lt.youtubeUrl ? getYouTubeEmbedUrl(lt.youtubeUrl) : null;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 whitespace-pre-line">
                {lt.title}
              </h3>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{lt.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href={lt.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.eventPage}</span>
                </a>
                
                <a
                  href={lt.slideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Presentation className="w-4 h-4" />
                  <span>{t.slides}</span>
                </a>
              </div>
              
              {embedUrl && (
                <div className="mt-4">
                  <div className="w-full md:w-1/2">
                    <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-900">
                      <iframe
                        src={embedUrl}
                        title={lt.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full"
                        style={{ aspectRatio: '16/9', height: '300px' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Tech Blog Section */}
      <div className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {t.techBlog}
        </h2>

        {/* Rankings and Achievements */}
        <div className="mb-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Qiita Tech Festa 2025
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            2025年6月17日〜2025年7月15日
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://qiita.com/tech-festa/2025/ranking/user"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
            >
              <span className="font-medium">ユーザいいねランキング 30位</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://qiita.com/tech-festa/2025/ranking/user?sort=articles_count"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              <span className="font-medium">ユーザ投稿数ランキング 10位</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://qiita.com/tech-festa/2025/award"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
            >
              <span className="font-medium">Advanced Organizations 達成</span>
              <span className="text-sm">(20記事以上・100いいね以上)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Advent Calendar */}
        <div className="mb-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Qiita Advent Calendar 2024
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            2024年12月1日〜2024年12月25日
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://qiita.com/advent-calendar/2024/sigma_security"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors"
            >
              <span className="font-medium">セキュリティごった煮一人感想チャレンジ</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          {techBlogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{post.date}</span>
                    <span className="mx-2">·</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {post.platform}
                    </span>
                  </div>
                  
                  {post.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {post.description}
                    </p>
                  )}
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                      <Hash className="w-4 h-4 text-gray-500" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{t.viewArticle}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}