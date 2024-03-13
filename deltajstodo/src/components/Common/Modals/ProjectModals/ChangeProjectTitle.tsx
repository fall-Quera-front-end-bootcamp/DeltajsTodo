/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent, useRef, useState } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

import Message from '../../Message/Message'
import { useUpdataProjectMutation } from '../../../../features/auth/authApiSlice'
interface ChangeProjectTitleProps {
  WID: number
  PID: number
}

const ChangeProjectTitle: FunctionComponent<ChangeProjectTitleProps> = ({
  WID,
  PID
}) => {
  const inputRef: any = useRef()
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [inputValue, setInputValue] = useState('')
  const onChangeHandler = (e: any): void => {
    setInputValue((p) => e?.target?.value)
  }

  const [updataProject, { isLoading }] = useUpdataProjectMutation()

  ////////////////////// api ////////////////////////////////
  const onSubmitHandler = async (): Promise<void> => {
    if (inputValue !== '') {
      try {
        const userData = await updataProject({
          workspace_id: WID,
          id: PID,
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
  ///////////////////////////////////////////////////////////

  return (
    <>
      <div
        dir="rtl"
      className="flex h-[268px] w-[500px] flex-col items-center gap-[40px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]"
      >
        <div
          className="bg-white 
              h-[286px] w-[500px]
              rounded-lg p-[24px]
               flex flex-col items-center
                gap-[40px]
              "
        >
          <div
            className="bg-white 
              h-[140px] w-[452px]
               flex flex-col items-center
                gap-[40px]"
          >
            {/* header */}
            <div
              className="bg-white 
              h-[32px] w-[452px]
               flex flex-row justify-between "
            >
              <div>
                <button
                  onClick={() => localPageDispatch({ type: 'closeModal' })}
                >
                  <Close />
                </button>
              </div>
              <div className="w-[192px] h-[32px] gap-[10px] flex  justify-center">
                <p
                  className="font-yekan w-[192px] h-[32px] text-center text-[24px] font-extrabold 
                   leading-[32px]  text-[#1E1E1E] "
                >
                  ویرایش نام پروژه‌
                </p>
              </div>
              <div className="invisible">
                <button>
                  <LeftArrow />
                </button>
              </div>
            </div>

            <div
              className="w-[415px] h-[68px]
            flex flex-col gap-[8px]
            "
            >
              <p
                className="font-yekan w-[51px]
               h-[20px] text-right text-[14px] font-[400px] 
              leading-[19.73px]  text-[#1E1E1E] "
              >
                نام پروژه
              </p>

              <div
                className="w-[415px] h-[40px]
rounded-md border-[1px] border-[#AAAAAA]
"
              >
                {/* <Input {...newProject} /> */}
                <input
                  className="h-[40px] w-[415px] rounded-md border-[1px] border-[#AAAAAA]"
                  type="text"
                  name="title"
                  value={inputValue}
                  onChange={onChangeHandler}
                  ref={inputRef}
                />
              </div>
            </div>
          </div>

          <div
            className="bg-white 
              h-[40px] w-[415px] rounded-md   flex gap-[10px] "
          >
            <button
              disabled={isLoading}
              onClick={onSubmitHandler}
              className="bg-[#208D8E] h-[40px] w-[415px] rounded-md flex flex-row items-center justify-center"
            >
              <p className="font-yekan w-[30px] h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
                تایید
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangeProjectTitle
