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

import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
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
    setWSColor((p) => e?.target?.value)
    onChangeHandler(e)
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
             rounded-lg `}
            >
              <div className="absolute">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="70" height="70" rx="8" fill={WScolor} />
                  <path
                    d="M22.3573 35.5855C23.1863 35.5855 23.7427 35.4109 24.0263 35.0618C24.1354 34.9236 24.2082 34.7527 24.2445 34.5491C24.2736 34.4109 24.2882 34.2182 24.2882 33.9709C24.2882 33.1636 23.7682 32.76 22.7282 32.76C21.9936 32.76 21.0591 33.1782 19.9245 34.0145C19.5318 34.3055 19.1463 34.6218 18.7682 34.9636C18.47 35.24 18.2627 35.4473 18.1463 35.5855H22.3573ZM18.7027 30.0764L18.6591 30.4582C18.7754 30.3782 18.9027 30.2982 19.0409 30.2182L19.4227 30C20.4409 29.4618 21.4809 29.1927 22.5427 29.1927C24.5063 29.1927 25.9136 29.8145 26.7645 31.0582C27.0773 31.5091 27.3027 32.0291 27.4409 32.6182C27.5427 33.0473 27.5936 33.4836 27.5936 33.9273C27.5936 36.08 26.8409 37.5855 25.3354 38.4436C24.8191 38.7345 24.2336 38.9382 23.5791 39.0545C23.3463 39.0982 23.1063 39.1273 22.8591 39.1418L22.5754 39.1636H12.4082V35.5855H14.3827L15.1354 34.4073V23.4218H18.7027V30.0764ZM43.8001 39.2836C41.7492 39.2836 40.4365 39.2327 39.8619 39.1309C38.7419 38.9418 37.8874 38.4 37.2983 37.5055C36.9274 36.9455 36.6946 36.3055 36.6001 35.5855C36.571 35.3236 36.5565 35.0509 36.5565 34.7673C36.5565 34.4545 36.5746 34.1309 36.611 33.7964C36.6619 33.3455 36.7965 32.7018 37.0146 31.8655C37.0801 31.5964 37.1528 31.3236 37.2328 31.0473C37.2619 30.9527 37.2874 30.8655 37.3092 30.7855C37.3237 30.72 37.3346 30.68 37.3419 30.6655L40.7783 31.6364C40.4074 32.96 40.1601 34.0436 40.0365 34.8873C40.0292 34.9455 40.0256 35.0036 40.0256 35.0618C40.0256 35.2 40.051 35.32 40.1019 35.4218C40.1892 35.6109 40.3456 35.7055 40.571 35.7055H52.4401C53.0946 35.7055 53.5565 35.6182 53.8256 35.4436C54.1019 35.2764 54.2401 35.0109 54.2401 34.6473C54.2401 34.5382 54.2256 34.4182 54.1965 34.2873C54.1237 33.9164 54.051 33.5382 53.9783 33.1527C53.9492 33.0073 53.9201 32.8509 53.891 32.6836L53.8474 32.4764L53.8146 32.2691C53.7637 31.9927 53.7201 31.7527 53.6837 31.5491L57.1092 30.5891C57.291 31.4909 57.4946 32.5418 57.7201 33.7418C57.7783 34.0909 57.8074 34.4255 57.8074 34.7455C57.8074 35.7345 57.5237 36.6218 56.9565 37.4073C56.0474 38.6582 54.5674 39.2836 52.5165 39.2836H43.8001ZM49.6583 31.0145L47.5201 28.8545L49.6365 26.6727L51.8183 28.8545L49.6583 31.0145ZM45.0874 31.0255L42.9492 28.8655L45.0546 26.6836L47.2365 28.8655L45.0874 31.0255Z"
                    fill={WScolor}
                  />
                </svg>
              </div>
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
text-right text-[14px]
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
                          value={color}
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
