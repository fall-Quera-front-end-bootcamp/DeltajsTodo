import { createContext, useMemo, useState } from 'react'

interface NewTaskContextStore {
  selected: number
  setSelected?: (selected: number) => void
}

export const NewTaskContext = createContext<NewTaskContextStore>({
  selected: -1,
  setSelected: (selected: number) => {}
})

const NewTaskContextProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [selectedN, setSelectedN] = useState(-1)

  const onChange = (selectedN: number): void => {
    setSelectedN(selectedN)
  }

  const contextValue = useMemo(() => {
    return {
      selected: selectedN,
      setSelected: onChange
    }
  }, [selectedN])
  return (
    <NewTaskContext.Provider value={contextValue}>
      {children}
    </NewTaskContext.Provider>
  )
}

export default NewTaskContextProvider
