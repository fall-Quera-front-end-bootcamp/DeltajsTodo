/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent, useRef, useState } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../pages/MainLayout'
import { UserDispatchContext } from '../../../contexts/UserProvider'

interface ChangeWorkspaceTitleProps {
  WID: string
}

const ChangeWorkspaceTitle: FunctionComponent<ChangeWorkspaceTitleProps> = ({
  WID
}) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const userDispatch: any = useContext(UserDispatchContext)

  const inputRef: any = useRef()
  const [inputValue, setInputVlue] = useState('')

  const onChangeHandler = (e: any): void => {
    setInputVlue((p) => e?.target?.value ?? p)
  }
  const onSubmitHandle = (): void => {
    if (inputValue !== '') {
      userDispatch({
        type: 'changeWorkspaceTitle',
        id: WID,
        new_title: inputValue
      })
    }
    localPageDispatch({ type: 'closeModal' })
  }
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
                ref={inputRef}
              />
            </div>
          </div>
        </div>

        <div
          className="flex 
        h-[40px] w-[415px] gap-[10px]    rounded-md bg-white "
        >
          <button
            onClick={() => onSubmitHandle()}
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
