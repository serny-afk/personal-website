import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Tag } from "@/components/tag";
import { experiences } from "@/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles and work history.",
};

export default function ExperiencePage() {
  return (
    <Container>
      <PageHeader
        eyebrow="experience"
        title="Experience"
        intro="Where I've worked and what I did."
      />
      <ol className="space-y-10 border-l border-border pl-6">
        {experiences.map((exp, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h2 className="font-mono text-base font-semibold tracking-tight">
                {exp.role}{" "}
                <span className="font-normal text-muted">
                  · {exp.organization}
                </span>
              </h2>
              <span className="font-mono text-xs text-muted">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            {exp.location && (
              <p className="mt-0.5 text-sm text-muted">{exp.location}</p>
            )}
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted marker:text-accent">
              {exp.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            {exp.tech && exp.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Container>
  );
}
