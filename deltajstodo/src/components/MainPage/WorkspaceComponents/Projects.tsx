/* eslint-disable multiline-ternary */
import { useGetProjectsQuery } from '../../../features/auth/authApiSlice'
import { type Project, type Workspace } from '../../../utilities/models'
import BuildProjectItemWorkspaceButton from './BuildProjectItemWorkspaceButton'
import ProjectItemWorkspace from './ProjectItemWorkspace'

const Projects = ({ w }: { w: Workspace }): JSX.Element => {
  const { data: projects } = useGetProjectsQuery({
    workspace_id: w?.id
  })

  return (
    <div className="flex w-full flex-row-reverse gap-8 overflow-auto">
      {projects?.length !== undefined && projects?.length > 0 ? (
        projects?.map((p: Project) => {
          return (
            <div key={p.id}>
              <ProjectItemWorkspace
                workspaceItemColor={w?.color}
                projectID={p?.id}
                workspaceID={w?.id}
              />
            </div>
          )
        })
      ) : (
        <BuildProjectItemWorkspaceButton key={w?.id} workspace={w} />
      )}
    </div>
  )
}

export default Projects
