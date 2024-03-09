/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import ShareTaskButton from '../Task/ShareTask/ShareTaskButton'
import ListViewButton from './TopBarButtons/ListViewButton'
import ColumnViewButton from './TopBarButtons/ColumnViewButton'
import CalendarViewButton from './TopBarButtons/CalendarViewButton'
import VerticalLine from './LineComponents/VerticalLine'
import TopBarTitle from './TopBarTitle/TopBarTitle'
import { type Views } from '../../../../pages/MainPages/Board'

interface TopBarProps {
  projectInfoTitle: string
  handleView: (e: any) => void
  view: Views
}

const TopBar: FunctionComponent<TopBarProps> = ({
  projectInfoTitle,
  view,
  handleView
}) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-between p-10">
        <div className="flex w-full flex-row justify-between ">
          <ShareTaskButton ShareTaskClass="absolute left-0 top-0 z-50" />

          <div className="flex flex-row-reverse gap-4">
            <TopBarTitle title={projectInfoTitle} />
            <VerticalLine />
            <ListViewButton handleView={handleView} view={view} />
            <VerticalLine />
            <ColumnViewButton handleView={handleView} view={view} />
            <VerticalLine />
            <CalendarViewButton handleView={handleView} view={view} />
            <VerticalLine />
          </div>
        </div>
        <div className="w-full border-b-[0.5px] border-[#AAAAAA] pt-4"></div>
      </div>
      {/* <div className="flex flex-row-reverse gap-[40px]">
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
      </div> */}
    </>
  )
}

export default TopBar
