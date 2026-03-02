export type PersonalInfo = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  availability: "available" | "unavailable";
};

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools & DevOps";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: number;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  bullets: string[];
  tech: string[];
};

export const personalInfo: PersonalInfo = {
  name: "Nishadul Haque",
  role: "Full Stack Developer",
  tagline: "Building Scalable Web Experiences - Frontend to Database",
  location: "Rajbari, Dhaka, Bangladesh",
  email: "nishadisl4m@gmail.com",
  githubUrl: "https://github.com/nish4d",
  linkedinUrl: "https://www.linkedin.com/in/nishad-islam-rip/",
  availability: "available",
};

export const skills: Skill[] = [
  { name: "Next.js", category: "Frontend", level: 88 },
  { name: "React", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 86 },
  { name: "Tailwind CSS", category: "Frontend", level: 88 },
  { name: "Framer Motion", category: "Frontend", level: 76 },

  { name: "Node.js", category: "Backend", level: 84 },
  { name: "Express.js", category: "Backend", level: 82 },
  { name: "REST APIs", category: "Backend", level: 85 },
  { name: "JWT", category: "Backend", level: 78 },

  { name: "MongoDB", category: "Database", level: 86 },
  { name: "Mongoose", category: "Database", level: 80 },
  { name: "NoSQL Design", category: "Database", level: 82 },
  { name: "Aggregation Pipelines", category: "Database", level: 72 },

  { name: "Git", category: "Tools & DevOps", level: 84 },
  { name: "GitHub", category: "Tools & DevOps", level: 86 },
  { name: "Vercel", category: "Tools & DevOps", level: 76 },
  { name: "Postman", category: "Tools & DevOps", level: 78 },
];

export const projects: Project[] = [
  {
    name: "JK Cabinetry CT",
    description:
      "A full-scale e-commerce platform for a Connecticut-based cabinetry business. Features real-time order tracking via Socket.io, Stripe payments, role-based dashboards, and a custom CMS — built for performance and a seamless customer experience.",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "RTK Query", "Shadcn UI"],
    featured: true,
    liveUrl: "https://jkcabinetryct.com/",
  },
  {
    name: "Inventory Pro",
    description:
      "A production-ready inventory management system with real-time stock tracking, supplier management, and detailed analytics dashboards. Built with a type-safe API layer using Zod and MongoDB.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Radix UI", "Zod"],
    liveUrl: "https://inventory-pro-v1.vercel.app/",
    githubUrl: "https://github.com/nish4d/Inventory-Pro",
  },
  {
    name: "Pro Extractor",
    description:
      "A Chrome extension that scrapes Google Maps for business leads — extracting names, addresses, phone numbers, emails, and more at scale. Powered by a Playwright-based scraping backend and a sleek React UI.",
    tags: ["Plasmo", "React", "Playwright", "Express.js"],
    liveUrl: "https://gmap-landing.vercel.app/",
    githubUrl: "https://github.com/nish4d/Gmap-frontend",
    githubBackendUrl: "https://github.com/nish4d/Gmap-backend",
  },
  {
    name: "Sheba Engineering",
    description:
      "Corporate website for a Bangladeshi construction and engineering company. Showcases services, completed projects, and company credentials — built for a professional first impression and easy client outreach.",
    tags: ["Web", "Construction", "Corporate"],
    liveUrl: "https://shebaengineering.com/",
  },
];

export const experiences: Experience[] = [
  {
    company: "Clipping Next",
    role: "Full-Stack Developer",
    location: "Adabor, Dhaka, Bangladesh",
    dateRange: "February 2025 - Present",
    bullets: [
      "Built scalable RESTful APIs and real-time applications using Node.js, Express.js, and Socket.io.",
      "Integrated Stripe payment gateway and implemented JWT authentication for secure transactions.",
      "Optimized database queries and application performance using Redis caching strategies.",
      "Maintained strong client relationships with positive feedback.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "Stripe",
      "JWT",
      "Redis",
      "MongoDB",
    ],
  },
  {
    company: "Wedgefort",
    role: "Frontend Developer",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    dateRange: "January 2023 - June 2024",
    bullets: [
      "Delivered 10+ client projects using React.js and Next.js with responsive design.",
      "Integrated RESTful APIs and implemented state management using Redux Toolkit.",
      "Created engaging user interfaces with Tailwind CSS and Ant Design.",
    ],
    tech: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
];
