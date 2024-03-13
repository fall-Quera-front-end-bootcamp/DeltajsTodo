/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import LeftArrow from '../../../Icons/LeftArrow'
import Close from '../../../Icons/Close'

import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import {
  useDeleteBoardMutation,
  useDeleteProjectMutation,
  useDeleteWorkspaceMutation
} from '../../../../../features/auth/authApiSlice'
import LoadingComponent from '../../../LoadingComponent/LoadingComponent'
import DeleteModalParent from '../../DeleteModalParentComponent/DeleteModalParent'

interface DeleteBoardProps {
  WID: number
  BID: number
  PID: number
}

const DeleteBoard: FunctionComponent<DeleteBoardProps> = ({
  WID,
  BID,
  PID
}) => {
  const [deleteBoard, { isLoading }] = useDeleteBoardMutation()

  const localPageDispatch: any = useContext(localPageDispatchContext)

  const onSubmitHandler = async (): Promise<void> => {
    try {
      const res = await deleteBoard({
        workspace_id: WID,
        project_id: PID,
        id: BID
      }).unwrap()

      localPageDispatch({
        type: 'openResponseModal',
        responseData: { type: 'success', message: res?.message ?? '' }
      })
    } catch (error: any) {
      console.log('hi i am that erroe ', error)
      localPageDispatch({
        type: 'openResponseModal',
        responseData: { type: 'fail', message: error?.error ?? '' }
      })
    }
  }

  const CloseModalHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }

  return (
    <DeleteModalParent DeleteItem="برد">
      <>
        <div className="rounded-md flex gap-[15px] ">
          <button
            disabled={isLoading}
            onClick={onSubmitHandler}
            className="bg-red-primary h-[40px] w-[200px] rounded-md flex flex-row items-center justify-center text-white"
          >
            {isLoading ? <LoadingComponent /> : 'بله'}
          </button>
          <button
            onClick={CloseModalHandler}
            className="bg-brand-primary h-[40px] w-[200px] rounded-md flex flex-row items-center justify-center text-white"
          >
            خیر
          </button>
        </div>
      </>
    </DeleteModalParent>
  )
}
export default DeleteBoard
