/**
 * Shared button styling for the CLI/terminal look. Returns a className string so
 * it works on both `<Link>` (internal) and `<a>` (external / mailto) elements.
 */
export type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-2.5 " +
  "font-mono text-sm font-medium transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border text-foreground hover:border-accent hover:text-accent",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  className = "",
): string {
  return `${base} ${variants[variant]} ${className}`.trim();
}
