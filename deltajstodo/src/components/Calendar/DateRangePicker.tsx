import { useCallback, useState } from 'react'
import Calendar from './Calendar'
import moment from 'jalali-moment'

const DateRangePicker = (): JSX.Element => {
  moment.locale('fa')
  const [firstDate, setFirstDate] = useState(moment().format())

  const ClickNextMonth = useCallback(() => {
    setFirstDate(
      moment(firstDate)
        .date(0)
        .hour(0)
        .minute(0)
        .second(0)
        .month(moment(firstDate).month() - 1)
        .format()
    )
  }, [firstDate])

  const ClickPrevMonth = useCallback(() => {
    setFirstDate(
      moment(firstDate)
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(moment(firstDate).month() + 1)
        .format()
    )
  }, [firstDate])

  console.log(firstDate)

  return (
    <Calendar
      ClickNextMonth={ClickNextMonth}
      ClickPrevMonth={ClickPrevMonth}
      date={firstDate}
    />
  )
}

export default DateRangePicker
