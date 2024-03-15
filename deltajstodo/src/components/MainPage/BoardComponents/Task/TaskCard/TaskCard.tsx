/* eslint-disable tailwindcss/no-custom-classname */
import { useContext } from 'react'
import { type Task } from '../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import DotsMenuIconSvg from '../../../../Common/Icons/DotsMenuIconSvg'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'
import moment from 'jalali-moment'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import { useDeleteTaskMutation } from '../../../../../features/auth/authApiSlice'
import toast from 'react-hot-toast'
import { taskPriority } from '../../BoardViews/RowView/RowComponents/TaskPriorityFunction'

function TaskCard ({
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
      className="group-1 flex w-full flex-col gap-s rounded-2xl bg-[#ffff] p-4 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset] transition-all duration-1000"
    >
      <button
        onClick={() => {
          localPageDispatch({
            type: 'openTaskInfo',
            name: task.name,
            description: task?.description,
            deadline: task.deadline,
            priority: task.priority,
            create_at: task.created_at
          })
        }}
        className="flex w-full flex-col gap-s"
      >
        <div className="text-[12px] text-[#534D60]">{task.name}</div>
        <div className="flex flex-row gap-2">
          <div className="whitespace-normal text-[12px]">
            {task?.description?.slice(0, 20)}...
          </div>
          <ParagraphsIconSvg className="size-3" />
        </div>
        <div className="flex w-full flex-row">
          {taskPriority(task?.priority, '', false, '')}
          <div className="flex w-[20px] flex-row gap-1">
            <div className="text-gray-primary">
              {toFarsiNumber(deadlineDay)}
            </div>
            <span>/</span>
            <div className="text-gray-primary">
              {toFarsiNumber(deadlineMonth)}
            </div>
          </div>
        </div>
      </button>
      <div
        onClick={onSubmit}
        className="hidden w-full flex-row items-center justify-between border-t-[0.5px] border-gray-primary border-opacity-30 transition-all duration-700 group-1-hover:flex"
      >
        <DotsMenuIconSvg />
      </div>
    </section>
  )
}
export default TaskCard
