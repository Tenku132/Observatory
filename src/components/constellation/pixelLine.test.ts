import { describe, expect, it } from 'vitest'
import { pixelLine } from './pixelLine'

// Every pair of ends we check, covering all directions and steepness.
const cases: Array<[number, number, number, number]> = [
  [0, 0, 10, 3],
  [0, 0, 3, 10],
  [10, 3, 0, 0],
  [3, 10, 0, 0],
  [0, 10, 10, 0],
  [10, 0, 0, 10],
  [5, 5, 5, 20],
  [2, 7, 30, 7],
]

describe('pixelLine', () => {
  it('returns one pixel when both ends are the same point', () => {
    expect(pixelLine(4, 4, 4, 4)).toEqual([[4, 4]])
  })

  it('draws a horizontal line including both ends', () => {
    expect(pixelLine(0, 0, 3, 0)).toEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ])
  })

  it('draws a vertical line going up', () => {
    expect(pixelLine(2, 3, 2, 0)).toEqual([
      [2, 3],
      [2, 2],
      [2, 1],
      [2, 0],
    ])
  })

  it('draws a 45-degree diagonal', () => {
    expect(pixelLine(0, 0, 3, 3)).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ])
  })

  it.each(cases)(
    'starts and ends at the given points (%i,%i to %i,%i)',
    (x0, y0, x1, y1) => {
      const points = pixelLine(x0, y0, x1, y1)
      expect(points[0]).toEqual([x0, y0])
      expect(points[points.length - 1]).toEqual([x1, y1])
    },
  )

  it.each(cases)(
    'leaves no gaps and has one pixel per step (%i,%i to %i,%i)',
    (x0, y0, x1, y1) => {
      const points = pixelLine(x0, y0, x1, y1)
      expect(points).toHaveLength(
        Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) + 1,
      )
      for (let i = 1; i < points.length; i++) {
        const [px, py] = points[i - 1] ?? [0, 0]
        const [cx, cy] = points[i] ?? [0, 0]
        expect(Math.abs(cx - px)).toBeLessThanOrEqual(1)
        expect(Math.abs(cy - py)).toBeLessThanOrEqual(1)
      }
    },
  )
})
