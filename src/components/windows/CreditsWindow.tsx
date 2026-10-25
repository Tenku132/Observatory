import { credits } from '../../data/credits'
import ExternalLink from '../ui/ExternalLink'

// @doc CREDITS-WINDOW
function CreditsWindow() {
  return (
    <div className="space-y-4">
      <p>This portfolio uses the following libraries, tools, and assets.</p>

      <ul className="list-disc space-y-3 pl-5">
        {credits.map((credit) => (
          <li key={credit.name}>
            <ExternalLink href={credit.url}>{credit.name}</ExternalLink>
            {credit.extra && (
              <>
                {' — '}
                <ExternalLink href={credit.extra.url}>
                  {credit.extra.label}
                </ExternalLink>
              </>
            )}
          </li>
        ))}
      </ul>

      <p className="text-sm leading-6 text-slate-300">
        Individual asset creators and attribution requirements will be
        documented as the final assets are selected.
      </p>
    </div>
  )
}

export default CreditsWindow
