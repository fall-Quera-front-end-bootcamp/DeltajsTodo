/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import ColumnView from '../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import Topbar from '../components/MainPage/BoardComponents/TopBar/Topbar'
interface BoardProps {}
export enum Views {
  column = 643,
  row = 802,
  calender = 541
}
const Board: FunctionComponent<BoardProps> = () => {
  const {
    state: { project }
  } = useLocation()

  const [view, setViw] = useState<Views>(Views.column)

  const handleView = (e: any): void => {
    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }

  return (
    <>
      <div className="relative">
        {/*Header */}
        <div className="absolute top-[41px] right-0  h-[64px] w-[1034px]  flex flex-col gap-4">
          <div className="">
            <Topbar
              handleView={handleView}
              view={view}
              projectInfoTitle={project.title}
            />

            <div className="relative   w-[1034px] h-[0.5px ] border-t-[0.5px] border-solid border-[#AAAAAA]">
              <div
                className={` h-[2px]   w-[123px]
              absolute left-[ 643px] 
              border-t-[2px]
                border-solid 
                 border-[#208D8E]
                 ${view === Views.calender && 'w-[69px] left-[541px]'}
                 ${view === Views.column && 'w-[123px] left-[643px]'}
                 ${view === Views.row && 'w-[120px] left-[802px]'}
                 `}
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute top-[220px] w-[1034px] h-[300px]  right-0 ">
          {view === Views.column && <ColumnView project={project} />}
          {view === Views.row && <RowView project={project} />}
          {view === Views.calender && <CalenderView />}
        </div>
      </div>
    </>
  )
}

export default Board
