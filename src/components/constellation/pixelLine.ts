// @doc PIXEL-LINES
// Bresenham's line algorithm: the pixels of a straight line between two points,
// with no gaps, including both ends. It works on whole numbers only, which is
// what gives the stair-step pixel-art look.
export function pixelLine(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): Array<[number, number]> {
  const dx = Math.abs(x1 - x0)
  const dy = -Math.abs(y1 - y0)
  const stepX = x0 < x1 ? 1 : -1
  const stepY = y0 < y1 ? 1 : -1
  let error = dx + dy
  let x = x0
  let y = y0
  const points: Array<[number, number]> = [[x, y]]

  while (x !== x1 || y !== y1) {
    const doubled = 2 * error
    if (doubled >= dy) {
      error += dy
      x += stepX
    }
    if (doubled <= dx) {
      error += dx
      y += stepY
    }
    points.push([x, y])
  }

  return points
}
