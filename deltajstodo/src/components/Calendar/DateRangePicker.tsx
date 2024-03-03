import { type SetStateAction, useCallback, useMemo, useState, type Dispatch } from 'react'
import Calendar from './Calendar'
import moment from 'jalali-moment'
import { nextMonth, previousMonth } from '../../helpers'
import DatepickerContext from '../../contexts/DatepickerContext'
import { type Period } from '../../types'

const DateRangePicker = ({
  setShowCalendar
}: {
  setShowCalendar: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  // Date Start
  moment.locale('fa')
  // const Tdate: number = moment().seconds()
  // const TfirstDate = useCallback(
  //   function (Tdate: number) {
  //     return moment().format()
  //   },
  //   [moment().seconds()]
  // )
  const [firstDate, setFirstDate] = useState(moment().format())
  // useEffect(() => {
  //   setFirstDate(moment().format())
  // }, [moment().seconds()])
  // Date End

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

  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  })

  const onChange = (value: { startDate: null; endDate: null }): void => {
    setValue(value)
  }

  const contextValues = useMemo(() => {
    return {
      period,
      changePeriod: (newPeriod: Period) => {
        setPeriod(newPeriod)
      },
      dayHover,
      changeDayHover: (newDay: string | null) => {
        setDayHover(newDay)
      },
      changeDatepickerValue: onChange
    }
  }, [period, dayHover, onChange])
  return (
    <DatepickerContext.Provider value={contextValues}>
      <Calendar
        value={value}
        onClickPrevious={previousMonthFirst}
        onClickNext={nextMonthFirst}
        date={firstDate}
        setShowCalendar={setShowCalendar}
      />
    </DatepickerContext.Provider>
  )
}

export default DateRangePicker
