import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Specialist",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Socket.IO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Odoo ERP Developer & Python Engineer",
    company_name: "Enterprise ERP Systems",
    icon: "/img/odoo.png",
    iconBg: "#ffffff",
    date: "May 2024 - February 2026",
    points: [
      "Custom-built and scaled modular Odoo ERP business suites (CRM, HR/Payroll, Accounting, and Inventory) to streamline enterprise workflows.",
      "Developed custom Python-based backend controllers, server actions, and automated workflows integrated with PostgreSQL databases.",
      "Optimized query speeds, indexing, and complex DB schema migrations, significantly boosting data retrieval performance for dashboards.",
      "Configured robust XML-RPC interfaces and secure Webhook APIs to synchronize ERP transactional data with third-party web apps.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company_name: "Fly Tech Suite",
    icon: "/img/flyvisa.png",
    iconBg: "#ffffff",
    date: "March 2026 - Present",
    points: [
        "Fly Visa: Built a NestJS, React, and PostgreSQL system on Railway for 13+ staff, automating attendance, payroll, and 160+ customer CRM pipelines.",
        "Fly Academic: Engineered Python/FastAPI microservices running Whisper STT & digital signal processing for automated PTE speaking assessments with robust fallback mechanisms.",
        "Fly Immigration: Developed and launched an international public job directory using React and TypeScript, tracking ~300+ visitor applications.",
        "Mobile Applications: Built and compiled cross-platform Android application bundles using React Native and Capacitor for internal testing phases.",
      ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Fly Visa System",
    description:
      "Enterprise internal operations platform featuring daily attendance, customer verification, automated CRM pipelines, and custom HR payroll compute. Built with NestJS, React, and Google Cloud Storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
    ],
    image: "./img/fly-system.png", 
    source_code_link: "https://github.com/HuynhHoangvu/Fly-Visa-System",
    live_link: "https://flyvisa.up.railway.app",
  },
  {
    name: "Fly Immigration",
    description:
      "High-traffic corporate web portal for international recruitment and overseas service routing. Provides dynamic job board management, resume application forms, and optimized responsive layouts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "./img/fly-immigration.png", 
    source_code_link: "https://github.com/HuynhHoangvu/Fly-labour",
    live_link: "https://flyimmigration.vn/",
  },
  {
    name: "Fly PTE Prep Platform",
    description:
      "A complete PTE training system integrating an automated speaking & writing AI scorer backend. Features resilient signal processing pipeline (librosa/Whisper) with zero-failure JSON fallback parsing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "capacitor",
        color: "orange-text-gradient",
      },
    ],
    image: "./img/fly-academic.png", 
    source_code_link: "https://github.com/HuynhHoangvu/Fly_PTE",
    live_link: "https://flypte.up.railway.app/dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
