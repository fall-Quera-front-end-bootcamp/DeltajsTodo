import { type FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <>
      <div>
        <p>Loging...</p>
      </div>
      <div>
        <button>
          <NavLink to="/api/auth/register"></NavLink>
        </button>
      </div>
      <div>
        <button>
          <NavLink to="/api/auth/resetPassword">Click To reset</NavLink>
        </button>
      </div>
      <div>
        <button>
          <NavLink to="/api/auth/forgetPassword">Click To forget</NavLink>
        </button>
      </div>
    </>
  )
}

export default Login
