/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'
import { type User } from '../utilities/models'

export const UserContext = createContext<User | null>(null)

export const UserDispatchContext = createContext<unknown>(null)
// interface UserProviderProps {
//   children: any
// }
// export function UserProvider({ children }: UserProviderProps): JSX.Element {
//   const [tasks, dispatch] = useReducer(UserReducer, initialTasks)

//   return (
//     <UserContext.Provider value={tasks}>
//       <UserDispatchContext.Provider value={dispatch}>
//         {children}
//       </UserDispatchContext.Provider>
//     </UserContext.Provider>
//   )
// }

// export function useUser() {
//   return useContext(UserDispatchContext)
// }

// export function useUserDispatch() {
//   return useContext(UserDispatchContext)
// }

// function UserReducer(User, action) {
//   switch (action.type) {
//     case 'added': {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false
//         }
//       ]
//     }
//     case 'changed': {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task
//         } else {
//           return t
//         }
//       })
//     }
//     case 'deleted': {
//       return tasks.filter((t) => t.id !== action.id)
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type)
//     }
//   }
// }

// const initialTasks: User = {
//   id: '1',
//   gmailAccount: 'abc@gmail.com',
//   coverImg: './asset/123.png',
//   profile: {
//     userInformatin: {
//       name: 'نیلوفر',
//       fmailyName: 'موجودی',
//       phoneNumber: '098765432',
//       profileImg: './'
//     },
//     accountInformatin: {
//       gmailAccount: 'abc@gmail.com',

//       userName: 'NM',
//       passWord: '12345678'
//     },
//     setting: {
//       mainTheme: 'light',
//       colortheme: 'green'
//     }
//   },
//   workspaces: [
//     {
//       id: '1',
//       title: 'درس مدیریت پروژه',
//       color: 'bg-[#40C057]',
//       status: Permission.manager,
//       projects: [
//         {
//           id: '11',
//           title: 'پروژه اول',
//           status: Permission.manager,
//           boards: [
//             {
//               title: '',
//               tasks: []
//             }
//           ]
//         },
//         {
//           id: '12',
//           title: 'پروژه دوم',
//           status: Permission.manager,
//           boards: [
//             {
//               title: '',
//               tasks: []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: '2',
//       title: 'درس کامپایلر',
//       color: 'bg-[#FA5252]',
//       status: Permission.manager,
//       projects: [
//         {
//           id: '21',
//           title: '  پروژه اول',
//           status: Permission.manager,
//           boards: [
//             {
//               title: '',
//               tasks: []
//             }
//           ]
//         },
//         {
//           id: '22',
//           title: 'پروژه دوم',
//           status: Permission.manager,
//           boards: [
//             {
//               title: '',
//               tasks: []
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
