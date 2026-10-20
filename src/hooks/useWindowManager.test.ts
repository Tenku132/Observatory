import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import type { StarId } from '../data/constellation'
import { useWindowManager } from './useWindowManager'

function setup() {
  const { result } = renderHook(() => useWindowManager())
  const find = (id: StarId) =>
    result.current.openWindows.find((w) => w.id === id)
  return { result, find }
}

describe('useWindowManager', () => {
  it('starts with no open windows', () => {
    const { result } = setup()
    expect(result.current.openWindows).toEqual([])
    expect(result.current.openStarIds).toEqual([])
  })

  it('opens a window for a star', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    expect(find('about')).toMatchObject({ id: 'about', isClosing: false })
    expect(result.current.openStarIds).toEqual(['about'])
  })

  it('reuses the existing window when a star is opened twice', () => {
    const { result } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.openStarWindow('about'))
    expect(result.current.openWindows).toHaveLength(1)
  })

  it('stacks newly opened windows above earlier ones', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.openStarWindow('projects'))
    expect(find('projects')!.zIndex).toBeGreaterThan(find('about')!.zIndex)
  })

  it('brings a window to the front', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.openStarWindow('projects'))
    act(() => result.current.bringWindowToFront('about'))
    expect(find('about')!.zIndex).toBeGreaterThan(find('projects')!.zIndex)
  })

  it('keeps a closing window in the list but out of openStarIds', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.closeStarWindow('about'))
    expect(find('about')!.isClosing).toBe(true)
    expect(result.current.openStarIds).toEqual([])
  })

  it('removes a window once its exit animation completes', () => {
    const { result } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.closeStarWindow('about'))
    act(() => result.current.removeClosedWindow('about'))
    expect(result.current.openWindows).toEqual([])
  })

  it('cancels the close when a closing window is reopened', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.closeStarWindow('about'))
    act(() => result.current.openStarWindow('about'))
    expect(find('about')!.isClosing).toBe(false)
  })

  it('does not restack a window that is closing', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.openStarWindow('projects'))
    act(() => result.current.closeStarWindow('about'))
    const before = find('about')!.zIndex
    act(() => result.current.bringWindowToFront('about'))
    expect(find('about')!.zIndex).toBe(before)
  })

  it('updates a window position', () => {
    const { result, find } = setup()
    act(() => result.current.openStarWindow('about'))
    act(() => result.current.updateWindowPosition('about', { x: 40, y: 60 }))
    expect(find('about')).toMatchObject({ x: 40, y: 60 })
  })
})
