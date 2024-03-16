import DarkModeContextProvider from './DarkModeContextProvider'
import DateContextProvider from './DateContextProvider'
import LocalPageContextProvider from './LocalPageContextProvider'

const AllContext = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <DateContextProvider>
      <LocalPageContextProvider>
        <DarkModeContextProvider>{children}</DarkModeContextProvider>
      </LocalPageContextProvider>
    </DateContextProvider>
  )
}

export default AllContext
