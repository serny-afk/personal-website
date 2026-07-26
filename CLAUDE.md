@AGENTS.md

# Personal Website — Project Scope

A personal portfolio site to showcase projects, experience, and skills. The
long-term ambition is an **interesting, game-like frontend experience**; the
near-term goal is a **solid, shippable content foundation** that the game layer
can be built on top of later.

## Guiding principle: content is decoupled from presentation

There is **one source of truth for content** (typed data), and one or more ways
to present it. Today that's a normal accessible website. Later it may also be a
game-like experience. Neither presentation owns the data.

```
  content/data  ──►  classic site (built now)
        └──────────►  game experience (future, optional)
```

Any feature we build should respect this split: never hard-code portfolio
content inside a component or a game scene. Read it from the shared data layer.

## Tech stack

- **Next.js 16** (App Router) + **React 19** — ⚠️ this is a modified Next.js
  with breaking changes; read `node_modules/next/dist/docs/` before writing
  framework code (see `AGENTS.md`).
- **TypeScript** (strict).
- **Tailwind CSS v4** (config-in-CSS via `@theme`, see `app/globals.css`).
- Path alias `@/*` → project root.

## Content model (source of truth)

Typed data lives in a dedicated `content/` (or `data/`) layer, exported as
strongly-typed TS so both presentations consume the same shapes.

- **Projects** — title, summary, description, tech/tags, links (repo/live),
  media, date, featured flag.
- **Experience** — role, org, dates, location, highlights.
- **Skills** — grouped by category, optional proficiency level.
- **About** — bio/intro, photo.
- **Contact** — email, socials, resume download.

## Site structure (Phase 1 — build now)

A normal, responsive, accessible portfolio. Must fully work with no game code.

- Global layout: nav, footer, dark mode (system-aware, already scaffolded).
- Sections/routes: Home/About, Projects (+ project detail), Experience,
  Skills, Contact.
- Responsive + accessible (keyboard nav, semantic HTML, good contrast).
- SEO metadata per route.

## Game layer (Phase 2 — deferred, direction open)

Not decided yet. Current leaning: a **top-down explorable experience**, possibly
**low-poly 3D** or **2D game assets**. It will be an *alternate presentation* of
the same content — e.g. walking into zones/rooms that surface projects and
experience. Kept optional so the site always ships without it.

Decisions still to make: 2D vs 3D, art style/assets, engine/library, and whether
it's the default landing experience or an opt-in mode.

## Working conventions

- Build the base site to stand on its own before any game work.
- Keep content out of components — read from the data layer.
- Prefer progressive enhancement: the game is additive, never a hard dependency.
- Follow `AGENTS.md`: consult the bundled Next.js docs before framework code.
