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
import { useContext, type FunctionComponent, useRef, useState } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'

import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import ButtonColorIconSvg from '../../Icons/ButtonColorIconSvg'
import {
  useDeleteWorkspaceMutation,
  useUpdataWorkspaceMutation
} from '../../../../features/auth/authApiSlice'
import { set } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import DeleteModalParent from '../DeleteModalParentComponent/DeleteModalParent'
import { useOnClickOutside } from 'usehooks-ts'

interface DeleteWorkspaceProps {
  WID: number
  className?: string
}

const DeleteWorkspace: FunctionComponent<DeleteWorkspaceProps> = ({
  WID,
  className
}) => {
  ////////////////////////////////////////////////////////////////
  const [deleteWorkspace, { isLoading }] = useDeleteWorkspaceMutation()
  const navigate = useNavigate()
  ///////////////////////////////////////////////////
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
      const res = await deleteWorkspace({ id: WID }).unwrap()
      toast.success(res?.message)
      localPageDispatch({ type: 'closeModal' })
      navigate('/workspace')
    } catch (error: any) {
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
        CloseModalHandler={CloseModalHandler}
        onSubmitHandler={onSubmitHandler}
        isLoading={isLoading}
        QuestionParagraph="آیا از حذف این ورک اسپیس اطمینان دارید؟"
        QuestionTitle="حذف ورک اسپیس"
      />
    </div>
  )
}
export default DeleteWorkspace
