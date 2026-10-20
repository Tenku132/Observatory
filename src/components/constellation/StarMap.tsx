import ConstellationLines from './ConstellationLines'
import Star from './Star'
import { stars, type StarId } from '../../data/constellation'

interface StarMapProps {
  openStarIds: StarId[]
  onSelectStar: (starId: StarId) => void
}

// @doc STAR-MAP-INTERACTION
function StarMap({ openStarIds, onSelectStar }: StarMapProps) {
  return (
    <div
      role="group"
      aria-label="Portfolio constellation"
      className="absolute inset-0"
    >
      <ConstellationLines />

      {stars.map((star) => (
        <Star
          key={star.id}
          star={star}
          selected={openStarIds.includes(star.id)}
          onSelect={() => onSelectStar(star.id)}
        />
      ))}
    </div>
  )
}

export default StarMap
