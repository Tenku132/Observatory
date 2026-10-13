
import { useState } from 'react'

import StarfieldBackground from './components/layout/StarfieldBackground'
import StarMap from './components/constellation/StarMap'
import WindowShell, {
  type WindowPosition,
} from './components/windows/WindowShell'

import {
  stars,
  type StarId,
} from './data/constellation'

interface OpenStarWindow extends WindowPosition {
  id: StarId
  isClosing: boolean
  zIndex: number
}

const creditLinkClass =
  'font-medium text-retro-cyan underline decoration-retro-cyan underline-offset-4 transition-colors hover:text-[#B99CF6] hover:decoration-[#B99CF6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-retro-cyan'

// @doc WINDOW-INITIAL-POSITION
function getInitialWindowPosition(
  openCount: number,
): WindowPosition {
  const width = Math.min(448, window.innerWidth - 24)
  const offset = (openCount % 5) * 24

  const maxX = Math.max(12, window.innerWidth - width - 12)
  const maxY = Math.max(12, window.innerHeight - 200)

  const centeredX = (window.innerWidth - width) / 2
  const centeredY = (window.innerHeight - 280) / 2

  return {
    x: Math.max(12, Math.min(maxX, centeredX + offset)),
    y: Math.max(12, Math.min(maxY, centeredY + offset)),
  }
}

// @doc REACT-STATE
function App() {
  const [openWindows, setOpenWindows] =
    useState<OpenStarWindow[]>([])

  const openStarWindow = (starId: StarId) => {
    setOpenWindows((current) => {
      const nextZIndex =
        Math.max(99, ...current.map((item) => item.zIndex)) + 1

      const existingWindow = current.find(
        (item) => item.id === starId,
      )

      // Reuse an existing window and bring it to the front.
      if (existingWindow) {
        return current.map((item) =>
          item.id === starId
            ? {
                ...item,
                isClosing: false,
                zIndex: nextZIndex,
              }
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
        item.id === starId
          ? { ...item, isClosing: true }
          : item,
      ),
    )
  }

  const removeClosedWindow = (starId: StarId) => {
    setOpenWindows((current) =>
      current.filter((item) => item.id !== starId),
    )
  }

  const bringWindowToFront = (starId: StarId) => {
    setOpenWindows((current) => {
      const target = current.find((item) => item.id === starId)

      if (!target || target.isClosing) {
        return current
      }

      const highestZIndex = Math.max(
        ...current.map((item) => item.zIndex),
      )

      if (target.zIndex === highestZIndex) {
        return current
      }

      const nextZIndex = highestZIndex + 1

      // Update stacking order without rearranging the windows array.
      return current.map((item) =>
        item.id === starId
          ? { ...item, zIndex: nextZIndex }
          : item,
      )
    })
  }

  const updateWindowPosition = (
    starId: StarId,
    position: WindowPosition,
  ) => {
    setOpenWindows((current) =>
      current.map((item) =>
        item.id === starId
          ? { ...item, ...position }
          : item,
      ),
    )
  }

  const openStarIds = openWindows.filter((item) => !item.isClosing).map((item) => item.id)

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080B1E] text-white">
      <StarfieldBackground />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="flex min-h-[35vh] flex-col justify-center px-6 py-10 sm:px-12 lg:min-h-screen">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#B99CF6]">
            MY DIGITAL UNIVERSE
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#F4F0FF] sm:text-6xl lg:text-7xl">
            Ian Diaz
          </h1>

          <p className="mt-1 text-sm font-semibold tracking-wide text-retro-cyan sm:text-base">
            Full-Stack Developer
          </p>

          <p className="mt-6 max-w-md text-sm leading-7 text-slate-200 sm:text-base">
            Explore my universe through its stars.
          </p>

          <p className="mt-5 text-xs tracking-widest text-[#B99CF6]">
            SELECT A STAR TO EXPLORE
          </p>
        </section>

        <section
          aria-label="Interactive portfolio constellation"
          className="relative min-h-[62vh] overflow-visible lg:min-h-screen"
        >
          <StarMap
            openStarIds={openStarIds}
            onSelectStar={openStarWindow}
          />
        </section>
      </div>

      {openWindows.map((openWindow) => {
        const star = stars.find(
          (item) => item.id === openWindow.id,
        )

        if (!star) return null

        return (
          <WindowShell
            key={openWindow.id}
            title={star.label}
            position={{
              x: openWindow.x,
              y: openWindow.y,
            }}
            zIndex={openWindow.zIndex}
            closing={openWindow.isClosing}
            onClose={() => closeStarWindow(openWindow.id)}
            onBringToFront={() =>
              bringWindowToFront(openWindow.id)
            }
            onPositionChange={(position) =>
              updateWindowPosition(openWindow.id, position)
            }
            onExitComplete={() =>
              removeClosedWindow(openWindow.id)
            }
          >
            {star.id === 'credits' ? (
              <div className="space-y-4">
                <p>
                  This portfolio uses the following libraries,
                  tools, and assets.
                </p>

                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <a
                      className={creditLinkClass}
                      href="https://github.com/Joangeldelarosa/pxlkit"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pxlkit UI Kit and Icon Builder
                    </a>
                  </li>

                  <li>
                    <a
                      className={creditLinkClass}
                      href="https://github.com/joshwcomeau/use-sound"
                      target="_blank"
                      rel="noreferrer"
                    >
                      use-sound
                    </a>
                  </li>

                  <li>
                    <a
                      className={creditLinkClass}
                      href="https://pixabay.com/sound-effects/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pixabay Sound Effects
                    </a>
                    {' — '}
                    <a
                      className={creditLinkClass}
                      href="https://pixabay.com/service/license-summary/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      License summary
                    </a>
                  </li>

                  <li>
                    <a
                      className={creditLinkClass}
                      href="https://space-spheremaps.itch.io/pixelart-starfields"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Space Spheremaps Pixelart Starfields
                    </a>
                  </li>

                  <li>
                    <a
                      className={creditLinkClass}
                      href="https://fontsource.org/fonts/pixelify-sans"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pixelify Sans via Fontsource
                    </a>
                  </li>
                </ul>

                <p className="text-xs opacity-70">
                  Individual asset creators and attribution
                  requirements will be documented as the final
                  assets are selected.
                </p>
              </div>
            ) : (
              <>
                <p className="leading-relaxed">
                  {star.description}
                </p>

                <p className="mt-4 text-sm opacity-70">
                  This section is a placeholder. We'll add the
                  complete portfolio content in a later milestone.
                </p>
              </>
            )}
          </WindowShell>
        )
      })}
    </main>
  )
}

export default App
