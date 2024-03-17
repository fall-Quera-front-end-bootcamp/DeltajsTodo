/* eslint-disable multiline-ternary */
/* eslint-disable tailwindcss/no-custom-classname */
import { useContext, useState } from 'react'
import { type TaskMembers, type Task } from '../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import DotsMenuIconSvg from '../../../../Common/Icons/DotsMenuIconSvg'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'
import moment from 'jalali-moment'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import {
  useDeleteTaskMutation,
  useGetTaskMembersQuery
} from '../../../../../features/auth/authApiSlice'
import toast from 'react-hot-toast'
import { taskPriority } from '../../BoardViews/RowView/RowComponents/TaskPriorityFunction'
import { useGetUsersQuery } from '../../../../../features/users/usersInteractionApiSlice'
import LoadingComponent from '../../../../Common/LoadingComponent/LoadingComponent'
import { BiUser } from 'react-icons/bi'

function TaskCard({
  task,
  WID,
  PID,
  BID,
  TID
}: {
  task: Task
  WID: number
  PID: number
  BID: number
  TID: number
}): JSX.Element {
  moment.locale('fa', { useGregorianParser: true })
  const deadlineMonth = moment(task?.deadline).format('MM')
  const deadlineDay = moment(task?.deadline).format('DD')
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false)
  const [showDo, setShowDo] = useState<boolean>(false)

  const [deleteTask, { isLoading }] = useDeleteTaskMutation()

  const handleDeleteTask = async (): Promise<void> => {
    try {
      await deleteTask({
        workspace_id: WID,
        project_id: PID,
        board_id: BID,
        id: TID
      }).unwrap()
    } catch (error: any) {
      console.log('Hi i am that error: ', error)
    }
  }

  const onSubmit = (): void => {
    void toast.promise(
      handleDeleteTask(),
      {
        loading: '... در حال بررسی',
        success: 'تسک با موفقیت حذف شد',
        error: 'مشکلی در حذف تسک وجود دارد کمی بعد امتحان بکنید'
      },
      {
        style: {
          minWidth: '250px'
        },
        loading: {
          style: { backgroundColor: '#ffffff80' }
        },
        success: {
          duration: 3000,
          style: {
            border: '2px',
            borderStyle: 'solid',
            borderColor: 'rgb(130, 201, 30)'
          }
        },
        error: {
          style: {
            border: '2px',
            borderStyle: 'solid',
            borderColor: 'red'
          }
        }
      }
    )
  }

  return (
    <section
      dir="rtl"
      className="group-1 flex w-full flex-col gap-s rounded-2xl p-4 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset] dark:shadow-[0px_2px_4px_0px_#ffffff66,0px_7px_6px_-3px_#ffffff4D,0px_-3px_0px_0px_#ffffff33_inset] transition-all duration-1000 dark:"
    >
      <div
        onClick={() => {
          localPageDispatch({
            type: 'openTaskInfo',
            name: task.name,
            description: task?.description,
            deadline: task.deadline,
            priority: task.priority,
            create_at: task.created_at,
            taskID: task?.id,
            WID,
            PID,
            BID
          })
        }}
        className="flex w-full cursor-pointer flex-col gap-s"
      >
        <div className="flex w-full flex-row justify-between">
          <div className="text-[12px] text-[#534D60] dark:text-white">
            {task.name}
          </div>
          {task?.members?.length === 0 ? (
            <></>
          ) : (
            <p className="flex h-[25px] w-[28px] flex-col items-center justify-center rounded-[100px] bg-blue-secondary px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-[#4C6EF5]">
              {toFarsiNumber(`+${task?.members?.length}`)}
            </p>
          )}
        </div>
        <div className="flex flex-row gap-2">
          <div className="whitespace-normal text-[12px] truncate dark:text-white">
            {task?.description?.slice(0, 20)}
          </div>
          <ParagraphsIconSvg className="size-3" />
        </div>
        <div className="flex w-full flex-row">
          {taskPriority(task?.priority, '', false, '')}
          <div className="flex w-[20px] flex-row gap-1">
            <div className="text-gray-primary dark:text-white">
              {toFarsiNumber(deadlineDay)}
            </div>
            <span>/</span>
            <div className="text-gray-primary dark:text-white">
              {toFarsiNumber(deadlineMonth)}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full flex-row items-center justify-end border-t-[0.5px] border-gray-primary p-1 transition-all duration-700 group-1-hover:flex">
        <div className="relative rounded-full p-1 hover:bg-gray-secondary">
          <div
            onClick={() => {
              setShowDeleteTask((p) => !p)
            }}
          >
            <DotsMenuIconSvg />
          </div>

          {showDeleteTask &&
            (showDo ? (
              isLoading ? (
                <div className="absolute left-8 top-0 w-[140px] rounded-full bg-gray-primary p-1">
                  <LoadingComponent />
                </div>
              ) : (
                <button
                  onMouseLeave={() => {
                    setShowDeleteTask(false)
                    setShowDo(false)
                  }}
                  onClick={() => {
                    onSubmit()
                  }}
                  className="absolute left-8 top-0 w-[140px] rounded-full bg-red-primary p-1"
                >
                  حذف
                </button>
              )
            ) : (
              <button
                onMouseLeave={() => {
                  setShowDeleteTask(false)
                }}
                onClick={() => {
                  setShowDo(true)
                }}
                className="absolute left-8 top-0 w-[140px] rounded-full bg-blue-primary p-1 text-white"
              >
                اگر مطمئنی کلیک بکن
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}
export default TaskCard
