import { type FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <>
      <div>
        <p>Registering...</p>
      </div>
      <button>
        <NavLink to="/api/auth/Login">Click To Login</NavLink>
      </button>
    </>
  )
}

export default Register
