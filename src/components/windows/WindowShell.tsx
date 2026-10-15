import {
  useId,
  useRef,
  type AnimationEvent,
  type PointerEvent,
  type ReactNode,
} from 'react'

export interface WindowPosition {
  x: number
  y: number
}

interface WindowShellProps {
  title: string
  position: WindowPosition
  zIndex: number
  closing: boolean
  onClose: () => void
  onBringToFront: () => void
  onPositionChange: (position: WindowPosition) => void
  onExitComplete: () => void
  children: ReactNode
}

interface DragState {
  pointerId: number
  startX: number
  startY: number
  originalX: number
  originalY: number
}

// @doc WINDOW-DRAG
function WindowShell({
  title,
  position,
  zIndex,
  closing,
  onClose,
  onBringToFront,
  onPositionChange,
  onExitComplete,
  children,
}: WindowShellProps) {
  const titleId = useId()
  const panelRef = useRef<HTMLElement | null>(null)
  const dragRef = useRef<DragState | null>(null)

  const handleDragStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || closing) return

    // The close button should click normally, not start a drag.
    if (
      event.target instanceof Element &&
      event.target.closest('button')
    ) {
      return
    }

    // Prevent text selection while dragging the title bar.
    event.preventDefault()

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originalX: position.x,
      originalY: position.y,
    }

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleDragMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current

    if (!drag || drag.pointerId !== event.pointerId || closing) return

    const panel = panelRef.current

    if (!panel) return

    // Keep the window within the viewport while dragging.
    const maxX = Math.max(8, window.innerWidth - panel.offsetWidth - 8)
    const maxY = Math.max(8, window.innerHeight - 48)

    const x = Math.max(
      8,
      Math.min(
        maxX,
        drag.originalX + event.clientX - drag.startX,
      ),
    )

    const y = Math.max(
      8,
      Math.min(
        maxY,
        drag.originalY + event.clientY - drag.startY,
      ),
    )

    onPositionChange({ x, y })
  }

  const handleDragEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  // @doc WINDOW-CLOSE-ANIMATION
  const handleAnimationEnd = (
    event: AnimationEvent<HTMLElement>,
  ) => {
    // Ignore animation events bubbling up from child elements.
    if (closing && event.target === event.currentTarget) {
      onExitComplete()
    }
  }

  return (
    <section
      ref={panelRef}
      role="dialog"
      aria-modal={false}
      aria-labelledby={titleId}
      onPointerDown={(event) => {
        // Let close-button clicks finish without restacking mid-click.
        if (
          event.target instanceof Element &&
          event.target.closest('button')
        ) {
          return
        }

        onBringToFront()
      }}
      onAnimationEnd={handleAnimationEnd}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        pointerEvents: closing ? 'none' : 'auto',
      }}
      className={`fixed w-200 max-w-[calc(100vw-1.5rem)] h-(--window-height) max-h-[calc(100dvh-1.5rem)] overflow-y-auto border-2 border-retro-border bg-retro-bg shadow-2xl ${
        closing
          ? 'starfield-window-exit'
          : 'starfield-window-enter'
      }`}
    >
      <div
        className="flex cursor-grab touch-none select-none items-center justify-between border-b-2 border-retro-border bg-retro-surface/60 px-3 py-2 active:cursor-grabbing"
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        onPointerCancel={handleDragEnd}
      >
        <h2
          id={titleId}
          className="font-pixel text-[11px] text-retro-green"
        >
          {title.toUpperCase()}
        </h2>

        <button
          type="button"
          aria-label={`Close ${title} window`}
          onClick={onClose}
          className="flex h-6 w-6 items-center justify-center border-2 border-retro-border text-retro-muted transition-colors hover:border-retro-red/40 hover:bg-retro-red/10 hover:text-retro-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-retro-red"
        >
          ×
        </button>
      </div>

      <div className="p-6 font-sans text-base leading-7 text-slate-100">
        {children}
      </div>
    </section>
  )
}

export default WindowShell
