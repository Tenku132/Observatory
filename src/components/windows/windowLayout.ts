// @doc WINDOW-LAYOUT
export const WINDOW_MAX_WIDTH = 800
export const WINDOW_MAX_HEIGHT = 620
export const WINDOW_HEIGHT_PERCENT = 70
export const WINDOW_MARGIN = 12

// Applied by WindowShell so the real window matches what the hook assumes.
export const windowCssSize = {
  width: `min(${WINDOW_MAX_WIDTH}px, calc(100vw - ${WINDOW_MARGIN * 2}px))`,
  height: `min(${WINDOW_HEIGHT_PERCENT}dvh, ${WINDOW_MAX_HEIGHT}px)`,
  maxHeight: `calc(100dvh - ${WINDOW_MARGIN * 2}px)`,
} as const
