export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  note?: string
  repository?: string
  liveUrl?: string
}

// @doc PROJECT-DATA
// Placeholder entries. Replace with real projects.
export const projects: Project[] = [
  {
    id: 'starfield-portfolio',
    title: 'Starfield Portfolio',
    description:
      'An interactive pixel-art portfolio where each star reveals a different section.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repository: 'https://github.com/Tenku132/Starfield',
  },
  {
    id: 'mapping-application',
    title: 'Mapping Application',
    description:
      'Placeholder for a mapping application with interactive locations, map navigation, and route information.',
    technologies: [],
    note: "Replace this description with a real project's goals, implementation, and your contribution.",
  },
  {
    id: 'dashboard-application',
    title: 'Dashboard Application',
    description:
      'Placeholder for an application that organizes information into clear, reusable interface components.',
    technologies: [],
    note: 'A repository link and live demo can be added when the final project details are ready.',
  },
]