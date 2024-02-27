import type moment from 'jalali-moment'
import { toFarsiNumber } from '../../utilities/toFarsiNumber'
import Button from '../Buttons/Button'
import ArrowDownIconSvg from '../Icons/ArrowDownIconSvg'
import CalendarIconSvg from '../Icons/CalendarIconSvg'
import {
  formatDate,
  getDaysInMonth,
  getFirstDayInMonth,
  getFirstDaysInMonth,
  getLastDaysInMonth,
  getNumberOfDay,
  nextMonth,
  previousMonth
} from '../../helpers'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Days from './Days'
import Week from './Week'

const Calendar = ({ date }: { date: string }): JSX.Element => {
  // Functions
  const previous = useCallback(() => {
    return getLastDaysInMonth(
      previousMonth(date),
      getNumberOfDay(getFirstDayInMonth(date).ddd, 'sat')
    )
  }, [date, 'sat'])

  console.log(previousMonth(date))
  console.log(nextMonth(date))

  const current = useCallback(() => {
    return getDaysInMonth(date)
  }, [date])

  const next = useCallback(() => {
    return getFirstDaysInMonth(
      previousMonth(date),
      42 - (previous().length + current().length)
    )
  }, [current, date, previous])

  // Update the calendarData state whenever the dependencies change
  const calendarData = useMemo(() => {
    return {
      date,
      days: {
        previous: previous(),
        current: current(),
        next: next()
      }
    }
  }, [current, date, previous])

  console.log(date)

  return (
    <div
      dir="rtl"
      className="absolute left-1/2 top-1/2 w-[936px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white shadow-[0px_12px_32px_0px_#00000040]
      "
    >
      <div className="relative size-full">
        {/*  Calendar Head  */}
        <div className="mx-5 mb-[36px] mt-[51px] flex flex-row items-start">
          <div className="flex w-1/2 flex-row-reverse items-center justify-end gap-2">
            <div className="text-[26px] font-[500] text-brand-primary">
              ۱۰ تیر
            </div>
            <p className="text-[24px]"> زمان شروع</p>
            <CalendarIconSvg color="#BDBDBD" />
          </div>
          <div className="flex w-1/2 flex-row-reverse items-center justify-end gap-2 border-r-[1px] border-[#E8EAED] pr-2">
            <div className="text-[26px] font-[500] text-brand-primary">
              ۴ تیر
            </div>
            <p className="text-[24px]"> زمان پایان</p>
            <CalendarIconSvg color="#BDBDBD" />
          </div>
        </div>
        {/* border center  */}
        <div className="w-full border-t-[1px] border-gray-secondary"></div>
        <div className="flex w-full flex-row">
          {/* box right  */}
          <div className="flex h-[510px] w-[293px] flex-col gap-6 rounded-br-[20px] bg-gray-secondary px-[23px] py-[24px]">
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">امروز</span>
              <span className="text-gray-primary">بکشنبه</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">کمی بعد</span>
              <span className="text-[16px] text-gray-primary ">
                {toFarsiNumber('17:39')}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">فردا</span>
              <span className="text-gray-primary">دوشنبه</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">این آخر هفته</span>
              <span className="text-gray-primary">جمعه</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">هفته‌ی آینده</span>
              <span className="text-gray-primary">شنبه</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">آخرهفته‌ی آینده</span>
              <span className="text-gray-primary">۴ تیر</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">دو هفته دیگر</span>
              <span className="text-gray-primary">۱۱ تیر</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">۴ هفته دیگر</span>
              <span className="text-gray-primary">۱ مرداد</span>
            </div>
          </div>
          {/* calendar number & week left  */}
          <div className="">
            <div className="absolute left-[390px] top-[100px] flex flex-row items-center justify-center gap-5 text-[24px]">
              <div className="">تیر ۱۴۰۲</div>
              <div className="flex flex-row">
                <button onClick={() => {}}>
                  <ArrowDownIconSvg className="-rotate-90" color="#7D828C" />
                </button>
                <button onClick={() => {}}>
                  <ArrowDownIconSvg className="rotate-90" color="#7D828C" />
                </button>
              </div>
              <div className="">امروز</div>
            </div>
            <div className="absolute left-[16px] top-[160px] my-1 grid grid-cols-7 gap-x-[30px] gap-y-4">
              <Week />
              <Days calendarData={calendarData} />
            </div>
            <Button CalendarButton>بستن</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
