# Observatory

![CI](https://github.com/Tenku132/Observatory/actions/workflows/ci.yml/badge.svg)

An interactive pixel-art portfolio. Each star in a hand-placed constellation opens a draggable window containing a section of the portfolio: About, Projects, Skills, Contact, and Credits.

> **Status:** Work in progress. The interaction system and all section content are in place. An animated starfield background, window focus management, and a mobile window layout are planned.

## Features

- Constellation drawn from data: star positions and connections live in one file, and the SVG lines update automatically.
- Several windows can be open at once. They can be dragged, stacked (click to bring to front), and closed with a short exit animation.
- Stars are real buttons with visible keyboard focus.
- Windows are labelled dialogs, scrollable content is keyboard-focusable, and external links announce that they open in a new tab.
- Pixel-art look using Pxlkit's theme and the Pixelify Sans font.
- Reduced-motion preference is respected for window animations.
- Real content: an About window with photo, case-study style Projects, grouped Skills, and Contact links.
- Lighthouse scores of 99 to 100 in every category on desktop and mobile (measured on the production preview).

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Pxlkit (`@pxlkit/ui-kit`) · Pixelify Sans (Fontsource) · `use-sound` (installed, not used yet)

Tooling: Vitest · Testing Library · ESLint (including accessibility rules) · Prettier · GitHub Actions · Dependabot

## Getting Started

Requires Node.js 22.12.0+ and npm.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173/).

| Script                 | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the development server                        |
| `npm run build`        | Type-check and create a production build in `dist/` |
| `npm run preview`      | Preview the production build locally                |
| `npm run lint`         | Run ESLint                                          |
| `npm run format`       | Format all files with Prettier                      |
| `npm run format:check` | Check formatting without changing files             |
| `npm test`             | Run the unit tests once                             |
| `npm run test:watch`   | Re-run tests as files change                        |

## Quality Checks

Before pushing, run:

```bash
npm run format && npm run lint && npm test && npm run build
```

GitHub Actions runs the same checks (lint, format check, tests, build) on every push to `main` and on every pull request. Dependabot opens weekly pull requests for npm updates and monthly ones for GitHub Actions updates, so CI verifies each one before it is merged.

## Branching and Workflow

- `main` is the stable backup and is only updated from `dev` when a milestone is solid.
- `dev` is the integration branch. Feature branches (`feat/*`, `chore/*`, `refactor/*`, `perf/*`) are merged into it by pull request.
- GitHub Actions runs on every pull request and on pushes to the integration branches, and Dependabot opens its update pull requests against `dev`.

## Project Structure

```text
src/
├── components/
│   ├── constellation/   StarMap, Star, ConstellationLines
│   ├── layout/          StarfieldBackground
│   ├── ui/              Shared pieces: Card, ExternalLink
│   └── windows/         WindowShell, windowLayout (sizes), one component per section
├── data/                constellation, profile, projects, skills, credits
├── hooks/               useWindowManager (open/close/drag/stack state) + tests
├── App.tsx
├── index.css            Global styles and color tokens (@theme)
└── main.tsx
public/assets/           backgrounds, icons (and audio later)
.github/                 CI workflow and Dependabot configuration
```

## Adding or Changing Content

- **Name, title, stack, photo, or contact links:** edit `src/data/profile.ts`. The SEO tags in `index.html` are static, so update them there too.
- **Profile photo:** replace `public/assets/icons/Gradpic.webp` (a square WebP, about 256×256 pixels, keeps the page fast).
- **Add a project:** add an entry to `src/data/projects.ts` with an id, title, role, period, description, highlights, and technologies. The note, repository, and live demo link are optional.
- **Edit skills:** edit the groups in `src/data/skills.ts`.
- **Move or add a star:** edit `src/data/constellation.ts`, then add its window content in `windowContent.tsx`.
- **Change theme colors:** edit the `@theme` block in `src/index.css`.
- **Change window size:** edit `src/components/windows/windowLayout.ts`.

## Credits

Libraries and assets are listed in the Credits window of the site: Pxlkit, use-sound, Pixabay sound effects, Space Spheremaps pixel-art starfields, and Pixelify Sans via Fontsource.

## License

MIT. See the `LICENSE` file.
