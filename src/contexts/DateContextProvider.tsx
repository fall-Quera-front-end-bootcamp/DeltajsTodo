import { createContext, useMemo, useState } from 'react'
import { type Period, type DateValueType } from '../types'

interface DatepickerStore {
  days: { previous: number[]; current: number[]; next: number[] }
  value: {
    startDate: null
    endDate: null
  }
  period?: Period
  changePeriod?: (period: Period) => void
  dayHover?: string | null
  changeDayHover?: (day: string | null) => void
  changeDatepickerValue?: (value: { startDate: null; endDate: null }) => void
  daysChangeF?: ((days: {
    previous: number[]
    current: number[]
    next: number[]
  }) => void) | undefined
}

export const DatepickerContext = createContext<DatepickerStore>({
  days: { previous: [], current: [], next: [] },
  value: {
    startDate: null,
    endDate: null
  },
  period: { start: null, end: null },
  changePeriod: (period) => {},
  dayHover: null,
  changeDayHover: (day: string | null) => {},
  changeDatepickerValue: (value: DateValueType) => {},
  daysChangeF: (days: {
    previous: number[]
    current: number[]
    next: number[]
  }) => {}
})

const DateContextProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  // Start ---------------------------_\
  const [period, setPeriod] = useState<Period>({
    start: null,
    end: null
  })

  const [dayHover, setDayHover] = useState<string | null>(null)

  const [valueS, setValueS] = useState({
    startDate: null,
    endDate: null
  })

  const [daysF, setDaysF] = useState<{
    previous: number[]
    current: number[]
    next: number[]
  }>({
    previous: [],
    current: [],
    next: []
  })

  const daysChange = (days: {
    previous: number[]
    current: number[]
    next: number[]
  }): void => {
    setDaysF(days)
  }

  const onChange = (valueS: { startDate: null; endDate: null }): void => {
    setValueS(valueS)
  }

  const contextValues = useMemo(() => {
    return {
      days: daysF,
      value: valueS,
      period,
      changePeriod: (newPeriod: Period) => {
        setPeriod(newPeriod)
      },
      dayHover,
      changeDayHover: (newDay: string | null) => {
        setDayHover(newDay)
      },
      changeDatepickerValue: onChange,
      daysChangeF: daysChange
    }
  }, [period, dayHover, onChange])

  return (
    <DatepickerContext.Provider value={contextValues}>
      {children}
    </DatepickerContext.Provider>
  )
}

export default DateContextProvider
