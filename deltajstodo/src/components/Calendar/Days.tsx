/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type React from 'react'
import moment from 'jalali-moment'
import { toFarsiNumber } from '../../utilities/toFarsiNumber'
import { useCallback, useContext } from 'react'
import {
  formatDate,
  nextMonth,
  previousMonth,
  classNames as cn
} from '../../helpers'
import DatepickerContext from '../../contexts/DatepickerContext'

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

const Days: React.FC<Props> = ({
  calendarData,
  onClickPreviousDays,
  onClickDay,
  onClickNextDays
}) => {
  // Contexts
  const {
    primaryColor,
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
      const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
        item >= 10 ? item : '0' + item
      }`
      if (formatDate(moment()) === formatDate(moment(itemDate))) {
        return 'border border-teal-primary rounded-full w-[44px]'
      }
      return ''
    },
    [calendarData.date]
  )

  const activeDateData = useCallback(
    (day: number) => {
      const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`
      let className = ''

      if (
        moment(fullDay).isSame(period.start) &&
        moment(fullDay).isSame(period.end)
      ) {
        className = 'bg-teal-primary text-white font-medium rounded-full'
      } else if (moment(fullDay).isSame(period.start)) {
        className = ` bg-teal-primary text-white font-medium ${
          moment(fullDay).isSame(dayHover) && period.end !== null
            ? 'rounded-full'
            : 'rounded-l-full'
        }`
      } else if (moment(fullDay).isSame(period.end)) {
        className = ` bg-teal-primary text-white font-medium ${
          moment(fullDay).isSame(dayHover) && period.start !== null
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
    [calendarData.date, dayHover, period.end, period.start, primaryColor]
  )

  const hoverClassByDay = useCallback(
    (day: number) => {
      let className = currentDateClass(day)
      const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
        day >= 10 ? day : '0' + day
      }`

      if (period.start && period.end) {
        if (moment(fullDay).isBetween(period.start, period.end, 'day', '[)')) {
          return ` bg-teal-secondary ${currentDateClass(day)} dark:bg-white/10`
        }
      }

      if (!dayHover) {
        return className
      }

      if (
        period.start &&
        moment(fullDay).isBetween(period.start, dayHover, 'day', '[)')
      ) {
        className = ` bg-teal-secondary ${currentDateClass(
          day
        )} dark:bg-white/10`
      }

      if (
        period.end &&
        moment(fullDay).isBetween(dayHover, period.end, 'day', '[)')
      ) {
        className = ` bg-teal-secondary ${currentDateClass(
          day
        )} dark:bg-white/10`
      }

      if (dayHover === fullDay) {
        const bgColor = 'bg-teal-primary'
        className = ` transition-all duration-500 text-white font-medium ${bgColor} ${
          period.start ? 'rounded-r-full' : 'rounded-l-full'
        }`
      }

      return className
    },
    [
      calendarData.date,
      currentDateClass,
      dayHover,
      period.end,
      period.start,
      primaryColor
    ]
  )

  const isDateTooEarly = useCallback(
    (day: number, type: 'current' | 'previous' | 'next') => {
      if (!minDate) {
        return false
      }
      const object = {
        previous: previousMonth(calendarData.date),
        current: calendarData.date,
        next: nextMonth(calendarData.date)
      }
      const newDate = object[type as keyof typeof object]
      const formattedDate = newDate.set('date', day)
      return moment(formattedDate).isSame(moment(minDate), 'day')
        ? false
        : moment(formattedDate).isBefore(moment(minDate))
    },
    [calendarData.date, minDate]
  )

  const isDateTooLate = useCallback(
    (day: number, type: 'current' | 'previous' | 'next') => {
      if (!maxDate) {
        return false
      }
      const object = {
        previous: previousMonth(calendarData.date),
        current: calendarData.date,
        next: nextMonth(calendarData.date)
      }
      const newDate = object[type as keyof typeof object]
      const formattedDate = newDate.set('date', day)
      return moment(formattedDate).isSame(moment(maxDate), 'day')
        ? false
        : moment(formattedDate).isAfter(moment(maxDate))
    },
    [calendarData.date, maxDate]
  )

  const isDateDisabled = useCallback(
    (day: number, type: 'current' | 'previous' | 'next') => {
      if (isDateTooEarly(day, type) || isDateTooLate(day, type)) {
        return true
      }
      const object = {
        previous: previousMonth(calendarData.date),
        current: calendarData.date,
        next: nextMonth(calendarData.date)
      }
      const newDate = object[type as keyof typeof object]
      const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${
        day >= 10 ? day : '0' + day
      }`

      if (
        !disabledDates ||
        (Array.isArray(disabledDates) && disabledDates.length === 0)
      ) {
        return false
      }

      let matchingCount = 0
      disabledDates?.forEach((dateRange) => {
        if (
          moment(formattedDate).isAfter(dateRange.startDate) &&
          moment(formattedDate).isBefore(dateRange.endDate)
        ) {
          matchingCount++
        }
        if (
          moment(formattedDate).isSame(dateRange.startDate) ||
          moment(formattedDate).isSame(dateRange.endDate)
        ) {
          matchingCount++
        }
      })
      return matchingCount > 0
    },
    [calendarData.date, isDateTooEarly, isDateTooLate, disabledDates]
  )

  const buttonClass = useCallback(
    (day: number, type: 'current' | 'next' | 'previous') => {
      const baseClass =
        '`h-[38px] w-[33px] rounded-[4px] text-center text-[24px] font-[500] text-black'
      if (type === 'current') {
        return cn(
          baseClass,
          !activeDateData(day).active
            ? hoverClassByDay(day)
            : activeDateData(day).className,
          isDateDisabled(day, type) && 'line-through'
        )
      }
      return cn(
        baseClass,
        isDateDisabled(day, type) && 'line-through',
        'text-gray-400'
      )
    },
    [activeDateData, hoverClassByDay, isDateDisabled]
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
      current: calendarData.date,
      next: nextMonth(calendarData.date)
    }
  }, [calendarData.date])

  const hoverDay = useCallback(
    (day: number, type: string) => {
      const object = getMetaData()
      const newDate = object[type as keyof typeof object]
      const newHover = `${newDate.year()}-${newDate.month() + 1}-${
        day >= 10 ? day : '0' + day
      }`

      if (period.start && !period.end) {
        const hoverPeriod = { ...period, end: newHover }
        if (moment(newHover).isBefore(moment(period.start))) {
          hoverPeriod.start = newHover
          hoverPeriod.end = period.start
          if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
            changePeriod({
              start: null,
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
              end: null
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

      if (disabledDates?.length) {
        const object = getMetaData()
        const newDate = object[type as keyof typeof object]
        const clickDay = `${newDate.year()}-${newDate.month() + 1}-${
          day >= 10 ? day : '0' + day
        }`

        if (period.start && !period.end) {
          moment(clickDay).isSame(dayHover) && continueClick()
        } else if (!period.start && period.end) {
          moment(clickDay).isSame(dayHover) && continueClick()
        } else {
          continueClick()
        }
      } else {
        continueClick()
      }
    },
    [
      dayHover,
      disabledDates?.length,
      getMetaData,
      onClickDay,
      onClickNextDays,
      onClickPreviousDays,
      period.end,
      period.start
    ]
  )
  return (
    <>
      {calendarData.days.previous.map((item, index) => (
        <button
          type="button"
          key={index}
          disabled={isDateDisabled(item, 'previous')}
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

      {calendarData.days.current.map((item, index) => (
        <button
          type="button"
          key={index}
          disabled={isDateDisabled(item, 'current')}
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

      {calendarData.days.next.map((item, index) => (
        <button
          type="button"
          key={index}
          disabled={isDateDisabled(item, 'next')}
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
