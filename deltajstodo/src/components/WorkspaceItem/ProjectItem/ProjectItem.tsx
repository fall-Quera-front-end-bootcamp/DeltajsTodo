/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { type Project } from '../../../utilities/models'
import ProjectMore from '../../Column-more/ProjectMore'

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
  //const [isColumnMoreSelected, setColumnMoreSelect] = useState<boolean>(false)

  return (
    <>
      <div className="justify-end flex w-[246px] cursor-pointer space-x-2 hover:bg-[#E9F9FF]">
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
