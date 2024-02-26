/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { type Project } from '../../../utilities/models'

interface ProjectItemProps {
  workspaceID: string
  project: Project
  projectItemID: string
  projectItemTitle: string
}

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  workspaceID,
  project,
  projectItemTitle,
  projectItemID
}) => {
  return (
    <>
      <div className="flex w-[246px] cursor-pointer justify-end  space-x-2 hover:bg-[#E9F9FF]">
        <NavLink
          key={projectItemID}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#E9F9FF' : '',
              width: isActive ? '246px' : ''
            }
          }}
          to={`/workspace/${projectItemID}`}
          state={project}
        >
          <p className="text-right text-[16px] font-medium text-[#1E1E1E]">
            {projectItemTitle}
          </p>
        </NavLink>

        {/* <div>
          <div className="size-[20px] rounded-[4px]"></div>
        </div> */}
      </div>
    </>
  )
}

export default ProjectItem
