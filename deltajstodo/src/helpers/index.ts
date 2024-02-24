import moment from 'jalali-moment'
import { DATE_FORMAT } from '../constants'

export function formatDate(date: moment.Moment, format = DATE_FORMAT): string {
  return date.format(format)
}

export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return classes.filter(Boolean).join(' ')
}

export function getFirstDayInMonth(date: moment.Moment): {
  ddd: string
  basic: string
  object: moment.Moment
} {
  return {
    ddd: formatDate(moment(date).startOf('month'), 'ddd'),
    basic: formatDate(moment(date).startOf('month')),
    object: moment(date).startOf('month')
  }
}

export function getLastDayInMonth(date: string | moment.Moment): object {
  return {
    ddd: formatDate(moment(date).endOf('month'), 'ddd'),
    basic: formatDate(moment(date).endOf('month')),
    object: moment(date).endOf('month')
  }
}

export function generateArrayNumber(start = 0, end = 0): number[] {
  const array = []
  for (let i = start; i <= end; i++) {
    array.push(i)
  }
  return array
}

export function getDaysInMonth(date: string | moment.Moment): number[] {
  if (!isNaN(moment(date).daysInMonth())) {
    return [...generateArrayNumber(1, moment(date).daysInMonth())]
  }
  return []
}

export function nextMonth(date: moment.Moment): moment.Moment {
  return date
    .date(1)
    .hour(0)
    .minute(0)
    .second(0)
    .month(date.month() + 1)
}

export function previousMonth(date: moment.Moment): string | moment.Moment {
  return date
    .date(1)
    .hour(0)
    .minute(0)
    .second(0)
    .month(date.month() - 1)
}

export function getNumberOfDay(
  dayString: string,
  startWeekOn?: string | undefined
): number {
  let number = 0

  let startDateModifier = 0

  if (startWeekOn != null) {
    switch (startWeekOn) {
      case 'mon':
        startDateModifier = 6
        break
      case 'tue':
        startDateModifier = 5
        break
      case 'wed':
        startDateModifier = 4
        break
      case 'thu':
        startDateModifier = 3
        break
      case 'fri':
        startDateModifier = 2
        break
      case 'sat':
        startDateModifier = 1
        break
      case 'sun':
        startDateModifier = 0
        break
      default:
        break
    }
  }

  ;[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ].forEach((item, index) => {
    if (item.includes(dayString)) {
      number = (index + startDateModifier) % 7
    }
  })

  return number
}

export function getLastElementsInArray(
  array: number[] = [],
  size = 0
): number[] {
  const result: number[] = []
  if (Array.isArray(array) && size > 0) {
    if (size >= array.length) {
      return array
    }

    let y = array.length - 1
    for (let i = 0; i < size; i++) {
      result.push(array[y])
      y--
    }
  }
  return result.reverse()
}

export function getFirstElementsInArray(
  array: number[] = [],
  size = 0
): number[] {
  return array.slice(0, size)
}

export function getLastDaysInMonth(
  date: moment.Moment | string,
  size = 0
): number[] {
  return getLastElementsInArray(getDaysInMonth(date), size)
}

export function getFirstDaysInMonth(
  date: string | moment.Moment,
  size = 0
): number[] {
  return getFirstElementsInArray(getDaysInMonth(date), size)
}
