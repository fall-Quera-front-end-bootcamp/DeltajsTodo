/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  type FunctionComponent,
  useReducer,
  createContext,
  useEffect
} from 'react'
import SidebarPrimary from '../components/SideBars/SidebarPrimary'
import { Outlet } from 'react-router-dom'
import NewProject from '../components/Modals/NewProject/NewProject'
import NewWorkspace from '../components/Modals/NewWorkspace/NewWorkspace'
import ChangeWorkspaceTitle from '../components/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../components/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../components/Modals/NewProject/ChangeProjectTitle'
import DeleteWorkspace from '../components/Modals/NewWorkspace/DeleteWorkspace'
import Response from '../components/Modals/ResponseModales/Response'
import { store } from '../app/store'
import { atom } from 'jotai'
interface MainLayoutProps {}

interface MainLayoutContext {
  value: number
  WorkspaceID: number
  projectID: number
  responseData?: { type: 'success' | 'fail'; message: string } | undefined
}

let WIDForNewProject: null | string = null
export const IDS = atom({ workspaceID: 0, projectID: 0 })
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const [localPage, dispatch] = useReducer(StepReducer, {
    value: 0,
    WorkspaceID: -1,
    projectID: -1,
    responseData: { type: 'success', message: '' }
  })
  // const WIDForNewProject = useRef(null)

  useEffect(() => {
    confirm(`Welcom ${store.getState().auth.user?.username ?? 'you'}`)
  }, [])
  return (
    <>
      <localPageContext.Provider value={localPage.value}>
        <localPageDispatchContext.Provider value={dispatch}>
          <div className="flex flex-row-reverse gap-4">
            <div className="fixed max-h-[100vh] overflow-hidden">
              <SidebarPrimary />
            </div>

            <div className={'absolute right-[356px] max-w-[1100px] '}>
              <div
                className={`${localPage.value !== 0 && ' hidden  bg-gray-primary blur-md'}`}
              >
                <Outlet />
              </div>
              <div className="absolute right-[390px] top-[200px] z-100 border-black">
                {localPage.value === 1 && <NewWorkspace />}
                {localPage.value === 2 && (
                  <NewProject WID={localPage.WorkspaceID} />
                )}
                {/* {step === 3 && <NewTask />}??? */}
                {localPage.value === 4 && (
                  <ChangeWorkspaceTitle WID={localPage.WorkspaceID} />
                )}
                {localPage.value === 5 && (
                  <ChangeWorkspaceColor WID={localPage.WorkspaceID} />
                )}
                {localPage.value === 7 && (
                  <DeleteWorkspace WID={localPage.WorkspaceID} />
                )}
                {/**any modal for removing project ? */}
                {localPage.value === 6 && (
                  <ChangeProjectTitle
                    WID={localPage.WorkspaceID}
                    PID={localPage.projectID}
                  />
                )}{' '}
                {localPage.value === -1 && (
                  <Response
                    responsetype={localPage.responseData?.type}
                    message={localPage.responseData?.message}
                  />
                )}
              </div>
            </div>
          </div>
        </localPageDispatchContext.Provider>
      </localPageContext.Provider>
    </>
  )
}

export default MainLayout
export const localPageContext = createContext<number | null>(null)
export const localPageDispatchContext = createContext<unknown>(null)
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
