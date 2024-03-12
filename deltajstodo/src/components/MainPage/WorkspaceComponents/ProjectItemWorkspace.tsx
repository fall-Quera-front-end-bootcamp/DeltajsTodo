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
  const bgColor = 'bg-' + getKeyByValue(hexColors, workspaceItemColor)
  const {
    data: project,
    isLoading,
    isError,
    isSuccess
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectID })
  if (isLoading) {
    return <LoadingComponent />
  } else if (isSuccess) {
    return (
      <NavLink
        key={projectID}
        to={`/workspace/${project?.id}`}
        state={{ workspaceItemID, projectItemID: projectID }}
      >
        <div
          className={`h-20 w-52 rounded-2xl ${bgColor} flex items-center justify-center`}
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
