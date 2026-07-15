# Yman Fernandez — Portfolio

Personal portfolio for a Computer Science graduate (Data Science track). A
proof-of-skill site built around deep project case studies, with a content model
designed to absorb new projects without a redesign.

Design & build plan: see the [portfolio build plan](https://claude.ai/code/artifact/38420c79-6426-4259-a7ad-5704b19a99dd).

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** with a token-based, theme-aware design system
- Fonts via `next/font` — Source Serif 4 (headings), Public Sans (body), IBM Plex Mono (labels/data)
- Deploy target: Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Project structure

```
app/
  layout.tsx      root layout — fonts, metadata, no-flash theme, nav + footer
  page.tsx        home page
  globals.css     design tokens (both themes) + base styles
components/
  nav.tsx         sticky header with responsive menu + theme toggle
  footer.tsx      site footer
  theme-toggle.tsx  light/dark toggle (persists to localStorage)
lib/
  site.ts         central config: name, role, email, socials, nav
```

## Design system

Colors, typography, and layout are driven by CSS custom properties defined in
[`app/globals.css`](app/globals.css) and exposed to Tailwind via `@theme inline`,
so utilities like `bg-paper` / `text-ink` respond live to the active theme.

- **Light is the default**; `@media (prefers-color-scheme: dark)` follows the OS.
- A manual toggle stamps `data-theme="light|dark"` on `<html>` and wins over the OS setting.
- Palette: warm-paper ground with a single restrained pine/teal accent.

## Customizing

Edit [`lib/site.ts`](lib/site.ts) once to update your name, role, email, and
social links across the whole site.

## Roadmap

- [x] **Step 1** — Foundation: scaffold, design system, theme toggle, shared shell
- [ ] **Step 2** — Home page
- [ ] **Step 3** — Projects index + MDX case-study template
- [ ] **Step 4** — About, Resume, Contact
- [ ] **Step 5** — Polish: SEO, accessibility, performance
