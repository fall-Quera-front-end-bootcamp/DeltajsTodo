/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent } from 'react'
import { type Project } from '../../../../../utilities/models'
import { DatepickerContext } from '../../../../../contexts/DateContextProvider'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import CalendarCell from './CalendarViewComponents/CalendarCell/CalendarCell'
import Week from '../../Calendar/Week'

interface CalenderViewProps {
  project: Project
}

const CalenderView: FunctionComponent<CalenderViewProps> = ({ project }) => {
  const { days } = useContext(DatepickerContext)

  return (
    <div className="relative flex flex-col transition-all duration-500 min-[1024px]:w-[800px] xl:w-[1033px]">
      <div
        dir="rtl"
        className="absolute right-[10px] z-50 grid w-full  grid-cols-7"
      >
        <Week className="text-black" />
      </div>
      <div
        dir="rtl"
        className="relative grid h-[870px] w-full grid-cols-7 grid-rows-7 overflow-auto"
      >
        {days.previous.map((day) => {
          return (
            <CalendarCell
              key={days.previous.indexOf(day)}
              day={toFarsiNumber(String(day))}
            />
          )
        })}
        {days.current.map((day) => {
          return (
            <CalendarCell
              key={days.current.indexOf(day)}
              day={toFarsiNumber(String(day))}
            />
          )
        })}
        {days.next.map((day) => {
          return (
            <CalendarCell
              key={days.next.indexOf(day)}
              day={toFarsiNumber(String(day))}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CalenderView
