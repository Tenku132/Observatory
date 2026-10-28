import { skillGroups } from '../../data/skills'
import Card from '../ui/Card'

// @doc SKILLS-WINDOW
function SkillsWindow() {
  return (
    <div className="space-y-5">
      <p>
        The tools and technologies I’ve used in my coursework, capstone,
        internship, and personal projects.
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
    </div>
  )
}

export default SkillsWindow
