/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Topbar from '../components/SideBars/Topbar'

interface EmptyAreaProps {}

const EmptyArea: FunctionComponent<EmptyAreaProps> = () => {
  return (
    <>
      <Topbar projectInfoTitle="" />
    </>
  )
}

export default EmptyArea
