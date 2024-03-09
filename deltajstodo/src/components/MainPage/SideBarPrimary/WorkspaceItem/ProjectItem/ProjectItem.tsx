/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { type Project } from '../../../../../utilities/models'

import TaskMore from '../../../BoardComponents/Column-more/TaskMore'

interface ProjectItemProps {
  workspaceItemID: string
  project: Project
  projectItemID: string
  projectItemTitle: string
}

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  workspaceItemID,
  project,
  projectItemTitle,
  projectItemID
}) => {
  const [isColumnMoreSelected, setColumnMoreSelect] = useState<boolean>(false)

  return (
    <NavLink
      key={projectItemID}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? '#E9F9FF' : '',
          width: isActive ? '246px' : ''
        }
      }}
      to={`/workspace/${projectItemID}`}
      state={{ workspaceItemID, project }}
      className=" justify-between flex w-[246px] cursor-pointer"
    >
      <div className="group justify-between flex w-[246px] cursor-pointer space-x-2 hover:bg-[#E9F9FF]">
        <div className="invisible w-[20px] group-hover:visible group-hover:bg-[#E9F9FF]">
          <button
            className="w-[30px]"
            onClick={() => setColumnMoreSelect((prev) => !prev)}
          >
            ...
          </button>
        </div>
        <div className="relative">
          <div
            className="absolute top-[20px] right-[-100px]"
            onMouseLeave={() => setColumnMoreSelect(false)}
          >
            {isColumnMoreSelected && (
              <TaskMore
                workspaceID={workspaceItemID}
                projectID={projectItemID}
              />
            )}
          </div>
        </div>
        <p className="text-right text-[16px] p-1 font-medium text-[#1E1E1E]">
          {projectItemTitle}
        </p>
      </div>
    </NavLink>
  )
}

export default ProjectItem
