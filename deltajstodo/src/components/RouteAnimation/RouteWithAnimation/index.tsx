import { type FunctionComponent } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from '../../../pages/Login'
import NotFound from '../../../pages/NotFound'
import ResetPassword from '../../../pages/ResetPassword'
import Register from '../../../pages/Register'
import ForgetPassword from '../../../pages/ForgetPassword'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface RoutesWithAnimationProps {}

const RoutesWithAnimation: FunctionComponent<RoutesWithAnimationProps> = () => {
  const location = useLocation()
  console.log(location)

  /** A key prop was passed in the Routes component which React uses to render the correct component when the location changes. */
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="api/auth/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="api/auth/register" element={<Register />} />
        <Route path="api/auth/forgetPassword" element={<ForgetPassword />} />
        <Route path="api/auth/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesWithAnimation
