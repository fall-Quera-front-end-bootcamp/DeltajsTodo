/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import moment from 'jalali-moment'
import type React from 'react'
import { useCallback, useContext } from 'react'

import DatepickerContext from '../../contexts/DatepickerContext'
import { nextMonth, previousMonth, classNames as cn } from '../../helpers'
import { type Period } from '../../types'
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
    period,
    changePeriod,
    dayHover,
    changeDayHover,
    minDate,
    maxDate,
    disabledDates
  } = useContext(DatepickerContext)
  moment.locale('fa')
  // Functions

  // Tomarow
  const currentDateClass = useCallback(
    (item: number) => {
      const itemDate = `${moment(calendarData.date).jYear()}-${moment(calendarData.date).jMonth() + 1}-${
        item >= 10 ? item : '0' + item
      }`

      if (
        moment().hours(0).minutes(0).seconds(0).format() ===
        moment(itemDate).format()
      ) {
        return 'border border-teal-primary rounded-full'
      }
      return ''
    },
    [calendarData.date]
  )

  const activeDateData = useCallback(
    (day: number) => {
      const fullDay = `${moment(calendarData.date).year()}-${moment(calendarData.date).month() + 1}-${
        day >= 10 ? day : '0' + day
      }`
      let className = ''

      if (fullDay === period.start && fullDay === period.end) {
        className = 'bg-teal-primary text-white font-medium rounded-[4px]'
      } else if (fullDay === period.start) {
        className = 'bg-teal-primary text-white font-medium rounded-[4px]'
      } else if (fullDay === period.end) {
        className = 'bg-teal-primary text-white font-medium rounded-[4px]'
      } else if (fullDay === dayHover) {
        className = 'bg-teal-primary text-white font-medium rounded-[4px]'
      }
      return {
        active: fullDay === period.start || fullDay === period.end,
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
      // console.log(
      //   moment(fullDay).isBetween(period.start, dayHover, 'day', '[)'),
      //   moment(fullDay).isBetween(period.start, period.end, 'day', '[)')
      // )
      // console.log(fullDay)
      // fullDay.filter((x) => x > first && x < last) ? 'green' : ''
      // console.log(period.start, fullDay, dayHover)

      if (period.start && period.end) {
        if (moment(fullDay).isBetween(period.start, period.end, 'day', '[)')) {
          console.log('hello')
          return `bg-teal-secondary ${currentDateClass(day)}`
        }
      }

      if (!dayHover) {
        return className
      }

      if (
        period.start &&
        moment(fullDay).isBetween(period.start, dayHover, 'day', '[)')
      ) {
        className = `bg-teal-secondary ${currentDateClass(day)}`
      }

      if (
        period.end &&
        moment(fullDay).isBetween(dayHover, period.end, 'day', '[)')
      ) {
        className = `bg-teal-secondary ${currentDateClass(day)}`
      }

      if (dayHover === fullDay) {
        className = 'text-white font-medium bg-teal-primary rounded-[4px]'
      }

      return className
    },
    [calendarData.date, currentDateClass, dayHover, period.end, period.start]
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
      const formattedDate = `${moment(newDate).jYear()}-${moment(newDate).jMonth() + 1}-${
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
      const baseClass = 'text-[24px]'
      if (type === 'current') {
        return cn(
          baseClass,
          !activeDateData(day).active
            ? hoverClassByDay(day)
            : activeDateData(day).className,
          isDateDisabled(day, type) && 'line-through'
        )
      }
      return cn(baseClass, isDateDisabled(day, type) && 'line-through')
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

      const newHover = `${moment(newDate).jYear()}-${moment(newDate).jMonth() + 1}-${
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
      if (type === 'previous') {
        onClickPreviousDays(day)
      }

      if (type === 'current') {
        onClickDay(day)
      }

      if (type === 'next') {
        onClickNextDays(day)
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

  console.log(period)

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
