import type { SkillGroup } from "./types";

// ─── Group your skills by category ──────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Figma", "Linux"],
  },
];
