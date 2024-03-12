/* eslint-disable no-extra-boolean-cast */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'
import ColumnHeader from './ColumnHeader'
import { type Board, type Task as T } from '../../../../../../utilities/models'
import { useGetBoardQuery } from '../../../../../../features/auth/authApiSlice'
import TaskCard from '../../../Task/TaskCard/TaskCard'
import BuildTaskButtonPrimary from '../../../Task/BuildTaskButtons/BuildTaskButtonPrimary'
import LoadingComponent from '../../../../../Common/LoadingComponent/LoadingComponent'
import NewTask from '../../../Task/NewTask/NewTask'

interface ColumnProps {
  WID: number
  PID: number
  BID: number
}

const Column: FunctionComponent<ColumnProps> = ({ WID, PID, BID }) => {
  const [showNewTaskBoard, setShowNewTaskBoard] = useState(false)

  const handleNewTaskBoard = (): void => {
    setShowNewTaskBoard((p) => !p)
    // setShowNewTask((p) => !p)
  }

  const {
    data: board,
    isLoading,
    isError,
    isSuccess
  } = useGetBoardQuery({ workspace_id: WID, project_id: PID, id: BID })

  if (!!isLoading) {
    return <LoadingComponent />
  } else if (!!isSuccess) {
    return (
      <>
        <div className="group mt-4 flex h-[70vh] flex-col gap-4">
          <ColumnHeader board={board} WID={WID} PID={PID} BID={BID} />

          <div className="flex flex-col items-center gap-[16px]">
            {board.tasks.map((t: T) => {
              return <TaskCard task={t} key={t?.id} />
            })}
          </div>
          <BuildTaskButtonPrimary
            className="hidden w-full flex-row-reverse items-center justify-center gap-1 rounded-lg border-2 border-brand-primary px-3 py-2 text-brand-primary group-hover:flex"
            IconColor="#208D8E"
            title="ساختن تسک جدید"
            onClick={handleNewTaskBoard}
          />
          <NewTask
            className={showNewTaskBoard ? '' : 'hidden'}
            BID={BID}
            PID={PID}
            WID={WID}
            handle={handleNewTaskBoard}
          />
        </div>
      </>
    )
  } else if (!!isError) {
    return <>Error</>
  }
}

export default Column
