import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  ComponentType
} from 'react'

// Define the type for modal arguments
type ModalArgs<T extends object | undefined = undefined> = T

// Define the type for the modal configuration
interface ModalConfig<T extends object | undefined> {
  id: string
  component: ComponentType<any> // Component that renders the modal
  args?: ModalArgs<T>
  onClose?: () => void // Callback when this specific modal is closed
}

interface DialogContextType {
  modals: ModalConfig<any>[]
  openDialog: <T extends object | undefined>(config: ModalConfig<T>) => void
  closeDialog: (id: string) => void
  closeAllDialogs: () => void
}

const DialogContext = createContext<DialogContextType | null>(null)

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalConfig<any>[]>([])

  const openDialog = useCallback(
    <T extends object | undefined>(config: ModalConfig<T>) => {
      setModals((prevModals) => [...prevModals, config])
    },
    []
  )

  const closeDialog = useCallback((id: string) => {
    setModals((prevModals) => {
      const modalToClose = prevModals.find((modal) => modal.id === id)
      modalToClose?.onClose?.() // Call specific modal's onClose if provided
      return prevModals.filter((modal) => modal.id !== id)
    })
  }, [])

  const closeAllDialogs = useCallback(() => {
    modals.forEach((modal) => modal.onClose?.()) // Call onClose for all current modals
    setModals([])
  }, [modals])

  return (
    <DialogContext.Provider
      value={{ modals, openDialog, closeDialog, closeAllDialogs }}
    >
      {children}
      {/* You'll need a component to render the actual dialogs/sheets */}
      {/* For example: <DialogContainer modals={modals} closeDialog={closeDialog} /> */}
    </DialogContext.Provider>
  )
}

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}
