/* eslint-disable multiline-ternary */
import { useContext, type FunctionComponent } from 'react'
import { useGetProjectsQuery } from '../../../features/auth/authApiSlice'
import { type Project, type Workspace } from '../../../utilities/models'
import BuildProjectItemWorkspaceButton from './BuildProjectItemWorkspaceButton'
import ProjectItemWorkspace from './ProjectItemWorkspace'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import Slider from '../SliderHorizontal/SliderHorizontal'

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

  const stepDispatch: any = useContext(localPageDispatchContext)

  const handleNewProject = (): void => {
    stepDispatch({ type: 'openNewProject', WID: w.id })
  }

  if (isLoading) {
    return (
      <div className="flex size-full flex-col items-center justify-center">
        <LoadingComponent />
      </div>
    )
  } else if (isSuccess) {
    return (
      <Slider className="flex h-[86px] w-full flex-row-reverse gap-8 overflow-x-auto scrollbar-thin scrollbar-track-gray-secondary scrollbar-thumb-gray-dark">
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
          <BuildProjectItemWorkspaceButton
            onClick={handleNewProject}
            key={w?.id}
            workspace={w}
          />
        )}
      </Slider>
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
