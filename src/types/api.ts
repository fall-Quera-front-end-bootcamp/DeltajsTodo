import type { StopwatchSnapshot } from 'packages/time-core'

export type User = {
  id: string
  name: string
  email?: string
  avatar?: string
  avatarColor?: string
  provider?: 'google' | 'github' | 'phone'
  theme?: 'dark' | 'light'
}

export type Project = {
  id: string
  name: string
  color?: string
  teamId?: string
  description?: string
  createdAt?: string
  updatedAt?: string
}

export type PlannerTask = {
  id: string
  title: string
  status: 'todo' | 'doing' | 'done' | 'archived'
  dueDate?: string
  priority?: 'low' | 'medium' | 'high'
  projectId?: string
  assigneeId?: string
  notes?: string
  createdAt?: string
  updatedAt?: string
}

export type PomodoroSession = {
  id: string
  startedAt: string
  endedAt?: string
  durationMs: number
  status: 'active' | 'completed' | 'stopped'
  note?: string
}

export type Timer = {
  id: string
  label?: string
  elapsedMs: number
  laps?: number[]
  createdAt?: string
  updatedAt?: string
}

export type Team = {
  id: string
  name: string
  color?: string
  projectIds?: string[]
  members?: User[]
  createdAt?: string
}

export type TeamMessage = {
  id: string
  teamId: string
  userId: string
  body: string
  createdAt: string
  user?: User
}

export type VoiceRoom = {
  id: string
  name: string
  teamId?: string
  createdAt?: string
}

export type IceServer = {
  urls: string | string[]
  username?: string
  credential?: string
}

export type DashboardSummary = {
  todayTimers: number
  activePomodoro?: PomodoroSession | null
  tasksDue: number
  recentMessages: TeamMessage[]
}

export type AuthSession = {
  user: User
  issuedAt?: string
  expiresAt?: string
}

export type Paginated<T> = {
  items: T[]
  total: number
  page?: number
  pageSize?: number
}

export type ApiError = {
  message: string
  status?: number
}

export type StopwatchPersist = StopwatchSnapshot

export type DashboardWidget = {
  title: string
  value: string | number
  description?: string
}

export type ProjectSummary = Project & {
  taskCount?: number
  activeTimers?: number
}
