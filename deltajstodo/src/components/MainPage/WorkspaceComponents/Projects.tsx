/* eslint-disable multiline-ternary */
import { useContext, type FunctionComponent, useRef } from 'react'
import { useGetProjectsQuery } from '../../../features/auth/authApiSlice'
import { type Project, type Workspace } from '../../../utilities/models'
import BuildProjectItemWorkspaceButton from './BuildProjectItemWorkspaceButton'
import ProjectItemWorkspace from './ProjectItemWorkspace'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import ClickDargToScroll from '../../../utilities/ClickDargToScroll'
import Slider from '../Slider/Slider'

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
    return <LoadingComponent />
  } else if (isSuccess) {
    return (
      <Slider className="flex h-28 w-full flex-row-reverse gap-8 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-dark">
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
