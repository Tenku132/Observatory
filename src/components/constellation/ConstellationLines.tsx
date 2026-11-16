import { useEffect, useRef } from 'react'
import {
  constellationConnections,
  stars,
  type StarId,
} from '../../data/constellation'
import { PIXEL_SCALE } from '../layout/pixelGrid'
import { pixelLine } from './pixelLine'

interface ConstellationLinesProps {
  openStarIds: StarId[]
}

// @doc SVG-CONNECTIONS
// Pixel-art lines on a low-resolution canvas: one canvas pixel is one art
// pixel (PIXEL_SCALE screen pixels), scaled up without smoothing. A line is
// dotted until both of its stars have open windows, then solid and brighter.
// It only redraws on resize or when a window opens or closes (no animation).
function ConstellationLines({ openStarIds }: ConstellationLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // One flag per connection, as a string such as '01100'. App re-renders on
  // every drag movement, so depending on this string (not the openStarIds
  // array, which is a new array each time) avoids needless redraws.
  const activeFlags = constellationConnections
    .map(([fromId, toId]) =>
      openStarIds.includes(fromId) && openStarIds.includes(toId) ? '1' : '0',
    )
    .join('')

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const draw = () => {
      // Size the canvas in art pixels. Assigning width or height also clears it.
      const width = Math.max(1, Math.round(canvas.clientWidth / PIXEL_SCALE))
      const height = Math.max(1, Math.round(canvas.clientHeight / PIXEL_SCALE))
      canvas.width = width
      canvas.height = height

      // Read the colors from the @theme tokens so they are defined only once.
      const styles = getComputedStyle(canvas)
      const idleColor = styles.getPropertyValue('--color-constellation').trim()
      const activeColor = styles.getPropertyValue('--color-nebula').trim()
      const starById = new Map(stars.map((star) => [star.id, star]))

      constellationConnections.forEach(([fromId, toId], index) => {
        const from = starById.get(fromId)
        const to = starById.get(toId)
        if (!from || !to) return

        const isActive = activeFlags[index] === '1'
        context.fillStyle = isActive ? activeColor : idleColor
        context.globalAlpha = isActive ? 1 : 0.6

        const points = pixelLine(
          Math.floor((from.x / 100) * width),
          Math.floor((from.y / 100) * height),
          Math.floor((to.x / 100) * width),
          Math.floor((to.y / 100) * height),
        )
        points.forEach(([x, y], step) => {
          if (isActive || step % 2 === 0) context.fillRect(x, y, 1, 1)
        })
      })
    }

    draw()
    const observer = new ResizeObserver(draw)
    observer.observe(canvas)
    return () => observer.disconnect()
  }, [activeFlags])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ imageRendering: 'pixelated' }}
    />
  )
}

export default ConstellationLines
