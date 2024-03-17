import { useContext } from 'react'
import { Views } from '../../../../../../utilities/models'
import CalendarIconSvg from '../../../../../Common/Icons/CalendarIcons/CalendarIconSvg'
import { DarkModeContext } from '../../../../../../contexts/DarkModeContextProvider'

const CalendarViewButton = ({
  handleView,
  view
}: {
  handleView: (e: any) => void
  view: Views
}): JSX.Element => {
  const { darkTheme } = useContext(DarkModeContext)
  return (
    <button
      onClick={handleView}
      name="calender"
      aria-label="calender"
      className="relative my-[5px] flex flex-row justify-between gap-[5px]"
    >
      <p
        aria-label="calender"
        className={`h-[23px] w-[41px] text-right text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] dark:text-white ${view === Views.calender && 'text-[#208D8E] dark:text-[#208D8E]'}`}
      >
        تقویم
      </p>
      <CalendarIconSvg
        arialabel="calender"
        className="size-6"
        color={
          view === Views.calender
            ? '#208D8E'
            : darkTheme === 'dark'
              ? '#ffffff'
              : '#323232'
        }
      />
    </button>
  )
}

export default CalendarViewButton
