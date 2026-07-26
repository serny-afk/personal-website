/**
 * Shared content types — the single source of truth for the site's data.
 *
 * Presentation layers (the classic site now, a game experience later) both
 * consume these shapes. Never hard-code portfolio content in a component;
 * add it here and read it from the data modules.
 */

export interface Profile {
  /** Full name, shown in the header and hero. */
  name: string;
  /** Short role/title, e.g. "Software Engineer". */
  title: string;
  /** One-line tagline for hero + metadata description. */
  tagline: string;
  /** Longer bio paragraphs for the About section. */
  bio: string[];
  /** Optional path to an avatar image in /public. */
  avatar?: string;
  location?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Contact {
  email: string;
  /** Optional path to a downloadable resume in /public. */
  resume?: string;
  socials: SocialLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** URL-safe identifier used for the detail route (/projects/[slug]). */
  slug: string;
  title: string;
  /** One-line summary for cards and lists. */
  summary: string;
  /** Full description paragraphs for the detail page. */
  description: string[];
  /** Technologies / tools used. */
  tech: string[];
  /** External links (repo, live demo, writeup, ...). */
  links: ProjectLink[];
  /** Optional cover image path in /public. */
  image?: string;
  /** Display year or range, e.g. "2025" or "2024–2025". */
  period?: string;
  /** Featured projects surface on the home page. */
  featured?: boolean;
}

export interface Experience {
  role: string;
  organization: string;
  /** e.g. "Jan 2024" */
  startDate: string;
  /** e.g. "Present" */
  endDate: string;
  location?: string;
  /** Bullet-point accomplishments. */
  highlights: string[];
  tech?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
