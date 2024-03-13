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
import toast from 'react-hot-toast'

interface DeleteBoardProps {
  WID: number
  BID: number
  PID: number
  className?: string
}

const DeleteBoard: FunctionComponent<DeleteBoardProps> = ({
  WID,
  BID,
  PID,
  className
}) => {
  const [deleteBoard, { isLoading, isSuccess }] = useDeleteBoardMutation()

  const localPageDispatch: any = useContext(localPageDispatchContext)

  const onSubmitHandler = async (): Promise<void> => {
    try {
      const res = await deleteBoard({
        workspace_id: WID,
        project_id: PID,
        id: BID
      }).unwrap()
      toast.success(res?.message, {
        duration: 4000,
        style: {
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'rgb(130, 201, 30)'
        }
      })
      localPageDispatch({ type: 'closeModal' })
    } catch (error: any) {
      toast.error(error?.message)
      console.log('Hi i am that error: ', error)
    }
  }

  const CloseModalHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }

  return (
    <DeleteModalParent
      className={className}
      CloseModalHandler={CloseModalHandler}
      isLoading={isLoading}
      onSubmitHandler={onSubmitHandler}
      DeleteItem="برد"
    />
  )
}
export default DeleteBoard
