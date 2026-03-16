import { type FunctionComponent } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <>
      <p>Not Found...</p>
    </>
  )
}

export default NotFound
