import { JSX } from 'react'
import DarkModeContextProvider from './DarkModeContextProvider'
import DateContextProvider from './DateContextProvider'
import LocalPageContextProvider from './LocalPageContextProvider'
import { UseModalContextProvider } from './UseModalContext'

const AllContext = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <LocalPageContextProvider>
        <DateContextProvider>
          <UseModalContextProvider>
            <DarkModeContextProvider>{children}</DarkModeContextProvider>
          </UseModalContextProvider>
        </DateContextProvider>
      </LocalPageContextProvider>
    </>
  )
}

export default AllContext
