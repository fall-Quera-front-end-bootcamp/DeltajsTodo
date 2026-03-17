import { type FunctionComponent } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from '../../../auth/Login'
import NotFound from '../../../NotFound'
import ResetPassword from '../../../auth/ResetPassword'
import Register from '../../../auth/Register'
import ForgetPassword from '../../../auth/ForgetPassword'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface RoutesWithAnimationProps {}

const RoutesWithAnimation: FunctionComponent<RoutesWithAnimationProps> = () => {
  const location = useLocation()
  console.log(location)

  /** A key prop was passed in the Routes component which React uses to render the correct component when the location changes. */
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="auth/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/forgetPassword" element={<ForgetPassword />} />
        <Route path="auth/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesWithAnimation
