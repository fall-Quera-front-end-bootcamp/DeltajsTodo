import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { FloatingBall } from './FloatingBall'

const STORAGE_KEY = 'app-theme-mode'
type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeModeContext {
  mode: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}

const ThemeModeContext = createContext<ThemeModeContext | null>(null)

export const FloatingBallProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system'
    return (localStorage.getItem(STORAGE_KEY) as ThemeMode) ?? 'system'
  })

  React.useEffect(() => {
    const root = document.documentElement

    const apply = (m: ThemeMode) => {
      if (m === 'system') {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
        root.classList.toggle('dark', prefersDark)
      } else {
        root.classList.toggle('dark', m === 'dark')
      }
    }

    apply(mode)
    localStorage.setItem(STORAGE_KEY, mode)

    if (mode === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => apply('system')
      media.addEventListener('change', handler)
      return () => media.removeEventListener('change', handler)
    }
  }, [mode])

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      {children}
      {ReactDOM.createPortal(<FloatingBall />, document.body)}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext)
  if (!ctx)
    throw new Error('useThemeMode must be used inside FloatingBallProvider')
  return ctx
}
