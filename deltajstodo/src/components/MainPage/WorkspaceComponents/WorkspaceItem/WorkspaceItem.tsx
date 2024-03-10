/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useContext } from 'react'
import { type Project } from '../../../utilities/models'
import ProjectItem from '../../SideBarPrimary/WorkspaceItem/ProjectItem/ProjectItem'
import { NavLink } from 'react-router-dom'
import ProjectMore from '../../MainPage/BoardComponents/Column-more/ProjectMore'

import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import ItemColor from '../../Common/Icons/ItemColor'

interface WorkspaceItemProps {
  workspaceItemID: string
  workspaceItemTitle: string
  workspaceItemColor: string
  projectItems: Project[]
}

const WorkspaceItem: FunctionComponent<WorkspaceItemProps> = ({
  workspaceItemID,
  workspaceItemColor,
  workspaceItemTitle,
  projectItems
}) => {
  const [isSelected, setSelect] = useState<boolean>(false)
  const [isColumnMoreSelected, setColumnMoreSelect] = useState<boolean>(false)
  const stepDispatch: any = useContext(localPageDispatchContext)

  return (
    <>
      <button className="group flex w-[274px] h-[31px] cursor-pointer justify-between space-x-2 hover:bg-[#E9F9FF]">
        <div className="invisible w-[20px] group-hover:visible ">
          <div
            className="w-[30px] cursor-pointer"
            onClick={() => setColumnMoreSelect((prev) => !prev)}
          >
            ...
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute top-[20px] right-[-100px]"
            onMouseLeave={() => setColumnMoreSelect(false)}
          >
            {isColumnMoreSelected && <ProjectMore id={workspaceItemID} />}
          </div>
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
            <div className={'size-[20px] rounded-[4px]  '}>
              <ItemColor color={workspaceItemColor} />
            </div>
          </div>
        </div>
      </button>

      {isSelected ? (
        projectItems.length > 0 ? (
          projectItems?.map((project) => {
            return (
              <>
                <div key={project.id}>
                  <li>
                    <ProjectItem
                      workspaceItemID={workspaceItemID}
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
            <button
              className=" text-bodys w-[274px] gap-[8px] rounded-[8px] border-[2px] border-[#208D8E] p-[4px] text-center font-normal text-[#208D8E] "
              onClick={() =>
                stepDispatch({ type: 'openNewProject', WID: workspaceItemID })
              }
            >
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
