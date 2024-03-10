import { NavLink } from 'react-router-dom'
import { type Project } from '../../utilities/models'
import { hexColors } from '../../constants'
import getKeyByValue from '../../utilities/getKeyByValue'

interface ProjectItemWorkspaceProps {
  projectID: string
  project: Project
  workspaceItemColor: string
  projectTitle: string
  workspaceID: string
}

const ProjectItemWorkspace = ({
  projectID,
  project,
  workspaceItemColor,
  projectTitle,
  workspaceID
}: ProjectItemWorkspaceProps): JSX.Element => {
  const bgColor = 'bg-' + getKeyByValue(hexColors, workspaceItemColor)
  return (
    <NavLink
      key={projectID}
      to={`/workspace/${projectID}`}
      state={{ workspaceID, project }}
      className={`h-20 w-[200px] rounded-2xl ${bgColor} flex items-center justify-center`}
    >
      <h3 className="text-boldm text-white">{projectTitle}</h3>
    </NavLink>
  )
}

export default ProjectItemWorkspace
