import { createContext } from 'react'

import { type Period, type DateValueType } from '../types'
import { type MomentInput } from 'jalali-moment'

interface DatepickerStore {
  period: Period
  changePeriod: (period: Period) => void
  dayHover: MomentInput | undefined
  changeDayHover: (day: string | null) => void
  changeDatepickerValue: (value: DateValueType) => void
}

const DatepickerContext = createContext<DatepickerStore>({
  period: { start: '0', end: '0' },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changePeriod: (period) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDatepickerValue: (value: DateValueType) => {},
  dayHover: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDayHover: (day: string | null) => {}
})

export default DatepickerContext
