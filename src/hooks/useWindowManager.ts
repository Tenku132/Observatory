import { useState } from 'react'
import type { StarId } from '../data/constellation'
import type { WindowPosition } from '../components/windows/WindowShell'

export interface OpenStarWindow extends WindowPosition {
  id: StarId
  isClosing: boolean
  zIndex: number
}

// @doc WINDOW-INITIAL-POSITION
function getInitialWindowPosition(openCount: number): WindowPosition {
  const width = Math.min(800, window.innerWidth - 24)
  const height = Math.min(window.innerHeight * 0.7, 620)
  const offset = (openCount % 5) * 24

  const maxX = Math.max(12, window.innerWidth - width - 12)
  const maxY = Math.max(12, window.innerHeight - height - 12)
  const centeredX = (window.innerWidth - width) / 2
  const centeredY = (window.innerHeight - height) / 2

  return {
    x: Math.max(12, Math.min(maxX, centeredX + offset)),
    y: Math.max(12, Math.min(maxY, centeredY + offset)),
  }
}

// @doc REACT-STATE
// Owns the list of open windows and every way to change it.
export function useWindowManager() {
  const [openWindows, setOpenWindows] = useState<OpenStarWindow[]>([])

  const openStarWindow = (starId: StarId) => {
    setOpenWindows((current) => {
      const nextZIndex = Math.max(99, ...current.map((item) => item.zIndex)) + 1
      const existing = current.find((item) => item.id === starId)

      // Reuse an existing window and bring it to the front.
      if (existing) {
        return current.map((item) =>
          item.id === starId
            ? { ...item, isClosing: false, zIndex: nextZIndex }
            : item,
        )
      }

      // A new window gets its own starting position and stacking order.
      return [
        ...current,
        {
          id: starId,
          ...getInitialWindowPosition(current.length),
          isClosing: false,
          zIndex: nextZIndex,
        },
      ]
    })
  }

  // @doc WINDOW-CLOSE-ANIMATION
  const closeStarWindow = (starId: StarId) => {
    setOpenWindows((current) =>
      current.map((item) =>
        item.id === starId ? { ...item, isClosing: true } : item,
      ),
    )
  }

  const removeClosedWindow = (starId: StarId) => {
    setOpenWindows((current) => current.filter((item) => item.id !== starId))
  }

  const bringWindowToFront = (starId: StarId) => {
    setOpenWindows((current) => {
      const target = current.find((item) => item.id === starId)
      if (!target || target.isClosing) return current

      const highestZIndex = Math.max(...current.map((item) => item.zIndex))
      if (target.zIndex === highestZIndex) return current

      // Update stacking order without rearranging the windows array.
      return current.map((item) =>
        item.id === starId ? { ...item, zIndex: highestZIndex + 1 } : item,
      )
    })
  }

  const updateWindowPosition = (starId: StarId, position: WindowPosition) => {
    setOpenWindows((current) =>
      current.map((item) =>
        item.id === starId ? { ...item, ...position } : item,
      ),
    )
  }

  const openStarIds = openWindows
    .filter((item) => !item.isClosing)
    .map((item) => item.id)

  return {
    openWindows,
    openStarIds,
    openStarWindow,
    closeStarWindow,
    removeClosedWindow,
    bringWindowToFront,
    updateWindowPosition,
  }
}
