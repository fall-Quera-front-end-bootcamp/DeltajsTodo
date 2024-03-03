import './dist/output.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'
import Workspace from './pages/Workspace'
import MainLayout from './pages/MainLayout'
import Board from './pages/Board'
import {
  type User,
  Permission,
  type Workspace as W,
  type Project as P,
  Priorities
} from './utilities/models'
import { useReducer, useRef } from 'react'
import EmptyArea from './pages/EmptyArea'
import { UserContext, UserDispatchContext } from './contexts/UserProvider'
import NewProject from './components/Modals/NewProject/NewProject'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <>
      <UserContext.Provider value={user}>
        <UserDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="api/auth/login" element={<Login />} />
            <Route path="/" element={<EmptyArea />} />
            <Route path="/workspace" element={<MainLayout />}>
              <Route path=":projectID" element={<Board />} />
            </Route>
            <Route path="api/auth/register" element={<Register />} />
            <Route
              path="api/auth/forgetPassword"
              element={<ForgetPassword />}
            />
            <Route path="api/auth/resetPassword" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
