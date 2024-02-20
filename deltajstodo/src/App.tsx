/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { type User, Permission } from './utilities/models'
import { useRef } from 'react'
import EmptyArea from './pages/EmptyArea'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  const User = useRef<User>({
    id: '1',
    gmailAccount: 'abc@gmail.com',
    coverImg: './asset/123.png',
    profile: {
      userInformatin: {
        name: 'نیلوفر',
        fmailyName: 'موجودی',
        phoneNumber: '098765432',
        profileImg: './'
      },
      accountInformatin: {
        gmailAccount: 'abc@gmail.com',

        userName: 'NM',
        passWord: '12345678'
      },
      setting: {
        mainTheme: 'light',
        colortheme: 'green'
      }
    },
    workspaces: [
      {
        id: '1',
        title: 'درس مدیریت پروژه',
        color: 'bg-[#40C057]',
        status: Permission.manager,
        projects: [
          {
            id: '11',
            title: 'پروژه اول',
            boards: [
              {
                title: '',
                tasks: []
              }
            ]
          },
          {
            id: '12',
            title: 'پروژه دوم',
            boards: [
              {
                title: '',
                tasks: []
              }
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'درس کامپایلر',
        color: 'bg-[#FA5252]',
        status: Permission.manager,
        projects: [
          {
            id: '21',
            title: '  پروژه اول',
            boards: [
              {
                title: '',
                tasks: []
              }
            ]
          },
          {
            id: '22',
            title: 'پروژه دوم',
            boards: [
              {
                title: '',
                tasks: []
              }
            ]
          }
        ]
      }
    ]
  })

  return (
    <>
      <Routes>
        <Route path="api/auth/login" element={<Login />} />
        <Route path="/" element={<EmptyArea />} />
        <Route
          path="/workspace"
          element={<MainLayout currentUser={User.current} />}
        >
          <Route path=":projectID" element={<Board />} />
        </Route>
        <Route path="api/auth/register" element={<Register />} />
        <Route path="api/auth/forgetPassword" element={<ForgetPassword />} />
        <Route path="api/auth/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
