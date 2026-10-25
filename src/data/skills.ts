export interface SkillGroup {
  title: string
  items: string[]
}

// @doc SKILL-DATA
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'HTML and CSS',
      'JavaScript and TypeScript',
      'React',
      'Tailwind CSS',
      'Responsive layouts',
    ],
  },
  {
    title: 'Backend',
    items: [
      'PHP and Laravel',
      'REST API fundamentals',
      'Database integration',
      'Request and response handling',
    ],
  },
  {
    title: 'Development Tools',
    items: [
      'Git and GitHub',
      'VS Code',
      'Vite and npm',
      'Browser debugging tools',
    ],
  },
]
