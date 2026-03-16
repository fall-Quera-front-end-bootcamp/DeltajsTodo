import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Cart from './pages/Cart'
import RootLayout from './pages/RootLayout'
import AllContext from './context/AllContext'
import Login from './pages/AuthPages/Login'
import Admin from './pages/Admin'
import Register from './pages/AuthPages/Register'
import EmptyArea from './pages/EmptyArea'
import ForgetPassword from './pages/AuthPages/ForgetPassword'
import ResetPassword from './pages/AuthPages/ResetPassword'
import Profile from './pages/MainPages/Profile'
import RequireAuth from './features/auth/RequireAuth'
import LocalPageContextProvider from './context/LocalPageContextProvider'
import MainLayout from './pages/MainPages/MainLayout'
import WorkspacePage from './pages/MainPages/Workspace'
import Board from './pages/MainPages/Board'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <AllContext>
        <Routes>
          {/* <Route path="/">
            <Route
              path=""
              element={
                <RootLayout>
                  <Home />
                </RootLayout>
              }
            />
            <Route
              path="shop"
              element={
                <RootLayout>
                  <Shop />
                </RootLayout>
              }
            />
            <Route
              path="cart"
              element={
                <RootLayout>
                  <Cart />
                </RootLayout>
              }
            />
          </Route> */}
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
    </>
  )
}
