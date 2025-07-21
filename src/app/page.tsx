'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, MapPin, Calendar, Book, Presentation, Linkedin } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// プロフィール情報をここで編集してください
const profile = {
  name: "Ryosuke Tomita(sigma)",
  title: "Security Engineer",
  description: "NRI SecureTechnologies でセキュリティエンジニアとして活動。認証基盤のSI開発/保守、セキュリティ診断、シフトレフトセキュリティ，生成AI活用推進に従事。プライベートではQiitaに100件以上の技術記事を投稿し、勉強会でのLTも実施。",
  location: "Tokyo, Japan",
  avatar: "./images/profile.jpg", // ここを実際の画像パスに変更してください
  joinDate: "2022年",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/RyosukeDTomita",
      icon: Github,
      description: "ソースコードとプロジェクト"
    },
    {
      name: "Qiita",
      url: "https://qiita.com/sigma_devsecops", 
      icon: Book,
      description: "技術記事とナレッジ"
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/sigma_tom",
      icon: ExternalLink,
      description: "精査された技術記事とZenn本"
    },
    {
      name: "Speaker Deck",
      url: "https://speakerdeck.com/ryosukedtomita",
      icon: Presentation,
      description: "LTで使用した資料"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tomita-ryosuke-a08a82255/",
      icon: Linkedin,
      description: "LinkedIn プロフィール"
    },
    {
      name: "Resume",
      url: "https://gist.github.com/RyosukeDTomita/c81a075afb87453885b0910272448ab9",
      icon: ExternalLink,
      description: "職務経歴書"
    }
  ],
  skills: [
    "AI Agents", "Test-Driven Development", "DevSecOps", "Vulnerability Scanning",
    "Agile Application Development", "Amazon Web Services (AWS)", "Shell Scripting",
    "Python (Programming Language)", "TypeScript", "Java",
    "Continuous Integration and Continuous Delivery (CI/CD)", "Docker Products"
  ],
  experiences: [
    {
      title: "ShiftLeft (Security Engineer)",
      company: "NRI SecureTechnologies サイバーエンジニアリング事業本部(本部名変更) (出向: 野村総合研究所)",
      period: "2025年4月 - 現在",
      description: "各種セキュリティ診断、生成AI活用，シフトレフトセキュリティのコンサルティング業務を担当。"
    },
    {
      title: "DevSecOps (Security Engineer)", 
      company: "NRI SecureTechnologies DXセキュリティコンサルティング事業本部 (出向: 野村総合研究所)",
      period: "2023年4月 - 2025年7月",
      description: "認証基盤のSI開発/保守でPM兼開発者としてプロジェクトを推進。各種セキュリティ診断、セキュリティレビュー，社内基盤の管理を実施。また，セキュリティ技術研修講師として新卒向けに教育活動を行った。"
    },
    {
      title: "Network Operations(Security Engineer)",
      company: "NRI SecureTechnologies MSS事業本部 (出向: 野村総合研究所)",
      period: "2022年4月 - 2023年3月",
      description: "顧客ネットワーク機器の運用保守業務を担当。Crowd Strike導入支援、SRX・BIG-IPのバージョンアップ対応、Shell Scriptを用いたログ調査・分析を実施。"
    }
  ]
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].profile;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* ヘッダーセクション */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src={profile.avatar}
              alt={`${profile.name}のプロフィール画像`}
              fill
              className="rounded-full border-4 border-white shadow-lg object-cover"
              priority
            />
          </div>
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
        </motion.div>

        {/* SNSリンクセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.links.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
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
                      {t.links.items.find(item => item.name === link.name)?.description || link.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* スキルセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.skills.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 経験セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.experience.title}
          </h2>
          <div className="space-y-6">
            {profile.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.experience.items[index].title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {t.experience.items[index].company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {t.experience.items[index].period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.experience.items[index].description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* フッター */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-8 border-t border-gray-200 dark:border-slate-700"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 {t.name}. {t.footer}
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
