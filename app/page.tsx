import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { HeroTerminal } from "@/components/hero-terminal";
import { Reveal } from "@/components/reveal";
import { getFeaturedProjects, profile } from "@/content";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <Container>
      <HeroTerminal />

      {/* About — the human voice, in sans. */}
      <section className="max-w-2xl space-y-4 text-lg leading-8 text-muted">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-mono text-sm text-muted">
              <span className="text-accent">~/</span>featured
            </h2>
            <span aria-hidden className="h-px flex-1 bg-border" />
            <Link
              href="/projects"
              className="shrink-0 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
