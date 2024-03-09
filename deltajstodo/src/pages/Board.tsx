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

import ShareIconSvg from '../components/Common/Icons/ShareIconSvg'
import TodoListIconSvg from '../components/Common/Icons/TodoListIconSvg'
import ColumnArtboardIconSvg from '../components/Common/Icons/ColumnArtboardIconSvg'
import CalendarIconSvg from '../components/Common/Icons/CalendarIconSvg'
import ColumnView from '../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import ShareButton from '../components/Common/Buttons/ShareButton'
import ShareTaskButton from '../components/MainPage/BoardComponents/ShareTask/ShareTaskButton'
interface BoardProps {}
enum Views {
  column = 643,
  row = 802,
  calender = 541
}
const Board: FunctionComponent<BoardProps> = () => {
  // const { projectID } = useParams()

  const {
    state: { workspaceItemID, project }
  } = useLocation()
  // const user = useContext(UserContext)
  // const [currentWorkspace, setW] = useState(W | undefined)
  // const [currentProjec, setP] = useState(P | undefined)

  // useEffect(() => {
  //   setW(user?.workspaces?.find((w: W) => w.id === workspaceItemID))
  //   setP(currentWorkspace?.projects?.find((p: P) => p.id === project.id))
  // }, [])
  // const [projectInfo, setProjectInfo] = useState(currentProjec)

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
            <div className="w-[1034px] h-[64px] flex flex-row items-center justify-between pt-4 pb-4">
              <ShareTaskButton ShareTaskClass="absolute left-0 top-0 z-50" />

              <div className="flex h-[32px] w-[511px] flex-row-reverse gap-4">
                <div className=" flex h-[32px] w-[77px] flex-row justify-between  ">
                  <p className="font-yekan w-[77px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] ">
                    {project.title}
                  </p>
                </div>
                <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
                <div className="flex h-[24px] w-[125px] flex-row justify-between gap-[5px] mb-[5px]  mt-[5px]">
                  <button onClick={handleView} name="row">
                    <p
                      aria-label="row"
                      className={`font-yekan h-[23px] w-[96px]  text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                    ${view === Views.row && 'text-[#208D8E]'}`}
                    >
                      نمایش لیستی
                    </p>
                  </button>

                  <TodoListIconSvg
                    color={view === Views.row ? '#208D8E' : '#323232'}
                  />
                </div>
                <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
                <div className="flex h-[24px] w-[127px] flex-row justify-between gap-[5px] mb-[5px]  mt-[5px]">
                  <button onClick={handleView} name="column">
                    <p
                      aria-label="column"
                      className={`font-yekan h-[23px] w-[98px] text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                    ${view === Views.column && 'text-[#208D8E]'}`}
                    >
                      نمایش ستونی
                    </p>
                  </button>
                  <ColumnArtboardIconSvg
                    color={view === Views.column ? '#208D8E' : '#323232'}
                  />
                </div>
                <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
                <div className="flex h-[24px] w-[70px] flex-row justify-between gap-[5px] mb-[5px]  mt-[5px]">
                  <button onClick={handleView} name="calender">
                    <p
                      aria-label="calender"
                      className={`font-yekan h-[23px] w-[41px] text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                    ${view === Views.calender && 'text-[#208D8E]'}`}
                    >
                      تقویم
                    </p>
                  </button>
                  <CalendarIconSvg
                    color={view === Views.calender ? '#208D8E' : '#323232'}
                  />
                </div>
                <div className=" h-[22px] border-[1px] border-[#999999] self-center"></div>
              </div>
            </div>

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
          {/**buttom تسک جدید */}

          {view === Views.column && <ColumnView />}
          {view === Views.row && <RowView project={project} />}
          {view === Views.calender && <CalenderView />}
        </div>
      </div>
    </>
  )
}

export default Board
