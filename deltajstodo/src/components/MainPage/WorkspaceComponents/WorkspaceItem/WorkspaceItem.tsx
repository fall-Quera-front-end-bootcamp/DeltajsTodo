/* eslint-disable no-extra-boolean-cast */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useContext } from 'react'
import { type Workspace, type Project as P } from '../../../../utilities/models'
import ProjectItem from './ProjectItem/ProjectItem'
import { NavLink } from 'react-router-dom'
import ProjectMore from '../../BoardComponents/Column-more/ProjectMore'

import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import ItemColor from '../../../Common/Icons/ItemColor'
import { useGetProjectsQuery } from '../../../../features/auth/authApiSlice'

interface WorkspaceItemProps {
  workspace: Workspace
}

const WorkspaceItem: FunctionComponent<WorkspaceItemProps> = ({
  workspace
}) => {
  const [isSelected, setSelect] = useState<boolean>(false)
  const [isColumnMoreSelected, setColumnMoreSelect] = useState<boolean>(false)
  const stepDispatch: any = useContext(localPageDispatchContext)

  /////////////////////////////// api//////////////////////////

  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetProjectsQuery({ workspace_id: workspace.id })
  ///////////////////////////////////////////////////////////
  if (!!isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (!!isSuccess) {
    return (
      <>
        <button className="group flex w-[274px] h-[31px] cursor-pointer justify-between space-x-2 hover:bg-[#E9F9FF]">
          <div className="invisible w-[20px] group-hover:visible ">
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
              {isColumnMoreSelected && <ProjectMore id={workspace.id} />}
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
                  {workspace.name}
                </p>
              </NavLink>
            </div>

            <div>
              <div className={'size-[20px] rounded-[4px]  '}>
                <ItemColor color={workspace.color} />
              </div>
            </div>
          </div>
        </button>

        {isSelected ? (
          projects.length > 0 ? (
            projects?.map((project: P) => {
              return (
                <>
                  <div key={project.id}>
                    <li>
                      <ProjectItem
                        workspaceItemID={workspace.id}
                        projectID={project.id}
                      />
                    </li>
                  </div>
                </>
              )
            })
          ) : (
            <>
              <button
                disabled={isLoading}
                className=" text-bodys w-[274px] gap-[8px] rounded-[8px] border-[2px] border-[#208D8E] p-[4px] text-center font-normal text-[#208D8E] "
                onClick={() =>
                  stepDispatch({ type: 'openNewProject', WID: workspace.id })
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
  } else if (!!isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default WorkspaceItem
