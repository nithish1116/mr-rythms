# Arjun Sharma — Music Tutor Landing Page

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        Root layout, fonts (Fraunces + Inter)
  page.tsx           Assembles all page sections
  globals.css        Design tokens & base styles
components/
  ui/                 shadcn/ui primitives (button, card, accordion)
  sections/           Page sections (navbar, hero, marquee, instruments, ...)
lib/
  utils.ts            cn() helper
```

## Sections included

Navbar · Hero · Continuously scrolling features strip · Why Home Tuition ·
Explore Instruments · How It Works · Courses & Pricing · Benefits ·
Meet Your Tutor · Gallery · Testimonials · FAQ · Book Trial CTA · Footer

## The continuous scroll strip

`components/sections/marquee-features.tsx` renders the feature list twice
back-to-back and animates it with a CSS keyframe (`animate-marquee`,
defined in `tailwind.config.ts`) that translates the track from `0%` to
`-50%` on an infinite loop — since the content is duplicated, the loop is
seamless. Hovering pauses it, and `prefers-reduced-motion` is respected
globally in `globals.css`.

## Customizing

- **Colors/fonts**: edit the `ink`, `ivory`, `brass`, `walnut` tokens in
  `tailwind.config.ts`, and the font imports in `app/layout.tsx`.
- **Copy & content**: each section component has its content in a small
  array/object at the top of the file — edit directly there.
- **Images**: instrument/photo areas currently use gradient panels with
  lucide icons as placeholders. Swap in real photos by replacing those
  `<div>` blocks with `next/image`.

## Adding more shadcn/ui components

```bash
npx shadcn@latest add <component-name>
```
