import React from "react";
import {
  CodeFillIcon,
  CodeIcon,
  CSSIcon,
  GitHubIcon,
  HomeFillIcon,
  HomeIcon,
  HTMLIcon,
  ICloudIcon,
  JSIcon,
  LinkedInIcon,
  MailIcon,
  PalleteFillIcon,
  PalleteIcon,
  PersonFillIcon,
  PersonIcon,
  ReactIcon,
  ReactRouterDOMIcon,
  SCSSIcon,
  SuitCaseFillIcon,
  SuitCaseIcon,
  TelegramIcon,
  TSIcon,
} from "./icons";

import {
  architectVideo,
  focusifyVideo,
  magazineVideo,
  mintlifyVideo,
  tasksVideo,
  architectPoster,
  focusifyPoster,
  magazinePoster,
  mintlifyPoster,
  tasksPoster,
  htmlImage,
  scssImage,
  jsImage,
  reactImage,
  structureImage,
  dashboardPoster,
  dashboardVideo,
} from "./sources";

export const SOCIALS = [
  {
    url: "https://github.com/yusuf-youth",
    accessibilityText: () => "GitHub",
    icon: <GitHubIcon />,
  },
  {
    url: "https://www.linkedin.com/in/ramil-bayramov-b3736420a/",
    accessibilityText: () => "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    url: "mailto:youclaim@icloud.com",
    accessibilityText: (isEN) => (isEN ? "Mail" : "Пошта"),
    icon: <MailIcon />,
  },
  {
    url: "https://t.me/dotcome1",
    accessibilityText: () => "Telegram",
    icon: <TelegramIcon />,
  },
];

export const TECHNOLOGIES = [
  {
    label: "HTML",
    icon: <HTMLIcon />,
    delay: 500,
    modifierClass: "tech-card--html",
  },
  {
    label: "CSS",
    icon: <CSSIcon />,
    delay: 750,
    modifierClass: "tech-card--css",
  },
  {
    label: "SCSS",
    icon: <SCSSIcon />,
    delay: 950,
    modifierClass: "tech-card--scss",
  },
  {
    label: "JS",
    icon: <JSIcon />,
    delay: 1150,
    modifierClass: "tech-card--js",
  },
  {
    label: "TS",
    icon: <TSIcon />,
    delay: 1350,
    modifierClass: "tech-card--ts",
  },
  {
    label: "React",
    icon: <ReactIcon />,
    delay: 1550,
    modifierClass: "tech-card--react",
  },
  {
    label: "React Router DOM",
    icon: <ReactRouterDOMIcon />,
    delay: 1050,
    modifierClass: "tech-card--",
  },
];

export const PROJECTS = [
  {
    videoSrc: mintlifyVideo,
    poster: mintlifyPoster,
    delay: 400,
  },
  {
    videoSrc: architectVideo,
    poster: architectPoster,
    delay: 550,
  },
  {
    videoSrc: tasksVideo,
    poster: tasksPoster,
    delay: 750,
  },
  {
    videoSrc: magazineVideo,
    poster: magazinePoster,
    delay: 400,
  },
  {
    videoSrc: dashboardVideo,
    poster: dashboardPoster,
    delay: 550,
  },
  {
    videoSrc: focusifyVideo,
    poster: focusifyPoster,
    delay: 750,
  },
];

export const SERVICES = [
  {
    imageSrc: htmlImage,
    imageAlt: "HTML",
    key: "HTML",
    title: (isEN) => (isEN ? "Semantic" : "Семантичний"),
    highlightedText: () => "HTML",
    description: (isEN) =>
      isEN
        ? "Semantic. Accessible. To all users."
        : "Семантичний. Доступний. Для всіх користувачів.",
    modifierClass: "service-card__highlighted-text--orange",
  },
  {
    imageSrc: scssImage,
    imageAlt: "SCSS",
    key: "SCSS",
    title: (isEN) => (isEN ? "Modular" : "Модульна"),
    highlightedText: () => "SCSS",
    description: (isEN) =>
      isEN
        ? "Clean. Modular. The DRY principle."
        : "Чисто. Модульно. Принцип DRY.",
    modifierClass: "service-card__highlighted-text--purple",
  },
  {
    imageSrc: jsImage,
    imageAlt: "JS",
    key: "JS",
    title: (isEN) => (isEN ? "Robust" : "Надійний"),
    highlightedText: () => "JS",
    description: (isEN) =>
      isEN
        ? "Robust. Modern. Ensured code maintainability."
        : "Надійний. Сучасний. Гарантована підтримка коду.",
    modifierClass: "service-card__highlighted-text--red",
  },
  {
    imageSrc: reactImage,
    imageAlt: "React",
    key: "React",
    title: (isEN) => (isEN ? "Efficient" : "Ефективний"),
    highlightedText: () => "React",
    description: (isEN) =>
      isEN
        ? "Reusable. Testable. Encapsulated logic and UI."
        : "Багаторазовий. Тестований. Інкапсульована логіка та інтерфейс користувача.",
    modifierClass: "service-card__highlighted-text--blue",
  },
  {
    imageSrc: structureImage,
    imageAlt: "Folder structure",
    key: "FolderStructure",
    title: (isEN) => (isEN ? "Organized" : "Організована"),
    highlightedText: (isEN) => (isEN ? "Structure" : "структура"),
    description: (isEN) =>
      isEN
        ? "Structured. Scalable. No room for mess."
        : "Структурований. Масштабований. Немає місця для безладу.",
    modifierClass: "service-card__highlighted-text--green",
  },
];

export const NAV_ITEMS = [
  {
    href: "#home",
    icon: <HomeIcon />,
    activeIcon: <HomeFillIcon />,
    titleKey: "home",
    isActive: true,
    accessibilityText: (isEN) => (isEN ? "Home" : "Головна"),
  },
  {
    href: "#aboutMe",
    icon: <PersonIcon />,
    activeIcon: <PersonFillIcon />,
    titleKey: "aboutMe",
    accessibilityText: (isEN) => (isEN ? "About Me" : "Про мене"),
  },
  {
    href: "#technologies",
    icon: <CodeIcon />,
    activeIcon: <CodeFillIcon />,
    titleKey: "technologies",
    accessibilityText: (isEN) => (isEN ? "Technologies" : "Технології"),
  },
  {
    href: "#projects",
    icon: <SuitCaseIcon />,
    activeIcon: <SuitCaseFillIcon />,
    titleKey: "projects",
    accessibilityText: (isEN) => (isEN ? "Projects" : "Проєкти"),
  },
  {
    href: "#services",
    icon: <PalleteIcon />,
    activeIcon: <PalleteFillIcon />,
    titleKey: "services",
    accessibilityText: (isEN) => (isEN ? "What I Offer" : "Що я пропоную"),
  },
];

export const TEXTS = {
  HOME: "home",
  ABOUT_ME: "aboutMe",
  TECHNOLOGIES: "technologies",
  PROJECTS: "projects",
  SERVICES: "services",
  FLOATING_NAV: "floatingNav",
  SWITCH_BUTTON: "switchButton",
  VIDEO_BUTTON: "videoButton",
};

export const CLASS_STATES = {
  isActive: "is-active",
  isPlaying: "is-playing",
  buttonDark: "button--dark",
  buttonDarkBordered: "button--dark-bordered",
};
