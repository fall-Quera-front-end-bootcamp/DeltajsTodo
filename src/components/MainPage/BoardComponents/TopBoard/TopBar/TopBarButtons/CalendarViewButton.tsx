import { Views } from '../../../../../../utilities/models'
import CalendarIconSvg from '../../../../../Common/Icons/CalendarIcons/CalendarIconSvg'

const CalendarViewButton = ({
  handleView,
  view
}: {
  handleView: (e: any) => void
  view: Views
}): JSX.Element => {
  return (
    <button
      onClick={handleView}
      name="calender"
      aria-label="calender"
      className="relative my-[5px] flex flex-row justify-between gap-[5px]"
    >
      <p
        aria-label="calender"
        className={`h-[23px] w-[41px] text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
                        ${view === Views.calender && 'text-[#208D8E]'}`}
      >
        تقویم
      </p>
      <CalendarIconSvg
        arialabel="calender"
        className="size-6"
        color={view === Views.calender ? '#208D8E' : '#323232'}
      />
    </button>
  )
}

export default CalendarViewButton
