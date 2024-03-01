/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type React from 'react'
import { toFarsiNumber } from '../../utilities/toFarsiNumber'
import moment from 'jalali-moment'
import { nextMonth, previousMonth, classNames as cn } from '../../helpers'
import { useCallback, useContext } from 'react'
import DatepickerContext from '../../contexts/DatepickerContext'
import { Period } from '../../types'

interface Props {
  calendarData: {
    date: string
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

const Days: React.FC<Props> = ({
  calendarData,
  onClickPreviousDays,
  onClickDay,
  onClickNextDays
}) => {
  const {
    period,
    changePeriod,
    dayHover,
    changeDayHover,
    minDate,
    maxDate,
    disabledDates
  } = useContext(DatepickerContext)

  // Functions
  const currentDateClass = useCallback(
    (item: number) => {
      const itemDate = `${moment(calendarData.date).year()}-${moment(calendarData.date).month() + 1}-${
        item >= 10 ? item : '0' + item
      }`

      if (
        moment(itemDate).format() ===
        moment().hours(0).minutes(0).seconds(0).format()
      ) {
        return 'rounded-full border border-teal-primary text-[24px]'
      }
      return ''
    },
    [calendarData.date]
  )

  const activeDateData = useCallback(
    (day: number) => {
      const fullDay = `${moment(calendarData.date).year()}-${moment(calendarData.date).month() + 1}-${day}`
      let className = ''

      if (
        moment(fullDay).isSame(period.start) &&
        moment(fullDay).isSame(period.end)
      ) {
        className = 'border border-teal-primary text-[24px] rounded-full'
      } else if (moment(fullDay).isSame(period.start)) {
        className = ` bg-teal-primary text-[24px] ${
          moment(fullDay).isSame(dayHover) && !period.end
            ? 'rounded-full'
            : 'rounded-l-full'
        }`
      } else if (moment(fullDay).isSame(period.end)) {
        className = ` bg-teal-primary text-[24px] ${
          moment(fullDay).isSame(dayHover) && !period.start
            ? 'rounded-full'
            : 'rounded-r-full'
        }`
      }

      return {
        active:
          moment(fullDay).isSame(period.start) ||
          moment(fullDay).isSame(period.end),
        className
      }
    },
    [calendarData.date, dayHover, period.end, period.start]
  )

  const hoverClassByDay = useCallback(
    (day: number) => {
      let className = currentDateClass(day)
      const fullDay = `${moment(calendarData.date).year()}-${moment(calendarData.date).month() + 1}-${
        day >= 10 ? day : '0' + day
      }`

      if (period.start && period.end) {
        if (moment(fullDay).isBetween(period.start, period.end, 'day', '[)')) {
          return `bg-teal-primary ${currentDateClass(day)}`
        }
      }

      if (!dayHover) {
        return className
      }

      if (
        period.start &&
        moment(fullDay).isBetween(period.start, dayHover, 'day', '[)')
      ) {
        className = ` bg-teal-primary ${currentDateClass(day)} dark:bg-white/10`
      }

      if (
        period.end &&
        moment(fullDay).isBetween(dayHover, period.end, 'day', '[)')
      ) {
        className = ` bg-teal-primary ${currentDateClass(day)} dark:bg-white/10`
      }

      if (dayHover === fullDay) {
        const bgColor = 'bg-teal-primary'
        className = ` transition-all duration-500 text-white ${bgColor} ${
          period.start ? 'rounded-r-full' : 'rounded-l-full'
        }`
      }

      return className
    },
    [calendarData.date, currentDateClass, dayHover, period.end, period.start]
  )

  const buttonClass = useCallback(
    (day: number, type: 'current' | 'next' | 'previous') => {
      const baseClass = 'text-[24px]'
      if (type === 'current') {
        return cn(
          baseClass,
          !activeDateData(day).active
            ? hoverClassByDay(day)
            : activeDateData(day).className
        )
      }
      return cn(baseClass, 'text-gray-primary')
    },
    [activeDateData, hoverClassByDay]
  )

  const checkIfHoverPeriodContainsDisabledPeriod = useCallback(
    (hoverPeriod: Period) => {
      if (!Array.isArray(disabledDates)) {
        return false
      }
      for (let i = 0; i < disabledDates.length; i++) {
        if (
          moment(hoverPeriod.start).isBefore(disabledDates[i].startDate) &&
          moment(hoverPeriod.end).isAfter(disabledDates[i].endDate)
        ) {
          return true
        }
      }
      return false
    },
    [disabledDates]
  )

  const getMetaData = useCallback(() => {
    return {
      previous: previousMonth(calendarData.date),
      current: moment(calendarData.date),
      next: nextMonth(calendarData.date)
    }
  }, [calendarData.date])

  const hoverDay = useCallback(
    (day: number, type: string) => {
      const object = getMetaData()
      const newDate = object[type as keyof typeof object]
      const newHover = `${moment(newDate).year()}-${moment(newDate).month() + 1}-${
        day >= 10 ? day : '0' + day
      }`

      if (period.start && !period.end) {
        const hoverPeriod = { ...period, end: newHover }
        if (moment(newHover).isBefore(moment(period.start))) {
          hoverPeriod.start = newHover
          hoverPeriod.end = period.start
          if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
            changePeriod({
              start: '0',
              end: period.start
            })
          }
        }
        if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
          changeDayHover(newHover)
        }
      }

      if (!period.start && period.end) {
        const hoverPeriod = { ...period, start: newHover }
        if (moment(newHover).isAfter(moment(period.end))) {
          hoverPeriod.start = period.end
          hoverPeriod.end = newHover
          if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
            changePeriod({
              start: period.end,
              end: '0'
            })
          }
        }
        if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
          changeDayHover(newHover)
        }
      }
    },
    [
      changeDayHover,
      changePeriod,
      checkIfHoverPeriodContainsDisabledPeriod,
      getMetaData,
      period
    ]
  )

  const handleClickDay = useCallback(
    (day: number, type: 'previous' | 'current' | 'next') => {
      function continueClick(): void {
        if (type === 'previous') {
          onClickPreviousDays(day)
        }

        if (type === 'current') {
          onClickDay(day)
        }

        if (type === 'next') {
          onClickNextDays(day)
        }
      }

      const object = getMetaData()
      const newDate = object[type as keyof typeof object]

      const clickDay = `${moment(newDate).year()}-${moment(newDate).month() + 1}-${
        day >= 10 ? day : '0' + day
      }`

      if (period.start && !period.end) {
        moment(clickDay).isSame(dayHover) && continueClick()
      } else if (!period.start && period.end) {
        moment(clickDay).isSame(dayHover) && continueClick()
      } else {
        continueClick()
      }
    },
    [
      dayHover,
      getMetaData,
      onClickDay,
      onClickNextDays,
      onClickPreviousDays,
      period.end,
      period.start
    ]
  )
  console.log(period)

  return (
    <>
      {calendarData?.days?.previous?.map((item, index) => (
        <button
          type="button"
          key={index}
          className={`${buttonClass(item, 'previous')}`}
          onClick={() => {
            handleClickDay(item, 'previous')
          }}
          onMouseOver={() => {
            hoverDay(item, 'previous')
          }}
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}

      {calendarData?.days?.current?.map((item, index) => (
        <button
          type="button"
          key={index}
          className={`${buttonClass(item, 'current')}`}
          onClick={() => {
            handleClickDay(item, 'current')
          }}
          onMouseOver={() => {
            hoverDay(item, 'current')
          }}
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}

      {calendarData?.days?.next?.map((item, index) => (
        <button
          type="button"
          key={index}
          className={`${buttonClass(item, 'next')}`}
          onClick={() => {
            handleClickDay(item, 'next')
          }}
          onMouseOver={() => {
            hoverDay(item, 'next')
          }}
        >
          {toFarsiNumber(`${item}`)}
        </button>
      ))}
    </>
  )
}

export default Days
