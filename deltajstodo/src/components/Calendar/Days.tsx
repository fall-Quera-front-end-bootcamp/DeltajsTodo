/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type React from 'react'
import moment from 'jalali-moment'
import { toFarsiNumber } from '../../utilities/toFarsiNumber'

interface Props {
  calendarData: {
    date: moment.Moment
    days: {
      previous: number[]
      current: number[]
      next: number[]
    }
  }
  onClickPreviousDays: (day: number) => void
  onClickDay: (day: number) => void
  onClickNextDays: (day: number) => void
}

const Days: React.FC<Props> = ({ calendarData }) => {
  return (
    <>
      {calendarData?.days?.previous?.map((item, index) => (
        <button
          type="button"
          key={index}
          className="rounded-full border border-teal-primary text-[24px]"
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}

      {calendarData?.days?.current?.map((item, index) => (
        <button
          type="button"
          key={index}
          className="rounded-full border border-teal-primary text-[24px]"
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}

      {calendarData?.days?.next?.map((item, index) => (
        <button
          type="button"
          key={index}
          className="rounded-full border border-teal-primary text-[24px]"
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}
    </>
  )
}

export default Days
