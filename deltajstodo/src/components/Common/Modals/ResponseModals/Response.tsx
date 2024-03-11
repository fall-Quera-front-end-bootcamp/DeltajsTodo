/* eslint-disable @typescript-eslint/quotes */

/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable tailwindcss/enforces-shorthand */

/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent, useEffect } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

interface ResponseProps {
  responsetype?: 'success' | 'fail'
  message?: string
}

const Response: FunctionComponent<ResponseProps> = ({
  responsetype = 'success',
  message = ''
}) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const onCloseHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  useEffect(() => {
    console.log(responsetype, message)
    setTimeout(() => {
      localPageDispatch({ type: 'closeModal' })
    }, 3000)
  }, [])
  return (
    <>
      <div
        dir="rtl"
        className={`  flex h-[286px]  w-[501px] flex-col  items-center gap-[40px] rounded-lg p-[24px]`}
      >
        <div
          className={`flex 
            h-[158px] w-[453px]
             flex-col items-center gap-[40px]
             
              ${responsetype === 'fail' ? ' bg-[#d84b4b]' : ' bg-[#49cf4f]'}
              `}
        >
          {/* header */}
          <div
            className="flex 
            h-[32px] w-[453px]
             flex-row justify-between bg-white "
          >
            <div>
              <button onClick={onCloseHandler}>
                <Close />
              </button>
            </div>
            <div>
              <p
                className="font-yekan h-[32px] w-[245px]
                 text-center text-[24px] font-extrabold 
                 leading-[32px]  text-[#1E1E1E] "
              ></p>
            </div>
            <div className="invisible">
              <button onClick={() => {}}>
                <LeftArrow />
              </button>
            </div>
          </div>
          {/* colerPalet */}
          <div
            className="flex h-[86px] w-[453px]
                flex-row items-center justify-center text-center
                "
          >
            <p
              className="font-yekan h-[32px] w-[245px]
                 text-center text-[24px] font-extrabold 
                 leading-[32px]  text-[#1E1E1E]"
            >
              {message}
            </p>

            {/*--------------------------------------------------------------- */}
          </div>
        </div>

        {/* ادامه*/}
        <div
          className="flex 
            h-[40px] w-[415px] gap-[10px]    rounded-md bg-white "
        >
          <button
            onClick={onCloseHandler}
            className="flex h-[40px] w-[415px] flex-row items-center justify-center rounded-md bg-[#208D8E]"
          >
            <p className="font-yekan  h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              متوجه شدم
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
export default Response
