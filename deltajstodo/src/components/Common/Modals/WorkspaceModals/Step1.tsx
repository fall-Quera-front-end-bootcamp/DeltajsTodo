/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent, useRef } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import { CreationWorkspaceStepDispatchContext } from './NewWorkspace'

interface Step1Props {
  value: string
  onchangeHandler: (e: any) => void
}

const Step1: FunctionComponent<Step1Props> = ({ value, onchangeHandler }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const creationWorkspaceDispatch: any = useContext(
    CreationWorkspaceStepDispatchContext
  )
  const inputRef = useRef<HTMLInputElement | null>(null)
  return (
    <>
      <div className="flex h-[268px] w-[500px] flex-col items-center gap-[40px] rounded-lg bg-white p-[24px] shadow-[0_3px_4px_0] shadow-[#00000033]">
        <div className="flex h-[140px] w-[452px] flex-col items-center gap-[40px] bg-white">
          <div className="flex h-[32px] w-[452px] flex-row justify-between bg-white ">
            <div>
              <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
                <Close />
              </button>
            </div>
            <div>
              <p className="h-[32px] w-[261px] text-center font-yekan text-[24px] font-extrabold leading-[32px]  text-[#1E1E1E] ">
                ساختن ورک‌اسپیس جدید‌
              </p>
            </div>{' '}
            <div className="invisible">
              <button>
                <LeftArrow />
              </button>
            </div>
          </div>

          <div className="flex h-[68px] w-[415px] flex-col gap-[8px]">
            <p className="h-[20px] w-[92px] text-right font-yekan text-[14px] leading-[19.73px]  text-[#1E1E1E] ">
              نام ورک‌اسپیس
            </p>

            <div
              className="h-[40px] w-[415px] rounded-md border-[1px] border-[#AAAAAA]
"
            >
              <input
                className="h-[40px] w-[415px] rounded-md border-[1px] border-[#AAAAAA] p-4"
                type="text"
                name="name"
                value={value}
                onChange={onchangeHandler}
                ref={inputRef}
              />
            </div>
          </div>
        </div>

        <div className="flex h-[40px] w-[415px] gap-[10px] rounded-md bg-white ">
          <button
            onClick={() => {
              if (inputRef.current?.value === '') {
                return
              }
              return creationWorkspaceDispatch({ type: 'next' })
            }}
            className="flex h-[40px] w-[415px] flex-row items-center justify-center rounded-md bg-[#208D8E]"
          >
            <p className="h-[20px] w-[30px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              ادامه
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Step1
