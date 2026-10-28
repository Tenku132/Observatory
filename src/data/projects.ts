export interface Project {
  id: string
  title: string
  role: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
  note?: string
  repository?: string
  liveUrl?: string
}

// @doc PROJECT-DATA
export const projects: Project[] = [
  {
    id: 'logistics-platform',
    title: 'Logistics Platform',
    role: 'Web Developer Intern, Lamina Studios (Thumbworx)',
    period: 'Apr 2026 – Jun 2026',
    description:
      'Contributed back-end and front-end features to a logistics platform used by several types of users.',
    highlights: [
      'Built a settings module where different user roles manage company-level settings in one interface.',
      'Implemented role-based access control with server-side validation, authorization policies, and an audit trail of changes.',
      'Developed dashboard UI for analytics and reporting.',
      'Helped with a layout overhaul and fixed navigation compatibility issues.',
      'Delivered work through feature branches and peer-reviewed pull requests.',
    ],
    technologies: ['Laravel', 'React', 'TypeScript', 'GitHub'],
    note: 'The codebase is private and covered by an NDA, so details are kept general and there is no public repository.',
  },
  {
    id: 'nutriapp',
    title: 'NutriApp',
    role: 'Co-Lead Developer (back-end), FEU Alabang capstone',
    period: 'Feb 2025 – Jun 2025',
    description:
      'A web and Android marketplace that lets smallholder farmers in CALABARZON sell directly to buyers without middlemen.',
    highlights: [
      'Built back-end features for multi-role access, messaging, push notifications, and analytics.',
      'Co-led a four-person team, owning the back-end and contributing to front-end screens.',
      'Planned the project with Agile iterations, Figma designs, an ERD, and data flow diagrams.',
      'Wrote unit and integration tests.',
    ],
    technologies: [
      'Laravel',
      'Laravel Sanctum',
      'MySQL',
      'Firebase Cloud Messaging',
    ],
    note: 'I’m planning a cleaned-up and improved version. The repository link will be added once it is ready.',
  },
  {
    id: 'observatory',
    title: 'Observatory (this portfolio)',
    role: 'Solo developer',
    period: 'In progress',
    description:
      'An interactive pixel-art portfolio where each star in a constellation opens a draggable window.',
    highlights: [
      'Built a custom window manager (open, drag, stack, close) with unit tests.',
      'Designed for accessibility: labelled dialogs, keyboard-focusable scroll regions, reduced-motion support, and automated accessibility linting.',
      'Automated checks with GitHub Actions and Dependabot, with Lighthouse scores of 99 to 100 in every category.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Vitest',
      'GitHub Actions',
    ],
    repository: 'https://github.com/Tenku132/Observatory',
  },
]
