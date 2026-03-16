import { JSX } from 'react'
import DarkModeContextProvider from './DarkModeContextProvider'
import DateContextProvider from './DateContextProvider'

const AllContext = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <DateContextProvider>
        <DarkModeContextProvider>{children}</DarkModeContextProvider>
      </DateContextProvider>
    </>
  )
}

export default AllContext
