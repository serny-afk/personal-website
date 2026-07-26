/** Page title with a shell-path eyebrow + optional intro, atop each page. */
export function PageHeader({
  title,
  intro,
  eyebrow,
}: {
  title: string;
  intro?: string;
  /** Shell path shown before the title, e.g. "projects" → "~/projects". */
  eyebrow?: string;
}) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">~/</span>
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
    </div>
  );
}
