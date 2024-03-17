/* eslint-disable no-extra-boolean-cast */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type FunctionComponent, useContext } from 'react'
import ColumnHeader from './ColumnHeader'
import { useGetBoardQuery } from '../../../../../../features/auth/authApiSlice'
import BuildTaskButtonPrimary from '../../../Task/BuildTaskButtons/BuildTaskButtonPrimary'
import LoadingComponent from '../../../../../Common/LoadingComponent/LoadingComponent'
import { localPageDispatchContext } from '../../../../../../contexts/LocalPageContextProvider'
import ColumnTask from './ColumnTask'

interface ColumnProps {
  WID: number
  PID: number
  BID: number
}

const Column: FunctionComponent<ColumnProps> = ({ WID, PID, BID }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const {
    data: board,
    isLoading,
    isError,
    isSuccess
  } = useGetBoardQuery({ workspace_id: WID, project_id: PID, id: BID })

  if (isLoading) {
    return (
      <div className="mt-14 flex h-10 w-[270px] flex-col items-center justify-start gap-4 rounded-3xl bg-gray-secondary">
        <LoadingComponent />
      </div>
    )
  } else if (isSuccess) {
    return (
      <>
        <div className="group mt-4 flex h-[70vh] flex-col gap-4">
          <ColumnHeader board={board} WID={WID} PID={PID} BID={BID} />
          <ColumnTask WID={WID} PID={PID} BID={BID} />
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
  } else if (isError) {
    return <>Error</>
  }
}

export default Column
