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
import { useContext, type FunctionComponent, useRef } from 'react'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import { useDeleteBoardMutation } from '../../../../../features/auth/authApiSlice'
import DeleteModalParent from '../../DeleteModalParentComponent/DeleteModalParent'
import toast from 'react-hot-toast'
import { useOnClickOutside } from 'usehooks-ts'

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
  const [deleteBoard, { isLoading }] = useDeleteBoardMutation()

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

  // Click OutSide
  const bigDivRef = useRef(null)
  const handleClickOutside = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  useOnClickOutside(bigDivRef, handleClickOutside)
  // Click OutSide

  const CloseModalHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }

  return (
    <div ref={bigDivRef} className="">
      <DeleteModalParent
        className={className}
        CloseModalHandler={CloseModalHandler}
        isLoading={isLoading}
        onSubmitHandler={onSubmitHandler}
        QuestionParagraph="آیا از حذف از این برد اطمینان دارید؟"
        QuestionTitle="حذف برد"
      />
    </div>
  )
}
export default DeleteBoard
