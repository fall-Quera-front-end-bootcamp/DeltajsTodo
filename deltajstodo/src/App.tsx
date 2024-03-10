/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './dist/output.css'
import { Route, Routes } from 'react-router-dom'
import { atom } from 'jotai'
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
import Admin from './pages/Admin'
import RequireAuth from './features/auth/RequireAuth'
import Profile from './pages/Profile'

export const userId = atom(0)

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  const User = useRef<User>({
    id: 1,
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
        color: '#BE4BDB',
        status: Permission.manager,
        projects: [
          {
            id: '11',
            title: 'پروژه اول',
            status: Permission.manager,
            boards: [
              {
                id: '1111',
                title: 'pending',
                color: '#F92E8F',
                tasks: [
                  {
                    id: '111',
                    title: 'این یک تیتر برای این تسک است.',
                    projectTitle: 'پروژه اول',
                    status: Permission.manager,
                    archived: false,
                    sendforPeople: [
                      { gmailAccount: '', coverImg: '' },
                      { gmailAccount: '', coverImg: '' }
                    ],
                    describtion: '',
                    attachFiles: [''],
                    coverImg: '',
                    tags: [
                      { title: 'درس', color: 'blue' },
                      { title: 'پروژه', color: 'pink' }
                    ],
                    timeLine: {
                      start: new Date(2001),
                      deadLine: new Date(2000)
                    },
                    priority: Priorities.high
                  },
                  {
                    id: '112',
                    title: 'این یک تیتر برای این تسک است.',
                    projectTitle: 'پروژه اول',
                    status: Permission.manager,
                    archived: false,
                    sendforPeople: [{ gmailAccount: '', coverImg: '' }],
                    describtion: '',
                    attachFiles: [''],
                    coverImg: '',
                    tags: [
                      { title: 'درس', color: 'blue' },
                      { title: 'پروژه', color: 'pink' }
                    ],
                    timeLine: {
                      start: new Date(2001),
                      deadLine: new Date(2000)
                    },
                    priority: Priorities.asa
                  },
                  {
                    id: '113',
                    title: 'این یک تیتر برای این تسک است.',
                    projectTitle: 'پروژه اول',
                    status: Permission.manager,
                    archived: false,
                    sendforPeople: [
                      { gmailAccount: '', coverImg: '' },
                      { gmailAccount: '', coverImg: '' }
                    ],
                    describtion: '',
                    attachFiles: [''],
                    coverImg: '',
                    tags: [
                      { title: 'درس', color: 'blue' },
                      { title: 'پروژه', color: 'pink' }
                    ],
                    timeLine: {
                      start: new Date(2001),
                      deadLine: new Date(2000)
                    },
                    priority: Priorities.high
                  },
                  {
                    id: '114',
                    title: 'این یک تیتر برای این تسک است.',
                    projectTitle: 'پروژه اول',
                    status: Permission.manager,
                    archived: false,
                    sendforPeople: [
                      { gmailAccount: '', coverImg: '' },
                      { gmailAccount: '', coverImg: '' }
                    ],
                    describtion: '',
                    attachFiles: [''],
                    coverImg: '',
                    tags: [
                      { title: 'درس', color: 'blue' },
                      { title: 'پروژه', color: 'pink' }
                    ],
                    timeLine: {
                      start: new Date(2001),
                      deadLine: new Date(2000)
                    },
                    priority: Priorities.high
                  }
                ]
              },
              {
                id: '1112',
                title: 'TO Do',
                color: '#FD7E14',
                tasks: [
                  {
                    id: '113',
                    title: 'این یک تیتر برای این تسک است.',
                    projectTitle: 'پروژه اول',
                    status: Permission.manager,
                    archived: false,
                    sendforPeople: [{ gmailAccount: '', coverImg: '' }],
                    describtion: '',
                    attachFiles: [''],
                    coverImg: '',
                    tags: [
                      { title: 'درس', color: 'blue' },
                      { title: 'پروژه', color: 'pink' }
                    ],
                    timeLine: {
                      start: new Date(2000),
                      deadLine: new Date(1999)
                    },
                    priority: Priorities.asa
                  }
                ]
              },
              {
                id: '1113',
                title: 'In Progress',
                color: '#FAB005',
                tasks: []
              }
            ]
          },
          {
            id: '12',
            title: 'پروژه دوم',
            status: Permission.manager,
            boards: [
              {
                id: '1124',
                title: '',
                color: '',
                tasks: []
              }
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'درس کامپایلر',
        color: '#FA5252',
        status: Permission.manager,
        projects: [
          {
            id: '21',
            title: '  پروژه اول',
            status: Permission.manager,
            boards: [
              {
                id: '1121',
                title: '',
                color: '',
                tasks: []
              }
            ]
          },
          {
            id: '22',
            title: 'پروژه دوم',
            status: Permission.manager,
            boards: [
              {
                id: '1122',
                title: '',
                color: '',
                tasks: []
              }
            ]
          }
        ]
      },
      {
        id: '3',
        title: 'کارهای شخصی',
        color: '#FAB005',
        status: Permission.manager,
        projects: [
          {
            id: '31',
            title: 'پروژه اول',
            status: Permission.manager,
            boards: [
              {
                id: '1131',
                title: '',
                color: '',
                tasks: []
              }
            ]
          },
          {
            id: '32',
            title: 'پروژه دوم',
            status: Permission.manager,
            boards: [
              {
                id: '1132',
                title: '',
                color: '',
                tasks: []
              }
            ]
          }
        ]
      },
      {
        id: '4',
        title: 'درس طراحی الگوریتم',
        color: '#228BE6',
        status: Permission.manager,
        projects: []
      }
    ]
  })
  const initialvalue = User.current
  const [user, dispatch] = useReducer(UserReducer, initialvalue)

  return (
    <>
      <UserContext.Provider value={user}>
        <UserDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="api/auth/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Login />} />
            <Route path="api/auth/register" element={<Register />} />

            <Route
              path="api/auth/forgetPassword"
              element={<ForgetPassword />}
            />
            <Route path="api/auth/resetPassword" element={<ResetPassword />} />

            <Route element={<RequireAuth />}>
              <Route path="/workspace" element={<MainLayout />}>
                <Route path=":projectID" element={<Board />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
function UserReducer(user: User, action: any): User {
  switch (action?.type) {
    case 'AddWorkspace': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      deepcopy.workspaces.push(action?.new_workspace)

      return { ...user, ...deepcopy }
    }
    case 'changeWorkspaceTitle': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      const index = deepcopy.workspaces.findIndex((w: W) => w.id === action?.id)
      deepcopy.workspaces[index].title = action?.new_title
      return { ...user, ...deepcopy }
    }
    case 'changeWorkspaceColor': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      const index = deepcopy.workspaces.findIndex((w: W) => w.id === action?.id)
      console.log(action?.new_color)

      deepcopy.workspaces[index].color = action?.new_color
      return { ...user, ...deepcopy }
    }
    case 'DeleteWorkspace': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      deepcopy.workspaces = deepcopy.workspaces.filter(
        (t: W) => t?.id !== action?.id
      )
      return { ...user, ...deepcopy }
    }
    case 'AddProject': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      console.log(action?.WID)

      const index = deepcopy.workspaces.findIndex(
        (w: W) => action?.WID === w.id
      )
      console.log(index)

      deepcopy?.workspaces[index]?.projects?.push(action?.new_project)
      return { ...user, ...deepcopy }
    }
    case 'changeProjectTitle': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      const index = deepcopy.workspaces.findIndex(
        (w: W) => w.id === action?.WID
      )
      const index2 = deepcopy.workspaces[index].projects.findIndex(
        (p: P) => p.id === action?.PID
      )
      deepcopy.workspaces[index].projects[index2].title = action?.new_title
      return { ...user, ...deepcopy }
    }
    case 'DeleteProject': {
      const deepcopy = JSON.parse(JSON.stringify(user))
      const index = deepcopy.workspaces.findIndex(
        (w: W) => w.id === action?.WID
      )
      deepcopy.workspaces[index].projects = deepcopy.workspaces[
        index
      ].projects.filter((p: P) => p?.id !== action?.PID)
      return { ...user, ...deepcopy }
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
