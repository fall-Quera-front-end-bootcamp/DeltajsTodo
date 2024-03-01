import { useCallback, useMemo, useState } from 'react'
import Calendar from './Calendar'
import moment from 'jalali-moment'
import { nextMonth, previousMonth } from '../../helpers'
import DatepickerContext from '../../contexts/DatepickerContext'
import { type Period } from '../../types'

const DateRangePicker = (): JSX.Element => {
  moment.locale('fa')
  const [firstDate, setFirstDate] = useState(moment().format())
  const [period, setPeriod] = useState<Period>({
    start: null,
    end: null
  })
  const [dayHover, setDayHover] = useState<string | null>(null)

  const previousMonthFirst = useCallback(() => {
    setFirstDate(previousMonth(firstDate).format())
  }, [firstDate])

  const nextMonthFirst = useCallback(() => {
    setFirstDate(nextMonth(firstDate).format())
  }, [firstDate])

  const contextValues = useMemo(() => {
    return {
      period,
      changePeriod: (newPeriod: Period) => {
        setPeriod(newPeriod)
      },
      dayHover,
      changeDayHover: (newDay: string | null) => {
        setDayHover(newDay)
      }
    }
  }, [period, dayHover])

  return (
    <DatepickerContext.Provider value={contextValues}>
      <Calendar
        onClickPrevious={previousMonthFirst}
        onClickNext={nextMonthFirst}
        date={firstDate}
      />
    </DatepickerContext.Provider>
  )
}

export default DateRangePicker
