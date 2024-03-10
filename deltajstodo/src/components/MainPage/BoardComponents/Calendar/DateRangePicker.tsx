import {
  type SetStateAction,
  useCallback,
  useState,
  type Dispatch,
  useContext
} from 'react'
import Calendar from './Calendar'
import moment from 'jalali-moment'
import { nextMonth, previousMonth } from '../../../../helpers'
import DateContextProvider, {
  DatepickerContext
} from '../../../../contexts/DateContextProvider'

const DateRangePicker = ({
  setShowCalendar
}: {
  setShowCalendar?: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  // Date Start
  moment.locale('fa')
  const [firstDate, setFirstDate] = useState(moment().format())
  const value = useContext(DatepickerContext)

  const previousMonthFirst = useCallback(() => {
    setFirstDate(previousMonth(firstDate).format())
  }, [firstDate])

  const nextMonthFirst = useCallback(() => {
    setFirstDate(nextMonth(firstDate).format())
  }, [firstDate])

  return (
    <Calendar
      value={value}
      onClickPrevious={previousMonthFirst}
      onClickNext={nextMonthFirst}
      date={firstDate}
      setShowCalendar={setShowCalendar}
    />
  )
}

export default DateRangePicker
