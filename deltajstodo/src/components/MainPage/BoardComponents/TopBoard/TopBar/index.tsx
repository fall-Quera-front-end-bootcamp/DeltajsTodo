/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type MouseEventHandler, type FunctionComponent } from 'react'
import ShareTaskButton from '../../Task/ShareTask/ShareTaskButton'
import ListViewButton from './TopBarButtons/ListViewButton'
import ColumnViewButton from './TopBarButtons/ColumnViewButton'
import CalendarViewButton from './TopBarButtons/CalendarViewButton'
import VerticalLine from './LineComponents/VerticalLine'
import TopBarTitle from './TopBarTitle/TopBarTitle'
import { Views, type Views as v } from '../../../../../utilities/models'

interface TopBarProps {
  projectInfoTitle: string
  handleView: (e: MouseEventHandler<HTMLButtonElement>) => void
  view: v
}

const TopBar: FunctionComponent<TopBarProps> = ({
  projectInfoTitle,
  view,
  handleView
}) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-between pl-4 pt-10">
        <div className="flex w-full flex-row justify-between ">
          <ShareTaskButton ShareTaskClass="absolute left-0 top-0 z-50" />

          <div className="relative flex flex-row-reverse gap-4">
            <TopBarTitle title={projectInfoTitle} />
            <VerticalLine />
            <ListViewButton handleView={handleView} view={view} />
            <VerticalLine />
            <ColumnViewButton handleView={handleView} view={view} />
            <VerticalLine />
            <CalendarViewButton handleView={handleView} view={view} />
            <VerticalLine />
            <div
              className={`transition-all duration-300  ${
                view === Views.row
                  ? 'absolute bottom-[-19px] left-[260px] w-[150px] rounded-full border-b-[3px] border-[#208D8E]'
                  : view === Views.column
                    ? 'absolute bottom-[-19px] left-[110px] w-[150px] rounded-full border-b-[3px] border-[#208D8E]'
                    : view === Views.calender
                      ? 'absolute bottom-[-19px] left-[0px] w-[105px] rounded-full border-b-[3px] border-[#208D8E]'
                      : 'hidden'
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full border-b-[0.5px] border-[#AAAAAA] pt-4"></div>
      </div>
    </>
  )
}

export default TopBar
