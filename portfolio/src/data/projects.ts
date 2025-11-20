// src/data/projects.js
import faceidImg from "../assets/images/faceid.png";
import faceidVideo from "../assets/videos/faceid-demo.mp4";
import ecommerceImg from "../assets/images/e-commerce.png";
import jobsApiImg from "../assets/images/jobs-api.png";

type ProjectTag = {
  label: string;
  special?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: "image" | "video";
  mediaSrc: string;
  tags: ProjectTag[];
  links: {
    label: string;
    href: string;
    iconClass: string;
  }[];
};

export const PROJECTS: Project[] = [
  {
    id: "faceid",
    title: "Face ID Login",
    description:
      "Python/Flask ile yüz tanıma tabanlı giriş akışı... (Eğitsel/POC)",
    thumbnail: faceidImg,
    type: "video", // 'image' | 'video'
    mediaSrc: faceidVideo,
    tags: [
      { label: "🎓 Bitirme Projesi", special: true },
      { label: "Flask" },
      { label: "OpenCV" },
      { label: "Face Recognition" },
      { label: "MySQL" },
      { label: "HTML5 & CSS3" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/emre3657/FaceID-Web-App",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce (MVC)",
    description:
      "ASP.NET Core MVC ile deneysel e-ticaret uygulaması... (Eğitsel)",
    thumbnail: ecommerceImg,
    type: "image",
    mediaSrc: ecommerceImg,
    tags: [
      { label: "💼 Staj Projesi", special: true },
      { label: "ASP.NET Core MVC" },
      { label: "EF Core" },
      { label: "SQL Server" },
      { label: "Razor" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/emre3657/E-Commerce-App",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    id: "jobs",
    title: "Jobs API",
    description:
      "Kimlik doğrulamalı iş başvurusu takip API’si... (Canlı demo mevcut, Eğitsel)",
    thumbnail: jobsApiImg,
    type: "image",
    mediaSrc: jobsApiImg,
    tags: [
      { label: "Node.js" },
      { label: "Express" },
      { label: "MongoDB" },
      { label: "JWT" },
    ],
    links: [
      {
        label: "Demo",
        href: "https://jobs-api-fw93.onrender.com",
        iconClass: "fa-solid fa-link",
      },
      {
        label: "GitHub",
        href: "https://github.com/emre3657/Jobs-API",
        iconClass: "fab fa-github",
      },
    ],
  },
];
