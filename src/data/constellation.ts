export type StarId =
  | 'about'
  | 'projects'
  | 'skills'
  | 'contact'
  | 'credits'

export interface StarDefinition {
  id: StarId
  label: string
  x: number
  y: number
}

// @doc STAR-DATA
export const stars: StarDefinition[] = [
  {
    id: 'about',
    label: 'About',
    x: 22,
    y: 17,
  },
  {
    id: 'projects',
    label: 'Projects',
    x: 49,
    y: 32,
  },
  {
    id: 'skills',
    label: 'Skills',
    x: 78,
    y: 25,
  },
  {
    id: 'contact',
    label: 'Contact',
    x: 35,
    y: 56,
  },
  {
    id: 'credits',
    label: 'Credits',
    x: 59,
    y: 76,
  },
]

// @doc SVG-CONNECTIONS
export const constellationConnections: Array<
  [StarId, StarId]
> = [
  ['about', 'projects'],
  ['projects', 'skills'],
  ['projects', 'contact'],
  ['skills', 'credits'],
  ['contact', 'credits'],
]