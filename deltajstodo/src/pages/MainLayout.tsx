/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent, useReducer, createContext } from 'react'
import SidebarPrimary from '../components/SideBars/SidebarPrimary'
import { Outlet } from 'react-router-dom'
import NewProject from '../components/Modals/NewProject/NewProject'
import NewWorkspace from '../components/Modals/NewWorkspace/NewWorkspace'
import Step1 from '../components/Modals/NewWorkspace/Step1'
import ChangeWorkspaceTitle from '../components/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../components/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../components/Modals/NewProject/ChangeProjectTitle'
import DarkModeContextProvider from '../contexts/DarkModeContextProvider'

interface MainLayoutProps {}

interface MainLayoutContext {
  value: number
  WorkspaceID: string
  projectID: string
}

let WIDForNewProject: null | string = null
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const [localPage, dispatch] = useReducer(StepReducer, {
    value: 0,
    WorkspaceID: '',
    projectID: ''
  })
  // const WIDForNewProject = useRef(null)

  return (
    <>
      <localPageContext.Provider value={localPage.value}>
        <localPageDispatchContext.Provider value={dispatch}>
          <div className="flex flex-row-reverse gap-4">
            <div className="fixed max-h-[100vh]">
              <SidebarPrimary />
            </div>

            <div className={'absolute right-[356px] max-w-[1100px] '}>
              <div
                className={`${localPage.value !== 0 && ' hidden  bg-gray-primary blur-md'}`}
              >
                <Outlet />
              </div>
              <div className="z-100 absolute right-[390px] top-[200px] border-black">
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
                {/**any modal for removing project ? */}
                {localPage.value === 6 && (
                  <ChangeProjectTitle
                    WID={localPage.WorkspaceID}
                    PID={localPage.projectID}
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
    case 'openNewProjectTitle': {
      return { value: 6, WorkspaceID: action?.WID, projectID: action?.PID }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
