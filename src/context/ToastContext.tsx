import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect
} from 'react'
import { v4 as uuidv4 } from 'uuid' // You might need to install uuid: npm install uuid @types/uuid

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number // Optional duration in milliseconds
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (message: string, type?: ToastType, duration?: number) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback(
    (message: string, type: ToastType = 'info', duration: number = 3000) => {
      const id = uuidv4()
      setToasts((prevToasts) => [
        ...prevToasts,
        { id, message, type, duration }
      ])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  // Auto-remove toasts after their duration
  // --- CORRECTED PART ---
  useEffect(() => {
    // Set up timers for each toast that has a duration
    const timers = toasts.map((toast) => {
      if (toast.duration) {
        return setTimeout(() => removeToast(toast.id), toast.duration)
      }
      return null // Return null if no timer is set
    })

    // Cleanup function: clear all timers when the component unmounts or toasts change
    return () => {
      timers.forEach((timerId) => {
        if (timerId) {
          clearTimeout(timerId)
        }
      })
    }
  }, [toasts, removeToast]) // Depend on toasts and removeToas

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {/* You'll need a component to render the actual toasts on screen */}
      {/* For example: <ToastContainer toasts={toasts} removeToast={removeToast} /> */}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
