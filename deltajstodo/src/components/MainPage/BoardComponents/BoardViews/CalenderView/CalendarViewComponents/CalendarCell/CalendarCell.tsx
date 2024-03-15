import { useContext, useState } from 'react'
import AddSecondaryIconSvg from '../../../../../../Common/Icons/AddSecondaryIconSvg'
import CalendarCellNewTask from './CalendarCellNewTask'
import {
  useGetBoardQuery,
  useGetBoardsQuery,
  useGetTasksQuery
} from '../../../../../../../features/auth/authApiSlice'
import { Board, Task } from '../../../../../../../utilities/models'
import { localPageDispatchContext } from '../../../../../../../contexts/LocalPageContextProvider'

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
  const localPageDispatch: any = useContext(localPageDispatchContext)

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
        <span className="absolute bottom-[10px] left-[10px] text-[16px] font-medium leading-[22.55px]">
          {day}
        </span>
        <div
          onClick={() => {
            localPageDispatch({
              type: 'openNewTaskLittle',
              WID,
              PID,
              month,
              day
            })
          }}
          className={`absolute bottom-[10px] right-[10px] flex size-[24px] items-center justify-center rounded-[3px] bg-brand-primary ${addIconOpacity} cursor-pointer transition-all duration-300`}
        >
          <AddSecondaryIconSvg color="#ffffff" />
        </div>
      </div>
    </>
  )
}

export default CalendarCell
