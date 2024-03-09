import { createContext, useReducer } from 'react'

interface MainLayoutContext {
  value: number
  WorkspaceID: string
  projectID: string
}

let WIDForNewProject: null | string = null

export const localPageContext = createContext<{
  value: number
  WorkspaceID: string
  projectID: string
}>({
  value: 0,
  WorkspaceID: '',
  projectID: ''
})
export const localPageDispatchContext = createContext<unknown>(null)

const LocalPageContextProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [localPage, dispatch] = useReducer(StepReducer, {
    value: 0,
    WorkspaceID: '',
    projectID: ''
  })
  return (
    <localPageContext.Provider
      value={{
        value: localPage.value,
        WorkspaceID: localPage.WorkspaceID,
        projectID: localPage.projectID
      }}
    >
      <localPageDispatchContext.Provider value={dispatch}>
        {children}
      </localPageDispatchContext.Provider>
    </localPageContext.Provider>
  )
}

export default LocalPageContextProvider

function StepReducer (
  localPage: MainLayoutContext,
  action: any
): MainLayoutContext {
  switch (action?.type) {
    case 'openNewProject': {
      WIDForNewProject = action?.WID
      console.log(WIDForNewProject)

      return { ...localPage, value: 2, WorkspaceID: action?.WID }
    }

    case 'closeModal': {
      return { ...localPage, value: 0 }
    }
    case 'openNewWorkspace': {
      return { ...localPage, value: 1 }
    }
    case 'openNewWorkspaceTitle': {
      return { ...localPage, value: 4, WorkspaceID: action?.WID }
    }
    case 'openNewWorkspaceColor': {
      return { ...localPage, value: 5, WorkspaceID: action?.WID }
    }
    case 'openNewProjectTitle': {
      return { value: 6, WorkspaceID: action?.WID, projectID: action?.PID }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
