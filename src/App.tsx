
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

type PortfolioSectionId = Exclude<StarId, 'credits'>

// @doc STAR-SECTION-TEST-CONTENT
// Renders temporary content for each portfolio section.
function StarSectionContent({
  starId,
}: {
  starId: PortfolioSectionId
}) {
  switch (starId) {
    case 'about':
      return (
        <div className="space-y-6">
          {/* @doc ABOUT-INTRODUCTION */}
          <section className="space-y-2">
            <h3 className="font-pixel text-sm text-retro-cyan">
              INTRODUCTION
            </h3>

            <p>
              Welcome to my digital universe. I'm a developer
              interested in building useful applications and
              creating clear, accessible interfaces.
            </p>

            <p className="text-slate-300">
              This is temporary content. My final introduction,
              background, and professional experience will go here.
            </p>
          </section>

          {/* @doc ABOUT-DEVELOPMENT-FOCUS */}
          <section className="space-y-2">
            <h3 className="font-pixel text-sm text-retro-cyan">
              DEVELOPMENT FOCUS
            </h3>

            <ul className="list-disc space-y-2 pl-5">
              <li>Frontend interface development</li>
              <li>Backend and API integration</li>
              <li>Database-driven applications</li>
              <li>Reusable and maintainable code</li>
            </ul>
          </section>

          {/* @doc ABOUT-BACKGROUND */}
          <section className="space-y-2">
            <h3 className="font-pixel text-sm text-retro-cyan">
              BACKGROUND
            </h3>

            <p>
              This section will introduce my development journey,
              relevant experience, education, and contributions
              to projects.
            </p>
          </section>

          {/* @doc ABOUT-GOALS */}
          <section className="space-y-2">
            <h3 className="font-pixel text-sm text-retro-cyan">
              FUTURE GOALS
            </h3>

            <p>
              Continue improving my full-stack skills, build
              practical applications, and create well-documented
              projects that demonstrate my abilities.
            </p>

            <p className="text-slate-300">
              Additional content is included to test scrolling
              while the profile remains visible.
            </p>

            <p className="text-slate-300">
              As this portfolio grows, this area can contain
              more detail about my experience and approach
              to development.
            </p>
          </section>
        </div>
      )

    case 'projects':
      return (
        <div className="space-y-5">
          <article className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
            <p className="text-xs tracking-widest text-retro-cyan">
              PROJECT 01
            </p>

            <h3 className="font-pixel text-sm text-[#B99CF6]">
              Starfield Portfolio
            </h3>

            <p>
              An interactive pixel-art portfolio where each
              star reveals a different section.
            </p>

            <p className="text-sm text-slate-300">
              Test technologies: React, TypeScript, Vite,
              and Tailwind CSS.
            </p>
          </article>

          <article className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
            <p className="text-xs tracking-widest text-retro-cyan">
              PROJECT 02
            </p>

            <h3 className="font-pixel text-sm text-[#B99CF6]">
              Mapping Application
            </h3>

            <p>
              Placeholder for a mapping application with
              interactive locations, map navigation, and
              route information.
            </p>

            <p className="text-sm text-slate-300">
              Replace this description with a real project's
              goals, implementation, and your contribution.
            </p>
          </article>

          <article className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
            <p className="text-xs tracking-widest text-retro-cyan">
              PROJECT 03
            </p>

            <h3 className="font-pixel text-sm text-[#B99CF6]">
              Dashboard Application
            </h3>

            <p>
              Placeholder for an application that organizes
              information into clear, reusable interface
              components.
            </p>

            <p className="text-sm text-slate-300">
              A repository link and live demo can be added
              when the final project details are ready.
            </p>
          </article>
        </div>
      )

    case 'skills':
      return (
        <div className="space-y-5">
          <p>
            These categories are sample content for testing
            how grouped information appears inside a window.
          </p>

          <section className="space-y-2 border border-retro-border p-4">
            <h3 className="font-pixel text-sm text-retro-cyan">
              FRONTEND
            </h3>

            <ul className="list-disc space-y-1 pl-5">
              <li>HTML and CSS</li>
              <li>JavaScript and TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive layouts</li>
            </ul>
          </section>

          <section className="space-y-2 border border-retro-border p-4">
            <h3 className="font-pixel text-sm text-retro-cyan">
              BACKEND
            </h3>

            <ul className="list-disc space-y-1 pl-5">
              <li>PHP and Laravel</li>
              <li>REST API fundamentals</li>
              <li>Database integration</li>
              <li>Request and response handling</li>
            </ul>
          </section>

          <section className="space-y-2 border border-retro-border p-4">
            <h3 className="font-pixel text-sm text-retro-cyan">
              DEVELOPMENT TOOLS
            </h3>

            <ul className="list-disc space-y-1 pl-5">
              <li>Git and GitHub</li>
              <li>VS Code</li>
              <li>Vite and npm</li>
              <li>Browser debugging tools</li>
            </ul>
          </section>

          <p className="text-sm text-slate-400">
            These are example categories, not a final
            assessment of proficiency.
          </p>
        </div>
      )

    case 'contact':
      return (
        <div className="space-y-5">
          <p>
            Have a project in mind or want to discuss a
            development opportunity? This section will
            contain the best ways to reach me.
          </p>

          <section className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
            <h3 className="font-pixel text-sm text-retro-cyan">
              EMAIL
            </h3>

            <p className="text-slate-300">
              Your public email address will go here.
            </p>
          </section>

          <section className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
            <h3 className="font-pixel text-sm text-retro-cyan">
              GITHUB
            </h3>

            <p className="text-slate-300">
              Add your public GitHub profile and selected
              repositories here.
            </p>
          </section>

          <section className="space-y-2 border border-retro-border bg-retro-surface/30 p-4">
            <h3 className="font-pixel text-sm text-retro-cyan">
              OPPORTUNITIES
            </h3>

            <p>
              Add the roles, collaborations, or projects
              you are interested in.
            </p>
          </section>
        </div>
      )

    default:
      return null
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

  const openStarIds = openWindows
    .filter((item) => !item.isClosing)
    .map((item) => item.id)

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
            pinnedContent={
              star.id === 'about' ? (
                <section className="flex items-center gap-4 px-6 py-4">
                  <div
                    role="img"
                    aria-label="Temporary profile avatar for Ian Diaz"
                    className="flex h-20 w-20 shrink-0 items-center justify-center border-2 border-retro-border bg-retro-surface font-pixel text-xl text-retro-cyan"
                  >
                    ID
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-widest text-[#B99CF6]">
                      DEVELOPER PROFILE
                    </p>

                    <h3 className="mt-1 font-pixel text-lg text-retro-green">
                      Ian Diaz
                    </h3>

                    <p className="text-sm leading-5 text-slate-200">
                      Full-Stack Developer
                    </p>

                    <p className="mt-1 text-xs leading-5 text-retro-cyan">
                      React · TypeScript · Laravel
                    </p>
                  </div>
                </section>
              ) : null
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

                <p className="text-sm leading-6 text-slate-300">
                  Individual asset creators and attribution
                  requirements will be documented as the final
                  assets are selected.
                </p>
              </div>
            ) : (
              <StarSectionContent starId={star.id} />
            )}
          </WindowShell>
        )
      })}
    </main>
  )
}

export default App
