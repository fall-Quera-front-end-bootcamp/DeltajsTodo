/* eslint-disable @typescript-eslint/no-empty-interface */
import { useSelector } from 'react-redux'
import { selectCurrentToken, selectCurrentUser } from './authSlice'
import { Link } from 'react-router-dom'
import { type FunctionComponent } from 'react'

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)

  return (
    <section>
      <h1>welcome {user?.name}</h1>
      <p>Token {token?.slice(0, 9)}</p>
      <p>
        <Link to={'/workspace'}>Go to Workspace</Link>
      </p>
    </section>
  )
}

export default Welcome
