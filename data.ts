import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { SiJavascript, SiTypescript, SiNestjs, SiNextdotjs, SiTailwindcss, SiFigma, SiNotion, SiPrisma } from 'react-icons/si';

import { IProject, IService, ISkill } from "./types";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Prisma and Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>NestJS</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>CodinGame</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>",
  },
];

export const languages: ISkill[] = [
  {
    Icon: SiJavascript,
    name: "Javascript",
    level: "90",
  },
  {
    Icon: SiTypescript,
    name: "Typescript",
    level: "90",
  },
  {
    Icon: SiNextdotjs,
    name: "NextJS",
    level: "98",
  },
  {
    Icon: SiNestjs,
    name: "NestJS",
    level: "70",
  },
  {
    Icon: SiPrisma,
    name: "Prisma",
    level: "92",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: SiFigma,
    name: "Figma",
    level: "80",
  },
  {
    Icon: SiNotion,
    name: "Notion",
    level: "83",
  }
];

export const projects: IProject[] = [
  { 
    id: 1,
    name: "VSCode Settings",
    description:
      "This repository contains all my vscode settings.",
    image_path: "/images/vscode-settings.png",
    deployed_url: "https://github.com/rodrigofplourenco/vscode-settings",
    github_url: "https://github.com/rodrigofplourenco/vscode-settings",
    category: ["utilities"],
    key_techs: ["MarkDown", "JSON"],
  },
];