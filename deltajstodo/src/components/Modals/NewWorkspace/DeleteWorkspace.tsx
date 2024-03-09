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

import { localPageDispatchContext } from '../../../pages/MainLayout'
import ButtonColorIconSvg from '../../Icons/ButtonColorIconSvg'
import {
  useDeleteWorkspaceMutation,
  useUpdataWorkspaceMutation
} from '../../../features/auth/authApiSlice'
import { set } from 'react-hook-form'

interface DeleteWorkspaceProps {
  WID: number
}

const DeleteWorkspace: FunctionComponent<DeleteWorkspaceProps> = ({ WID }) => {
  ////////////////////////////////////////////////////////////////
  const [deleteWorkspace, { isLoading }] = useDeleteWorkspaceMutation()

  const [msg, setMsg] = useState('')
  const handleApiSubmit = async (data: { id: number }): Promise<void> => {
    try {
      const res = await deleteWorkspace(data).unwrap()
      console.log(res)
      setMsg(res?.message ?? '')
    } catch (err: any) {
      setMsg(err?.message ?? '')
    }
  }

  ///////////////////////////////////////////////////
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const onSubmitHandler = async (): Promise<void> => {
    await handleApiSubmit({ id: WID })
    console.log('helllo')

    localPageDispatch({
      type: 'openResponseModal',
      responseData: { type: 'success', message: msg ?? '' }
    })

    localPageDispatch({ type: 'closeModal' })

    // userDispatch({
    //   type: 'changeWorkspaceColor',
    //   id: WID,
    //   new_color: WScolor
    // })
  }

  return (
    <>
      <div
        dir="rtl"
        className=" bg-white h-[286px] w-[501px]
            rounded-lg p-[24px]
             flex flex-col items-center
              gap-[40px] border-[1px] border-l-gray-dark shadow-2xl"
      >
        <div
          className="bg-white 
            h-[158px] w-[453px]
             flex flex-col items-center
              gap-[40px]"
        >
          {/* header */}
          <div
            className="bg-white 
            h-[32px] w-[453px]
             flex flex-row justify-between "
          >
            <div>
              <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
                <Close />
              </button>
            </div>
            <div>
              <p
                className="font-yekan w-[245px] h-[32px]
                 text-center text-[24px] font-extrabold 
                 leading-[32px]  text-[#1E1E1E] "
              >
                حذف ‌
              </p>
            </div>
            <div className="invisible">
              <button onClick={() => {}}>
                <LeftArrow />
              </button>
            </div>
          </div>
          {/* colerPalet */}
          <div
            className="w-[453px] h-[86px]
                flex flex-row gap-[16px]
                "
          >
            <p
              className="font-yekan w-[245px] h-[32px]
                 text-center text-[24px] font-extrabold 
                 leading-[32px]  text-[#1E1E1E]"
            >
              آیا از حذف ورک اسپیس اطمینان داری ؟
            </p>
            {/*--------------------------------------------------------------- */}
          </div>
        </div>

        {/* ادامه*/}
        <div
          className="bg-white 
            h-[40px] w-[415px] rounded-md    flex gap-[15px] "
        >
          <button
            onClick={onSubmitHandler}
            className="bg-[#208D8E] h-[40px] w-[200px] rounded-md flex flex-row items-center justify-center"
          >
            <p className="font-yekan w-[30px] h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              بله
            </p>
          </button>
          <button
            onClick={() => {
              localPageDispatch({ type: 'closeModal' })
            }}
            className="bg-[#8ac1c2] h-[40px] w-[200px] rounded-md flex flex-row items-center justify-center"
          >
            <p className="font-yekan w-[30px] h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              خیر
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
export default DeleteWorkspace
