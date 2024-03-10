import { useState } from 'react'
import AddSecondaryIconSvg from '../../../../../../Common/Icons/AddSecondaryIconSvg'
import CalendarCellNewTask from './CalendarCellNewTask'

interface CalendarCellProps {
  today?: boolean
  day: string
  date?: string
  month?: string
}

const CalendarCell = ({
  today = false,
  day = '',
  date,
  month
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
    <div
      className={`relative border bg-white ${today ? 'border-[#208D8E]' : 'border-[#AAAAAA]'} cursor-pointer`}
      onMouseEnter={() => {
        setAddIconOpacity('opacity-100')
      }}
      onMouseLeave={() => {
        setAddIconOpacity('opacity-0')
      }}
      onClick={showNewTask}
    >
      <span className="absolute bottom-[10px] left-[10px] text-[16px] font-medium leading-[22.55px]">
        {day}
      </span>

      <div
        className={`absolute bottom-[10px] right-[10px] flex size-[24px] items-center justify-center rounded-[3px] bg-brand-primary ${addIconOpacity} transition-all duration-300`}
      >
        <AddSecondaryIconSvg />
      </div>

      <div className={`absolute left-0 top-0 ${newTaskView}`}>
        <CalendarCellNewTask onClickFunction={closeNewTask} />
      </div>
    </div>
  )
}

export default CalendarCell
