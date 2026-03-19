import  {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'

interface Command {
  id: string
  title: string
  keywords: string[] // For searching
  action: () => void
  icon?: ReactNode // Optional icon
}

interface CommandPaletteContextType {
  isOpen: boolean
  commands: Command[]
  openPalette: () => void
  closePalette: () => void
  registerCommand: (command: Command) => void
  unregisterCommand: (id: string) => void
  searchCommands: (query: string) => Command[]
}

const CommandPaletteContext = createContext<CommandPaletteContextType | null>(
  null
)

export const CommandPaletteProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [commands, setCommands] = useState<Command[]>([])

  const openPalette = useCallback(() => setIsOpen(true), [])
  const closePalette = useCallback(() => setIsOpen(false), [])

  const registerCommand = useCallback((command: Command) => {
    setCommands((prev) => [...prev, command])
  }, [])

  const unregisterCommand = useCallback((id: string) => {
    setCommands((prev) => prev.filter((cmd) => cmd.id !== id))
  }, [])

  const searchCommands = useCallback(
    (query: string) => {
      if (!query) return commands
      const lowerQuery = query.toLowerCase()
      return commands.filter(
        (command) =>
          command.title.toLowerCase().includes(lowerQuery) ||
          command.keywords.some((keyword) =>
            keyword.toLowerCase().includes(lowerQuery)
          )
      )
    },
    [commands]
  )

  return (
    <CommandPaletteContext.Provider
      value={{
        isOpen,
        commands,
        openPalette,
        closePalette,
        registerCommand,
        unregisterCommand,
        searchCommands
      }}
    >
      {children}
      {/* Render your Command Palette UI component here */}
      {/* {isOpen && <CommandPaletteUI commands={commands} onClose={closePalette} />} */}
    </CommandPaletteContext.Provider>
  )
}

export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext)
  if (!context) {
    throw new Error(
      'useCommandPalette must be used within a CommandPaletteProvider'
    )
  }
  return context
}
