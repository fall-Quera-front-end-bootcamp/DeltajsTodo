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
  column = 0,
  row = 0,
  calender = 0
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

interface Tag {
  title: string
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
}
export interface Task {
  readonly id: string
  title: string
  projectTitle: string
  status: Permission.manager
  archived: false
  sendforPeople?: Array<Pick<User, 'gmailAccount' | 'coverImg'>>
  describtion?: string
  attachFiles?: string[]
  coverImg?: string
  tags: Tag[]
  timeLine: TimeLine
  priority: Priorities
  comments?: Comment[]
}
/*-----------------Board -> Project -> Workspace  ------------------------------------*/
export interface Board {
  readonly id: string
  title: string
  color: string
  tasks: Task[]
}

export interface Project {
  readonly id: string
  title: string
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
  readonly id: string
  title: string
  color: string
  link?: string
  status: Permission.manager
  projects: Project[]
}
/*--------------------------------- User--------------------------------------- */
export interface User {
  id: string
  gmailAccount: string
  coverImg: string
  profile: Profile
  workspaces: Workspace[]
}
/*----------------------------  Users----------------------------------- */
/**
 * whole users have account on quera Task manager
 */
interface Users {
  people: User[]
}
