export interface SkillGroup {
  title: string
  items: string[]
}

// @doc SKILL-DATA
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML and CSS'],
  },
  {
    title: 'Frameworks and Libraries',
    items: [
      'Laravel and Laravel Sanctum',
      'React',
      'Next.js',
      'Inertia.js',
      'Tailwind CSS',
      'Vite',
    ],
  },
  { title: 'Data and APIs', items: ['MySQL', 'REST APIs', 'Postman'] },
  {
    title: 'Tools',
    items: [
      'Git, GitHub, and GitLab',
      'Docker',
      'Figma',
      'Visual Studio Code',
      'LibreSprite',
    ],
  },
  {
    title: 'Certification',
    items: [
      'Information Technology Specialist: Python (Certiport), November 2025',
      'Verification code: Jp5U-4wb2',
    ],
  },
]
