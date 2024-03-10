/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable multiline-ternary */
import { type FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface RequireAuthProps {}

const RequireAuth: FunctionComponent<RequireAuthProps> = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={'api/auth/login'} state={{ from: location }} replace />
  )
}

export default RequireAuth
