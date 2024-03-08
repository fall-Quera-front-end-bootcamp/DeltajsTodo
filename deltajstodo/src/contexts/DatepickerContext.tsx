import { createContext } from 'react'
import {
  type Period,
  type DateValueType
} from '../types'

interface DatepickerStore {
  period?: Period
  changePeriod?: (period: Period) => void
  dayHover?: string | null
  changeDayHover?: (day: string | null) => void
  changeDatepickerValue?: (value: { startDate: null, endDate: null }) => void
}

const DatepickerContext = createContext<DatepickerStore>({
  period: { start: null, end: null },
  changePeriod: (period) => {},
  dayHover: null,
  changeDayHover: (day: string | null) => {},
  changeDatepickerValue: (value: DateValueType) => {}
})

export default DatepickerContext
