import type { ReactNode } from 'react'
import type { StarId } from '../../data/constellation'
import { AboutWindowContent, AboutWindowHeader } from './AboutWindow'
import ContactWindow from './ContactWindow'
import CreditsWindow from './CreditsWindow'
import ProjectsWindow from './ProjectsWindow'
import SkillsWindow from './SkillsWindow'

interface WindowContentDefinition {
  content: ReactNode
  pinned?: ReactNode
}

// @doc WINDOW-CONTENT-REGISTRY
// Maps each star ID to the content shown in its window.
// Record<StarId, ...> makes TypeScript error if a star has no entry.
export const windowContent: Record<StarId, WindowContentDefinition> = {
  about: { content: <AboutWindowContent />, pinned: <AboutWindowHeader /> },
  projects: { content: <ProjectsWindow /> },
  skills: { content: <SkillsWindow /> },
  contact: { content: <ContactWindow /> },
  credits: { content: <CreditsWindow /> },
}
