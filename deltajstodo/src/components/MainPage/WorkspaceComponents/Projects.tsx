/* eslint-disable multiline-ternary */
import { type FunctionComponent } from 'react'
import { useGetProjectsQuery } from '../../../features/auth/authApiSlice'
import { type Project, type Workspace } from '../../../utilities/models'
import BuildProjectItemWorkspaceButton from './BuildProjectItemWorkspaceButton'
import ProjectItemWorkspace from './ProjectItemWorkspace'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent'

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
            <BuildProjectItemWorkspaceButton key={w?.id} workspace={w} />
          </>
        ) : (
          <BuildProjectItemWorkspaceButton key={w?.id} workspace={w} />
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
