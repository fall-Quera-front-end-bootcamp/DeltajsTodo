/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */

import { useContext, type FunctionComponent, useRef, useState } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'

import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

import { useCreateProjectMutation } from '../../../../features/auth/authApiSlice'
import LoadingComponent from '../../LoadingComponent/LoadingComponent'

interface NewProjectProps {
  WID: number
}

const NewProject: FunctionComponent<NewProjectProps> = ({ WID }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [inputValue, setInputVlue] = useState('')
  const [createProject, { isLoading }] = useCreateProjectMutation()

  const onChangeHandler = (e: any): void => {
    setInputVlue((p) => e?.target?.value ?? p)
  }

  ////////////////////////// api //////////////////////////////
  const onSubmitHandler = async (): Promise<void> => {
    if (inputValue !== '') {
      try {
        const userData = await createProject({
          workspace_id: WID,
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
  ////////////////////////////////////////////////////////////

  return (
    <>
      <div
        dir="rtl"
        className="fixed left-1/2 top-1/2  flex h-[268px] w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[40px] shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]"
      >
        <div className="flex h-[286px] w-[500px] flex-col items-center gap-[40px] rounded-lg bg-white p-[24px]">
          <div className="flex h-[140px] w-[452px] flex-col items-center gap-[40px] bg-white">
            {/* header */}
            <div className="flex h-[32px] w-[452px] flex-row justify-between bg-white ">
              <div>
                <button
                  onClick={() => localPageDispatch({ type: 'closeModal' })}
                >
                  <Close />
                </button>
              </div>
              <div className="flex h-[32px] w-[192px] justify-center  gap-[10px]">
                <p className="h-[32px] w-[192px] text-center font-yekan text-[24px] font-extrabold leading-[32px]  text-[#1E1E1E] ">
                  ساختن پروژه جدید‌‌
                </p>
              </div>
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
                className="h-[20px] w-[51px]
               text-right font-yekan text-[14px]
              leading-[19.73px]  text-[#1E1E1E] "
              >
                نام پروژه
              </p>

              <div
                className="h-[40px] w-[415px]
rounded-md border-[1px] border-[#AAAAAA]
"
              >
                {/* <Input {...newProject} /> */}
                <input
                  className="h-[40px] w-[415px] rounded-md border-[1px] border-[#AAAAAA] p-4"
                  type="text"
                  name="title"
                  value={inputValue}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>

          <div className="flex h-[40px] w-[415px] flex-row items-center justify-center gap-[10px] rounded-md border-2 border-gray-primary bg-gray-secondary">
            {isLoading ? (
              <LoadingComponent />
            ) : (
              <button
                onClick={onSubmitHandler}
                className={`flex h-[40px] w-[415px] flex-row 
              items-center justify-center rounded-md bg-[#208D8E]
              ${isLoading ? 'bg-[#82d9db]' : ''}
              `}
              >
                <p className="h-[20px] w-[30px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
                  تایید
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProject
