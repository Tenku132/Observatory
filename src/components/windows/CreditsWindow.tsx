import { credits } from '../../data/credits'

const linkClass =
  'font-medium text-retro-cyan underline decoration-retro-cyan underline-offset-4 transition-colors hover:text-[#B99CF6] hover:decoration-[#B99CF6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-retro-cyan'

// @doc CREDITS-WINDOW
function CreditsWindow() {
  return (
    <div className="space-y-4">
      <p>This portfolio uses the following libraries, tools, and assets.</p>

      <ul className="list-disc space-y-3 pl-5">
        {credits.map((credit) => (
          <li key={credit.name}>
            <a
              className={linkClass}
              href={credit.url}
              target="_blank"
              rel="noreferrer"
            >
              {credit.name}
            </a>
            {credit.extra && (
              <>
                {' — '}
                <a
                  className={linkClass}
                  href={credit.extra.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {credit.extra.label}
                </a>
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
