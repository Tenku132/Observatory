# Tenku's Starboard

An interactive pixel-art portfolio. Each star in a hand-placed constellation opens a draggable window containing a section of the portfolio: About, Projects, Skills, Contact, and Credits.

> **Status:** Work in progress. The interaction system is working; most section content is still placeholder text.

## Features

- Constellation drawn from data: star positions and connections live in one file, and the SVG lines update automatically.
- Several windows can be open at once. They can be dragged, stacked (click to bring to front), and closed with a short exit animation.
- Stars are real buttons with visible keyboard focus.
- Pixel-art look using Pxlkit's theme and the Pixelify Sans font.
- Reduced-motion preference is respected for window animations.

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Pxlkit (`@pxlkit/ui-kit`) · Pixelify Sans (Fontsource) · `use-sound` (installed, not used yet)

## Getting Started

Requires Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173/).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
├── components/
│   ├── constellation/   StarMap, Star, ConstellationLines
│   ├── layout/          StarfieldBackground
│   └── windows/         WindowShell + one component per section
├── data/                constellation, projects, skills, credits
├── hooks/               useWindowManager (open/close/drag/stack state)
├── App.tsx
├── index.css
└── main.tsx
public/assets/           backgrounds, icons (and audio later)
```

## Adding or Changing Content

- **Move or add a star:** edit `src/data/constellation.ts`.
- **Edit a section:** edit its file in `src/components/windows/`.
- **Add a project:** add an entry to `src/data/projects.ts`.

## Credits

Libraries and assets are listed in the Credits window of the site: Pxlkit, use-sound, Pixabay sound effects, Space Spheremaps pixel-art starfields, and Pixelify Sans via Fontsource.

## License
MIT. See the `LICENSE` file.