import { projects } from '../../data/projects'

const linkClass =
  'text-retro-cyan underline underline-offset-4 hover:text-[#B99CF6]'

// @doc PROJECTS-WINDOW
// Renders one card per entry in data/projects.ts.
function ProjectsWindow() {
  return (
    <div className="space-y-5">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className="space-y-2 border border-retro-border bg-retro-surface/30 p-4"
        >
          <p className="text-xs tracking-widest text-retro-cyan">
            PROJECT {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="font-pixel text-sm text-[#B99CF6]">{project.title}</h3>
          <p>{project.description}</p>

          {project.technologies.length > 0 && (
            <p className="text-sm text-slate-300">
              Technologies: {project.technologies.join(', ')}
            </p>
          )}
          {project.note && (
            <p className="text-sm text-slate-300">{project.note}</p>
          )}

          {(project.repository || project.liveUrl) && (
            <p className="flex flex-wrap gap-x-4 text-sm">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Live demo
                </a>
              )}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}

export default ProjectsWindow