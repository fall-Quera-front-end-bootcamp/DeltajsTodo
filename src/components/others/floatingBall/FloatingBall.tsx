import React from 'react'
import { useAtom } from 'jotai'
import { ballPositionAtom, isDraggingAtom, isSettingsOpenAtom } from './atoms'

import { Settings, Sun, Moon, Monitor } from 'lucide-react'
import { useThemeMode } from './FloatingBallProvider'

const BALL_SIZE = 56

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max)

export const FloatingBall = () => {
  const [position, setPosition] = useAtom(ballPositionAtom)
  const [dragging, setDragging] = useAtom(isDraggingAtom)
  const [settingsOpen, setSettingsOpen] = useAtom(isSettingsOpenAtom)

  const { mode, setMode } = useThemeMode()

  const dragRef = React.useRef(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    dragRef.current = false
    setDragging(true)
  }

  const handleMouseUp = () => setDragging(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return

    dragRef.current = true

    const maxX = window.innerWidth - BALL_SIZE
    const maxY = window.innerHeight - BALL_SIZE

    const x = clamp(e.clientX - BALL_SIZE / 2, 0, maxX)
    const y = clamp(e.clientY - BALL_SIZE / 2, 0, maxY)

    setPosition({ x, y })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging])

  const handleClick = () => {
    if (dragRef.current) return
    setSettingsOpen(!settingsOpen)
  }

  /* CLICK OUTSIDE */
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const el = containerRef.current
      if (!el) return

      if (!el.contains(event.target as Node)) {
        setSettingsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  /* ESC KEY TOGGLE */
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSettingsOpen((v) => !v)
      }
    }

    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const isRight = position.x > window.innerWidth / 2
  const isBottom = position.y > window.innerHeight / 2

  return (
    <div
      ref={containerRef}
      style={{
        left: position.x,
        top: position.y,
        width: BALL_SIZE,
        height: BALL_SIZE
      }}
      className="fixed z-[9999]"
    >
      <div
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        className="flex items-center justify-center w-full h-full rounded-full bg-blue-900 text-white shadow-lg cursor-grab active:cursor-grabbing"
      >
        <Settings size={22} />
      </div>

      {settingsOpen && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className={`
      absolute w-64 p-4 rounded-xl shadow-xl
      bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200
      ${isRight ? 'right-[72px]' : 'left-[72px]'}
      ${isBottom ? 'bottom-0' : 'top-0'}
    `}
        >
          <p className="text-sm font-semibold mb-3">حالت صفحه</p>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setMode('light')}
              className={`flex items-center gap-1 px-3 py-1 rounded-md border ${
                mode === 'light' ? 'bg-zinc-200 dark:bg-zinc-700' : ''
              }`}
            >
              <Sun size={16} /> روز
            </button>

            <button
              onClick={() => setMode('dark')}
              className={`flex items-center gap-1 px-3 py-1 rounded-md border ${
                mode === 'dark' ? 'bg-zinc-200 dark:bg-zinc-700' : ''
              }`}
            >
              <Moon size={16} /> شب
            </button>

            <button
              onClick={() => setMode('system')}
              className={`flex items-center gap-1 px-3 py-1 rounded-md border ${
                mode === 'system' ? 'bg-zinc-200 dark:bg-zinc-700' : ''
              }`}
            >
              <Monitor size={16} /> سیستم
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
