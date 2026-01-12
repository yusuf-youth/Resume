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
    name: "GitHub",
    url: "https://github.com/yusuf-youth",
    title: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ramil-bayramov-b3736420a/",
    title: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    name: "iCloud",
    url: "mailto:youclaim@icloud.com",
    title: "iCloud",
    icon: <MailIcon />,
  },
  {
    name: "Telegram",
    url: "https://t.me/dotcome1",
    title: "Telegram",
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
  },
  {
    imageSrc: scssImage,
    imageAlt: "SCSS",
    key: "SCSS",
  },
  {
    imageSrc: jsImage,
    imageAlt: "JS",
    key: "JS",
  },
  {
    imageSrc: reactImage,
    imageAlt: "React",
    key: "React",
  },
  {
    imageSrc: structureImage,
    imageAlt: "Folder structure",
    key: "FolderStructure",
  },
];

export const FLOATING_NAV_ITEMS = [
  {
    href: "#home",
    icon: <HomeIcon />,
    activeIcon: <HomeFillIcon />,
    titleKey: "home",
    isActive: true,
  },
  {
    href: "#aboutMe",
    icon: <PersonIcon />,
    activeIcon: <PersonFillIcon />,
    titleKey: "aboutMe",
  },
  {
    href: "#technologies",
    icon: <CodeIcon />,
    activeIcon: <CodeFillIcon />,
    titleKey: "technologies",
  },
  {
    href: "#projects",
    icon: <SuitCaseIcon />,
    activeIcon: <SuitCaseFillIcon />,
    titleKey: "projects",
  },
  {
    href: "#services",
    icon: <PalleteIcon />,
    activeIcon: <PalleteFillIcon />,
    titleKey: "services",
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
  buttonDarkBordered: "button--dark-bordered"
};
