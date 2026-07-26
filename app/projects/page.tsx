import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="projects"
        title="Projects"
        intro="Things I've built and experimented with."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
