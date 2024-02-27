/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type React from 'react'
import { toFarsiNumber } from '../../utilities/toFarsiNumber'

interface Props {
  calendarData: {
    date: string
    days: {
      previous: number[]
      current: number[]
      next: number[]
    }
  }
}

const Days: React.FC<Props> = ({ calendarData }) => {
  return (
    <>
      {calendarData?.days?.previous?.map((item, index) => (
        <button
          type="button"
          key={index}
          className="rounded-full text-[24px] text-gray-primary"
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}

      {calendarData?.days?.current?.map((item, index) => (
        <button
          type="button"
          key={index}
          className={`rounded-full ${Number(calendarData.date.slice(8, 10).replace(' ', '')) === index + 1 ? 'border border-teal-primary' : ''}  text-[24px]`}
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}

      {calendarData?.days?.next?.map((item, index) => (
        <button
          type="button"
          key={index}
          className="rounded-full text-[24px] text-gray-primary"
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}
    </>
  )
}

export default Days
