import { NavLink } from 'react-router-dom'
import { type Project } from '../../utilities/models'

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
  return (
    <NavLink
      key={projectID}
      to={`/workspace/${projectID}`}
      state={{ workspaceID, project }}
    >
      <div
        className={`${'bg-[' + workspaceItemColor + ']'}  flex h-[80px] w-[200px] items-center justify-center rounded-2xl bg-gradient-to-r ${'from-[' + workspaceItemColor + '00]'} ${'to-[' + workspaceItemColor + '00]'}`}
      >
        <div className="">{projectTitle}</div>
      </div>
    </NavLink>
  )
}

export default ProjectItemWorkspace
