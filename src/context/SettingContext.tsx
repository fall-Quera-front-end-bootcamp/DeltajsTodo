import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback
} from 'react'

// Define default settings and their types
interface AppSettings {
  timerDuration: number // in minutes
  pomodoroBreakDuration: number // in minutes
  pomodoroSessionDuration: number // in minutes
  language: string
  uiDensity: 'compact' | 'comfortable'
  notificationsEnabled: boolean
  // Add more settings as needed
}

const defaultSettings: AppSettings = {
  timerDuration: 25,
  pomodoroBreakDuration: 5,
  pomodoroSessionDuration: 25,
  language: 'en',
  uiDensity: 'comfortable',
  notificationsEnabled: true
}

interface SettingsContextType {
  settings: AppSettings
  updateSettings: (newSettings: Partial<AppSettings>) => void
  resetSettings: () => void
}

const SettingsContext = createContext<SettingsContextType | null>(null)

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    if (typeof window === 'undefined') return defaultSettings
    const savedSettings = localStorage.getItem('appSettings')
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings
  })

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings))
  }, [settings])

  const updateSettings = useCallback((newSettings: Partial<AppSettings>) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings)
  }, [])

  return (
    <SettingsContext.Provider
      value={{ settings, updateSettings, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}
