import { contact, profile } from "@/content";
import { Container } from "./container";

export function SiteFooter() {
  const year = 2026; // update as needed

  return (
    <footer className="mt-24 border-t border-border py-6 font-mono text-xs text-muted">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
          />
          {profile.location ?? "online"}
          <span className="text-muted/60">
            · © {year} {profile.name.toLowerCase()}
          </span>
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="lowercase transition-colors hover:text-accent"
            >
              email
            </a>
          </li>
          {contact.socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lowercase transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
