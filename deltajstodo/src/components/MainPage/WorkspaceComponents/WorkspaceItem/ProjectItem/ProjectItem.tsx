/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

import { useGetProjectQuery } from '../../../../../features/auth/authApiSlice'
import TaskMore from '../../../BoardComponents/Column-more/TaskMore'

interface ProjectItemProps {
  workspaceItemID: number
  projectID: number
}

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  workspaceItemID,
  projectID
}) => {
  const [isColumnMoreSelected, setColumnMoreSelect] = useState<boolean>(false)
  ////////////////////////////////////////////////////////////////////
  const {
    data: project,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectID })

  /////////////////////////////////////////////////////////////////////

  if (!!isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (!!isSuccess) {
    return (
      <>
        <div className=" justify-between flex w-[246px] cursor-pointer space-x-2 ">
          <NavLink
            key={projectID}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? '#E9F9FF' : '',
                width: isActive ? '246px' : ''
              }
            }}
            to={`/workspace/${project.id}`}
            state={{ workspaceItemID, projectItemID: projectID }}
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
                      projectID={projectID}
                    />
                  )}
                </div>
              </div>
              <p className="text-right text-[16px]  font-medium text-[#1E1E1E]">
                {project.name}
              </p>
            </div>
          </NavLink>
          {/* <div>
          <div className="size-[20px] rounded-[4px]"></div>
        </div> */}
        </div>
      </>
    )
  } else if (!!isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default ProjectItem
