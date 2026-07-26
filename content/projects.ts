import type { Project } from "./types";

// ─── Add your projects here ─────────────────────────────────────────────────
// Order matters: projects appear in this order. Mark `featured: true` to
// surface a project on the home page.

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Website",
    summary: "This site — an experiment in a game-like portfolio experience.",
    description: [
      "A personal portfolio built with Next.js and React, designed from the " +
        "start to separate content from presentation so the same data can " +
        "power both a classic website and a future interactive game layer.",
      "Built with the App Router, TypeScript, and Tailwind CSS.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Source", href: "https://github.com/serny-afk" },
    ],
    period: "2026",
    featured: true,
  },
  {
    slug: "example-project",
    title: "Example Project",
    summary: "A placeholder project — replace me with something real.",
    description: [
      "Describe what the project does, the problem it solves, and your role.",
      "Add a second paragraph for technical details, challenges, or outcomes.",
    ],
    tech: ["TypeScript", "Node.js"],
    links: [
      { label: "Repo", href: "https://github.com/serny-afk" },
      { label: "Live", href: "#" },
    ],
    period: "2025",
    featured: true,
  },
];
