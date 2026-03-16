import { type FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayOutProps {}

const LayOut: FunctionComponent<LayOutProps> = () => {
  return (
    <>
      <div>
        <p>this is Layout</p>
        <Outlet />
      </div>
    </>
  )
}

export default LayOut
