/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
export interface projectItem {
  id: string
  title: string
}

export interface sidebarItem {
  id: string
  title: string
  color: string
  children: projectItem[]
}
export enum Views {
  column = 643,
  row = 802,
  calender = 541
}
interface Profile {
  userInformatin: {
    name: string
    fmailyName: string
    phoneNumber: string
    profileImg: string
  }
  accountInformatin: {
    gmailAccount: string
    userName: string
    passWord: string
  }

  setting: {
    mainTheme: string
    colortheme: string
  }
}
/*---------------------      Task    ----------------------------------------- */

export interface Tag {
  id: number
  name: string
  color: string
}
interface TimeLine {
  start: Date
  deadLine: Date
}
export enum Priorities {
  asa = '#FA5252',
  high = '#FAB005',
  middle = '#15AABF',
  low = '#82C91E',
  nothing = '#C1C1C1'
}
interface Comment {
  userName: string
  profileImg: string
  gmailAccount?: string
  commentDescription: string

  id: 0
  name: 'string'
  description: 'string'
  deadline: '2024-03-12'
  priority: 9223372036854776000
  attachment: 'string'
  thumbnail: 'string'
  order: 9223372036854776000
  members: 'string'
  created_at: '2024-03-12T21:09:37.396Z'
}
export interface Task {
  readonly id: number
  name: string
  description?: string
  deadline?: string
  priority?: number
  attachment?: FormData
  thumbnail?: FormData
  order?: number
  members?: []
  created_at?: string
}
/*-----------------Board -> Project -> Workspace  ------------------------------------*/
export interface Board {
  readonly id: number
  name: string
  color: string
  tasks: Task[]
  is_archive: boolean
  tasks_count: number
}

export interface Project {
  readonly id: number
  name: string
  status: Permission.manager
  sendforPeople?: Pick<User, 'gmailAccount' | 'coverImg'>
  boards: Board[]
}
export enum Permission {
  manager,
  editor,
  commentor,
  viewer
}

/**
 * 🎈🎈🎈
 * * user workspaces + other users shared workspaces
 * * Every time should created from contex api or localstorage
 */
export interface Workspace {
  readonly id: number
  name: string
  color: string
  link?: string
  status: Permission.manager
  projects: Project[]
}
/*--------------------------------- User--------------------------------------- */
export interface User {
  id: string
  username: string
  email: string
  first_name: string
  last_name: string
  gmailAccount: string
  phone_number: string
  thumbnail: string
}

export interface TaskMembers {
  id: number
  user: User
}
/*----------------------------  Users----------------------------------- */
/**
 * whole users have account on quera Task manager
 */
interface Users {
  people: User[]
}
