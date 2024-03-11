/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  type FunctionComponent,
  useContext,
  useEffect,
  useReducer
} from 'react'
import SidebarPrimary from '../../components/MainPage/SideBarPrimary/SidebarPrimary'
import { Outlet } from 'react-router-dom'
import NewProject from '../../components/Common/Modals/NewProject/NewProject'
import NewWorkspace from '../../components/Common/Modals/NewWorkspace/NewWorkspace'
import ChangeWorkspaceTitle from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../../components/Common/Modals/NewProject/ChangeProjectTitle'
import { localPageContext } from '../../contexts/LocalPageContextProvider'
import { store } from '../../app/store'
import { atom } from 'jotai'

interface MainLayoutProps {}
interface MainLayoutContext {
  value: number
  WorkspaceID: number
  projectID: number
  responseData?: { type: 'success' | 'fail', message: string } | undefined
}

export const IDS = atom({ workspaceID: 0, projectID: 0 })

let WIDForNewProject: null | string = null

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const { value, WorkspaceID, projectID } = useContext(localPageContext)
  const [localPage, dispatch] = useReducer(StepReducer, {
    value: 0,
    WorkspaceID: -1,
    projectID: -1,
    responseData: { type: 'success', message: '' }
  })
  useEffect(() => {
    confirm(`Welcom ${store.getState().auth.user?.username ?? 'you'}`)
  }, [])

  return (
    <>
      <div className="flex h-screen w-full flex-row-reverse items-start gap-4 overflow-hidden">
        <SidebarPrimary />
        <div className={`h-screen w-full ${value !== 0 ? ' blur-md' : ''}`}>
          <Outlet />
        </div>
        <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          {value === 1 && <NewWorkspace />}
          {value === 2 && <NewProject WID={WorkspaceID} />}
          {/* {step === 3 && <NewTask />}??? */}
          {value === 4 && <ChangeWorkspaceTitle WID={WorkspaceID} />}
          {value === 5 && <ChangeWorkspaceColor WID={WorkspaceID} />}
          {value === 6 && (
            <ChangeProjectTitle WID={WorkspaceID} PID={projectID} />
          )}
        </div>
      </div>
    </>
  )
}

export default MainLayout

function StepReducer(
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
    case 'openDeleteWorkspace': {
      return { ...localPage, value: 7, WorkspaceID: action?.WID }
    }

    case 'openNewProjectTitle': {
      return { value: 6, WorkspaceID: action?.WID, projectID: action?.PID }
    }
    case 'openResponseModal': {
      return { ...localPage, value: -1, responseData: action?.responseData }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
