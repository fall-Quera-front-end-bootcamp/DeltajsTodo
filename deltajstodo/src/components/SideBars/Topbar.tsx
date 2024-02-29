/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import ShareIconSvg from '../Icons/ShareIconSvg'
import TodoListIconSvg from '../Icons/TodoListIconSvg'
import ColumnArtboardIconSvg from '../Icons/ColumnArtboardIconSvg'
import CalendarIconSvg from '../Icons/CalendarIconSvg'
import SearchIconSvg from '../Icons/SearchIconSvg'
import FilterSettingIconSvg from '../Icons/FilterIconSvg'
import { type Views } from '../../utilities/models'

interface TopbarProps {
  projectInfoTitle: string
  handleView: () => void
  view: Views
}

const Topbar: FunctionComponent<TopbarProps> = ({
  projectInfoTitle,
  view,
  handleView
}) => {
  return (
    <>
      <div className="relative top-[41px] left-[50px]  h-[64px] w-[1034px]  flex flex-col gap-4">
        <div className="">
          <div className="w-[1034px] h-[64px] flex flex-row items-center justify-between pt-4 pb-4">
            <div className="w-[118px] h-[24px] flex flex-row gap-[5px]">
              <button onClick={() => {}}>
                <p className=" w-[89px] h-[23px] text-right text-[16px]   font-medium text-[#1E1E1E]">
                  اشتراک گذاری
                </p>
              </button>
              <ShareIconSvg color="black" />
            </div>

            <div className="flex h-[32px] w-[511px] flex-row-reverse gap-4">
              <div className="block h-[32px] w-[77px] flex flex-row justify-between  ">
                <p className="font-yekan w-[77px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] ">
                  {projectInfoTitle}
                </p>
              </div>
              <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
              <div className="flex h-[24px] w-[125px] flex-row justify-between gap-[5px] mb-[5px]  mt-[5px]">
                <button onClick={handleView}>
                  <p className="font-yekan h-[23px] w-[96px]  text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] ">
                    نمایش لیستی
                  </p>
                </button>

                <TodoListIconSvg />
              </div>
              <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
              <div className="flex h-[24px] w-[127px] flex-row justify-between gap-[5px] mb-[5px]  mt-[5px]">
                <button onClick={handleView}>
                  <p className="font-yekan h-[23px] w-[98px] text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] ">
                    نمایش ستونی
                  </p>
                </button>
                <ColumnArtboardIconSvg color="black" />
              </div>
              <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
              <div className="flex h-[24px] w-[70px] flex-row justify-between gap-[5px] mb-[5px]  mt-[5px]">
                <button onClick={handleView}>
                  <p className="font-yekan h-[23px] w-[41px] text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] ">
                    تقویم
                  </p>
                </button>
                <CalendarIconSvg />
              </div>
              <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
            </div>
          </div>

          <div className="absolute left-[643px] w-[123px] h-[2px] border-t-[2px] border-solid  border-[#208D8E]"></div>

          <div className="absolute   w-[1034px] h-[0.5px ] border-t-[0.5px] border-solid border-[#AAAAAA]"></div>
        </div>
        <div className="h-[28px] w-[1034px] bg-indigo-primary flex flex-row-reverse gap-[40px]">
          <div className=" flex h-[24px] w-[200px] flex-row justify-items-start gap-[4px]">
            <input
              className=" w-[172px]"
              type="text"
              placeholder="جستجو بین تسک‌ها"
            />
            <SearchIconSvg />
          </div>
          <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>

          <div className="w-[754px] h-[28px] flex flex-row justify-between">
            <div className="w-[238px] h-[25px] flex flex-row gap-4">
              <div className="w-[67px] h-[24px] flex flex-row gap-[6px]">
                <p className=" w-[37px] h-[17px] text-right text-[12px]   font-normal leading-[16.91px] text-[#1E1E1E]">
                  فیلترها
                </p>
                <FilterSettingIconSvg />
              </div>
              <div className="w-[155px] h-[25px] border-[4px]"></div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar