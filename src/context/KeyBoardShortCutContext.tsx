import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode
} from 'react'

interface Shortcut {
  key: string // e.g., 'ctrl+s', 'shift+k', 'space'
  handler: (event: KeyboardEvent) => void
  description?: string // For potential command palette integration
}

interface KeyboardShortcutContextType {
  registerShortcut: (shortcut: Shortcut) => void
  unregisterShortcut: (key: string) => void
}

const KeyboardShortcutContext =
  createContext<KeyboardShortcutContextType | null>(null)

export const KeyboardShortcutProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [shortcuts, setShortcuts] = useState<Record<string, Shortcut>>({})

  const registerShortcut = useCallback((shortcut: Shortcut) => {
    setShortcuts((prev) => ({ ...prev, [shortcut.key]: shortcut }))
  }, [])

  const unregisterShortcut = useCallback((key: string) => {
    setShortcuts((prev) => {
      const newShortcuts = { ...prev }
      delete newShortcuts[key]
      return newShortcuts
    })
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle combinations like ctrl+shift+a
      const combo = [
        event.ctrlKey ? 'ctrl+' : '',
        event.shiftKey ? 'shift+' : '',
        event.altKey ? 'alt+' : '',
        event.metaKey ? 'meta+' : '',
        event.key.toLowerCase()
      ]
        .filter(Boolean)
        .join('')

      const directMatch = shortcuts[event.key.toLowerCase()]
      const comboMatch = shortcuts[combo]

      if (comboMatch) {
        event.preventDefault()
        comboMatch.handler(event)
      } else if (
        directMatch &&
        !event.ctrlKey &&
        !event.shiftKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        // Prevent default for direct key presses that aren't combinations,
        // unless they are browser defaults we want to preserve (like tab, f5, etc)
        // This is a simplified handling; a more robust solution might check for input/textarea focus.
        if (
          ![
            'tab',
            'f1',
            'f2',
            'f3',
            'f4',
            'f5',
            'f6',
            'f7',
            'f8',
            'f9',
            'f10',
            'f11',
            'f12',
            'escape',
            'enter',
            'backspace',
            'delete',
            'arrowup',
            'arrowdown',
            'arrowleft',
            'arrowright'
          ].includes(event.key.toLowerCase())
        ) {
          event.preventDefault()
        }
        directMatch.handler(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [shortcuts]) // Re-run effect if shortcuts change

  return (
    <KeyboardShortcutContext.Provider
      value={{ registerShortcut, unregisterShortcut }}
    >
      {children}
    </KeyboardShortcutContext.Provider>
  )
}

export const useKeyboardShortcuts = () => {
  const context = useContext(KeyboardShortcutContext)
  if (!context) {
    throw new Error(
      'useKeyboardShortcuts must be used within a KeyboardShortcutProvider'
    )
  }
  return context
}
