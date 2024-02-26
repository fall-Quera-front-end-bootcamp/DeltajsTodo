/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useRef, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Topbar from '../components/SideBars/Topbar'
import ShareIconSvg from '../components/Icons/ShareIconSvg'
import TodoListIconSvg from '../components/Icons/TodoListIconSvg'
import ColumnArtboardIconSvg from '../components/Icons/ColumnArtboardIconSvg'
import CalendarIconSvg from '../components/Icons/CalendarIconSvg'
import SearchIconSvg from '../components/Icons/SearchIconSvg'
import FilterSettingIconSvg from '../components/Icons/FilterIconSvg'
import Step2 from '../components/Modals/NewWorkspace/Step2'
import { localPageContext, localPageDispatchContext } from './MainLayout'
import NewProject from '../components/Modals/NewProject/NewProject'
import Button from '../components/Buttons/Button'
import AddIconSvg from '../components/Icons/AddIconSvg'
import AddSecondaryIconSvg from '../components/Icons/AddSecondaryIconSvg'

interface BoardProps {}
enum Views {
  column = 643,
  row = 802,
  calender = 541
}
const Board: FunctionComponent<BoardProps> = () => {
  const { projectID } = useParams()

  const { state: projectInfo } = useLocation()
  const [view, setViw] = useState<Views>(Views.column)
  const [workspaceItemSteps, setWorkspaceItemSteps] = useState<number>(0)

  {
    /**Step
     * step=1 ---->  new workspace Modal
     * 2   ----->  new project modal
     * 3 ----> new task modal */
  }
  const step = useContext(localPageContext)
  const dispatch = useContext(localPageDispatchContext)
  const x = useRef<number>(643)
  const handleView = (e: any): void => {
    console.log(e?.target?.ariaLabel)

    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }

  return (
    <>
      {/* <p>Board</p>
      <h1>hello {projectID}</h1>
      <h2>{projectInfo.title}</h2> */}
      {/* <div className="flex">
        {view === Views.column && <columnBoard />}
        {view === Views.column && <columnBoard />}
        {view === Views.column && <columnBoard />}
         </div> */}

      {/* <Topbar
        view={view}
        handleView={handleView}
        projectInfoTitle={projectInfo.title}
      /> */}
      <div className="relative">
        {/*Header */}
        <div className="absolute top-[41px] left-[50px]  h-[64px] w-[1034px]  flex flex-col gap-4">
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
                <div className=" flex h-[32px] w-[77px] flex-row justify-between  ">
                  <p className="font-yekan w-[77px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] ">
                    {projectInfo.title}
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

          {/*filterbar */}
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

        <div className="relative w-[1034px] left-[50px]">
          {/* {step === 2 && <NewProject />} */}
          <div className="relative">
            <div className="absolute top-[954px]">
              {/**buttom تسک جدید */}
              <div
                className={`w-[118px] h-[40px] flex flex-row ${view === Views.calender ? 'invisible' : ''}`}
              >
                <Button>
                  <p
                    className="w-[67px] h-[20px]
                     text-right text-[14px] 
                      leading-[19.73px] 
                      font-medium text-[#1E1E1E] "
                  >
                    تسک جدید
                  </p>
                  <AddSecondaryIconSvg />
                </Button>
              </div>
              {/**--------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Board
