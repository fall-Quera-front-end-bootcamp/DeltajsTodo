/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { toFarsiNumber } from '../../utilities/toFarsiNumber'
import Button from '../Buttons/Button'
import ArrowDownIconSvg from '../Icons/ArrowDownIconSvg'
import CalendarIconSvg from '../Icons/CalendarIconSvg'
import {
  getDaysInMonth,
  getFirstDayInMonth,
  getFirstDaysInMonth,
  getLastDaysInMonth,
  getNumberOfDay,
  nextMonth,
  previousMonth
} from '../../helpers'
import { useCallback, useContext, useMemo } from 'react'
import Days from './Days'
import Week from './Week'
import moment from 'jalali-moment'
import DatepickerContext from '../../contexts/DatepickerContext'

const Calendar = ({
  date,
  value,
  onClickNext,
  onClickPrevious
}: {
  date: string
  value: {
    startDate: null
    endDate: null
  }
  onClickPrevious: () => void
  onClickNext: () => void
}): JSX.Element => {
  // Contexts
  const { period, changePeriod, changeDayHover, changeDatepickerValue } =
    useContext(DatepickerContext)
  // Functions
  const previous = useCallback(() => {
    return getLastDaysInMonth(
      previousMonth(date),
      getNumberOfDay(getFirstDayInMonth(date).ddd, 'شنبه')
    )
  }, [date])

  const current = useCallback(() => {
    return getDaysInMonth(date)
  }, [date])

  const next = useCallback(() => {
    return getFirstDaysInMonth(
      nextMonth(date),
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

  const clickDay = useCallback(
    (
      day: number,
      month = moment(date).month() + 1,
      year = moment(date).year()
    ) => {
      const fullDay = `${year}-${month}-${day >= 10 ? day : '0' + day}`

      let newStart
      let newEnd = null

      // True & True
      if (period.start && period.end) {
        if (changeDayHover) {
          changeDayHover(null)
        }
        changePeriod({
          start: null,
          end: null
        })
      }

      // True & True / False & False
      if ((!period.start && !period.end) || (period.start && period.end)) {
        if (!period.start && !period.end) {
          changeDayHover(fullDay)
        }
        newStart = fullDay
      } else {
        if (period.start && !period.end) {
          // start not null
          // end null
          const condition =
            fullDay === period.start ||
            moment(fullDay).isAfter(moment(period.start))
          newStart = condition ? period.start : fullDay
          newEnd = condition ? fullDay : period.start
        } else {
          // Start null
          // End not null
          const condition =
            fullDay === period.end ||
            moment(fullDay).isBefore(moment(period.end))
          newStart = condition ? fullDay : period.start
          newEnd = condition ? period.end : fullDay
        }
      }

      if (!(newEnd && newStart)) {
        changePeriod({
          start: newStart,
          end: newEnd
        })
      } else {
        changePeriod({
          start: newStart,
          end: newEnd
        })
      }

      changeDatepickerValue({
        startDate: newStart,
        endDate: newEnd
      })
    },
    [
      changeDatepickerValue,
      changeDayHover,
      changePeriod,
      date,
      period.end,
      period.start
    ]
  )

  // console.log(period)
  const clickPreviousDays = useCallback(
    (day: number) => {
      const newDate = previousMonth(date)
      clickDay(day, newDate.month() + 1, newDate.year())
      onClickPrevious()
    },
    [clickDay, date, onClickPrevious]
  )

  const clickNextDays = useCallback(
    (day: number) => {
      const newDate = nextMonth(date)
      clickDay(day, newDate.month() + 1, newDate.year())
      onClickNext()
    },
    [clickDay, date, onClickNext]
  )

  const weekDays = useCallback((number: number) => {
    switch (number) {
      case 2:
        return 'دوشنبه'
      case 3:
        return 'سه‌شنبه'
      case 4:
        return 'چهارشنبه'
      case 5:
        return 'پنجشنبه'
      case 6:
        return 'جمعه'
      case 0:
        return 'شنبه'
      case 1:
        return 'یکشنبه'
      default:
        break
    }
  }, [])

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
              {toFarsiNumber(`${value.startDate}`) === 'null'
                ? ''
                : `${moment(date).format('MMM')} ${toFarsiNumber(`${value.startDate}`).slice(8, 10)}`}
            </div>
            <p className="text-[24px]"> زمان شروع</p>
            <CalendarIconSvg color="#BDBDBD" />
          </div>
          <div className="flex w-1/2 flex-row-reverse items-center justify-end gap-2 border-r-[1px] border-[#E8EAED] pr-2">
            <div className="text-[26px] font-[500] text-brand-primary">
              {toFarsiNumber(`${value.endDate}`) === 'null'
                ? ''
                : `${moment(date).format('MMM')} ${toFarsiNumber(`${value.endDate}`).slice(8, 10)}`}
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
              <span className="text-gray-primary">
                {weekDays(moment(date).jDay())}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">کمی بعد</span>
              <span className="text-[16px] text-gray-primary ">
                {toFarsiNumber('17:39')}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">فردا</span>
              <span className="text-gray-primary">
                {weekDays(moment(date).jDay())}
              </span>
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
              <div className="">
                {' '}
                {`${moment(date).format('MMM')} ${toFarsiNumber(`${moment(date).format('YYYY')}`)}`}
              </div>
              <div className="flex flex-row">
                <button onClick={onClickPrevious}>
                  <ArrowDownIconSvg className="-rotate-90" color="#7D828C" />
                </button>
                <button onClick={onClickNext}>
                  <ArrowDownIconSvg className="rotate-90" color="#7D828C" />
                </button>
              </div>
              <div className="">امروز</div>
            </div>
            <div className="absolute left-[16px] top-[160px] my-1 grid grid-cols-7 gap-x-[30px] gap-y-4">
              <Week />
              <Days
                calendarData={calendarData}
                onClickPreviousDays={clickPreviousDays}
                onClickDay={clickDay}
                onClickNextDays={clickNextDays}
              />
            </div>
            <Button CalendarButton>بستن</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
