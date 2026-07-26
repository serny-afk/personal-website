import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Tag } from "@/components/tag";
import { skillGroups } from "@/content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies and tools I work with.",
};

export default function SkillsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="skills"
        title="Skills"
        intro="Technologies and tools I work with."
      />
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <section key={group.category}>
            <h2 className="mb-4 font-mono text-sm text-muted">
              <span className="text-accent"># </span>
              {group.category.toLowerCase()}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
