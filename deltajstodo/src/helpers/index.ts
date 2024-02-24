import moment from 'jalali-moment'
import { DATE_FORMAT } from '../constants'

export function formatDate(date: moment.Moment, format = DATE_FORMAT) {
  return date.format(format)
}

export function getFirstDayInMonth(date: string | moment.Moment) {
  return {
    ddd: formatDate(moment(date).startOf('month'), 'ddd'),
    basic: formatDate(moment(date).startOf('month')),
    object: moment(date).startOf('month')
  }
}

export function getLastDayInMonth(date: string) {
  return {
    ddd: formatDate(moment(date).endOf('month'), 'ddd'),
    basic: formatDate(moment(date).endOf('month')),
    object: moment(date).endOf('month')
  }
}

export function generateArrayNumber(start = 0, end = 0) {
  const array = []
  for (let i = start; i <= end; i++) {
    array.push(i)
  }
  return array
}

export function getDaysInMonth(date: string | moment.Moment) {
  if (!isNaN(moment(date).daysInMonth())) {
    return [...generateArrayNumber(1, moment(date).daysInMonth())]
  }
  return []
}

export function nextMonth(date: moment.Moment) {
  return date
    .date(1)
    .hour(0)
    .minute(0)
    .second(0)
    .month(date.month() + 1)
}

export function previousMonth(date: moment.Moment) {
  return date
    .date(1)
    .hour(0)
    .minute(0)
    .second(0)
    .month(date.month() - 1)
}

export function getNumberOfDay(
  dayString: string,
  startWeekOn?: string | null | undefined
): number {
  let number = 0

  let startDateModifier = 0

  if (startWeekOn) {
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
