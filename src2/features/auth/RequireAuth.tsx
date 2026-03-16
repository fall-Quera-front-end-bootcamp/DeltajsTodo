/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable multiline-ternary */
import { type FunctionComponent } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie'

interface RequireAuthProps {}

const RequireAuth: FunctionComponent<RequireAuthProps> = () => {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')
  const location = useLocation()

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={'api/auth/login'} state={{ from: location }} replace />
  )
}

export default RequireAuth
