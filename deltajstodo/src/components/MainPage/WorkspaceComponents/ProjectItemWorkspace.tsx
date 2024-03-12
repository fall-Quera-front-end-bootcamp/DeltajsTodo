import { NavLink } from 'react-router-dom'
import { hexColors } from '../../../constants'
import getKeyByValue from '../../../utilities/getKeyByValue'
import { useGetProjectQuery } from '../../../features/auth/authApiSlice'
import { type FunctionComponent } from 'react'

interface ProjectItemWorkspaceProps {
  projectID: number
  workspaceItemColor: string
  workspaceID: number
}

const ProjectItemWorkspace: FunctionComponent<ProjectItemWorkspaceProps> = ({
  projectID,
  workspaceItemColor,
  workspaceID
}) => {
  const bgColor = 'bg-' + getKeyByValue(hexColors, workspaceItemColor)
  const {
    data: project,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetProjectQuery({ workspace_id: workspaceID, id: projectID })
  if (isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (isSuccess) {
    return (
      <NavLink
        key={projectID}
        to={`/workspace/${project?.id}`}
        state={{ workspaceID, projectItemID: projectID }}
      >
        <div
          className={`h-20 w-52 rounded-2xl ${bgColor} flex items-center justify-center`}
        >
          <h3 className="text-boldm text-white">
            {project?.name}
          </h3>
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
