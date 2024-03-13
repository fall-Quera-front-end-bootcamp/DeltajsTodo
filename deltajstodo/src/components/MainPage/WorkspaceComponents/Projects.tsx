/* eslint-disable multiline-ternary */
import { useContext, type FunctionComponent } from 'react'
import { useGetProjectsQuery } from '../../../features/auth/authApiSlice'
import { type Project, type Workspace } from '../../../utilities/models'
import BuildProjectItemWorkspaceButton from './BuildProjectItemWorkspaceButton'
import ProjectItemWorkspace from './ProjectItemWorkspace'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'

interface ProjectsInterface {
  w: Workspace
}

const Projects: FunctionComponent<ProjectsInterface> = ({ w }) => {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess
  } = useGetProjectsQuery({ workspace_id: w.id })

  const localPageDispatch: any = useContext(localPageDispatchContext)
  const stepDispatch: any = useContext(localPageDispatchContext)

  const handleNewProject = (): void => {
    stepDispatch({ type: 'openNewProject', WID: w.id })
  }

  if (isLoading) {
    return <LoadingComponent />
  } else if (isSuccess) {
    return (
      <div className="flex h-28 w-full flex-row-reverse gap-8 overflow-auto">
        {projects?.length !== undefined && projects?.length > 0 ? (
          <>
            {projects?.map((p: Project) => {
              return (
                <ProjectItemWorkspace
                  workspaceItemColor={w?.color}
                  projectID={p?.id}
                  workspaceItemID={w?.id}
                  key={p.id}
                />
              )
            })}
            <BuildProjectItemWorkspaceButton
              onClick={handleNewProject}
              key={w?.id}
              workspace={w}
            />
          </>
        ) : (
          <BuildProjectItemWorkspaceButton onClick={handleNewProject} key={w?.id} workspace={w} />
        )}
      </div>
    )
  } else if (isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default Projects
