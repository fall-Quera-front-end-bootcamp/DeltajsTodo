/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { toFarsiNumber } from '../../../../utilities/toFarsiNumber'
import Button from '../../../Common/Buttons/Button'
import {
  getDaysInMonth,
  getFirstDayInMonth,
  getFirstDaysInMonth,
  getLastDaysInMonth,
  getNumberOfDay,
  nextMonth,
  previousMonth
} from '../../../../helpers'
import {
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  type Dispatch,
  useEffect
} from 'react'
import Days from './Days'
import Week from './Week'
import moment from 'jalali-moment'
import { DatepickerContext } from '../../../../contexts/DateContextProvider'
import CalendarStartIconSvg from '../../../Common/Icons/CalendarIcons/CalendarStartIconSvg'
import CalendarEndIconSvg from '../../../Common/Icons/CalendarIcons/CalendarEndIconSvg'
import CalendarBoxRight from './CalendarComponents/CalendarBoxRight'
import CalendarNextPrev from './CalendarComponents/CalendarNextPrev'
const Calendar = ({
  date,
  onClickNext,
  onClickPrevious,
  setShowCalendar
}: {
  date: string
  onClickPrevious: () => void
  onClickNext: () => void
  setShowCalendar: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  // Contexts
  const {
    period,
    changePeriod,
    changeDayHover,
    changeDatepickerValue,
    value,
    daysChangeF
  } = useContext(DatepickerContext)
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

  useEffect(() => {
    if (daysChangeF !== undefined) {
      daysChangeF(calendarData.days)
    }
  }, [calendarData.days])

  const clickDay = useCallback(
    (
      day: number,
      month = moment(date).month() + 1,
      year = moment(date).year()
    ) => {
      const fullDay = `${year}-${month}-${day >= 10 ? day : '0' + day}`

      let newStart
      let newEnd = 0

      // True & True
      if (period?.start && period?.end) {
        if (changeDayHover) {
          changeDayHover(null)
        }
        if (changePeriod !== undefined) {
          changePeriod({
            start: '',
            end: ''
          })
        }
      }

      // True & True / False & False
      if ((!period?.start && !period?.end) || (period?.start && period?.end)) {
        if (!period?.start && !period?.end) {
          if (changeDayHover !== undefined) {
            changeDayHover(fullDay)
          }
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
        if (changePeriod !== undefined) {
          changePeriod({
            start: newStart,
            end: newEnd
          })
        }
      } else {
        if (changePeriod !== undefined) {
          changePeriod({
            start: newStart,
            end: newEnd
          })
        }
      }

      if (changeDatepickerValue !== undefined) {
        changeDatepickerValue({
          startDate: newStart,
          endDate: newEnd
        })
      }
    },
    [
      changeDatepickerValue,
      changeDayHover,
      changePeriod,
      date,
      period?.end,
      period?.start
    ]
  )

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
              {toFarsiNumber(`${value?.startDate}`) === 'null'
                ? ''
                : `${moment(period?.start === null ? date : period?.start).format('MMM')} ${toFarsiNumber(`${value?.startDate}`).slice(8, 10)}`}
            </div>
            <p className="text-[24px]"> زمان شروع</p>
            <CalendarStartIconSvg color="#BDBDBD" />
          </div>
          <div className="flex w-1/2 flex-row-reverse items-center justify-end gap-2 border-r-[1px] border-[#E8EAED] pr-2">
            <div className="text-[26px] font-[500] text-brand-primary">
              {toFarsiNumber(`${value?.endDate}`) === 'null'
                ? ''
                : `${moment(period?.end === null ? date : period?.end).format('MMM')} ${toFarsiNumber(`${value?.endDate}`).slice(8, 10)}`}
            </div>
            <p className="text-[24px]"> زمان پایان</p>
            <CalendarEndIconSvg color="#BDBDBD" />
          </div>
        </div>
        {/* border center  */}
        <div className="w-full border-t-[1px] border-gray-secondary"></div>
        <div className="flex w-full flex-row">
          {/* box right  */}
          <CalendarBoxRight date={date} />
          {/* calendar number & week left  */}
          <div className="">
            <CalendarNextPrev
              date={date}
              onClickNext={onClickNext}
              onClickPrevious={onClickPrevious}
            />
            <div className="absolute left-[16px] top-[160px] my-1 grid w-[600px] grid-cols-7 gap-y-4">
              <Week className="text-gray-primary" />
              <Days
                calendarData={calendarData}
                onClickPreviousDays={clickPreviousDays}
                onClickDay={clickDay}
                onClickNextDays={clickNextDays}
              />
              C
            </div>
            <Button
              onClickFunction={() => {
                setShowCalendar(false)
              }}
              CalendarButton
            >
              بستن
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
