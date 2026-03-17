import { Route, Routes } from 'react-router-dom'
import AllContext from '../context/AllContext'
import Admin from './pages/Admin'
import Register from './pages/auth/Register'
import EmptyArea from './pages/EmptyArea'
import ForgetPassword from './pages/auth/ForgetPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Profile from './pages/MainPages/Profile'
import LocalPageContextProvider from '../context/LocalPageContextProvider'
import MainLayout from './pages/MainPages/MainLayout'
import WorkspacePage from './pages/MainPages/Workspace'
import Board from './pages/MainPages/Board'
import NotFound from './pages/NotFound'
import Providers from './providers'
import LoginPage from './pages/auth/login/page'
import OnBoarding from './pages/OnBoarding'


export default function App() {
  return (
    <>
      <Providers>
        <AllContext>
          <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="auth/register" element={<Register />} />
            <Route path="/e" element={<EmptyArea />} />
            <Route path="auth/forgetPassword" element={<ForgetPassword />} />
            <Route path="auth/resetPassword" element={<ResetPassword />} />

            <Route path="/" element={<OnBoarding />}>
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/workspace"
                element={
                  <LocalPageContextProvider>
                    <MainLayout />
                  </LocalPageContextProvider>
                }
              >
                <Route path="" element={<WorkspacePage />} />
                <Route path=":projectID" element={<Board />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AllContext>
      </Providers>
    </>
  )
}
