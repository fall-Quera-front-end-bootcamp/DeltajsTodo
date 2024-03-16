import { NavLink } from 'react-router-dom'
import { hexColors } from '../../../constants'
import getKeyByValue from '../../../utilities/getKeyByValue'
import { useGetProjectQuery } from '../../../features/auth/authApiSlice'
import { type FunctionComponent } from 'react'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent'

interface ProjectItemWorkspaceProps {
  projectID: number
  workspaceItemColor: string
  workspaceItemID: number
}

const ProjectItemWorkspace: FunctionComponent<ProjectItemWorkspaceProps> = ({
  projectID,
  workspaceItemColor,
  workspaceItemID
}) => {
  // const bgColor = 'bg-' + getKeyByValue(hexColors, workspaceItemColor)
  const {
    data: project,
    isLoading,
    isError,
    isSuccess
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectID })
  if (isLoading) {
    return (
      <div className="flex h-20 w-[208px] items-center justify-center rounded-2xl bg-gray-secondary">
        <LoadingComponent />
      </div>
    )
  } else if (isSuccess) {
    return (
      <NavLink
        key={projectID}
        to={`/workspace/${project?.id}`}
        state={{ workspaceItemID, projectItemID: projectID }}
      >
        <div
          className="flex h-20 w-52 items-center justify-center rounded-2xl shadow-[0px_3px_4px_0px_#00000033]
          "
          style={{
            background: `linear-gradient(249.83deg, ${workspaceItemColor} 0%, ${workspaceItemColor + '95'} 100%)`
          }}
        >
          <h3 className="text-boldm text-white">{project?.name}</h3>
        </div>
      </NavLink>
    )
  } else if (isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default ProjectItemWorkspace
