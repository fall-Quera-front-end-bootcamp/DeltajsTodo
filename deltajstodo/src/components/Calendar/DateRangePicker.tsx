import { useState } from 'react'
import Calendar from './Calendar'
import moment from 'jalali-moment'

const DateRangePicker = (): JSX.Element => {
  moment.locale('fa')
  const [firstDate, setFirstDate] = useState(moment().format())
  return <Calendar date={firstDate} />
}

export default DateRangePicker
