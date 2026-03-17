import { JSX } from 'react'
import DarkModeContextProvider from './DarkModeContextProvider'
import DateContextProvider from './DateContextProvider'
import LocalPageContextProvider from './LocalPageContextProvider'

const AllContext = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <LocalPageContextProvider>
        <DateContextProvider>
          <DarkModeContextProvider>{children}</DarkModeContextProvider>
        </DateContextProvider>
      </LocalPageContextProvider>
    </>
  )
}

export default AllContext
