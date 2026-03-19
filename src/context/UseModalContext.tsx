import { createContext, useCallback, useContext, useState } from 'react'

interface UseModalContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const UseModalContext = createContext<UseModalContextType>({
  isOpen: false,
  open: function (): void {},
  close: function (): void {}
})

export const UseModalContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <UseModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </UseModalContext.Provider>
  )
}

export const useModal = () => {
  const ctx = useContext(UseModalContext)
  if (!ctx) throw new Error('useAuth outside provider')
  return ctx
}
