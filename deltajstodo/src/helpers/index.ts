import moment from 'jalali-moment'
import { DATE_FORMAT } from '../constants'

export function formatDate (date: moment.Moment, format = DATE_FORMAT): string {
  return date.format(format)
}

export function classNames (
  ...classes: Array<false | null | undefined | string>
): string {
  return classes.filter(Boolean).join(' ')
}

export function getFirstDayInMonth (date: string): {
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

export function getLastDayInMonth (date: string): {
  ddd: string
  basic: string
  object: moment.Moment
} {
  return {
    ddd: formatDate(moment(date).endOf('month'), 'ddd'),
    basic: formatDate(moment(date).endOf('month')),
    object: moment(date).endOf('month')
  }
}

export function generateArrayNumber (start = 0, end = 0): number[] {
  const array = []
  for (let i = start; i <= end; i++) {
    array.push(i)
  }
  return array
}

export function getDaysInMonth (date: string): number[] {
  if (!isNaN(moment(date).daysInMonth())) {
    return [...generateArrayNumber(1, moment(date).daysInMonth())]
  }
  return []
}

export function nextMonth (date: string): string {
  const nextmonth =
    Number(date.slice(5, 7)) === 12 ? 1 : Number(date.slice(5, 7)) + 1

  return String(nextmonth)
}

export function previousMonth (date: string): string {
  const previousM =
    Number(date.slice(5, 7)) === 1 ? 12 : Number(date.slice(5, 7)) - 1
  return String(previousM)
}

export function getNumberOfDay (
  dayString: string,
  startWeekOn?: string | undefined
): number {
  let number = 0

  let startDateModifier = 0

  if (startWeekOn != null) {
    switch (startWeekOn) {
      case 'دوشنبه':
        startDateModifier = 6
        break
      case 'سه‌شنبه':
        startDateModifier = 5
        break
      case 'چهارشنبه':
        startDateModifier = 4
        break
      case 'پنجشنبه':
        startDateModifier = 3
        break
      case 'جمعه':
        startDateModifier = 2
        break
      case 'یکشنبه':
        startDateModifier = 1
        break
      case 'شنبه':
        startDateModifier = 0
        break
      default:
        break
    }
  }

  ;[
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه'
  ].forEach((item, index) => {
    if (item.includes(dayString)) {
      number = (index + startDateModifier) % 7
    }
  })

  return number
}

export function getLastElementsInArray (
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

export function getFirstElementsInArray (
  array: number[] = [],
  size = 0
): number[] {
  return array.slice(0, size)
}

export function getLastDaysInMonth (
  date: moment.Moment | string,
  size = 0
): number[] {
  return getLastElementsInArray(getDaysInMonth(date), size)
}

export function getFirstDaysInMonth (
  date: string | moment.Moment,
  size = 0
): number[] {
  return getFirstElementsInArray(getDaysInMonth(date), size)
}
