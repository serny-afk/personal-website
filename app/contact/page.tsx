import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { buttonClass } from "@/components/button";
import { contact } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="contact"
        title="Contact"
        intro="The best way to reach me is by email — I'm happy to chat."
      />

      <a href={`mailto:${contact.email}`} className={buttonClass("primary")}>
        {contact.email} →
      </a>

      <ul className="mt-10 space-y-3 font-mono text-sm">
        {contact.socials.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              <span className="text-accent">→ </span>
              {s.label.toLowerCase()}
            </a>
          </li>
        ))}
        {contact.resume && (
          <li>
            <a
              href={contact.resume}
              className="text-muted transition-colors hover:text-accent"
            >
              <span className="text-accent">→ </span>
              résumé
            </a>
          </li>
        )}
      </ul>
    </Container>
  );
}
