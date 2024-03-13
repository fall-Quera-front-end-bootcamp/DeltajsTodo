/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import { type Project } from '../../../../../utilities/models'
import { DatepickerContext } from '../../../../../contexts/DateContextProvider'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import CalendarCell from './CalendarViewComponents/CalendarCell/CalendarCell'
import Week from '../../Calendar/Week'

interface CalenderViewProps {
  project: Project
  PID: number
  WID: number
}

const CalenderView: FunctionComponent<CalenderViewProps> = ({
  project,
  PID,
  WID
}) => {
  const { days } = useContext(DatepickerContext)

  return (
    <div className=" mt-5 flex w-full flex-col items-end justify-start overflow-hidden">
      <div className="relative flex flex-col transition-all duration-500 min-[1024px]:w-[800px] xl:w-[1033px]">
        <div
          dir="rtl"
          className="absolute right-[10px] z-50 grid w-full  grid-cols-7"
        >
          <Week className="text-black" />
        </div>
        <div
          dir="rtl"
          className="grid h-[770px] w-full grid-cols-7 grid-rows-6 overflow-auto"
        >
          {days.previous.map((day) => {
            return (
              <CalendarCell
                PID={PID}
                WID={WID}
                key={days.previous.indexOf(day)}
                day={toFarsiNumber(String(day))}
              />
            )
          })}
          {days.current.map((day) => {
            return (
              <CalendarCell
                PID={PID}
                WID={WID}
                key={days.current.indexOf(day)}
                day={toFarsiNumber(String(day))}
              />
            )
          })}
          {days.next.map((day) => {
            return (
              <CalendarCell
                PID={PID}
                WID={WID}
                key={days.next.indexOf(day)}
                day={toFarsiNumber(String(day))}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CalenderView
