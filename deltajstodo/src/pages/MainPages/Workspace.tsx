/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import { localPageContext } from '../../contexts/LocalPageContextProvider'
import NewWorkspace from '../../components/Common/Modals/NewWorkspace/NewWorkspace'
import NewProject from '../../components/Common/Modals/NewProject/NewProject'
import ChangeWorkspaceTitle from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../../components/Common/Modals/NewProject/ChangeProjectTitle'
import { useGetWorkspacesQuery } from '../../features/auth/authApiSlice'
import { type Workspace } from '../../utilities/models'
import Projects from '../../components/MainPage/WorkspaceComponents/Projects'
interface WorkspaceProps {}

const WorkspacePage: FunctionComponent<WorkspaceProps> = () => {
  const { value, workspaceID, projectID } = useContext(localPageContext)
  const {
    data: workspaces,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetWorkspacesQuery(null)

  // console.log(projects)

  return (
    <div className="flex h-screen w-full flex-col gap-8 pr-20 pt-20">
      {workspaces?.length === 0 ? (
        <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          <NewWorkspace />
        </div>
      ) : (
        workspaces?.map((w: Workspace) => {
          return (
            <div key={w?.id} className="flex flex-col items-end gap-8">
              <h3 className="text-boldxl">{w.name}</h3>
              <Projects w={w} />
              <div className="w-full border-[1px] border-gray-primary opacity-30"></div>
            </div>
          )
        })
      )}

      <div className="absolute right-[390px] top-[200px] z-50 border-black">
        {value === 1 && <NewWorkspace />}
        {value === 2 && <NewProject WID={workspaceID} />}
        {/* {step === 3 && <NewTask />}??? */}
        {value === 4 && <ChangeWorkspaceTitle WID={workspaceID} />}
        {value === 5 && <ChangeWorkspaceColor WID={workspaceID} />}
        {value === 6 && (
          <ChangeProjectTitle WID={workspaceID} PID={projectID} />
        )}
      </div>
    </div>
  )
}

export default WorkspacePage
