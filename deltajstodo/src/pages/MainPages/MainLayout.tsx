/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent, useEffect, useContext } from 'react'
import SidebarPrimary from '../../components/MainPage/SideBarPrimary/SidebarPrimary'
import { Outlet } from 'react-router-dom'
import NewProject from '../../components/Common/Modals/ProjectModals/NewProject'
import NewWorkspace from '../../components/Common/Modals/WorkspaceModals/NewWorkspace'
import ChangeWorkspaceTitle from '../../components/Common/Modals/WorkspaceModals/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../../components/Common/Modals/WorkspaceModals/ChangeWorkspaceColor'
import ChangeProjectTitle from '../../components/Common/Modals/ProjectModals/ChangeProjectTitle'
import DeleteWorkspace from '../../components/Common/Modals/WorkspaceModals/DeleteWorkspace'
import Response from '../../components/Common/Modals/ResponseModals/Response'
import { store } from '../../app/store'
import DeleteProject from '../../components/Common/Modals/ProjectModals/DeleteProject'
import { localPageContext } from '../../contexts/LocalPageContextProvider'
import Message from '../../components/Common/Message/Message'
import NewBoard from '../../components/Common/Modals/BoardModals/NewBoard/NewBoard'
import ChangeBoardTitle from '../../components/Common/Modals/BoardModals/ChangeBoardTitle.tsx/ChangeBoardTitle'
import NewTask from '../../components/MainPage/BoardComponents/Task/NewTask/NewTask'
import DeleteBoard from '../../components/Common/Modals/BoardModals/Delete‌Board/DeleteBoard'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import NewTaskContextProvider from '../../contexts/NewTaskContextProvider'
interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const { value, workspaceID, projectID, boardID, taskID, responseData } =
    useContext(localPageContext)

  return (
    <>
      <div className="flex flex-row-reverse gap-4 overflow-hidden">
        <div className="relative max-h-[100vh]">
          <SidebarPrimary />
        </div>
        <div
          className={
            'relative h-screen w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-dark'
          }
        >
          <div className={`overflow-hidden ${value > 0 ? 'blur-3xl' : ''}`}>
            <Outlet />
          </div>
          <div className="">
            {value === 1 && (
              <NewWorkspace className={value === 1 ? '' : 'hidden'} />
            )}
            {value === 2 && <NewProject WID={workspaceID} />}
            {/* {step === 3 && <NewTask />}??? */}
            {value === 4 && <ChangeWorkspaceTitle WID={workspaceID} />}
            {value === 5 && <ChangeWorkspaceColor WID={workspaceID} />}
            {value === 6 && <DeleteWorkspace WID={workspaceID} />}
            {/**any modal for removing project ? */}
            {value === 7 && (
              <ChangeProjectTitle WID={workspaceID} PID={projectID} />
            )}
            {value === 8 && <DeleteProject WID={workspaceID} PID={projectID} />}
            {value === 9 && <NewBoard WID={workspaceID} PID={projectID} />}
            {value === 10 && (
              <ChangeBoardTitle
                WID={workspaceID}
                PID={projectID}
                BID={boardID}
              />
            )}
            {value === 11 && (
              <DeleteBoard WID={workspaceID} PID={projectID} BID={boardID} />
            )}
            {value === 12 && (
              <NewTaskContextProvider>
                <NewTask WID={workspaceID} PID={projectID} BID={boardID} />
              </NewTaskContextProvider>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
