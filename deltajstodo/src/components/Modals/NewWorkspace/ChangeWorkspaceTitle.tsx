/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */

import { useContext, type FunctionComponent, useRef, useState } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../pages/MainLayout'
import { useUpdataWorkspaceMutation } from '../../../features/auth/authApiSlice'

interface ChangeWorkspaceTitleProps {
  WID: number
}

const ChangeWorkspaceTitle: FunctionComponent<ChangeWorkspaceTitleProps> = ({
  WID
}) => {
  const [inputValue, setInputVlue] = useState('')
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [updataWorkspace, { isLoading }] = useUpdataWorkspaceMutation()

  const onChangeHandler = (e: any): void => {
    setInputVlue((p) => e?.target?.value ?? p)
  }
  ////////////////////////////////////////////////////////////////

  const onSubmitHandler = async (): Promise<void> => {
    if (inputValue !== '') {
      try {
        const userData = await updataWorkspace({
          id: WID,
          name: inputValue
        }).unwrap()
        // console.log(userData)

        localPageDispatch({ type: 'closeModal' })
      } catch (err: any) {
        //console.log(err)
        localPageDispatch({
          type: 'openResponseModal',
          responseData: { type: 'fail', message: err?.error ?? '' }
        })
      }
    }
  }
  /////////////////////////////////////////////////////////////////

  return (
    <>
      <div
        dir="rtl"
        className="flex 
        h-[268px] w-[500px]
        flex-col items-center gap-[40px] rounded-lg bg-white p-[24px]
        "
      >
        <div
          className="flex 
        h-[140px] w-[452px] flex-col items-center gap-[40px] bg-white"
        >
          <div
            className="flex 
        h-[32px] w-[452px] flex-row justify-between bg-white "
          >
            <div>
              <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
                <Close />
              </button>
            </div>
            <div>
              <p className="font-yekan h-[32px] w-[261px] text-center text-[24px] font-extrabold leading-[32px]  text-[#1E1E1E] ">
                ویرایش نام ورک اسپیس‌
              </p>
            </div>{' '}
            <div className="invisible">
              <button>
                <LeftArrow />
              </button>
            </div>
          </div>

          <div
            className="flex h-[68px]
            w-[415px] flex-col gap-[8px]
            "
          >
            <p
              className="font-yekan h-[20px]
               w-[92px] text-right text-[14px] font-[400px] 
              leading-[19.73px]  text-[#1E1E1E] "
            >
              نام ورک‌اسپیس
            </p>

            <div
              className="h-[40px] w-[415px]
rounded-md border-[1px] border-[#AAAAAA]
"
            >
              <input
                className="h-[40px] w-[415px]
              rounded-md border-[1px] border-[#AAAAAA]"
                type="text"
                name="title"
                value={inputValue}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>

        <div
          className="flex 
        h-[40px] w-[415px] gap-[10px]    rounded-md bg-white "
        >
          <button
            disabled={isLoading}
            onClick={onSubmitHandler}
            className="flex h-[40px] w-[415px] flex-row items-center justify-center rounded-md bg-[#208D8E]"
          >
            <p className="font-yekan h-[20px] w-[30px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              تایید
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default ChangeWorkspaceTitle
