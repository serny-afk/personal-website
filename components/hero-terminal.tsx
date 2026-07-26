"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/content";
import { buttonClass } from "./button";

const COMMAND = "whoami";

/**
 * The hero as a shell session: a prompt types `whoami` on load, then the
 * identity block prints in. One orchestrated motion moment; everything else
 * on the site stays quiet. Reduced-motion users get the final state at once.
 */
export function HeroTerminal() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setTyped(COMMAND);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) window.clearInterval(id);
    }, 95);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="py-10 sm:py-16">
      {/* Prompt line — the system asking. */}
      <p className="font-mono text-sm">
        <span className="text-accent">~/serny</span>
        <span className="text-muted"> $ </span>
        <span>{typed}</span>
        <span
          aria-hidden
          className="ml-0.5 inline-block h-4 w-[0.5rem] translate-y-[0.15rem] bg-accent animate-blink"
        />
      </p>

      {/* Output — the system answering. */}
      <div className="mt-7">
        <h1
          className="animate-rise font-mono text-5xl font-bold tracking-tight sm:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.name}
          <span className="text-accent">.</span>
        </h1>
        <p
          className="animate-rise mt-3 font-mono text-sm text-muted"
          style={{ animationDelay: "0.25s" }}
        >
          {profile.title}
          {profile.location ? ` · ${profile.location}` : ""}
        </p>
        <p
          className="animate-rise mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl"
          style={{ animationDelay: "0.35s" }}
        >
          {profile.tagline}
        </p>
        <div
          className="animate-rise mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: "0.45s" }}
        >
          <Link href="/projects" className={buttonClass("primary")}>
            view work →
          </Link>
          <Link href="/contact" className={buttonClass("secondary")}>
            get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
