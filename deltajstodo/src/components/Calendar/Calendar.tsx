import moment from 'jalali-moment'
import { toFarsiNumber } from '../../utilities/toFarsiNumber'
import Button from '../Buttons/Button'
import ArrowDownIconSvg from '../Icons/ArrowDownIconSvg'
import CalendarIconSvg from '../Icons/CalendarIconSvg'
import { DATE_FORMAT } from '../../constants'
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
import { useCallback, useContext, useMemo, useState } from 'react'
import Days from './Days'
import Week from './Week'
import DatepickerContext from '../../contexts/DatepickerContext'

const Calendar = (): JSX.Element => {
  moment.locale('fa')
  const [firstDate, setFirstDate] = useState(moment())
  const [secondDate, setSecondDate] = useState(nextMonth(moment()))
  // Contexts
  const {
    period,
    changePeriod,
    changeDayHover,
    showFooter,
    changeDatepickerValue,
    hideDatepicker,
    asSingle,
    input
  } = useContext(DatepickerContext)
  console.log(firstDate)

  // Functions
  const previous = useCallback(() => {
    return getLastDaysInMonth(
      previousMonth(firstDate),
      getNumberOfDay(getFirstDayInMonth(firstDate).ddd, 'sat')
    )
  }, [firstDate, 'sat'])

  const current = useCallback(() => {
    return getDaysInMonth(formatDate(firstDate))
  }, [firstDate])

  console.log(getDaysInMonth(formatDate(firstDate)))

  const next = useCallback(() => {
    return getFirstDaysInMonth(
      previousMonth(firstDate),
      42 - (previous().length + current().length)
    )
  }, [current, firstDate, previous])

  // Variables
  const calendarData = useMemo(() => {
    return {
      date: moment(),
      days: {
        previous: previous(),
        current: current(),
        next: next()
      }
    }
  }, [current, moment(), next, previous])

  const clickDay = useCallback(
    (day: number, month = moment().month() + 1, year = moment().year()) => {
      const fullDay = `${year}-${month}-${day}`
      let newStart
      let newEnd = null

      function chosePeriod(start: string, end: string): void {
        const ipt = input?.current
        changeDatepickerValue(
          {
            startDate: moment(start).format(DATE_FORMAT),
            endDate: moment(end).format(DATE_FORMAT)
          },
          ipt
        )
        hideDatepicker()
      }

      if (period.start && period.end) {
        if (changeDayHover) {
          changeDayHover(null)
        }
        changePeriod({
          start: null,
          end: null
        })
      }

      if ((!period.start && !period.end) || (period.start && period.end)) {
        if (!period.start && !period.end) {
          changeDayHover(fullDay)
        }
        newStart = fullDay
        if (asSingle) {
          newEnd = fullDay
          chosePeriod(fullDay, fullDay)
        }
      } else {
        if (period.start && !period.end) {
          // start not null
          // end null
          const condition =
            moment(fullDay).isSame(moment(period.start)) ||
            moment(fullDay).isAfter(moment(period.start))
          newStart = condition ? period.start : fullDay
          newEnd = condition ? fullDay : period.start
        } else {
          // Start null
          // End not null
          const condition =
            moment(fullDay).isSame(moment(period.end)) ||
            moment(fullDay).isBefore(moment(period.end))
          newStart = condition ? fullDay : period.start
          newEnd = condition ? period.end : fullDay
        }

        if (!showFooter) {
          if (newStart && newEnd) {
            chosePeriod(newStart, newEnd)
          }
        }
      }

      if (!(newEnd && newStart) || showFooter) {
        changePeriod({
          start: newStart,
          end: newEnd
        })
      }
    },
    [
      asSingle,
      changeDatepickerValue,
      changeDayHover,
      changePeriod,
      moment(),
      hideDatepicker,
      period.end,
      period.start,
      showFooter,
      input
    ]
  )

  /* Start First */
  const firstGotoDate = useCallback(
    (date: moment.Moment) => {
      const newDate = moment()
      const reformatDate = moment(formatDate(secondDate))
      if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
        setSecondDate(nextMonth(moment()))
      }
      setFirstDate(date)
    },
    [secondDate]
  )

  const previousMonthFirst = useCallback(() => {
    setFirstDate(previousMonth(firstDate))
  }, [firstDate])

  const nextMonthFirst = useCallback(() => {
    firstGotoDate(nextMonth(firstDate))
  }, [firstDate, firstGotoDate])

  const changeFirstMonth = useCallback(
    (month: number) => {
      firstGotoDate(
        moment(`${firstDate.year()}-${month < 10 ? '0' : ''}${month}-01`)
      )
    },
    [firstDate, firstGotoDate]
  )

  const changeFirstYear = useCallback(
    (year: number) => {
      firstGotoDate(moment(`${year}-${firstDate.month() + 1}-01`))
    },
    [firstDate, firstGotoDate]
  )
  const clickPreviousDays = useCallback(
    (day: number) => {
      const newDate = previousMonth(moment())
      clickDay(day, newDate.month() + 1, newDate.year())
      previousMonthFirst()
    },
    [clickDay, moment(), previousMonthFirst]
  )

  const clickNextDays = useCallback(
    (day: number) => {
      const newDate = nextMonth(moment())
      clickDay(day, newDate.month() + 1, newDate.year())
      nextMonthFirst()
    },
    [clickDay, moment(), nextMonthFirst]
  )

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
                <button onClick={nextMonthFirst}>
                  <ArrowDownIconSvg className="-rotate-90" color="#7D828C" />
                </button>
                <button onClick={previousMonthFirst}>
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
