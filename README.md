# Observatory

![CI](https://github.com/Tenku132/Observatory/actions/workflows/ci.yml/badge.svg)

An interactive pixel-art portfolio. Each star in a hand-placed constellation opens a draggable window containing a section of the portfolio: About, Projects, Skills, Contact, and Credits.

> **Status:** Work in progress. The interaction system is working; most section content is still placeholder text.

## Features

- Constellation drawn from data: star positions and connections live in one file, and the SVG lines update automatically.
- Several windows can be open at once. They can be dragged, stacked (click to bring to front), and closed with a short exit animation.
- Stars are real buttons with visible keyboard focus.
- Windows are labelled dialogs, scrollable content is keyboard-focusable, and external links announce that they open in a new tab.
- Pixel-art look using Pxlkit's theme and the Pixelify Sans font.
- Reduced-motion preference is respected for window animations.

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

- **Change your name, title, or stack:** edit `src/data/profile.ts`. The SEO tags in `index.html` are static, so update them there too.
- **Move or add a star:** edit `src/data/constellation.ts`.
- **Edit a section:** edit its file in `src/components/windows/`.
- **Add a project:** add an entry to `src/data/projects.ts`.
- **Change theme colors:** edit the `@theme` block in `src/index.css`.
- **Change window size:** edit `src/components/windows/windowLayout.ts`.

## Credits

Libraries and assets are listed in the Credits window of the site: Pxlkit, use-sound, Pixabay sound effects, Space Spheremaps pixel-art starfields, and Pixelify Sans via Fontsource.

## License

MIT. See the `LICENSE` file.
