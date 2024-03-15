/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { createContext, useReducer } from 'react'

interface MainLayoutContext {
  value: number
  workspaceID: number
  projectID: number
  boardID: number
  taskID?: number
  month?: string
  day?: string
  responseData?: { type: 'success' | 'fail'; message: string } | undefined
}

export const localPageContext = createContext<MainLayoutContext>({
  value: 0,
  workspaceID: -1,
  projectID: -1,
  boardID: -1,
  taskID: -1,
  month: 'none',
  day: 'none',
  responseData: { type: 'success', message: '' }
})
export const localPageDispatchContext = createContext<unknown>(null)

const LocalPageContextProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [localPage, dispatch] = useReducer(StepReducer, {
    value: 0,
    workspaceID: -1,
    projectID: -1,
    boardID: -1,
    taskID: -1,
    month: 'none',
    day: 'none',
    responseData: { type: 'success', message: '' }
  })

  return (
    <localPageContext.Provider
      value={{
        value: localPage.value,
        workspaceID: localPage.workspaceID,
        projectID: localPage.projectID,
        boardID: localPage.boardID,
        taskID: localPage.taskID,
        responseData: localPage.responseData,
        month: localPage.month,
        day: localPage.day
      }}
    >
      <localPageDispatchContext.Provider value={dispatch}>
        {children}
      </localPageDispatchContext.Provider>
    </localPageContext.Provider>
  )
}

export default LocalPageContextProvider

function StepReducer(
  localPage: MainLayoutContext,
  action: any
): MainLayoutContext {
  switch (action?.type) {
    case 'openNewProject': {
      return { ...localPage, value: 2, workspaceID: action?.WID }
    }

    case 'closeModal': {
      return { ...localPage, value: 0 }
    }
    case 'openNewWorkspace': {
      return { ...localPage, value: 1 }
    }
    case 'openNewWorkspaceTitle': {
      return { ...localPage, value: 4, workspaceID: action?.WID }
    }
    case 'openNewWorkspaceColor': {
      return { ...localPage, value: 5, workspaceID: action?.WID }
    }
    case 'openDeleteWorkspace': {
      return { ...localPage, value: 6, workspaceID: action?.WID }
    }

    case 'openNewProjectTitle': {
      return {
        ...localPage,
        value: 7,
        workspaceID: action?.WID,
        projectID: action?.PID
      }
    }
    case 'openDeleteProject': {
      return {
        ...localPage,
        value: 8,
        workspaceID: action?.WID,
        projectID: action?.PID
      }
    }
    case 'openNewBoard': {
      return {
        ...localPage,
        value: 9,
        workspaceID: action?.WID,
        projectID: action?.PID
      }
    }
    case 'openNewBoardTitle': {
      return {
        ...localPage,
        value: 10,
        workspaceID: action?.WID,
        projectID: action?.PID,
        boardID: action?.BID
      }
    }
    case 'openDeleteBoard': {
      return {
        ...localPage,
        value: 11,
        workspaceID: action?.WID,
        projectID: action?.PID,
        boardID: action?.BID
      }
    }
    case 'openNewTask': {
      return {
        ...localPage,
        value: 12,
        workspaceID: action?.WID,
        projectID: action?.PID,
        boardID: action?.BID
      }
    }
    case 'openNewTaskLittle': {
      return {
        ...localPage,
        value: 13,
        workspaceID: action?.WID,
        projectID: action?.PID,
        boardID: action?.BID,
        month: action?.month,
        day: action?.day
      }
    }
    case 'openTaskInfo': {
      return {
        ...localPage,
        value: 14
      }
    }
    case 'openResponseModal': {
      return { ...localPage, value: -1, responseData: action?.responseData }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
