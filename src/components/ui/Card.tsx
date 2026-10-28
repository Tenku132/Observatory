import type { ReactNode } from 'react'

interface CardProps {
  as?: 'section' | 'article'
  children: ReactNode
}

function Card({ as: Tag = 'section', children }: CardProps) {
  return (
    <Tag className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
      {children}
    </Tag>
  )
}

export default Card
