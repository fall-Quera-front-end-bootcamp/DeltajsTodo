/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, type FunctionComponent, useContext, useState } from 'react'
import NewColumn from './ColumnComponents/NewColumn'
import {
  type Project,
  type Board as B,
  type Task as T
} from '../../../../../utilities/models'
import Column from './ColumnComponents/Column'
import { useGetBoardsQuery } from '../../../../../features/auth/authApiSlice'

import BuildTaskButtonPrimary from '../../Task/BuildTaskButtons/BuildTaskButtonPrimary'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import LoadingComponent from '../../../../Common/LoadingComponent/LoadingComponent'
import NewTask from '../../Task/NewTask/NewTask'

interface ColumnViewProps {
  WID: number
  PID: number

  project?: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ WID, PID }) => {
  const [showNewTask, setShowNewTask] = useState(false)
  const [showNewTaskBoard, setShowNewTaskBoard] = useState(false)
  ///////////////////////////// API FOR BOADRs ////////////////////////////////
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const handleNewTask = (): void => {
    setShowNewTask((p) => !p)
    setShowNewTaskBoard((p) => !p)
  }

  const handleNewColumn = (): void => {
    localPageDispatch({ type: 'openNewBoard', WID, PID })
  }

  const {
    data: boards,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })

  ///////////////////////////////////////////////////////////////////////////////////
  if (!!isLoading) {
    return <LoadingComponent />
  } else if (!!isSuccess) {
    return (
      <>
        <div className="relative ml-4 flex w-full flex-row-reverse scrollbar-thin scrollbar-webkit">
          {boards?.length > 0 ? (
            <div className="flex w-full flex-row-reverse gap-[16px] overflow-x-auto">
              {boards.map((b: B) => {
                return (
                  <>
                    <Column key={b.id} WID={WID} PID={PID} BID={b.id} />
                  </>
                )
              })}
              <NewColumn onClickFunc={handleNewColumn} />
            </div>
          ) : (
            <NewColumn onClickFunc={handleNewColumn} />
          )}
        </div>{' '}
        <BuildTaskButtonPrimary
          className="absolute bottom-[30px] left-[50px] flex flex-row-reverse gap-1 rounded-md bg-brand-primary p-2 text-white"
          IconColor="#ffffff"
          title="تسک جدید"
          onClick={handleNewTask}
        />
        <NewTask
          className={showNewTaskBoard ? '' : 'hidden'}
          handle={handleNewTask}
        />
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

export default ColumnView
