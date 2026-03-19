import { JSX } from 'react'
import DarkModeContextProvider from './DarkModeContextProvider'
import DateContextProvider from './DateContextProvider'
import LocalPageContextProvider from './LocalPageContextProvider'
import { UseModalContextProvider } from './UseModalContext'
import { FloatingBallProvider } from '@/components/others/floatingBall'

const AllContext = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <LocalPageContextProvider>
        <DateContextProvider>
          <UseModalContextProvider>
            <FloatingBallProvider>
              <DarkModeContextProvider>{children}</DarkModeContextProvider>
            </FloatingBallProvider>
          </UseModalContextProvider>
        </DateContextProvider>
      </LocalPageContextProvider>
    </>
  )
}

export default AllContext
