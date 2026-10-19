import { skillGroups } from '../../data/skills'

// @doc SKILLS-WINDOW
function SkillsWindow() {
  return (
    <div className="space-y-5">
      <p>
        These categories are sample content for testing how grouped
        information appears inside a window.
      </p>

      {skillGroups.map((group) => (
        <section
          key={group.title}
          className="space-y-2 border border-retro-border p-4"
        >
          <h3 className="font-pixel text-sm text-retro-cyan">
            {group.title.toUpperCase()}
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <p className="text-sm text-slate-400">
        These are example categories, not a final assessment of proficiency.
      </p>
    </div>
  )
}

export default SkillsWindow