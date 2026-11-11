import { useState, type CSSProperties } from 'react'
import { PIXEL_SCALE } from './pixelGrid'

// @doc STARFIELD-BACKGROUND
// Four seamless pixel-art tiles (far, mid, near) drift diagonally at
// different speeds, which gives a slow "travelling through space" depth effect.
// Decorative only: aria-hidden, no pointer events, no JavaScript animation loop.
const TILE_SIZE = 256 // art pixels per tile side; must match the PNG files
const TILE_PX = TILE_SIZE * PIXEL_SCALE // screen pixels one tile spans

// Farthest first. `seconds` is how long a layer takes to slide exactly one tile.
const layers = [
  // { name: 'nebula', seconds: 320 },
  { name: 'far', seconds: 200 },
  { name: 'mid', seconds: 120 },
  { name: 'near', seconds: 70 },
] as const

function StarfieldBackground() {
  const [paused, setPaused] = useState(false)

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${
          paused ? 'starfield-paused' : ''
        }`}
      >
        {layers.map(({ name, seconds }) => (
          <div
            key={name}
            className="starfield-layer"
            style={
              {
                backgroundImage: `url('/assets/backgrounds/stars-${name}.png')`,
                animationDuration: `${seconds}s`,
                '--tile': `${TILE_PX}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* WCAG 2.2.2: motion that starts automatically needs a way to pause. */}
      <button
        type="button"
        onClick={() => setPaused((current) => !current)}
        className="fixed bottom-4 left-4 z-20 border-2 border-retro-border bg-retro-surface/80 px-3 py-1 text-xs tracking-widest text-starlight transition-colorsfocus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glint motion-reduce:hidden"
      >
        {paused ? 'PLAY STARS' : 'PAUSE STARS'}
      </button>
    </>
  )
}

export default StarfieldBackground