/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import ShareIconSvg from '../../../Common/Icons/ShareIconSvg'
import TodoListIconSvg from '../../../Common/Icons/TodoListIconSvg'
import ColumnArtboardIconSvg from '../../../Common/Icons/ColumnArtboardIconSvg'
import CalendarIconSvg from '../../../Common/Icons/CalendarIconSvg'
import SearchIconSvg from '../../../Common/Icons/SearchIconSvg'
import FilterSettingIconSvg from '../../../Common/Icons/FilterIconSvg'
import { Views } from '../../../../utilities/models'
import ShareTaskButton from '../ShareTask/ShareTaskButton'

interface TopbarProps {
  projectInfoTitle: string
  handleView: (e: any) => void
  view: Views
}

const Topbar: FunctionComponent<TopbarProps> = ({
  projectInfoTitle,
  view,
  handleView
}) => {
  return (
    <>
      {/* <div className="relative left-[50px] top-[41px]  flex h-[64px]  w-[1034px] flex-col gap-4">
        <div className="flex h-[64px] w-[1034px] flex-row items-center justify-between py-4">
          <ShareTaskButton />

          <div className="flex h-[32px] w-[511px] flex-row-reverse gap-4">
            <div className="block flex h-[32px] w-[77px] flex-row justify-between  ">
              <p className="w-[77px] text-right font-yekan text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] ">
                {projectInfoTitle}
              </p>
            </div>
            <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
            <div className="my-[5px] flex h-[24px] w-[125px] flex-row justify-between gap-[5px]">
              <button onClick={handleView}>
                <p className="h-[23px] w-[96px] text-right  font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] ">
                  نمایش لیستی
                </p>
              </button>

              <TodoListIconSvg />
            </div>
            <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
            <div className="my-[5px] flex h-[24px] w-[127px] flex-row justify-between gap-[5px]">
              <button onClick={handleView}>
                <p className="h-[23px] w-[98px] text-right font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] ">
                  نمایش ستونی
                </p>
              </button>
              <ColumnArtboardIconSvg color="black" />
            </div>
            <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
            <div className="my-[5px] flex h-[24px] w-[70px] flex-row justify-between gap-[5px]">
              <button onClick={handleView}>
                <p className="h-[23px] w-[41px] text-right font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] ">
                  تقویم
                </p>
              </button>
              <CalendarIconSvg />
            </div>
            <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
          </div>
        </div>
        <div className="flex h-[28px] w-[1034px] flex-row-reverse gap-[40px] bg-indigo-primary">
          <div className=" flex h-[24px] w-[200px] flex-row justify-items-start gap-[4px]">
            <input
              className=" w-[172px]"
              type="text"
              placeholder="جستجو بین تسک‌ها"
            />
            <SearchIconSvg />
          </div>
          <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>

          <div className="flex h-[28px] w-[754px] flex-row justify-between">
            <div className="flex h-[25px] w-[238px] flex-row gap-4">
              <div className="flex h-[24px] w-[67px] flex-row gap-[6px]">
                <p className=" h-[17px] w-[37px] text-right text-[12px]   font-normal leading-[16.91px] text-[#1E1E1E]">
                  فیلترها
                </p>
                <FilterSettingIconSvg />
              </div>
              <div className="h-[25px] w-[155px] border-[4px]"></div>
            </div>

            <div></div>
          </div>
        </div>
      </div> */}
      <div className="flex h-[64px] w-[1034px] flex-row items-center justify-between py-4">
        <ShareTaskButton ShareTaskClass="absolute left-0 top-0 z-50" />

        <div className="flex h-[32px] w-[511px] flex-row-reverse gap-4">
          <div className=" flex h-[32px] w-[77px] flex-row justify-between  ">
            <p className="w-[77px] text-right font-yekan text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] ">
              {projectInfoTitle}
            </p>
          </div>
          <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
          <div className="my-[5px] flex h-[24px] w-[125px] flex-row justify-between gap-[5px]">
            <button onClick={handleView} name="row">
              <p
                aria-label="row"
                className={`h-[23px] w-[96px] text-right  font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                    ${view === Views.row && 'text-[#208D8E]'}`}
              >
                نمایش لیستی
              </p>
            </button>

            <TodoListIconSvg
              color={view === Views.row ? '#208D8E' : '#323232'}
            />
          </div>
          <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
          <div className="my-[5px] flex h-[24px] w-[127px] flex-row justify-between gap-[5px]">
            <button onClick={handleView} name="column">
              <p
                aria-label="column"
                className={`h-[23px] w-[98px] text-right font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                    ${view === Views.column && 'text-[#208D8E]'}`}
              >
                نمایش ستونی
              </p>
            </button>
            <ColumnArtboardIconSvg
              color={view === Views.column ? '#208D8E' : '#323232'}
            />
          </div>
          <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
          <div className="my-[5px] flex h-[24px] w-[70px] flex-row justify-between gap-[5px]">
            <button onClick={handleView} name="calender">
              <p
                aria-label="calender"
                className={`h-[23px] w-[41px] text-right font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                    ${view === Views.calender && 'text-[#208D8E]'}`}
              >
                تقویم
              </p>
            </button>
            <CalendarIconSvg
              color={view === Views.calender ? '#208D8E' : '#323232'}
            />
          </div>
          <div className=" h-[22px] self-center border-[1px] border-[#999999]"></div>
        </div>
      </div>
    </>
  )
}

export default Topbar
