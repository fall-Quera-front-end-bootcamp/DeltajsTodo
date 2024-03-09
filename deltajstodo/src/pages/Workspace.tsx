/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import DarkModeContextProvider from '../contexts/DarkModeContextProvider'
import { UserContext } from '../contexts/UserProvider'
import LocalPageContextProvider, {
  localPageContext
} from '../contexts/LocalPageContextProvider'
import NewWorkspace from '../components/Common/Modals/NewWorkspace/NewWorkspace'
import NewProject from '../components/Common/Modals/NewProject/NewProject'
import ChangeWorkspaceTitle from '../components/Common/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../components/Common/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../components/Common/Modals/NewProject/ChangeProjectTitle'
import { Outlet } from 'react-router-dom'
import ProjectItemWorkspace from '../components/MainPage/WorkspaceComponents/ProjectItemWorkspace'
interface WorkspaceProps {}

const Workspace: FunctionComponent<WorkspaceProps> = () => {
  const user = useContext(UserContext)
  const { value, WorkspaceID, projectID } = useContext(localPageContext)
  return (
    <>
      <DarkModeContextProvider>
        <LocalPageContextProvider>
          <div className="flex flex-row-reverse">
            <div className="flex w-full flex-col gap-16 pr-20 pt-20">
              {user?.workspaces?.map((w) => {
                return (
                  <div key={w?.id} className="flex flex-col items-end gap-8">
                    <h3 className="">{w.title}</h3>
                    <div className="flex flex-row-reverse gap-8">
                      {w?.projects?.map((p) => {
                        return (
                          <ProjectItemWorkspace
                            project={p}
                            projectID={p?.id}
                            projectTitle={p?.title}
                            workspaceID={w?.id}
                            workspaceItemColor={w?.color}
                            key={p.id}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
              <div className={'absolute right-[356px] max-w-[1100px] '}>
                <div
                  className={`${value !== 0 && ' hidden  bg-gray-primary blur-md'}`}
                >
                  <Outlet />
                </div>
                <div className="z-100 absolute right-[390px] top-[200px] border-black">
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
            </div>
          </div>
        </LocalPageContextProvider>
      </DarkModeContextProvider>
    </>
  )
}

export default Workspace
