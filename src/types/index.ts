import type React from 'react'

import { type COLORS } from '../constants'
import { type MomentInput } from 'jalali-moment'

export interface Period {
  start: string | MomentInput | undefined
  end: string | MomentInput | undefined
}

type CustomShortcuts = Record<string, ShortcutsItem>

interface DefaultShortcuts {
  today?: string
  yesterday?: string
  past?: (period: number) => string
  currentMonth?: string
  pastMonth?: string
}
export interface Configs {
  shortcuts?: DefaultShortcuts | CustomShortcuts
  footer?: {
    cancel?: string
    apply?: string
  }
}

export interface ShortcutsItem {
  text: string
  daysNumber?: number
  period: {
    start: Date | string
    end: Date | string
  }
}

export type DateType = string | null | Date

export interface DateRangeType {
  startDate: DateType
  endDate: DateType
}

export type DateValueType = DateRangeType | null

export interface ClassNamesTypeProp {
  container?: (p?: object | null | undefined) => string | undefined
  input?: (p?: object | null | undefined) => string | undefined
  toggleButton?: (p?: object | null | undefined) => string | undefined
  footer?: (p?: object | null | undefined) => string | undefined
}

export type PopoverDirectionType = 'up' | 'down'

export interface DatepickerType {
  primaryColor?: ColorKeys
  value: DateValueType
  onChange: (
    value: DateValueType,
    e?: HTMLInputElement | null | undefined
  ) => void
  useRange?: boolean
  showFooter?: boolean
  showShortcuts?: boolean
  configs?: Configs
  asSingle?: boolean
  placeholder?: string
  separator?: string
  startFrom?: Date | null
  i18n?: string
  disabled?: boolean
  classNames?: ClassNamesTypeProp | undefined
  containerClassName?: ((className: string) => string) | string | null
  inputClassName?: ((className: string) => string) | string | null
  toggleClassName?: ((className: string) => string) | string | null
  toggleIcon?: (open: boolean) => React.ReactNode
  inputId?: string
  inputName?: string
  displayFormat?: string
  readOnly?: boolean
  minDate?: Date | null
  maxDate?: Date | null
  dateLooking?: 'forward' | 'backward' | 'middle'
  disabledDates?: DateRangeType[] | null
  startWeekOn?: string | null
  popoverDirection?: PopoverDirectionType
}

export type ColorKeys = (typeof COLORS)[number] // "blue" | "orange"

export type Colors = Record<
string,
{
  [K in ColorKeys]: string
}
>
