import type { ReactNode } from "react";

/** Centered content wrapper with consistent max width and horizontal padding. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-3xl px-6 ${className}`}>
      {children}
    </div>
  );
}
