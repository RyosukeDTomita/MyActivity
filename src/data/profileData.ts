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
      url: "https://gist.github.com/RyosukeDTomita/63e4dab0b6dcec4b3ba13db9ea435551",
      icon: Book
    }
  ],
  skills: [
    "AI Agents", "Test-Driven Development", "DevSecOps", "Vulnerability Scanning",
    "Agile Application Development", "Amazon Web Services (AWS)", "Shell Scripting",
    "Python (Programming Language)", "TypeScript", "Java",
    "Continuous Integration and Continuous Delivery (CI/CD)", "Docker Products"
  ]
};