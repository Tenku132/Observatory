import type { ReactNode } from 'react'

const linkClass =
  'font-medium text-retro-cyan underline decoration-retro-cyan underline-offset-4 transition-colors hover:text-nebula hover:decoration-nebula focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-retro-cyan'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  newTab?: boolean
}

// Opens in a new tab by default. Pass newTab={false} for mailto links.
function ExternalLink({ href, children, newTab = true }: ExternalLinkProps) {
  return (
    <a
      className={linkClass}
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

export default ExternalLink
