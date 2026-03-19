import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode
} from 'react'

interface OnlineStatusContextType {
  isOnline: boolean
}

const OnlineStatusContext = createContext<OnlineStatusContextType | null>(null)

export const OnlineStatusProvider = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <OnlineStatusContext.Provider value={{ isOnline }}>
      {children}
    </OnlineStatusContext.Provider>
  )
}

export const useOnlineStatus = () => {
  const context = useContext(OnlineStatusContext)
  if (!context) {
    throw new Error(
      'useOnlineStatus must be used within an OnlineStatusProvider'
    )
  }
  return context
}
