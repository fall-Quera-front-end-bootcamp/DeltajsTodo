import type dayjs from 'dayjs'
import type React from 'react'
import { createContext } from 'react'

import { DATE_FORMAT, LANGUAGE, START_WEEK } from '../constants'
import {
  type Configs,
  type Period,
  type DateValueType,
  type DateType,
  type DateRangeType,
  type ClassNamesTypeProp,
  type PopoverDirectionType,
  type ColorKeys
} from '../types'

interface DatepickerStore {
  period: Period
  changePeriod: (period: Period) => void
  dayHover: string | null
  changeDayHover: (day: string | null) => void
  changeDatepickerValue: (value: { startDate: null, endDate: null }) => void
  disabledDates?: DateRangeType[] | null
  classNames?: ClassNamesTypeProp
}

const DatepickerContext = createContext<DatepickerStore>({
  input: undefined,
  primaryColor: 'blue',
  configs: undefined,
  calendarContainer: null,
  arrowContainer: null,
  period: { start: null, end: null },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changePeriod: (period) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideDatepicker: () => {},
  dayHover: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDayHover: (day: string | null) => {},
  inputText: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeInputText: (text) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  updateFirstDate: (date) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDatepickerValue: (value: DateValueType) => {},
  showFooter: false,
  value: null,
  i18n: LANGUAGE,
  disabled: false,
  inputClassName: '',
  containerClassName: '',
  toggleClassName: '',
  readOnly: false,
  displayFormat: DATE_FORMAT,
  minDate: null,
  maxDate: null,
  dateLooking: 'forward',
  disabledDates: null,
  inputId: undefined,
  inputName: undefined,
  startWeekOn: START_WEEK,
  toggleIcon: undefined,
  classNames: undefined,
  popoverDirection: undefined,
  separator: '~'
})

export default DatepickerContext
