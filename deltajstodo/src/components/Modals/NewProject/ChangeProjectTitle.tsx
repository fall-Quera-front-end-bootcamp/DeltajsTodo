/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent, useRef, useState } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../pages/MainLayout'
import { UserDispatchContext } from '../../../contexts/UserProvider'
interface ChangeProjectTitleProps {
  WID: string | null
  PID: string | null
}

const ChangeProjectTitle: FunctionComponent<ChangeProjectTitleProps> = ({
  WID,
  PID
}) => {
  const stepDispatch: any = useContext(localPageDispatchContext)
  const inputRef: any = useRef()
  const userDispatch: any = useContext(UserDispatchContext)

  const [inputValue, setInputValue] = useState('')
  const onChangeHandler = (e: any): void => {
    setInputValue((p) => e?.target?.value)
  }

  return (
    <>
      <div
        dir="rtl"
        className="flex h-[268px] w-[500px] flex-col items-center gap-[40px]"
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
                <button onClick={() => stepDispatch({ type: 'closeModal' })}>
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
                  className="h-[40px] w-[415px]
                            rounded-md border-[1px] border-[#AAAAAA]"
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
              onClick={() => {
                if (inputValue !== '') {
                  userDispatch({
                    type: 'changeProjectTitle',
                    WID,
                    PID,
                    new_title: inputValue
                  })
                }
                stepDispatch({ type: 'closeModal' })
              }}
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
