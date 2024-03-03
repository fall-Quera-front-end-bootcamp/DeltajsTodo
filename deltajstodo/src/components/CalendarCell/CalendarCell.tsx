import { useState } from 'react'
import AddIconCelandarCell from '../Icons/AddIconCalendarCell'
import CalendarCellNewTask from './CalendarCellNewTask'

interface CalendarCellProps {
  today?: boolean
  day?: string
  date: string
  month: string
}

const CalendarCell = ({
  today = false,
  day = '',
  date,
  month
}: CalendarCellProps): JSX.Element => {
  const [addIconOpacity, setAddIconOpacity] = useState('opacity-0')
  const [newTaskView, setNewTaskView] = useState('hidden')

  const showNewTask = () => setNewTaskView('block')
  const closeNewTask = (e: any) => {
    e.stopPropagation()
    setNewTaskView((prev) => (prev = 'hidden'))
  }

  return (
    <div
      className={`mr-[200px] relative w-[148px] h-[156px] bg-white border ${today ? 'border-[#208D8E]' : 'border-[#AAAAAA]'} cursor-pointer`}
      onMouseEnter={() => setAddIconOpacity('opacity-100')}
      onMouseLeave={() => setAddIconOpacity('opacity-0')}
      onClick={showNewTask}
    >
      <span className="absolute top-[12px] left-[102px] font-medium text-[16px] leading-[22.55px] opac">
        {day}
      </span>

      <span className="absolute top-[119px] left-[18px] font-medium text-[16px] leading-[22.55px]">
        {date}
      </span>

      <div
        className={`absolute top-[115px] left-[112px] flex justify-center items-center w-[24px] h-[24px] bg-brand-primary rounded-[3px] ${addIconOpacity} transition-all duration-300`}
      >
        <AddIconCelandarCell />
      </div>

      <div className={`absolute top-[100%] right-[-175px] ${newTaskView}`}>
        <CalendarCellNewTask
          date={date}
          month={month}
          onClickFunction={closeNewTask}
        />
      </div>
    </div>
  )
}

export default CalendarCell
