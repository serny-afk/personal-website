import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Tag } from "@/components/tag";
import { buttonClass } from "@/components/button";
import { getProject, getProjectSlugs } from "@/content";

/** Pre-render a static page for every project at build time. */
export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <Container>
      <Link
        href="/projects"
        className="font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        cd ../projects
      </Link>

      <header className="mt-8">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
            <span className="text-accent">.</span>
          </h1>
          {project.period && (
            <span className="shrink-0 font-mono text-sm text-muted">
              {project.period}
            </span>
          )}
        </div>
        <p className="mt-4 text-xl text-muted">{project.summary}</p>
      </header>

      {project.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      <div className="mt-10 max-w-2xl space-y-4 text-lg leading-8">
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass(i === 0 ? "primary" : "secondary")}
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </Container>
  );
}
