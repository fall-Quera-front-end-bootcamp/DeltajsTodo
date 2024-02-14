/* eslint-disable @typescript-eslint/no-unused-vars */
import '../../dist/output.css'
import cn from 'classnames'
import { findInputError, isFormInvalid } from '../../utilities'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
interface InputProps {
  label: string
  type: string
  id: string
  placeholder?: string
  name: string
  validation: object
}

const Input = ({
  label,
  type,
  id,
  placeholder,
  name,
  validation
}: InputProps): JSX.Element => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div dir="rtl">
      <label
        htmlFor=""
        className="mb-2 block text-[14px] font-normal leading-[19.73px]"
      >
        {label}
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-[100%] rounded-[6px] border-[1px] border-solid border-gray-primary bg-[white] p-2"
        required
        {...register(name, validation)}
      />
    </div>
  )
}

interface InputErrorProps {
  message: string
}

const InputError = ({ message }: InputErrorProps): JSX.Element => {
  return (
    <motion.p
      className="flex items-center gap-1 rounded-md bg-red-secondary px-2 font-semibold text-red-primary"
      {...FRAMER_ERROR}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const FRAMER_ERROR = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}

export default Input
