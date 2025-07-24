'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Presentation, Podcast, Music, Play } from 'lucide-react';
import { ltPresentations, podcastAppearances, getYouTubeEmbedUrl } from '@/data/activitiesData';
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
    </motion.div>
  );
}