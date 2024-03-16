import type React from 'react'
import { createContext, useState } from 'react'

interface DarkModeContextType {
  darkTheme: string
  handleDarkTheme: () => void
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkTheme: 'light',
  handleDarkTheme: () => {} // Provide a default function to avoid null
})

const DarkModeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [darkTheme, setDarkTheme] = useState<string>('light')

  const handleDarkTheme = (): void => {
    setDarkTheme(darkTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <DarkModeContext.Provider value={{ darkTheme, handleDarkTheme }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider
