/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, type FunctionComponent, useContext } from 'react'
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

interface ColumnViewProps {
  WID: number
  PID: number

  project?: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ WID, PID }) => {
  ///////////////////////////// API FOR BOADRs ////////////////////////////////
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const handleNewColumn = (): void => {
    localPageDispatch({ type: 'openNewBoard', WID, PID })
  }
  const handleChangeColumn = (): void => {
    localPageDispatch({ type: 'openNewBoardTitle', WID, PID })
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
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (!!isSuccess) {
    return (
      <>
        <div className="absolute right-0 top-[220px] overflow-y-hidden  ">
          {boards?.length > 0 ? (
            <>
              <div className="flex flex-row-reverse gap-[16px]">
                {boards.map((b: B) => {
                  return (
                    <div key={b.id}>
                      <Column WID={WID} PID={PID} BID={b.id} />
                      <BuildTaskButtonPrimary
                        className="border-brand-primary text-brand-primary hidden w-full flex-row-reverse items-center justify-center gap-1 rounded-lg border-2 px-3 py-2 group-hover:flex"
                        IconColor="#208D8E"
                        title="ساختن تسک جدید"
                        onClick={() => {}}
                      />
                    </div>
                  )
                })}
                <NewColumn onClickFunc={handleNewColumn} />
              </div>
            </>
          ) : (
            <NewColumn onClickFunc={handleNewColumn} />
          )}
        </div>
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
