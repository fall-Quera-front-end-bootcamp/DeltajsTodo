import { useFormContext } from 'react-hook-form'
import {
  findInputError,
  isFormInvalid
} from '../../../../../../../../utilities'
import toast from 'react-hot-toast'

interface InputProps {
  label?: string
  id: string
  placeholder?: string
  name: string
  validation?: object
  className?: string
  dir?: string
  inputDir?: string
}

const NewTaskDescription = ({
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

  if (isInvalid) toast.error(inputError.error.message)

  return (
    <textarea
      id={id}
      placeholder={placeholder}
      dir={dir}
      className={`h-[191px] max-h-[191px] min-h-[191px] w-full rounded-xl border border-[#E2E2E2] p-6 text-[16px] ${className}`}
      required
      {...register(name, validation)}
    ></textarea>
  )
}

export default NewTaskDescription
