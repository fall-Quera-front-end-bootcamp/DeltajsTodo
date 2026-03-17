import type {
  IceServer,
  PlannerTask,
  PomodoroSession,
  Project,
  Team,
  TeamMessage,
  Timer,
  User,
  VoiceRoom,
  StopwatchPersist
} from '@/types/api'

const delay = (ms = 120) => new Promise((res) => setTimeout(res, ms))

let mockUser: User = {
  id: 'u1',
  name: 'Dev User',
  email: 'dev@example.com',
  provider: 'phone',
  avatarColor: '#f59e0b',
  theme: 'light'
}

let stopwatchState: StopwatchPersist | null = null

let projects: Project[] = [
  {
    id: 'p1',
    name: 'Frontend Shell',
    color: '#22d3ee',
    description: 'Next.js app router'
  },
  {
    id: 'p2',
    name: 'API Gateway',
    color: '#f97316',
    description: 'Proxy + auth'
  }
]

let plannerTasks: PlannerTask[] = [
  {
    id: 'task1',
    title: 'Wire dashboard cards',
    status: 'doing',
    dueDate: new Date().toISOString(),
    priority: 'high',
    projectId: 'p1'
  },
  {
    id: 'task2',
    title: 'Implement SSE mock',
    status: 'todo',
    priority: 'medium',
    projectId: 'p2'
  },
  {
    id: 'task3',
    title: 'Style login page',
    status: 'done',
    priority: 'low'
  }
]

let pomodoroSessions: PomodoroSession[] = [
  {
    id: 'pom1',
    startedAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    endedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    durationMs: 25 * 60 * 1000,
    status: 'completed',
    note: 'Planner UI'
  }
]

let timers: Timer[] = [
  {
    id: 't1',
    label: 'Design review',
    elapsedMs: 12_500,
    laps: [6_000, 6_500],
    updatedAt: new Date().toISOString()
  },
  {
    id: 't2',
    label: 'Bug bash',
    elapsedMs: 44_200,
    laps: [],
    updatedAt: new Date().toISOString()
  }
]

let teams: Team[] = [
  { id: 'team1', name: 'Frontend', color: '#22c55e', members: [mockUser] }
]

let teamMessages: TeamMessage[] = [
  {
    id: 'm1',
    teamId: 'team1',
    userId: 'u1',
    body: 'Welcome to mock chat. Messages persist in-memory.',
    createdAt: new Date().toISOString(),
    user: mockUser
  }
]

let voiceRooms: VoiceRoom[] = [
  {
    id: 'vr1',
    name: 'Daily Standup',
    teamId: 'team1',
    createdAt: new Date().toISOString()
  }
]

const iceServers: IceServer[] = [
  { urls: ['stun:stun.l.google.com:19302'] },
  { urls: 'turn:relay.example.dev:3478', username: 'mock', credential: 'mock' }
]

const addId = (prefix: string) =>
  `${prefix}_${Math.random().toString(16).slice(2, 8)}`

export const mockApi = {
  delay,
  getUser: async () => {
    await delay()
    return mockUser
  },
  updateUser: async (payload: Partial<User>) => {
    await delay()
    mockUser = { ...mockUser, ...payload }
    return mockUser
  },
  saveStopwatch: async (snapshot: StopwatchPersist) => {
    await delay()
    stopwatchState = snapshot
  },
  loadStopwatch: async () => {
    await delay()
    return stopwatchState
  },
  projects: {
    list: async () => {
      await delay()
      return projects
    },
    get: async (id: string) => {
      await delay()
      return projects.find((p) => p.id === id) ?? null
    },
    create: async (
      payload: Pick<Project, 'name' | 'color' | 'teamId' | 'description'>
    ) => {
      await delay()
      const project: Project = {
        id: addId('p'),
        createdAt: new Date().toISOString(),
        ...payload
      }
      projects = [...projects, project]
      return project
    },
    remove: async (id: string) => {
      await delay()
      projects = projects.filter((p) => p.id !== id)
    }
  },
  planner: {
    list: async () => {
      await delay()
      return plannerTasks
    },
    create: async (
      payload: Pick<PlannerTask, 'title' | 'dueDate' | 'priority' | 'projectId'>
    ) => {
      await delay()
      const task: PlannerTask = {
        id: addId('task'),
        status: 'todo',
        ...payload
      }
      plannerTasks = [task, ...plannerTasks]
      return task
    },
    update: async (
      id: string,
      updates: Partial<
        Pick<
          PlannerTask,
          'title' | 'status' | 'dueDate' | 'priority' | 'projectId' | 'notes'
        >
      >
    ) => {
      await delay()
      plannerTasks = plannerTasks.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      )
      return plannerTasks.find((t) => t.id === id)!
    }
  },
  pomodoro: {
    history: async () => {
      await delay()
      return pomodoroSessions
    },
    start: async (payload?: { note?: string; durationMinutes?: number }) => {
      await delay()
      const activeExisting = pomodoroSessions.find((p) => p.status === 'active')
      if (activeExisting) return activeExisting
      const session: PomodoroSession = {
        id: addId('pom'),
        startedAt: new Date().toISOString(),
        durationMs: (payload?.durationMinutes ?? 25) * 60 * 1000,
        status: 'active',
        note: payload?.note
      }
      pomodoroSessions = [session, ...pomodoroSessions]
      return session
    },
    stop: async () => {
      await delay()
      pomodoroSessions = pomodoroSessions.map((p) =>
        p.status === 'active'
          ? { ...p, status: 'completed', endedAt: new Date().toISOString() }
          : p
      )
      return pomodoroSessions[0]!
    }
  },
  timers: {
    list: async () => {
      await delay()
      return timers
    },
    create: async (
      payload: Pick<Timer, 'label'> & { elapsedMs?: number; laps?: number[] }
    ) => {
      await delay()
      const timer: Timer = {
        id: addId('timer'),
        elapsedMs: payload.elapsedMs ?? 0,
        laps: payload.laps ?? [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        label: payload.label
      }
      timers = [timer, ...timers]
      return timer
    },
    update: async (
      id: string,
      updates: Partial<Pick<Timer, 'label' | 'elapsedMs' | 'laps'>>
    ) => {
      await delay()
      timers = timers.map((t) =>
        t.id === id
          ? { ...t, ...updates, updatedAt: new Date().toISOString() }
          : t
      )
      return timers.find((t) => t.id === id)!
    }
  },
  team: {
    list: async () => {
      await delay()
      return teams
    },
    get: async (id: string) => {
      await delay()
      return teams.find((t) => t.id === id) ?? null
    },
    create: async (payload: Pick<Team, 'name' | 'color'>) => {
      await delay()
      const team: Team = { id: addId('team'), members: [mockUser], ...payload }
      teams = [...teams, team]
      return team
    },
    join: async (inviteCode: string) => {
      await delay()
      const team =
        teams.find((t) => t.id === inviteCode || t.name === inviteCode) ??
        teams[0]
      return team
    },
    messages: async (teamId: string) => {
      await delay()
      return teamMessages.filter((m) => m.teamId === teamId)
    },
    sendMessage: async (teamId: string, body: string) => {
      await delay()
      const message: TeamMessage = {
        id: addId('msg'),
        teamId,
        userId: mockUser.id,
        body,
        createdAt: new Date().toISOString(),
        user: mockUser
      }
      teamMessages = [...teamMessages, message]
      return message
    }
  },
  voice: {
    rooms: async () => {
      await delay()
      return voiceRooms
    },
    create: async (payload: Pick<VoiceRoom, 'name' | 'teamId'>) => {
      await delay()
      const room: VoiceRoom = {
        id: addId('vr'),
        createdAt: new Date().toISOString(),
        ...payload
      }
      voiceRooms = [...voiceRooms, room]
      return room
    },
    ice: async () => {
      await delay()
      return iceServers
    }
  }
}
