/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { type Project } from '../../utilities/models'
import ProjectItem from './ProjectItem/ProjectItem'
import { NavLink } from 'react-router-dom'

interface WorkspaceItemProps {
  workspaceItemTitle: string
  workspaceItemColor: string
  projectItems: Project[]
}

const WorkspaceItem: FunctionComponent<WorkspaceItemProps> = ({
  workspaceItemColor,
  workspaceItemTitle,
  projectItems
}) => {
  const [isSelected, setSelect] = useState(false)
  return (
    <>
      <div className="peer flex h-[31px] cursor-pointer justify-between space-x-2 hover:bg-[#E9F9FF]">
        <div className=" w-[20px] group-hover:block group-hover:w-[30px] peer-hover:visible">
          <button className="w-[30px]">...</button>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <div>
            <NavLink
              onClick={() => {
                setSelect((p) => !p)
              }}
              to={''}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? '#E9F9FF' : '',
                  width: isActive ? '246px' : ''
                }
              }}
            >
              <p className="h-[24] text-right text-[16px] font-medium text-[#1E1E1E]">
                {workspaceItemTitle}
              </p>
            </NavLink>
          </div>

          <div>
            <div
              className={`size-[20px] rounded-[4px] bg-[#228BE6] ${workspaceItemColor}`}
            ></div>
          </div>
        </div>
      </div>

      {isSelected ? (
        projectItems.length > 0 ? (
          projectItems?.map((project) => {
            return (
              <>
                <div key={project.id}>
                  <li>
                    <ProjectItem
                      project={project}
                      projectItemTitle={project.title}
                      projectItemID={project.id}
                    />{' '}
                  </li>
                </div>
              </>
            )
          })
        ) : (
          <>
            <button className=" text-bodys w-[274px] gap-[8px] rounded-[8px] border-[2px] border-[#208D8E] p-[4px] text-center font-normal text-[#208D8E] ">
              ساختن پروژه جدید
            </button>
          </>
        )
      ) : (
        <></>
      )}
    </>
  )
}

export default WorkspaceItem
