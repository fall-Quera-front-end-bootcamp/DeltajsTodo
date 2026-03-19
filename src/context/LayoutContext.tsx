import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'

interface LayoutContextType {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
  setSidebarState: (isOpen: boolean) => void
  isMobileView: boolean // Could be determined by a hook or set here
  // Add other layout-related states like page title, header visibility etc.
}

const LayoutContext = createContext<LayoutContextType | null>(null)

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // Assume isMobileView is determined by a hook or a responsive utility
  // For simplicity, let's assume a hook `useIsMobile` is available elsewhere
  // const isMobileView = useIsMobile(); // Example

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
  }, [])

  const setSidebarState = useCallback((isOpen: boolean) => {
    setIsSidebarOpen(isOpen)
  }, [])

  // Dummy value for isMobileView, you should replace with your actual hook
  const isMobileView = false // Replace with useIsMobile() or similar

  return (
    <LayoutContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        setSidebarState,
        isMobileView
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}
