import StarfieldBackground from './components/layout/StarfieldBackground'
import StarMap from './components/constellation/StarMap'
import WindowShell from './components/windows/WindowShell'
import { windowContent } from './components/windows/windowContent'
import { stars } from './data/constellation'
import { profile } from './data/profile'
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
    <main className="relative isolate min-h-screen overflow-hidden bg-void text-white">
      <StarfieldBackground />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="flex min-h-[35vh] flex-col justify-center px-6 py-10 sm:px-12 lg:min-h-screen">
          <h1 className="text-5xl leading-tight text-retro-cyan sm:text-6xl lg:text-7xl">
            Hi! I’m {profile.firstName}
          </h1>
          <p className="mt-3 text-lg lowercase text-starlight sm:text-xl">
            {profile.title}
          </p>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            {profile.stack.join(' · ')}
          </p>
          <p className="mt-8 text-xs tracking-widest text-nebula">
            <span aria-hidden="true">✦ </span>
            PICK A STAR TO EXPLORE
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
