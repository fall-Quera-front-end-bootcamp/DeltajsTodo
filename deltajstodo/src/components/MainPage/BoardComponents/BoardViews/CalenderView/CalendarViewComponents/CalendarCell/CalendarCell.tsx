import { useState } from 'react'
import AddSecondaryIconSvg from '../../../../../../Common/Icons/AddSecondaryIconSvg'
import CalendarCellNewTask from './CalendarCellNewTask'
import {
  useGetBoardQuery,
  useGetBoardsQuery,
  useGetTasksQuery
} from '../../../../../../../features/auth/authApiSlice'
import { Board, Task } from '../../../../../../../utilities/models'

interface CalendarCellProps {
  today?: boolean
  day: string
  date?: string
  month?: string
  PID: number
  WID: number
}

const CalendarCell = ({
  today = false,
  day = '',
  date,
  month,
  WID,
  PID
}: CalendarCellProps): JSX.Element => {
  const [addIconOpacity, setAddIconOpacity] = useState('opacity-0')
  const [newTaskView, setNewTaskView] = useState('hidden')

  const showNewTask = (): void => {
    setNewTaskView('block')
  }
  const closeNewTask = (e: any): void => {
    e.stopPropagation()
    setNewTaskView((prev) => (prev = 'hidden'))
  }

  return (
    <>
      <div
        className={`relative border bg-white ${today ? 'border-[#208D8E]' : 'border-[#AAAAAA]'}`}
        onMouseEnter={() => {
          setAddIconOpacity('opacity-100')
        }}
        onMouseLeave={() => {
          setAddIconOpacity('opacity-0')
        }}
      >
        {/* {tasks?.map((t: Task) => {
          return (
            <div key={t?.id} className="">
              {t?.name}
            </div>
          )
        })} */}
        <span className="absolute bottom-[10px] left-[10px] text-[16px] font-medium leading-[22.55px]">
          {day}
        </span>
        <div
          onClick={showNewTask}
          className={`absolute bottom-[10px] right-[10px] flex size-[24px] items-center justify-center rounded-[3px] bg-brand-primary ${addIconOpacity} cursor-pointer transition-all duration-300`}
        >
          <AddSecondaryIconSvg color="#ffffff" />
        </div>
      </div>
      <div className={`absolute left-0 top-0 ${newTaskView}`}>
        <CalendarCellNewTask onClickFunction={closeNewTask} />
      </div>
    </>
  )
}

export default CalendarCell
