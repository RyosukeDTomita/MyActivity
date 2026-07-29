import { Book, BookOpen, BookMarked, Trophy, PenLine, Presentation } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export const profileData = {
  avatar: "./images/profile.webp",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/RyosukeDTomita",
      icon: GithubIcon
    },
    {
      name: "Qiita",
      url: "https://qiita.com/sigma_devsecops",
      icon: Book
    },
    {
      name: "AtCoder",
      url: "https://atcoder.jp/users/HathawayNoa",
      icon: Trophy
    },
    {
      name: "Note",
      url: "https://note.com/sigma5736394841",
      icon: PenLine
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/sigma_tom",
      icon: BookOpen
    },
    {
      name: "Speaker Deck",
      url: "https://speakerdeck.com/ryosukedtomita",
      icon: Presentation
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tomita-ryosuke-a08a82255/",
      icon: LinkedinIcon
    },
    {
      name: "Reading History",
      url: "https://ryosukedtomita.github.io/myblog/posts/book/index.html",
      icon: BookMarked
    }
  ],
  skills: [
    "Test-Driven Development", "DevSecOps", "Vulnerability Scanning",
    "Agile Application Development", "AWS", "Shell Scripting",
    "Python3", "TypeScript", "Java", "Haskell", "Security",
    "CI/CD", "Docker/Podman"
  ]
};