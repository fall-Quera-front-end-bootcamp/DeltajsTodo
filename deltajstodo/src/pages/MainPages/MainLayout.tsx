/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent, useContext } from 'react'
import SidebarPrimary from '../../components/MainPage/SideBarPrimary/SidebarPrimary'
import { Outlet } from 'react-router-dom'
import NewProject from '../../components/Common/Modals/NewProject/NewProject'
import NewWorkspace from '../../components/Common/Modals/NewWorkspace/NewWorkspace'
import ChangeWorkspaceTitle from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../../components/Common/Modals/NewProject/ChangeProjectTitle'
import { localPageContext } from '../../contexts/LocalPageContextProvider'

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const { value, WorkspaceID, projectID } = useContext(localPageContext)

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
