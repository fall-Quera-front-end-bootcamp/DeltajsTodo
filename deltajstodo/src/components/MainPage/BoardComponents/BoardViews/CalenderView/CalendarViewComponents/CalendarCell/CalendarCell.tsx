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
import toast from 'react-hot-toast'
import moment from 'jalali-moment'
import { toFarsiNumber } from '../../../../../../../utilities/toFarsiNumber'

interface CalendarCellProps {
  day: string
  month?: string
  PID: number
  WID: number
}

const CalendarCell = ({
  day = '',
  month,
  WID,
  PID
}: CalendarCellProps): JSX.Element => {
  const [addIconOpacity, setAddIconOpacity] = useState('opacity-0')
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const { data: boards } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })

  const today = toFarsiNumber(moment().format('DD')) === day

  return (
    <>
      <div
        className={`relative bg-white ${today ? 'border-[2px] border-[#208D8E]' : 'border border-[#AAAAAA]'}`}
        onMouseEnter={() => {
          setTimeout(() => {
            setAddIconOpacity('opacity-100')
          }, 2000)
          setAddIconOpacity('opacity-0')
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
            if (boards?.length === 0) {
              toast.error('چرا اول نمیری یک ستون ایجاد بکنی خوشگله', {
                style: {
                  borderWidth: '2px',
                  borderColor: '#FA5252'
                },
                icon: '😁'
              })
            } else {
              localPageDispatch({
                type: 'openNewTaskLittle',
                WID,
                PID,
                month,
                day
              })
            }
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
