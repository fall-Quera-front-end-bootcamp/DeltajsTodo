import ReactDOM from 'react-dom'
import { FloatingBall } from './FloatingBall'
import React, { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'app-theme-mode'

type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeModeContext {
  mode: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}

const UseThemeMode = createContext<ThemeModeContext>({
  mode: 'system',
  setMode: () => {}
})

export const FloatingBallProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  // This pattern causes the reset you’re seeing.
  // The correct solution is to initialize the state directly ,
  // from localStorage inside useState instead of using an effect.

  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    return saved ?? 'system'
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
    <UseThemeMode.Provider value={{ mode, setMode }}>
      {children}
      {ReactDOM.createPortal(<FloatingBall />, document.body)}
    </UseThemeMode.Provider>
  )
}

export const useThemeMode = () => {
  const ctx = useContext(UseThemeMode)
  if (!ctx) throw new Error('useAuth outside provider')
  return ctx
}
