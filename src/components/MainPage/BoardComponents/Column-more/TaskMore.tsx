/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useContext } from 'react'
import '../../../../dist/output.css'
import ShareButton from '../../../Common/Buttons/ShareButton'
import TaskMoreOption from './TaskMoreOption'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

function TaskMore({
  workspaceID,
  projectID
}: {
  workspaceID: number
  projectID: number
}): JSX.Element {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <div
      dir="rtl"
      className="z-50 flex w-[193px] flex-col gap-4 rounded-lg bg-[white] p-3 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]"
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
        onClickHandler={() =>
          localPageDispatch({
            type: 'openDeleteProject',
            WID: workspaceID,
            PID: projectID
          })
        }
      />
      <ShareButton WID={workspaceID} />
    </div>
  )
}

export default TaskMore
