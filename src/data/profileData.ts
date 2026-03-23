import { Github, Book, ExternalLink, Presentation, Linkedin } from "lucide-react";

export const profileData = {
  avatar: "./images/profile.jpg",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/RyosukeDTomita",
      icon: Github
    },
    {
      name: "Qiita",
      url: "https://qiita.com/sigma_devsecops",
      icon: Book
    },
    {
      name: "Note",
      url: "https://note.com/sigma5736394841",
      icon: ExternalLink
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/sigma_tom",
      icon: ExternalLink
    },
    {
      name: "Speaker Deck",
      url: "https://speakerdeck.com/ryosukedtomita",
      icon: Presentation
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tomita-ryosuke-a08a82255/",
      icon: Linkedin
    },
    {
      name: "Resume",
      url: "https://gist.github.com/RyosukeDTomita/c81a075afb87453885b0910272448ab9",
      icon: ExternalLink
    },
    {
      name: "Reading History",
      url: "https://ryosukedtomita.github.io/myblog/posts/book/index.html",
      icon: Book
    }
  ],
  skills: [
    "Test-Driven Development", "DevSecOps", "Vulnerability Scanning",
    "Agile Application Development", "AWS", "Shell Scripting",
    "Python3", "TypeScript", "Java", "Haskell", "Security",
    "CI/CD", "Docker/Podman"
  ]
};