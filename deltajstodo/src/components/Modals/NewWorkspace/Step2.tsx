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
import { CreationWorkspaceStepDispatchContext } from './NewWorkspace'
import ButtonColorIconSvg from '../../Icons/ButtonColorIconSvg'

interface Step2Props {
  value: string
  onChangeHandler: (e: any) => void
}

const Step2: FunctionComponent<Step2Props> = ({ value, onChangeHandler }) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const creationWorkspaceDispatch: any = useContext(
    CreationWorkspaceStepDispatchContext
  )
  const [WScolor, setWSColor] = useState<string>('#7D828C')

  const onWSColorChangeHandler = (e: any): void => {
    console.log(e?.target?.id)
    onChangeHandler(e)
    setWSColor(e?.target?.id)
  }
  const colorsPalet = useRef<any>([
    '#FD7E14',
    '#FAB005',
    '#82C91E',
    '#40C057',
    '#208D8E',
    '#12B886',
    '#15AABF',
    '#228BE6',
    '#4C6EF5',
    '#7950F2',
    '#BE4BDB',
    '#E64980',
    '#FA5252'
  ])
  return (
    <>
      <div
        className="bg-white 
            h-[286px] w-[501px]
            rounded-lg p-[24px]
             flex flex-col items-center
              gap-[40px]
            "
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
                انتخاب رنگ ورک‌اسپیس‌
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
          {/* colerPalet */}
          <div
            className="w-[453px] h-[86px]
                flex flex-row gap-[16px]
                "
          >
            <div
              className={`relative h-[70px] w-[70px] 
             rounded-lg bg-[${WScolor}]`}
            >
              <div
                className="absolute w-[47px] h-[32px]
                top-[17px] left-[11.5px]
                "
              >
                <p
                  className="  font-yekan w-[47px]
h-[32px] text-center text-[24px] font-extrabold 
leading-[32px]  text-[#1E1E1E]

"
                >
                  ت ط
                </p>
              </div>
            </div>
            {/*--------------------------------------------------------------- */}
            <div
              className="w-[293px] h-86px]
             flex flex-col gap-[16px]"
            >
              <div className="w-[97px] h-[20px]">
                <p
                  className="font-yekan w-[97px] h-[20px]
text-right text-[14px] font-[400px] 
leading-[19.73px]  text-[#1E1E1E] "
                >
                  رنگ ورک‌اسپیس
                </p>
              </div>

              {/*colores */}
              <div
                className="w-[293px] h-[50px]
             flex flex-col gap-[11px]"
              >
                <div
                  className="w-[293px] h-[50px]
             flex flex-wrap gap-[10px]"
                >
                  <div onClick={() => setWSColor('#7D828C')}>
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="7.5" cy="8" r="7" stroke="black" />
                      <line
                        x1="12.3536"
                        y1="2.85355"
                        x2="2.35355"
                        y2="12.8536"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  {colorsPalet.current.map((color: string) => {
                    return (
                      <div key={color}>
                        <ButtonColorIconSvg
                          id={color}
                          name={'color'}
                          color={color}
                          value={WScolor}
                          onChangeHandler={onWSColorChangeHandler}
                        />
                      </div>
                    )
                  })}
                </div>

                {/*row 1 */}
                <div></div>

                <div></div>
              </div>
            </div>

            {/* <p
                className="font-yekan w-[92px]
                   h-[20px] text-right text-[14px] font-[400px] 
                  leading-[19.73px]  text-[#1E1E1E] "
              >
                نام ورک‌اسپیس
              </p>

              <div
                className="w-[415px] h-[40px]
    rounded-md border-[1px] border-[#AAAAAA]
    "
              ></div> */}
          </div>
        </div>

        {/* ادامه*/}
        <div
          className="bg-white 
            h-[40px] w-[415px] rounded-md    flex gap-[10px] "
        >
          <button
            onClick={() => creationWorkspaceDispatch({ type: 'next' })}
            className="bg-[#208D8E] h-[40px] w-[415px] rounded-md flex flex-row items-center justify-center"
          >
            <p className="font-yekan w-[30px] h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              ادامه
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
export default Step2
