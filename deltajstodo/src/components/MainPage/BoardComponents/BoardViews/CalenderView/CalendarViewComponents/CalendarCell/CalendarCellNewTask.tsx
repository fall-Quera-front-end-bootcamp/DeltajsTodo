import { useContext, useRef, useState } from 'react'
import { localPageDispatchContext } from '../../../../../../../contexts/LocalPageContextProvider'
import Close from '../../../../../../Common/Icons/Close'
import PriorityFlag from '../../../../../../Common/Icons/PriorityFlag'
import {
  useCreateTaskMutation,
  useGetBoardsQuery
} from '../../../../../../../features/auth/authApiSlice'
import Priority from '../../../../Priority/Priority'
import { useOnClickOutside } from 'usehooks-ts'
import BoardsDropDown from '../../../../Task/NewTask/NewTaskComponents/DropDowns/BoardsDropDown'
import { type FieldValues, FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import LoadingComponent from '../../../../../../Common/LoadingComponent/LoadingComponent'
import CalendarCellNewTaskInput from './CalendarCellNewTaskInput'

interface CalendarCellNewTaskProps {
  WID: number
  PID: number
  BID?: number
  month: string | undefined
  day: string | undefined
}

interface FormDataProps {
  BID?: number
  name: string
  priority: number
}

const CalendarCellNewTask = ({
  WID,
  PID,
  BID,
  month,
  day
}: CalendarCellNewTaskProps): JSX.Element => {
  const [selected, setSelected] = useState(0)
  const [priority, setPriority] = useState(0)
  const [showPriority, setShowPriority] = useState(false)
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const divRef = useRef(null)
  const methods = useForm()
  // Click OutSide
  const handleClickOutside = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  useOnClickOutside(divRef, handleClickOutside)
  // Get Boards
  const boards = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })
  // Create Task
  const [Task, TaskDetail] = useCreateTaskMutation()
  const handleSubmit = async (
    data: FieldValues | FormDataProps
  ): Promise<void> => {
    console.log(data.name, selected, priority)
    try {
      await Task({
        workspace_id: WID,
        project_id: PID,
        board_id: selected,
        name: data.name.trimStart(),
        deadline: '1402/12/29',
        priority
      }).unwrap()

      methods.reset()
      toast.success('تسک با موفقیت ساخته شد')
      localPageDispatch({ type: 'closeModal' })
    } catch (err: any) {
      toast.error('لطفا تمام موارد گفته شده را پر کنید')
      console.log(err)
    }
  }

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data.name)

    if (data.name.replaceAll(' ', '') === '') {
      toast.error('لطفا عنوان تسک را وارد کنید')
    } else if (selected === 0) {
      toast.error('لطفا یکی از ستون‌ها رو انتخاب بکن')
    } else if (priority === 0) {
      toast.error('برای تسک خود اولویت تعیین کنید')
    } else {
      await handleSubmit(data)
    }
  })

  const nameNewTaskProps = {
    name: 'name',
    id: 'name',
    placeholder: 'لطفا عنوان تسک را وارد کنید',
    type: 'text'
  }

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
        }}
        ref={divRef}
        dir="rtl"
        className="absolute left-1/2 top-1/2 flex w-[463px] -translate-x-1/2 -translate-y-1/2  flex-col gap-8 rounded-[8px] border-[2px] border-brand-primary bg-white p-[20px] shadow-[0_3px_4px_0] shadow-[#00000033]"
      >
        <div dir="rtl" className="flex flex-row items-center justify-start">
          <div
            onClick={() => {
              localPageDispatch({ type: 'closeModal' })
            }}
          >
            <Close />
          </div>

          <CalendarCellNewTaskInput {...nameNewTaskProps} />
        </div>
        <BoardsDropDown
          setSelected={setSelected}
          boards={boards?.data}
          placeHolderText="لطفا یکی از ستون‌ها را انتخاب بکنید"
        />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setShowPriority((p) => !p)
              }}
              className="flex cursor-pointer items-center gap-3"
            >
              <PriorityFlag
                color={
                  priority === 1
                    ? '#82C91E'
                    : priority === 2
                      ? '#15AABF'
                      : priority === 3
                        ? '#FAB005'
                        : priority === 4
                          ? '#FA5252'
                          : '#C1C1C1'
                }
                className="size-[29.41px]"
              />
            </button>
            <div className="flex flex-row items-center justify-center text-bodyxl text-cyan-primary">
              <p className="">{day}</p>
              <p className=""> {month}</p>
            </div>
          </div>
          <button
            onClick={onSubmit}
            className="h-[32px] w-[125px] rounded-[4px] bg-brand-primary px-[7px] py-[4px] text-[12px] font-normal leading-[16.91px] text-white"
          >
            {TaskDetail.isLoading ? <LoadingComponent /> : 'ساخت تسک'}
          </button>{' '}
        </div>
        <Priority
          setShowPriority={setShowPriority}
          setPriority={setPriority}
          className={`absolute right-0 top-[190px] ${showPriority ? '' : 'hidden'}`}
        />
      </form>
    </FormProvider>
  )
}

export default CalendarCellNewTask
