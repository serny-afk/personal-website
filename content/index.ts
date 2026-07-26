/**
 * Content barrel — import site data from a single place:
 *
 *   import { projects, getProject, profile } from "@/content";
 */

export * from "./types";
export { profile, contact } from "./profile";
export { projects } from "./projects";
export { experiences } from "./experience";
export { skillGroups } from "./skills";

import { projects } from "./projects";
import type { Project } from "./types";

/** All projects marked as featured, in declaration order. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Look up a single project by its slug, or undefined if not found. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** All project slugs — used for static generation of detail pages. */
export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
