import type { ReactNode } from 'react'

const linkClass =
  'font-medium text-retro-cyan underline decoration-retro-cyan underline-offset-4 transition-colors hover:text-nebula hover:decoration-nebula focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-retro-cyan'

interface ExternalLinkProps {
  href: string
  children: ReactNode
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a className={linkClass} href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default ExternalLink
