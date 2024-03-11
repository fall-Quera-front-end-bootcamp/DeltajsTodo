/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import { UserContext } from '../../contexts/UserProvider'
import { localPageContext } from '../../contexts/LocalPageContextProvider'
import NewWorkspace from '../../components/Common/Modals/NewWorkspace/NewWorkspace'
import NewProject from '../../components/Common/Modals/NewProject/NewProject'
import ChangeWorkspaceTitle from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../../components/Common/Modals/NewProject/ChangeProjectTitle'
import ProjectItemWorkspace from '../../components/MainPage/WorkspaceComponents/ProjectItemWorkspace'
import BuildProjectItemWorkspaceButton from '../../components/MainPage/WorkspaceComponents/BuildProjectItemWorkspaceButton'
import { useGetWorkspacesQuery } from '../../features/auth/authApiSlice'
import { Workspace } from '../../utilities/models'
interface WorkspaceProps {}

const Workspace: FunctionComponent<WorkspaceProps> = () => {
  const user = useContext(UserContext)
  const { value, WorkspaceID, projectID } = useContext(localPageContext)
  const {
    data: workspaces,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetWorkspacesQuery(null)

  return (
    <div className="flex h-screen w-full flex-col gap-8 overflow-auto pr-20 pt-20">
      {workspaces?.length === 0
        ? (
        <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          <NewWorkspace />
        </div>
          )
        : (
            workspaces?.map((w: Workspace) => {
              return (
            <>
              <div key={w?.id} className="flex flex-col items-end gap-8">
                <h3 className="text-boldxl">{w.name}</h3>
                <div className="flex flex-row-reverse gap-8 dark:bg-gray-dark">
                  {w?.projects?.length !== undefined &&
                  w?.projects?.length > 0
                    ? (
                        w?.projects?.map((p) => {
                          return (
                        <ProjectItemWorkspace
                          workspaceItemColor={w?.color}
                          project={p}
                          projectID={p?.id}
                          projectTitle={p?.name}
                          workspaceID={w?.id}
                          key={p.id}
                        />
                          )
                        })
                      )
                    : (
                    <BuildProjectItemWorkspaceButton
                      key={w?.id}
                      workspace={w}
                    />
                      )}
                </div>
                <div className="w-full border-[1px] border-gray-primary opacity-30"></div>
              </div>
            </>
              )
            })
          )}

      <div className="absolute right-[390px] top-[200px] z-50 border-black">
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
  )
}

export default Workspace
