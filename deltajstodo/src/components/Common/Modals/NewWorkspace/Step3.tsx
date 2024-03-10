/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import { CreationWorkspaceStepDispatchContext } from './NewWorkspace'
import { type Workspace } from '../../../../utilities/models'

interface Step3Props {
  form: Workspace
  onSubmitWSCreation: () => void
}

const Step3: FunctionComponent<Step3Props> = ({ form, onSubmitWSCreation }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const creationWorkspaceDispatch: any = useContext(
    CreationWorkspaceStepDispatchContext
  )
  return (
    <>
      <div className="h-[365px] w-[501px]">
        <div
          className="flex 
        h-[365px] w-[501px]
        flex-col items-center gap-[40px] rounded-lg bg-white p-[24px] shadow-[0_3px_4px_0] shadow-[#00000033]
        "
        >
          <div
            className="flex 
        h-[237px] w-[453px] flex-col items-center gap-[40px] bg-white"
          >
            <div
              className="flex 
        h-[32px] w-[453px] flex-row justify-between bg-white "
            >
              <div>
                <button
                  onClick={() => localPageDispatch({ type: 'closeModal' })}
                >
                  <Close />
                </button>
              </div>
              <div>
                <p className="h-[32px] w-[129px] text-center font-yekan text-[24px] font-extrabold leading-[32px]  text-[#1E1E1E] ">
                  مرور اطلاعات‌
                </p>
              </div>
              <div>
                <button
                  onClick={() => creationWorkspaceDispatch({ type: 'back' })}
                >
                  <LeftArrow />
                </button>
              </div>
            </div>

            <div
              className="flex h-[165px]
            w-[453px] flex-col gap-[16px] rounded-lg border-[0.5px] border-[#AAAAAA] 
            px-[12px]  py-[16px]
            "
            >
              {/*title */}
              <div className="flex h-[34px] w-[429px] flex-row justify-between">
                <div className="h-[20px] w-[93px]">
                  <p className="h-[20px] w-[93px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
                    نام ورک‌اسپیس‌
                  </p>
                </div>
                <div className="h-[20px] min-w-[64px]">
                  <p className="h-[20px] min-w-[64px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
                    {form.title}‌
                  </p>
                </div>
              </div>

              {/*color */}
              <div className="flex h-[34px] w-[429px] flex-row justify-between">
                <div className="h-[20px] w-[98px]">
                  <p className="h-[20px] w-[98px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
                    رنگ ورک‌اسپیس‌
                  </p>
                </div>
                <div className="size-[15px]">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="15"
                      height="15"
                      rx="2"
                      fill={form.color}
                    />
                  </svg>
                </div>
              </div>

              {/*teamworkers */}
              <div className="flex h-[33px] w-[429px] flex-row justify-between">
                <div className="h-[20px] w-[27px]">
                  <p className="h-[20px] w-[27px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
                    اعضا‌
                  </p>
                </div>
                <div
                  className="h-[33px] w-[36px] 
                  rounded-[100px]
               px-[8px]  pb-[7px]  pt-[9px]
              "
                >
                  <img
                    height="33px"
                    width="36px"
                    src="../../../assets/picture/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div
              className="flex 
        h-[40px] w-[415px] gap-[29px]    rounded-md bg-white "
            >
              <button
                onClick={() => {
                  onSubmitWSCreation()
                  localPageDispatch({ type: 'closeModal' })
                }}
                className="flex h-[40px] w-[415px] flex-row items-center justify-center gap-[10px] rounded-md bg-[#208D8E]"
              >
                <p className="h-[20px] w-[117px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
                  ساختن ورک‌اسپیس
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default Step3
