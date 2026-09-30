# ByteSpace

Landing page, login and signup pages for **ByteSpace**, an online course platform, built from the provided Figma design.

**Live demo:** _add your Vercel link here_

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for `/`, `/login` and `/signup`
- Plain CSS with design tokens (CSS custom properties), one stylesheet per component
- Deployed on [Vercel](https://vercel.com/)

## Features

- Full landing page: hero with search, partner strip, course catalogue, learning paths, growth stats, creator section, call to action, testimonials and footer
- **Working course search**: the hero search bar filters the course grid and scrolls to it
- **Category filter**: pills filter courses by category; "+ More" reveals extra categories
- Login and signup pages with client-side validation and accessible error messages
- Responsive from 360px phones up to large desktops (collapsible mobile menu)
- Accessibility basics: semantic landmarks, labelled inputs, `aria-expanded` / `aria-pressed` states, visible focus rings, reduced-motion support

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # serve the production build locally
```

## Project structure

```
src/
├── components/   Reusable UI: Button, CourseCard, AvatarStack, StatCards, Navbar, Footer, FormField, AuthLayout…
├── sections/     Landing page sections: Hero, Discover, LearningPaths, Growth, CreateManage, CreatorCTA…
├── pages/        Route-level pages: Landing, Login, Signup
├── data/         Static content (courses, testimonials, footer links, image paths)
├── hooks/        useAuthForm (shared form state + validation), useSvgId
├── utils/        Validation rules
└── styles/       global.css — design tokens, reset, layout helpers
```

**Design decisions**

- **Content lives in `src/data`** and components only render it, so copy changes don't touch markup.
- **The Figma design system lives in `global.css` as tokens.** That covers the full Neutral / Primary / Secondary palettes, the Poppins (headings) + Satoshi (body/labels) type scale, and the 12-column grid (1200px container, 40px gutter). Components only use semantic tokens like `--blue`, `--text-m` and `--gutter`.
- **Reuse over duplication**: `CourseCard` appears in the catalogue, the growth section and the auth pages. `StatCards` (progress, happy students, revenue) are reused across the hero, creator section and auth pages. `AuthLayout` plus `useAuthForm` give Login and Signup the same shell and form logic.
- **`vercel.json` rewrites** send every path to `index.html`, so reloading `/login` on Vercel doesn't return a 404.

## Assets

Image paths are centralised in `src/data/images.js`. To swap in final artwork, put the files in `public/images/` and update the paths there.

## Possible next steps

- Connect login/signup to a real auth provider
- Add component tests (Vitest + React Testing Library)
- Migrate to TypeScript
