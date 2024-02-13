/* eslint-disable spaced-comment */
// import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import NotFound from './pages/NotFound'
// import ForgetPassword from './pages/ForgetPassword'
// import ResetPassword from './pages/ResetPassword'
// import LayOut from './pages/LayOut'
import './dist/output.css'

import Layout from './components/layout/Layout'
import AuthCard from './components/Card/AuthCard'
import Input from './components/Input/Input'
import FormButton from './components/Buttons/FormButton'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'

import TermsConditions from './components/Modals/TermsConditions'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <>
      {/*<h1 className="m-l text-body font-yekan flex items-center">
        سلام به همه
      </h1>
  <div className="">Hello World</div>*/}
      {/* <div>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="api/auth/login" element={<Login />} />
            <Route index element={<Login />} />
            <Route path="api/auth/register" element={<Register />} />
            <Route
              path="api/auth/forgetPassword"
              element={<ForgetPassword />}
            />
            <Route path="api/auth/resetPassword" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div> */}
      {/* { <Layout buttonText={'ثبت‌نام'} linkText={'ثبت‌نام نکرده‌ای؟'}>
        <AuthCard>
          <h1>ثبت نام</h1>
          <Input name="نام کاربری" type="password" />
          <FormButton text="ورود" />
          <Input name="نام کاربری" type="password" />
        </AuthCard>
      </Layout>} */}
      <TermsConditions/>

      {/* <Routes>
        <Route path="api/auth/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="api/auth/register" element={<Register />} />
        <Route path="api/auth/forgetPassword" element={<ForgetPassword />} />
        <Route path="api/auth/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App
