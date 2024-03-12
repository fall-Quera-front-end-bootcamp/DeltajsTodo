/* eslint-disable no-extra-boolean-cast */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import ShareIconSvg from '../../components/Common/Icons/ShareIconSvg'
import TodoListIconSvg from '../../components/Common/Icons/TodoListIconSvg'
import ColumnArtboardIconSvg from '../../components/Common/Icons/ColumnArtboardIconSvg'
import CalendarIconSvg from '../../components/Common/Icons/CalendarIcons/CalendarIconSvg'
import ColumnView from '../../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import { useGetProjectQuery } from '../../features/auth/authApiSlice'

import BuildTaskButtonPrimary from '../../components/MainPage/BoardComponents/Task/BuildTaskButtons/BuildTaskButtonPrimary'
interface BoardProps {}
enum Views {
  column = 643,
  row = 802,
  calender = 541
}

const Board: FunctionComponent<BoardProps> = () => {
  // const { projectID } = useParams()

  const {
    state: { workspaceItemID, projectItemID }
  } = useLocation()

  const [view, setViw] = useState<Views>(Views.column)

  const handleView = (e: any): void => {
    //console.log(e?.target?.ariaLabel)
    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }
  ////////////////////////////////////////////////////////////////////
  const {
    data: project,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectItemID })

  /////////////////////////////////////////////////////////////////////

  if (!!isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (!!isSuccess) {
    return (
      <>
        <div className="relative ">
          {/*Header */}
          <div className="absolute right-0 top-[41px]  flex h-[64px]  max-w-[1034px] flex-col gap-4">
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
                  <div className=" flex h-[32px] w-[77px] flex-row justify-between overflow-hidden ">
                    <p className="font-yekan w-[77px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] ">
                      {project.name}
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
            {/* <div className="h-[28px] w-[1034px] bg-indigo-primary flex flex-row-reverse gap-[40px]">
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
            </div> */}
          </div>

          <div className="relative ">
            {/**buttom تسک جدید */}

            {view === Views.column && (
              <ColumnView WID={workspaceItemID} PID={projectItemID} />
            )}
            {view === Views.row && <RowView project={project} />}
            {/* {view === Views.calender && <CalenderView />} */}

            {/**--------------------------------------- */}
          </div>
          <div
            className={`absolute bottom-[-1010px] right-[1010px] ${view === Views.calender ? 'hidden' : ''}`}
          >
            <BuildTaskButtonPrimary
              className="bg-brand-primary flex w-[100px] flex-row-reverse gap-1 rounded-md p-2 text-white"
              IconColor="#ffffff"
              title="تسک جدید"
              onClick={() => {}}
            />
          </div>
        </div>
      </>
    )
  } else if (!!isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default Board
