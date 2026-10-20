import StarfieldBackground from './components/layout/StarfieldBackground'
import StarMap from './components/constellation/StarMap'
import WindowShell from './components/windows/WindowShell'
import { windowContent } from './components/windows/windowContent'
import { stars } from './data/constellation'
import { useWindowManager } from './hooks/useWindowManager'

function App() {
  const {
    openWindows,
    openStarIds,
    openStarWindow,
    closeStarWindow,
    removeClosedWindow,
    bringWindowToFront,
    updateWindowPosition,
  } = useWindowManager()

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
          <StarMap openStarIds={openStarIds} onSelectStar={openStarWindow} />
        </section>
      </div>

      {openWindows.map((openWindow) => {
        const star = stars.find((item) => item.id === openWindow.id)
        if (!star) return null

        const { content, pinned } = windowContent[star.id]

        return (
          <WindowShell
            key={openWindow.id}
            title={star.label}
            position={{ x: openWindow.x, y: openWindow.y }}
            zIndex={openWindow.zIndex}
            closing={openWindow.isClosing}
            onClose={() => closeStarWindow(openWindow.id)}
            onBringToFront={() => bringWindowToFront(openWindow.id)}
            onPositionChange={(position) =>
              updateWindowPosition(openWindow.id, position)
            }
            onExitComplete={() => removeClosedWindow(openWindow.id)}
            pinnedContent={pinned}
          >
            {content}
          </WindowShell>
        )
      })}
    </main>
  )
}

export default App
