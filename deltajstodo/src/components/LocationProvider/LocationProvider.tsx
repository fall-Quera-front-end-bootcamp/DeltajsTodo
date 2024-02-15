/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AnimatePresence } from 'framer-motion'
import { type ReactNode, type FunctionComponent } from 'react'

interface LocationProviderProps {
  children: ReactNode
}

const LocationProvider: FunctionComponent<LocationProviderProps> = ({
  children,
}) => {
  return <AnimatePresence>{children}</AnimatePresence>
}

export default LocationProvider
