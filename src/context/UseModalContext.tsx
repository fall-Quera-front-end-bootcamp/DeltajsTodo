import { createContext, useCallback, useContext, useState } from 'react'

interface UseModalContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const ModalContext = createContext<UseModalContextType | null>(null)

export const UseModalContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const ctx = useContext(ModalContext)
  if (!ctx)
    throw new Error('useModal must be used inside UseModalContextProvider')
  return ctx
}
