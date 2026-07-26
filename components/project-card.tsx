import Link from "next/link";
import type { Project } from "@/content";
import { Tag } from "./tag";

/** Card linking to a project's detail page, styled as a terminal listing entry. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-mono text-base font-semibold tracking-tight group-hover:text-accent">
          <span className="text-accent">▸ </span>
          {project.title}
        </h3>
        {project.period && (
          <span className="shrink-0 font-mono text-xs text-muted">
            {project.period}
          </span>
        )}
      </div>

      <p className="mt-2.5 flex-1 text-sm leading-6 text-muted">
        {project.summary}
      </p>

      {project.tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      <span
        aria-hidden
        className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors group-hover:text-accent"
      >
        cd ./{project.slug}
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
