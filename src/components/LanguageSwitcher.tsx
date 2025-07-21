'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <button
        onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
        className="bg-white dark:bg-slate-800 shadow-lg rounded-full px-4 py-2 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700"
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {language === 'ja' ? '🇯🇵 JA' : '🇺🇸 EN'}
        </span>
        <span className="text-gray-400 dark:text-gray-500">→</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {language === 'ja' ? '🇺🇸 EN' : '🇯🇵 JA'}
        </span>
      </button>
    </motion.div>
  );
}