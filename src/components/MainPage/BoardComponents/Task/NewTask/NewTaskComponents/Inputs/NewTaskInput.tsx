import { useFormContext } from 'react-hook-form'
import { findInputError, isFormInvalid } from '../../../../../../../utilities'
import toast from 'react-hot-toast'

interface InputProps {
  label: string
  type: string
  id: string
  placeholder?: string
  name: string
  validation?: object
  className?: string
  dir?: string
  inputDir?: string
  labelClassName?: string
}

const NewTaskInput = ({
  type,
  id,
  placeholder,
  name,
  validation,
  className,
  dir = 'rtl'
}: InputProps): JSX.Element => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)

  const mg = (inputError as { error: { message: string } }).error?.message

  if (isInvalid) toast.error(mg)

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      dir={dir}
      className={className}
      required
      {...register(name, validation)}
    />
  )
}

export default NewTaskInput
