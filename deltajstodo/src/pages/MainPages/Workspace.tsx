/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import { UserContext } from '../../contexts/UserProvider'
import { localPageContext } from '../../contexts/LocalPageContextProvider'
import NewWorkspace from '../../components/Common/Modals/NewWorkspace/NewWorkspace'
import NewProject from '../../components/Common/Modals/NewProject/NewProject'
import ChangeWorkspaceTitle from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceTitle'
import ChangeWorkspaceColor from '../../components/Common/Modals/NewWorkspace/ChangeWorkspaceColor'
import ChangeProjectTitle from '../../components/Common/Modals/NewProject/ChangeProjectTitle'
import ProjectItemWorkspace from '../../components/WorkspaceComponents/ProjectItemWorkspace'
interface WorkspaceProps {}

const Workspace: FunctionComponent<WorkspaceProps> = () => {
  const user = useContext(UserContext)
  const { value, WorkspaceID, projectID } = useContext(localPageContext)
  return (
    <div className="flex flex-row-reverse">
      <div className="flex w-full flex-col gap-8 pr-20 pt-20">
        {user?.workspaces?.map((w) => {
          return (
            <>
              <div key={w?.id} className="flex flex-col items-end gap-8">
                <h3 className="text-boldxl">{w.title}</h3>
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
                <div className="min-w-[1000px] border-[1px] border-gray-primary opacity-30"></div>
              </div>
            </>
          )
        })}

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
    </div>
  )
}

export default Workspace
