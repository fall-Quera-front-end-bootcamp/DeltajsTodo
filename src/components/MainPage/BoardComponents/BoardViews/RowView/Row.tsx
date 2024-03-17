/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useContext } from 'react'
import ItemColor from '../../../../Common/Icons/ItemColor'
import { type Task, type Board } from '../../../../../utilities/models'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'
import ArrowButton from './RowComponents/ArrowButton'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import moment from 'jalali-moment'
import { useGetTasksQuery } from '../../../../../features/auth/authApiSlice'
import LoadingComponent from '../../../../Common/LoadingComponent/LoadingComponent'
import { taskPriority } from './RowComponents/TaskPriorityFunction'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'

interface RowProps {
  board: Board
  PID: number
  WID: number
}

const Row: FunctionComponent<RowProps> = ({ board, WID, PID }) => {
  const [columnMore, setColumnMore] = useState(false)
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const handleSetColumnMore = (): void => {
    setColumnMore((p) => !p)
  }

  const {
    data: tasks,
    isLoading,
    isSuccess
  } = useGetTasksQuery({
    workspace_id: WID,
    board_id: board.id,
    project_id: PID
  })

  const BID = board?.id

  moment.locale('fa', { useGregorianParser: true })
  console.log(WID, PID, BID)

  return (
    <>
      <div dir="rtl" className="flex w-full flex-col gap-[19px]">
        {/**header */}
        <button
          onClick={board?.tasks_count === 0 ? () => {} : handleSetColumnMore}
          className="flex flex-row justify-between"
        >
          <div className="flex flex-row gap-[8px] items-center">
            <div className="flex flex-row gap-[5px] items-center">
              <ArrowButton columnMore={columnMore} />
              <div
                style={{ backgroundColor: `${board?.color}` }}
                className="relative rounded-[8px] flex flex-row gap-[10px] items-center justify-center"
              >
                <p className="text-center text-boldm text-white px-4 dark:text-white">
                  {board?.name}
                </p>
              </div>
            </div>
            <div className="h-[17px] w-[37px]">
              <p className="font-yekan h-[17px] w-[37px] text-right text-[12px] font-normal leading-[16.91px] text-[#1E1E1E] dark:text-white">
                {toFarsiNumber(`${board?.tasks?.length}`)} تسک
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[70px]">
            <p className="text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E] dark:text-white">
              اعضا
            </p>
            <p className="text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E] dark:text-white">
              ددلاین
            </p>
            <p className="text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E] dark:text-white">
              اولویت
            </p>
            <p className="text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E] dark:text-white">
              توضیحات
            </p>
          </div>
        </button>

        <div className="pr-[25px]">
          <div className={columnMore ? 'block' : 'hidden'}>
            {tasks?.map((task: Task) => {
              if (isLoading) {
                return <LoadingComponent key={task?.id} />
              } else if (isSuccess) {
                return (
                  <div
                    key={task.id}
                    onClick={() => {
                      localPageDispatch({
                        type: 'openTaskInfo',
                        WID,
                        PID,
                        BID,
                        name: task?.name,
                        description: task?.description,
                        createAt: task?.created_at,
                        deadline: task?.deadline,
                        priority: task?.priority,
                        taskID: task?.id
                      })
                    }}
                    className="rounded-[4px] flex flex-row justify-between py-[7px] items-center cursor-pointer"
                  >
                    <div className="flex flex-row gap-[7px] items-center">
                      <ItemColor color={board.color} size="16" />
                      <p className="font-yekan text-right text-[12px] font-normal leading-[16.91px] text-[#1E1E1E] dark:text-white">
                        {task?.name}
                      </p>
                    </div>
                    <div className="ml-4 flex flex-row gap-[82px] justify-between">
                      <div className="">img</div>
                      <p className="text-right text-[12px] font-normal leading-[16.91px] text-[#1E1E1E] dark:text-white">
                        {toFarsiNumber(moment(task?.deadline).format('DD MMM'))}
                      </p>
                      <div className="">{taskPriority(task?.priority)}</div>
                      <ParagraphsIconSvg />
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={task?.id} className="">
                    <div className="">Error</div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-full border-[0.5px] border-gray-secondary h-[0.5px]"></div>
    </>
  )
}

export default Row
