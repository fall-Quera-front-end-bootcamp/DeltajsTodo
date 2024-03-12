/* eslint-disable no-extra-boolean-cast */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type FunctionComponent } from 'react'
import ColumnHeader from './ColumnHeader'
import { type Board, type Task as T } from '../../../../../../utilities/models'
import { useGetBoardQuery } from '../../../../../../features/auth/authApiSlice'

interface ColumnProps {
  WID: number
  PID: number
  BID: number
}

const Column: FunctionComponent<ColumnProps> = ({ WID, PID, BID }) => {
  const {
    data: board,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetBoardQuery({ workspace_id: WID, project_id: PID, id: BID })

  if (!!isLoading) {
    return <p>Loading ...</p>
  } else if (!!isSuccess) {
    return (
      <>
        <div className="h-[70vh] overflow-y-scroll ">
          <div className="z-10">
            <ColumnHeader board={board} WID={WID} PID={PID} BID={BID} />
          </div>
          <div className="flex flex-col items-center gap-[16px]">
            {board.tasks.map((t: T) => {
              return <> {/*<TaskCard>*/} </>
            })}
          </div>
        </div>
      </>
    )
  } else if (!!isError) {
    return <>Error</>
  }
}

export default Column
