import { useContext } from 'react'
import AddSecondaryIconSvg from '../../../../../../Common/Icons/AddSecondaryIconSvg'
import { useGetBoardsQuery } from '../../../../../../../features/auth/authApiSlice'
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
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const { data: boards } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })

  const today = toFarsiNumber(moment().format('DD')) === day

  return (
    <>
      <div
        className={`group relative bg-white ${today ? 'border-[2px] border-[#208D8E]' : 'border border-[#AAAAAA]'}`}
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
          className={
            'absolute bottom-[10px] right-[10px] flex size-[24px] cursor-pointer items-center justify-center rounded-[3px] bg-brand-primary opacity-0 transition-all duration-300 group-hover:opacity-100'
          }
        >
          <AddSecondaryIconSvg color="#ffffff" />
        </div>
      </div>
    </>
  )
}

export default CalendarCell
