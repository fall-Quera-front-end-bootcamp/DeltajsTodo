/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useContext } from 'react'
import { UserDispatchContext } from '../../contexts/UserProvider'
import '../../dist/output.css'
import ShareButton from '../Buttons/ShareButton'
import TaskMoreOption from './TaskMoreOption'
import { localPageDispatchContext } from '../../pages/MainLayout'
import { Navigate, useNavigate } from 'react-router-dom'

function TaskMore({
  workspaceID,
  projectID
}: {
  workspaceID: string
  projectID: string
}): JSX.Element {
  const dispatch: any = useContext(UserDispatchContext)
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const navigate = useNavigate()
  return (
    <div
      dir="rtl"
      className="flex w-[184px] flex-col gap-4 rounded-lg bg-[white] p-3"
    >
      <TaskMoreOption
        color="text-[black]"
        text="ساختن تسک جدید"
        type="addTask"
        workspaceID={workspaceID}
        projectID={projectID}
      />
      <TaskMoreOption
        color="text-[black]"
        text="ویرایش نام پروژه"
        type="editProjectName"
        workspaceID={workspaceID}
        projectID={projectID}
        onClickHandler={() =>
          localPageDispatch({
            type: 'openNewProjectTitle',
            WID: workspaceID,
            PID: projectID
          })
        }
      />
      <TaskMoreOption
        color="text-[black]"
        text="کپی لینک"
        type="linkCopy"
        workspaceID={workspaceID}
        projectID={projectID}
      />
      <TaskMoreOption
        color="text-[#FA5252]"
        text="حذف"
        type="remove"
        workspaceID={workspaceID}
        projectID={projectID}
        onClickHandler={() => {
          navigate('/workspac')

          dispatch({
            type: 'DeleteProject',
            WID: workspaceID,
            PID: projectID
          })
        }}
      />
      <ShareButton />
    </div>
  )
}

export default TaskMore
