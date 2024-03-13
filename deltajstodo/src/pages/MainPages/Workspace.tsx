/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import NewWorkspace from '../../components/Common/Modals/WorkspaceModals/NewWorkspace'
import { useGetWorkspacesQuery } from '../../features/auth/authApiSlice'
import { type Workspace } from '../../utilities/models'
import Projects from '../../components/MainPage/WorkspaceComponents/Projects'
import LoadingComponent from '../../components/Common/LoadingComponent/LoadingComponent'
interface WorkspaceProps {}

const WorkspacePage: FunctionComponent<WorkspaceProps> = () => {
  const {
    data: workspaces,
    isLoading,
    isSuccess,
    isError
  } = useGetWorkspacesQuery(null)

  // console.log(projects)

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <LoadingComponent />
      </div>
    )
  } else if (isSuccess) {
    return (
      <div className="my-10 flex size-full flex-col gap-8">
        {workspaces?.length === 0 ? (
          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
            <NewWorkspace />
          </div>
        ) : (
          workspaces?.map((w: Workspace) => {
            return (
              <>
                <div key={w?.id} className="mr-5 flex flex-col items-end gap-8">
                  <h3 className="text-boldxl">{w.name}</h3>
                  <Projects w={w} />
                  <div className="w-full border-[1px] border-gray-primary opacity-30"></div>
                </div>
              </>
            )
          })
        )}
      </div>
    )
  } else if (isError) {
    return <div>Error</div>
  }
}

export default WorkspacePage
