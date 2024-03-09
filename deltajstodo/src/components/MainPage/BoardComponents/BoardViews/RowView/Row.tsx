/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import ItemColor from '../../../../Common/Icons/ItemColor'

import { type Task, type Board } from '../../../../../utilities/models'
import PriorityFlag from '../../../../Common/Icons/PriorityFlag'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'

interface RowProps {
  board: Board
}

const Row: FunctionComponent<RowProps> = ({ board }) => {
  const [columnMore, setColumnMore] = useState(false)

  return (
    <>
      <div dir="rtl" className="w-[1011px] flex flex-col gap-[19px] ">
        {/**header */}
        <div className="w-[1011px] flex flex-row justify-between">
          <div className="h-[31px]  flex flex-row gap-[8px] items-center">
            <div className="h-[31px] max-w-[112px] flex flex-row gap-[5px] items-center">
              <div className={columnMore ? '' : 'rotate-[180deg]'}>
                <button onClick={() => setColumnMore((p) => !p)}>
                  {' '}
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 10.5V10.5C2.5 6.3575 5.8575 3 10 3V3C14.1425 3 17.5 6.3575 17.5 10.5V10.5C17.5 14.6425 14.1425 18 10 18V18C5.8575 18 2.5 14.6425 2.5 10.5Z"
                      stroke="#323232"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 9.66699L10 12.167L7.5 9.66699"
                      stroke="#323232"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`max-w-[200px] h-[32px] rounded-[8px] flex flex-row gap-[10px]
               items-center justify-center
              `}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 84 32"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" rx="4" fill={board.color} />
                </svg>
                <div
                  className="absolute z-10 pl-[12px] pr-[12px] pt-[10px] pb-[10px]
                h-[32px]"
                >
                  <p
                    className=" font-yekan 
                  h-[32px]
                 text-center
                 text-[16px] font-extrabold
                 leading-[22.55px]
                  text-[#FFDEEB] "
                  >
                    {board.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[17px] w-[37px]">
              <p
                className="font-yekan 
                h-[17px] w-[37px] text-right
                 text-[12px] font-normal 
                 leading-[16.91px]
                  text-[#1E1E1E]"
              >
                {board.tasks.length} تسک
              </p>
            </div>
          </div>

          <div className="h-[23px] w-[473px] flex flex-row gap-[70px]">
            <div className="w-[70px] h-[23px] flex flex-row gap-[10px] pr-[10px] pl-[10px]">
              <p
                className="font-yekan h-[23px] w-[32px] 
              text-right text-[16px]
               font-medium leading-[22.55px]
                text-[#1E1E1E]"
              >
                اعضا
              </p>
            </div>
            <div className="w-[70px] h-[23px] flex flex-row gap-[10px] pr-[10px] pl-[10px]">
              <p
                className="font-yekan 
                h-[23px] w-[45px] 
              text-right text-[16px]
               font-medium leading-[22.55px]
                text-[#1E1E1E]"
              >
                ددلاین
              </p>
            </div>
            <div className="w-[70px] h-[23px] flex flex-row gap-[10px] pr-[10px] pl-[10px]">
              <p
                className="font-yekan 
              h-[23px] w-[48px] 
              text-right text-[16px]
               font-medium leading-[22.55px]
                text-[#1E1E1E]"
              >
                اولویت
              </p>
            </div>
            <div className="w-[70px] h-[23px] flex flex-row gap-[10px] pr-[10px] pl-[10px]">
              <p
                className="font-yekan 
              h-[23px] w-[66px] 
              text-right text-[16px]
               font-medium leading-[22.55px]
                text-[#1E1E1E]"
              >
                توضیحات
              </p>
            </div>
          </div>
        </div>

        <div className="pr-[25px]">
          <div className={columnMore ? 'block' : 'hidden'}>
            {board.tasks.map((t: Task) => {
              return (
                <div
                  key={t.id}
                  className="w-[986px] h-[47px] rounded-[4px] flex flex-row justify-between pt-[7px] pb-[7px] bg-white items-center"
                >
                  <div
                    className="w-[193px] h-[17px] 
            flex flex-row gap-[7px] 
            items-center"
                  >
                    <ItemColor color={board.color} size="16" />
                    <p
                      className="font-yekan 
              h-[17px] w-[170px] 
              text-right text-[12px] 
              font-normal leading-[16.91px] text-[#1E1E1E]"
                    >
                      {t.title}
                    </p>
                  </div>
                  <div className="h-[33x] w-[490px] flex flex-row gap-[70px] items-center">
                    <div className="w-[70px] h-[33px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                      {t.sendforPeople?.map((s, i) => {
                        return (
                          <div
                            key={i}
                            className="h-[33px] w-[32px] rounded-[100px] pt-[9px] pl-[8px] pb-[7px] pr-[8px]"
                          >
                            <img
                              width={'32px'}
                              height={'33px'}
                              src={s.coverImg}
                              alt=""
                            />
                          </div>
                        )
                      })}
                    </div>

                    <div className="w-[70px] h-[17px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                      <p className="font-yekan h-[17px] w-[31px] text-right text-[12px] font-normal leading-[16.91px] text-[#1E1E1E]">
                        ۶ آبان
                      </p>
                    </div>
                    <div className="w-[70px] h-[16px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                      <PriorityFlag size="16" color={t.priority} />
                    </div>
                    <div className="w-[70px] h-[16px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                      <ParagraphsIconSvg />
                      {/* <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66541 3.16502H13.3365"
                          stroke="#BDC0C6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.66589 5.83298H13.3362"
                          stroke="#BDC0C6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.66589 8.50046H13.3362"
                          stroke="#BDC0C6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.66541 11.1684H13.3365"
                          stroke="#BDC0C6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.00085 13.8359H13.3364"
                          stroke="#BDC0C6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg> */}
                    </div>
                  </div>
                </div>
              )
            })}

            {/**titr 1 */}
            <div className="w-[986px] h-[47px] rounded-[4px] flex flex-row justify-between pt-[7px] pb-[7px] bg-white items-center">
              <div
                className="w-[193px] h-[17px] 
            flex flex-row gap-[7px] 
            items-center"
              >
                <ItemColor color={'#F92E8F'} size="16" />{' '}
                <p
                  className="font-yekan 
              h-[17px] w-[170px] 
              text-right text-[12px] 
              font-normal leading-[16.91px] text-[#1E1E1E]"
                >
                  این یک تیتر برای این تسک است.{' '}
                </p>
              </div>
              <div className="h-[33x] w-[490px] flex flex-row gap-[70px] items-center">
                <div className="w-[70px] h-[33px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <div className="h-[33px] w-[32px] rounded-[100px] pt-[9px] pl-[8px] pb-[7px] pr-[8px]">
                    <img
                      className="h-[33px] w-[32px]"
                      src="../../../assets/picture/1.png"
                      alt=""
                    />
                  </div>
                  <div className="h-[33px] w-[32px] rounded-[100px] pt-[9px] pl-[8px] pb-[7px] pr-[8px]">
                    <img
                      className="h-[33px] w-[32px]"
                      src="../../../assets/picture/1.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-[70px] h-[17px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <p className="font-yekan h-[17px] w-[31px] text-right text-[12px] font-normal leading-[16.91px] text-[#1E1E1E]">
                    ۶ آبان
                  </p>
                </div>
                <div className="w-[70px] h-[16px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33333 14.5V3.12"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.6667 9.84663V3.16663"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 9.8333C3.33337 9.8333 3.91671 9.34863 5.66671 9.34863C7.41671 9.34863 8.58337 10.5 10.3334 10.5C12.0834 10.5 12.6667 9.84863 12.6667 9.84863"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 3.12133C3.33337 3.12133 3.91671 2.5 5.66671 2.5C7.41671 2.5 8.58337 3.65133 10.3334 3.65133C12.0834 3.65133 12.6667 3.16667 12.6667 3.16667"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-[70px] h-[16px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66541 3.16502H13.3365"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66589 5.83298H13.3362"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66589 8.50046H13.3362"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66541 11.1684H13.3365"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.00085 13.8359H13.3364"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/**titr 2 */}
            <div className="w-[986px] h-[47px] rounded-[4px] flex flex-row justify-between pt-[7px] pb-[7px] bg-white items-center">
              <div
                className="w-[193px] h-[17px] 
            flex flex-row gap-[7px] 
            items-center"
              >
                <ItemColor color={'#F92E8F'} size="16" />{' '}
                <p
                  className="font-yekan 
              h-[17px] w-[170px] 
              text-right text-[12px] 
              font-normal leading-[16.91px] text-[#1E1E1E]"
                >
                  این یک تیتر برای این تسک است.{' '}
                </p>
              </div>
              <div className="h-[33x] w-[490px] flex flex-row gap-[70px] items-center">
                <div className="w-[70px] h-[33px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <div className="h-[33px] w-[32px] rounded-[100px] pt-[9px] pl-[8px] pb-[7px] pr-[8px]">
                    <img
                      className="h-[33px] w-[32px]"
                      src="../../../assets/picture/1.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-[70px] h-[17px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <p className="font-yekan h-[17px] w-[31px] text-right text-[12px] font-normal leading-[16.91px] text-[#1E1E1E]">
                    ۶ آبان
                  </p>
                </div>
                <div className="w-[70px] h-[16px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33333 14.5V3.12"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.6667 9.84663V3.16663"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 9.8333C3.33337 9.8333 3.91671 9.34863 5.66671 9.34863C7.41671 9.34863 8.58337 10.5 10.3334 10.5C12.0834 10.5 12.6667 9.84863 12.6667 9.84863"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 3.12133C3.33337 3.12133 3.91671 2.5 5.66671 2.5C7.41671 2.5 8.58337 3.65133 10.3334 3.65133C12.0834 3.65133 12.6667 3.16667 12.6667 3.16667"
                      stroke="#FA5252"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-[70px] h-[16px] pr-[10px] pl-[10px] flex flex-row gap-[10px] justify-center items-center">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66541 3.16502H13.3365"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66589 5.83298H13.3362"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66589 8.50046H13.3362"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66541 11.1684H13.3365"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.00085 13.8359H13.3364"
                      stroke="#BDC0C6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Row
