# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, defaults to port 5173)
- **Build:** `npm run build` (output to `dist/`)
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint`

## Architecture

Single-page React portfolio website using Vite as build tool.

**Stack:** React 19 + Vite 8 + Tailwind CSS 4 + Framer Motion 12 + React Icons

**Key patterns:**
- All content data lives in `src/constants/index.js` — projects, experience, education, skills, certifications, awards, contact info, and social links are exported as constants. To update portfolio content, edit this file only.
- Components in `src/components/` are section-based (Hero, About, Experience, Projects, Skills, Education, Contact) and composed in `App.jsx` as `<section id="...">` blocks for anchor-link navigation.
- Navbar uses native `<a href="#section">` links with CSS `scroll-behavior: smooth` — no routing library needed.
- Styling uses Tailwind CSS 4 with CSS-first configuration via `@theme` in `src/index.css` — custom color tokens (`surface`, `accent-teal`, `accent-amber`, `text-primary/secondary/muted`) and font families (`font-display` = Syne, `font-body` = DM Sans, `font-mono` = JetBrains Mono). No `tailwind.config.js` — Tailwind 4 uses the Vite plugin (`@tailwindcss/vite`).
- Reusable visual patterns: `.glow-card` (hover glow via CSS custom properties `--mouse-x`/`--mouse-y`), `.gradient-text`, `.timeline-line`, `.dot-grid` background — all defined in `src/index.css`.
- Framer Motion `whileInView` is used on most sections for scroll-triggered animations.
- Fonts loaded via Google Fonts in `index.html` — not bundled.
