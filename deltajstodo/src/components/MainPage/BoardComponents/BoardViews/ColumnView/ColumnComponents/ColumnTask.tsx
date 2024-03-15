/* eslint-disable multiline-ternary */
import { useGetTasksQuery } from '../../../../../../features/auth/authApiSlice'
import { type Task } from '../../../../../../utilities/models'
import LoadingComponent from '../../../../../Common/LoadingComponent/LoadingComponent'
import TaskCard from '../../../Task/TaskCard/TaskCard'

const ColumnTask = ({
  WID,
  PID,
  BID
}: {
  WID: number
  PID: number
  BID: number
}): JSX.Element => {
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError
  } = useGetTasksQuery({
    workspace_id: WID,
    project_id: PID,
    board_id: BID
  })

  return (
    <div className="flex flex-col items-center gap-[16px] overflow-x-auto p-1 scrollbar-thin">
      {tasks?.map((t: Task) =>
        isLoading ? (
          <LoadingComponent key={t?.id} />
        ) : isSuccess ? (
          <TaskCard
            WID={WID}
            PID={PID}
            BID={BID}
            TID={t?.id}
            task={t}
            key={t?.id}
          />
        ) : isError ? (
          <div className="">Error</div>
        ) : (
          <div className="">Error</div>
        )
      )}
    </div>
  )
}

export default ColumnTask
