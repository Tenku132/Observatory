import { skillGroups } from '../../data/skills'
import Card from '../ui/Card'

// @doc SKILLS-WINDOW
function SkillsWindow() {
  return (
    <div className="space-y-5">
      <p>
        These categories are sample content for testing how grouped information
        appears inside a window.
      </p>

      {skillGroups.map((group) => (
        <Card key={group.title}>
          <h3 className="font-pixel text-sm text-retro-cyan">
            {group.title.toUpperCase()}
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}

      <p className="text-sm text-slate-400">
        These are example categories, not a final assessment of proficiency.
      </p>
    </div>
  )
}

export default SkillsWindow
