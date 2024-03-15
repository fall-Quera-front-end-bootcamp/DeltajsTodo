/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormContext } from 'react-hook-form'

interface InputProps {
  label?: string
  type: string
  id: string
  placeholder?: string
  name: string
  validation?: object
  className?: string
  dir?: string
  inputDir?: string
  initialValue?: string
  autocomplete?: string
  labelClassName?: string
}

const CalendarCellNewTaskInput = ({
  type,
  id,
  placeholder,
  name,
  validation,
  className,
  inputDir = 'rtl',
  initialValue = '',
  autocomplete
}: InputProps): JSX.Element => {
  const { register } = useFormContext()

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      dir={inputDir}
      defaultValue={initialValue}
      className={`border-none text-[20px] font-medium leading-[28.18px] focus:outline-none ${className}`}
      autoComplete={autocomplete}
      required
      {...register(name, validation)}
    />
  )
}

export default CalendarCellNewTaskInput
