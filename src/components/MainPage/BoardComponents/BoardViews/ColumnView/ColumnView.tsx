/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent, useContext, useState } from 'react'
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
import Slider from '../../../SliderHorizontal/SliderHorizontal'
import toast from 'react-hot-toast'

interface ColumnViewProps {
  WID: number
  PID: number
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ WID, PID }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const handleNewColumn = (): void => {
    localPageDispatch({ type: 'openNewBoard', WID, PID })
  }

  const {
    data: boards,
    isLoading,
    isError,
    isSuccess
  } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })
  ///////////////////////////////////////////////////////////////////////////////////
  if (!!isLoading) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center">
        <LoadingComponent />
      </div>
    )
  } else if (!!isSuccess) {
    return (
      <>
        <div className="relative ml-4 flex w-full flex-row-reverse pr-4">
          {boards?.length > 0 ? (
            <Slider className="flex w-full scale-100 flex-row-reverse gap-[16px] overflow-x-auto overflow-y-hidden transition-all duration-200 will-change-transform scrollbar-thin">
              <>
                {boards.map((b: B) => {
                  return <Column key={b.id} WID={WID} PID={PID} BID={b.id} />
                })}
                <NewColumn onClickFunc={handleNewColumn} />
              </>
            </Slider>
          ) : (
            <NewColumn onClickFunc={handleNewColumn} />
          )}
        </div>{' '}
        <BuildTaskButtonPrimary
          className="absolute bottom-[30px] left-[50px] flex flex-row-reverse gap-1 rounded-md bg-brand-primary p-2 text-white"
          IconColor="#ffffff"
          title="تسک جدید"
          onClick={() => {
            if (boards?.length === 0) {
              toast.error('چرا اول نمیری یک ستون ایجاد بکنی خوشگله', {
                style: {
                  borderWidth: '2px',
                  borderColor: '#FA5252'
                },
                icon: '😁'
              })
            } else {
              localPageDispatch({ type: 'openNewTask', WID, PID })
            }
          }}
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
