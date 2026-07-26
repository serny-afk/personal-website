"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content";
import { navItems } from "./nav";

/** Sticky top navigation with active-route highlighting. */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight hover:text-accent"
        >
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase()}
        </Link>
        <ul className="flex items-center gap-1 font-mono text-sm">
          {navItems
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 lowercase transition-colors hover:bg-card ${
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={active ? "text-accent" : "text-transparent"}
                    >
                      ▸
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
}
