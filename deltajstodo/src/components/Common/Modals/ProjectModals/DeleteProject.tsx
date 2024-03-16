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
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import { useDeleteProjectMutation } from '../../../../features/auth/authApiSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import DeleteModalParent from '../DeleteModalParentComponent/DeleteModalParent'
import { useOnClickOutside } from 'usehooks-ts'

interface DeleteProjectProps {
  WID: number
  PID: number
  className?: string
}

const DeleteProject: FunctionComponent<DeleteProjectProps> = ({
  WID,
  PID,
  className
}) => {
  const [deleteProject, { isLoading }] = useDeleteProjectMutation()
  const navigate = useNavigate()
  const localPageDispatch: any = useContext(localPageDispatchContext)

  // Click OutSide
  const bigDivRef = useRef(null)
  const handleClickOutside = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  useOnClickOutside(bigDivRef, handleClickOutside)
  // Click OutSide

  const onSubmitHandler = async (): Promise<void> => {
    try {
      const res = await deleteProject({ workspace_id: WID, id: PID }).unwrap()
      toast.success(res?.message)
      localPageDispatch({ type: 'closeModal' })
      navigate('/workspace')
    } catch (error: any) {
      console.log('hi i am that erroe ', error)
      toast.error(error?.message)
    }
  }

  const CloseModalHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }

  return (
    <div ref={bigDivRef} className="">
      <DeleteModalParent
        className={className}
        isLoading={isLoading}
        CloseModalHandler={CloseModalHandler}
        onSubmitHandler={onSubmitHandler}
        QuestionParagraph="ایا از حذف این پروژه اطمینان دارید؟"
        QuestionTitle="حذف پروژه"
      />
    </div>
  )
}
export default DeleteProject
