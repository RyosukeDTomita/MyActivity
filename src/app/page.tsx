'use client';

import { useSyncExternalStore } from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { profileData } from '@/data/profileData';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import TabNavigation from '@/components/TabNavigation';

// Activitiesタブは初期表示に不要なため遅延読み込みして初期JSを削減
const Activities = dynamic(() => import('@/components/Activities'));

const VALID_TABS = ['profile', 'activities'];
const DEFAULT_TAB = 'profile';

// アバターのリンク先はリンク一覧と同じURLを使い、定義箇所を1つに保つ
const githubUrl = profileData.links.find((link) => link.name === 'GitHub')?.url;

// location.hashを唯一の状態源として扱う外部ストア。
// replaceStateはhashchangeを発火しないため、購読者を自前で保持して通知する
const tabListeners = new Set<() => void>();

const getTabFromHash = () => {
  const hash = window.location.hash.replace('#', '');
  return VALID_TABS.includes(hash) ? hash : DEFAULT_TAB;
};

const subscribeToTab = (onStoreChange: () => void) => {
  tabListeners.add(onStoreChange);
  window.addEventListener('hashchange', onStoreChange);
  return () => {
    tabListeners.delete(onStoreChange);
    window.removeEventListener('hashchange', onStoreChange);
  };
};

const setTabHash = (tab: string) => {
  window.history.replaceState(null, '', `#${tab}`);
  tabListeners.forEach((listener) => listener());
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].profile;
  // hashはサーバー側では読めないため、サーバースナップショットは必ずDEFAULT_TABを返す。
  // hydration完了後にクライアントスナップショットへ切り替わるのでmismatchにならない
  const activeTab = useSyncExternalStore(
    subscribeToTab,
    getTabFromHash,
    () => DEFAULT_TAB
  );

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'activities', label: t.activities.title }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* ヘッダーセクション */}
        <div className="text-center mb-12 animate-fade-in-up">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.name} GitHub`}
            className="relative block w-32 h-32 mx-auto mb-6 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={profileData.avatar}
              alt={`${t.name}のプロフィール画像`}
              fill
              sizes="128px"
              className="rounded-full border-4 border-white shadow-lg object-cover"
              priority
            />
          </a>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {t.name}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            {t.title}
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {t.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t.joinDate}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="mt-6">
            <img
              src="https://ghchart.rshah.org/ryosukedtomita"
              alt="GitHub contributions chart"
              className="mx-auto max-w-full"
              width="721"
              height="112"
              decoding="async"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setTabHash}
        />

        {/* Tab Content */}
        {activeTab === 'profile' ? (
          <>
            {/* SNSリンクセクション */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.links.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.links.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${0.1 * index}s` }}
                className="animate-fade-in-scale bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                    <link.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t.links.items.find(item => item.name === link.name)?.description || ''}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* スキルセクション */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.skills.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {profileData.skills.map((skill, index) => (
              <span
                key={skill}
                style={{ animationDelay: `${0.05 * index}s` }}
                className="animate-fade-in-scale bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 経験セクション */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.experience.title}
          </h2>
          <div className="space-y-6">
            {t.experience.items.map((exp, index) => (
              <div
                key={index}
                style={{ animationDelay: `${0.1 * index}s` }}
                className="animate-fade-in-left bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {exp.period}
                </p>
                {exp.description && (
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                )}
                {exp.subRoles && (
                  <div className="space-y-4 mt-2">
                    {exp.subRoles.map((role, roleIndex) => (
                      <div key={roleIndex} className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                        <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">{role.department}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{role.period}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{role.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

          </>
        ) : (
          <Activities />
        )}

        {/* フッター */}
        <footer
          className="animate-fade-in text-center pt-8 border-t border-gray-200 dark:border-slate-700"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2026 {t.name}. {t.footer}
          </p>
        </footer>
      </div>
    </div>
  );
}
