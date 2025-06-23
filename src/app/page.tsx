'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Mail, MapPin, Calendar, Book, Presentation } from "lucide-react";

// プロフィール情報をここで編集してください
const profile = {
  name: "あなたの名前",
  title: "Software Engineer",
  description: "フルスタック開発者として、React、Next.js、TypeScriptを使用してWebアプリケーションを開発しています。新しい技術に興味があり、常に学習を続けています。",
  location: "Tokyo, Japan",
  email: "your.email@example.com",
  avatar: "/images/placeholder.svg", // ここを実際の画像パスに変更してください
  joinDate: "2020年",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: Github,
      description: "ソースコードとプロジェクト"
    },
    {
      name: "Qiita",
      url: "https://qiita.com/yourusername", 
      icon: Book,
      description: "技術記事とナレッジ"
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/yourusername",
      icon: ExternalLink,
      description: "技術記事とスクラップ"
    },
    {
      name: "Speaker Deck",
      url: "https://speakerdeck.com/yourusername",
      icon: Presentation,
      description: "プレゼンテーション資料"
    }
  ],
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Docker", "AWS", "Git", "PostgreSQL"
  ],
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "株式会社Example",
      period: "2022年 - 現在",
      description: "Webアプリケーションの設計・開発・運用を担当"
    },
    {
      title: "Software Engineer", 
      company: "株式会社Sample",
      period: "2020年 - 2022年",
      description: "フロントエンド開発とAPIの開発を担当"
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
            {profile.name}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            {profile.title}
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {profile.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {profile.joinDate}から活動
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {profile.description}
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
            Links
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
                      {link.description}
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
            Skills
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
            Experience
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
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {exp.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
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
          <div className="flex justify-center items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
            <Mail className="w-4 h-4" />
            <a 
              href={`mailto:${profile.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
