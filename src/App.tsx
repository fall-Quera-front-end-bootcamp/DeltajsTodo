/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './dist/output.css'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/AuthPages/Login'
import Register from './pages/AuthPages/Register'
import ForgetPassword from './pages/AuthPages/ForgetPassword'
import ResetPassword from './pages/AuthPages/ResetPassword'
import NotFound from './pages/NotFound'
import MainLayout from './pages/MainPages/MainLayout'
import Board from './pages/MainPages/Board'
import Admin from './pages/Admin'
import RequireAuth from './features/auth/RequireAuth'
import AllContext from './contexts/AllContext'
import EmptyArea from './pages/EmptyArea'
import LocalPageContextProvider from './contexts/LocalPageContextProvider'
import WorkspacePage from './pages/MainPages/Workspace'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/MainPages/Profile'
// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <>
      <AllContext>
        <Routes>
          <Route path="api/auth/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="api/auth/register" element={<Register />} />
          <Route path="/e" element={<EmptyArea />} />
          <Route path="api/auth/forgetPassword" element={<ForgetPassword />} />
          <Route path="api/auth/resetPassword" element={<ResetPassword />} />

          <Route path="/" element={<RequireAuth />}>
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
      <Toaster />
    </>
  )
}

export default App
