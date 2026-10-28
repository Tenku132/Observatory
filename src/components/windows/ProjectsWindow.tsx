import { projects } from '../../data/projects'
import Card from '../ui/Card'
import ExternalLink from '../ui/ExternalLink'

// @doc PROJECTS-WINDOW
// Renders one case-study card per entry in data/projects.ts.
function ProjectsWindow() {
  return (
    <div className="space-y-5">
      {projects.map((project, index) => (
        <Card key={project.id} as="article">
          <p className="text-xs tracking-widest text-retro-cyan">
            PROJECT {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="font-pixel text-sm text-nebula">{project.title}</h3>
          <p className="text-sm text-slate-300">
            {project.role} · {project.period}
          </p>
          <p>{project.description}</p>

          <ul className="list-disc space-y-1 pl-5">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <p className="text-sm text-slate-300">
            Technologies: {project.technologies.join(', ')}
          </p>
          {project.note && (
            <p className="text-sm text-slate-400">{project.note}</p>
          )}

          {(project.repository || project.liveUrl) && (
            <p className="flex flex-wrap gap-x-4 text-sm">
              {project.repository && (
                <ExternalLink href={project.repository}>
                  Repository
                </ExternalLink>
              )}
              {project.liveUrl && (
                <ExternalLink href={project.liveUrl}>Live demo</ExternalLink>
              )}
            </p>
          )}
        </Card>
      ))}
    </div>
  )
}

export default ProjectsWindow
