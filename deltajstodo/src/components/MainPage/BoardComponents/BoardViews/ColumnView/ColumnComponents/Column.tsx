/* eslint-disable no-extra-boolean-cast */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent, useContext } from 'react'
import ColumnHeader from './ColumnHeader'
import { type Task as T } from '../../../../../../utilities/models'
import { useGetBoardQuery } from '../../../../../../features/auth/authApiSlice'
import TaskCard from '../../../Task/TaskCard/TaskCard'
import BuildTaskButtonPrimary from '../../../Task/BuildTaskButtons/BuildTaskButtonPrimary'
import LoadingComponent from '../../../../../Common/LoadingComponent/LoadingComponent'
import NewTask from '../../../Task/NewTask/NewTask'
import { localPageDispatchContext } from '../../../../../../contexts/LocalPageContextProvider'

interface ColumnProps {
  WID: number
  PID: number
  BID: number
}

const Column: FunctionComponent<ColumnProps> = ({ WID, PID, BID }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [showNewTaskBoard, setShowNewTaskBoard] = useState(false)

  const handleNewTaskBoard = (): void => {
    setShowNewTaskBoard((p) => !p)
  }

  const {
    data: board,
    isLoading,
    isError,
    isSuccess
  } = useGetBoardQuery({ workspace_id: WID, project_id: PID, id: BID })

  if (!!isLoading) {
    return (
      <div className="mt-14 flex h-10 w-[270px] flex-col items-center justify-start gap-4 rounded-3xl bg-gray-secondary">
        <LoadingComponent />
      </div>
    )
  } else if (!!isSuccess) {
    return (
      <>
        <div className="group mt-4 flex h-[70vh] flex-col gap-4">
          <ColumnHeader
            handleNewTaskBoard={handleNewTaskBoard}
            board={board}
            WID={WID}
            PID={PID}
            BID={BID}
          />

          <div className="flex flex-col items-center gap-[16px] overflow-x-auto p-1 scrollbar-thin">
            {board.tasks.map((t: T) => {
              return <TaskCard task={t} key={t?.id} />
            })}
          </div>
          <BuildTaskButtonPrimary
            className="hidden w-full flex-row-reverse items-center justify-center gap-1 rounded-lg border-2 border-brand-primary px-3 py-2 text-brand-primary group-hover:flex"
            IconColor="#208D8E"
            title="ساختن تسک جدید"
            onClick={() => {
              localPageDispatch({ type: 'openNewTask', WID, PID, BID })
            }}
          />
        </div>
      </>
    )
  } else if (!!isError) {
    return <>Error</>
  }
}

export default Column
