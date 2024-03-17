import { formatDate, previousMonth } from '../helpers'
import { type ShortcutsItem } from '../types'
import moment from 'jalali-moment'

const DEFAULT_SHORTCUTS: {
  [key in string]: ShortcutsItem | ShortcutsItem[]
} = {
  today: {
    text: 'Today',
    period: {
      start: formatDate(moment()),
      end: formatDate(moment())
    }
  },
  yesterday: {
    text: 'Yesterday',
    period: {
      start: formatDate(moment().subtract(1, 'd')),
      end: formatDate(moment().subtract(1, 'd'))
    }
  },
  past: [
    {
      daysNumber: 7,
      text: 'Last 7 days',
      period: {
        start: formatDate(moment().subtract(7, 'd')),
        end: formatDate(moment())
      }
    },
    {
      daysNumber: 30,
      text: 'Last 30 days',
      period: {
        start: formatDate(moment().subtract(30, 'd')),
        end: formatDate(moment())
      }
    }
  ],
  currentMonth: {
    text: 'This month',
    period: {
      start: formatDate(moment().startOf('month')),
      end: formatDate(moment().endOf('month'))
    }
  },
  pastMonth: {
    text: 'Last month',
    period: {
      start: formatDate(previousMonth(moment()).startOf('month')),
      end: formatDate(previousMonth(moment()).endOf('month'))
    }
  }
}

export default DEFAULT_SHORTCUTS
