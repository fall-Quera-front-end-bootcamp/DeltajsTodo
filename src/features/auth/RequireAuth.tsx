/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable multiline-ternary */
import OnBoarding from '@/app/pages/OnBoarding'
import { type FunctionComponent } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie'

interface RequireAuthProps {}

const RequireAuth: FunctionComponent<RequireAuthProps> = () => {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')

  return token ? <Outlet /> : <OnBoarding />

  // return (
  //   <>
  //     <Navigate to={'auth/login'} state={{ from: location }} replace />
  //   </>
  // )
}

export default RequireAuth
