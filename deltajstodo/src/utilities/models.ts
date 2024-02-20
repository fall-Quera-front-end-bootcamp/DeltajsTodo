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
  row,
  calander
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
enum Priorities {
  asa,
  high,
  middle,
  low
}
interface Task {
  id: string
  title: string
  projectTitle: string
  archived: false
  sendforPeople?: Pick<User, 'gmailAccount' | 'coverImg'>
  describtion?: string
  attachFiles?: string[]
  coverImg?: string
  tags: Tag[]
  timeLine: TimeLine
  priority: Priorities
}
/*-----------------Board -> Project -> Workspace  ------------------------------------*/
interface Board {
  title: string
  tasks: Task[]
}

export interface Project {
  id: string
  title: string
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
  id: string
  title: string
  color: string
  status: Permission
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
